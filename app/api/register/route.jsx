import User from "@models/user";
import { connectToDB } from "@utils/database";
import bcrypt from "bcryptjs";
import { NextResponse } from "next/server";
export async function POST(req) {
  try {
    const { data } = await req.json();
    console.log(data);
    if (!data.username || !data.email || !data.password) {
      return NextResponse.json(
        { message: "All fields are necessary." },
        { status: 400 }
      );
    }
    const hashedPassword = await bcrypt.hash(data.password, 10);
    await connectToDB();
    await User.create({
      username: data.username,
      email: data.email,
      password: hashedPassword,
    });

    return NextResponse.json({ message: "User registered." }, { status: 201 });
  } catch (error) {
    console.error("An error occurred while registering the user:", error);
    return NextResponse.json(
      { message: "An error occurred while registering the user." },
      { status: 500 }
    );
  }
}
