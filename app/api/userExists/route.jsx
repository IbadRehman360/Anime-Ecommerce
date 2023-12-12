import User from "@/models/user";
import { connectToDB } from "@utils/database";
import { NextResponse } from "next/server";

export async function POST(req) {
  try {
    await connectToDB();
    const { data } = await req.json();
    const user = await User.findOne({ email: data.email }).select("_id");
    return NextResponse.json({ user });
  } catch (error) {
    console.log(error);
  }
}
