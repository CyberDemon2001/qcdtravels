import { NextResponse } from "next/server";
import Tour from "@/models/Tour";
import { connectDB } from "@/lib/db";

export async function GET() {
  try {
    await connectDB();
    const tours = await Tour.find({ isActive: true }).sort({ createdAt: -1 });
    return NextResponse.json(tours);
  } catch (error) {
    console.error(error);
    return NextResponse.json(
      { error: "Internal Server Error" },
      { status: 500 }
    );
  }
}

export async function POST(request) {
  try {
    await connectDB();
    const data = await request.json();

    if (!data.title || !data.startingPrice) {
      return NextResponse.json(
        { error: "Title and Starting Price are required" },
        { status: 400 }
      );
    }

    const newTour = await Tour.create(data);
    return NextResponse.json(
      { success: true, newTour },
      { status: 201 }
    );
  } catch (error) {
    console.error(error);
    return NextResponse.json(
      { error: "Internal Server Error" },
      { status: 500 }
    );
  }
}
