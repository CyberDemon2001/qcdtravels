import {NextResponse} from "next/server";
import bcrypt from "bcrypt";
import {connectDB} from "@/lib/db";
import User from "@/models/User";

export async function POST(req) {
  try {
    await connectDB();

    const {name, email, password} = await req.json();

    if (!name || !email || !password) {
      return NextResponse.json(
        {success: false, message: "All fields required"},
        {status: 400}
      );
    }
    const existingUser = await User.findOne({email});
    if (existingUser) {
      return NextResponse.json(
        {success: false, message: "User already exists"},
        {status: 409}
      );
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const newUser = new User({
      name,
      email,
      password: hashedPassword,
    });

    await newUser.save();

    return NextResponse.json(
      {success: true, message: "User registered successfully", data: newUser},
      {status: 201}
    );
  } catch (error) {
    return NextResponse.json(
      {success: false, message: error.message},
      {status: 500}
    );
  }
}