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
      { status: 500 },
    );
  }
}

export async function POST(request) {
  try {
    await connectDB();
    const data = await request.json();
    // console.log("Received data for new tour:", data);

    if (!data.title || !data.startingPrice || !data.location) {
      return NextResponse.json(
        { error: "Title, Location, and Starting Price are required" },
        { status: 400 },
      );
    }

    const existingSlug = await Tour.findOne({ slug: data.slug });
    if (existingSlug) {
      return NextResponse.json(
        { error: "A tour with this title already exists. Please choose a different title." },
        { status: 400 },
      );
    }

    const newTour = await Tour.create(data);
    return NextResponse.json({ success: true, newTour }, { status: 201 });
  } catch (error) {
  console.error("CREATE TOUR ERROR:", error);
  return NextResponse.json(
    {
      error: error.message,
      stack: error.stack,
    },
    { status: 500 }
  );
}
}

export async function PUT(request) {
  try {
    await connectDB();
    const data = await request.json();
    if (!data._id) {
      return NextResponse.json(
        { error: "Tour ID is required for update" },
        { status: 400 },
      );
    }
    const updatedTour = await Tour.findByIdAndUpdate(data._id, data, { new: true });
    return NextResponse.json({ success: true, updatedTour });
  } catch (error) {
    console.error(error);
    return NextResponse.json(
      { error: "Internal Server Error" },
      { status: 500 },
    );
  }
}

export async function DELETE(request) {
  try {
    await connectDB();
    const { searchParams } = new URL(request.url);
    const tourId = searchParams.get("id");
    if (!tourId) {
      return NextResponse.json(
        { error: "Tour ID is required for deletion" },
        { status: 400 },
      );
    }
    await Tour.findByIdAndDelete(tourId);
    return NextResponse.json({ success: true });
  } catch (error) {
    console.error(error);
    return NextResponse.json(
      { error: "Internal Server Error" },
      { status: 500 },
    );
  }
}