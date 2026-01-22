"use server";

import cloudinary from "@/lib/cloudinary";
import { connectDB } from "@/lib/db";
import Tour from "@/models/Tour";
import { revalidatePath } from "next/cache";

/* CREATE TOUR */
export async function createTour(formData) {
  await connectDB();

  const name = formData.get("name");
  const price = Number(formData.get("price"));
  const image = formData.get("image");

  if (!image) throw new Error("Image is required");

  // Convert image to buffer
  const buffer = Buffer.from(await image.arrayBuffer());

  // Upload to Cloudinary
  const upload = await new Promise((resolve, reject) => {
    cloudinary.uploader
      .upload_stream({ folder: "tours" }, (err, result) => {
        if (err) reject(err);
        resolve(result);
      })
      .end(buffer);
  });

  // Save to DB
  await Tour.create({
    name,
    price,
    imageURL: upload.secure_url,
  });

  revalidatePath("/"); // or "/tours"
}

/* READ TOURS */
export async function getTours() {
  await connectDB();
  return Tour.find().sort({ createdAt: -1 }).lean();
}

/* DELETE TOUR */
export async function deleteTour(id) {
  await connectDB();
  await Tour.findByIdAndDelete(id);
  revalidatePath("/"); // or "/tours"
}
