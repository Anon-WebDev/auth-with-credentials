import { NextResponse } from "next/server";
import { connectMongoDB } from "@/lib/mongodb";
import User from "@/models/user";



export const GET = async (request) => {
  try {
    // Connect to MongoDB
    await connectMongoDB();

    // Fetch users (replace this with your actual logic)
    const users = await User.find();

    // Return a success response with the fetched users
    return new NextResponse(JSON.stringify(users), { status: 200, headers: { 'Content-Type': 'application/json' } });
  } catch (error) {
    // Log the error for debugging
    console.error("Error fetching users", error);

    // Return an error response
    return new NextResponse("Internal Server Error", { status: 500 });
  }
};