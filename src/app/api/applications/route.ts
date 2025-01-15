import connectMongo from "@/app/lib/mongodb";
import Application from "@/app/models/applications";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  try {
    await connectMongo();
    const body = await req.json();
    
      const application = await Application.create(body);
      return NextResponse.json(
        { application, message: "Your Application has been submitted" },
        { status: 201 }
      );
    
   
  } catch (error) {
    return NextResponse.json(
      { message: error instanceof Error ? error.message : "An error occurred" },
      { status: 400 }
    );
  }
}
