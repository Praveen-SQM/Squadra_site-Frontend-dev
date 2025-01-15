import connectMongo from "@/app/lib/mongodb";
import Job from "@/app/models/jobs";
import { NextRequest, NextResponse } from "next/server";

export async function GET() {
  try {
    await connectMongo();
    const jobsList = await Job.aggregate(
      [{
        $group: {
          _id: "$jobCategory",
          jobs: { $push: "$$ROOT" },
          count: { $sum: 1 }
        }
      },
      {
        $addFields: {
          jobsCount: "$count"
        }
      },
      {
        $project: {
          count: 0
        }
      }]
    );

    return NextResponse.json({ data: jobsList });
  } catch (error) {
    return NextResponse.json({ error });
  }
}


export async function POST(req: NextRequest) {
  try {
    await connectMongo();
    const body = await req.json();
    if (body.jobTitle) {
      const job = await Job.create(body);
      return NextResponse.json(
        { job, message: "Your job post has been created" },
        { status: 201 }
      );
    }
    return NextResponse.json(
      { message: "Job title is missing" },
      { status: 400 }
    );
  } catch (error) {
    return NextResponse.json(
      { message: error instanceof Error ? error.message : 'An error occurred' },
      { status: 400 }
    );
  }
}



