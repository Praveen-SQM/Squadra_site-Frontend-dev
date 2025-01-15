import connectMongo from "@/app/lib/mongodb";
import Application from "@/app/models/applications";
import { NextRequest, NextResponse } from "next/server";
import AWS from "aws-sdk";
const s3 = new AWS.S3({
  accessKeyId: process.env.AWS_ACCESS_KEY_ID,
  secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
  region: process.env.AWS_REGION, 
});
export async function POST(req: NextRequest) {
  try {
    await connectMongo();
    const formData = await req.formData();
    const body = Object.fromEntries(formData);
    const file = (body.file as Blob) || null;
    const applicationData: {
      firstName: string;
      lastName: string;
      email: string;
      phone: string;
      location: string;
      experience: string;
      joiningDays: string;
      webLink: string;
      linkedProfile: string;
      applicationType: string;
      additionalInfo: string;
      jobId: string | null;
      resume?: string;
    } = {
      firstName: body.firstName?.toString(),
      lastName: body.lastName?.toString(),
      email: body.email?.toString(),
      phone: body.phone?.toString(),
      location: body.location?.toString(),
      experience: body.experience?.toString(),
      joiningDays: body.joiningDays?.toString(),
      webLink: body.webLink?.toString(),
      linkedProfile: body.linkedProfile?.toString(),
      applicationType: body.applicationType?.toString(),
      additionalInfo: body.additionalInfo?.toString(),
      jobId: body.jobId?.toString() || null,
    };
    if (file) {
      const buffer = Buffer.from(await file.arrayBuffer());

      const uploadParams:any= {
        Bucket: process.env.AWS_BUCKET_NAME, 
        Key: `uploads/${(body.file as File).name}`, 
        Body: buffer,
        ContentType: (body.file as File).type, 
        ACL: "public-read", 
      };
      const uploadResult = await s3.upload(uploadParams).promise();
      applicationData.resume = uploadResult.Location;
    }
    const data = await Application.create(applicationData);
    return NextResponse.json({
        success: true,
        data,
        message: "JOB Applied successfully.",
      });
    
  } catch (error) {
    return NextResponse.json(
      { message: error instanceof Error ? error.message : "An error occurred" },
      { status: 400 }
    );
  }
}
