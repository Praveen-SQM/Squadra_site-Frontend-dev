import { NextResponse } from "next/server";
import { verifaliaClient } from "@/lib/verifalia";
import { isPersonalEmail } from "@/lib/emailDomain";

export async function POST(req: Request) {
  try {
    const { email } = await req.json();

    if (!email) {
      return NextResponse.json(
        { success: false, message: "Email is required" },
        { status: 400 }
      );
    }

    // 1️⃣ Block personal emails
    if (isPersonalEmail(email)) {
      return NextResponse.json(
        {
          success: false,
          code: "PERSONAL_EMAIL",
          message: "Please use your work email address",
        },
        { status: 400 }
      );
    }

    // 2️⃣ Call Verifalia (SDK-safe)
    const job = await verifaliaClient.emailValidations.submit({
      entries: [{ inputData: email }],
      quality: "Standard",
    });

    // ✅ Null safety (required)
    if (!job || !job.entries || job.entries.length === 0) {
      return NextResponse.json(
        {
          success: false,
          message: "Email verification unavailable",
        },
        { status: 502 }
      );
    }

    const entry = job.entries[0];

    return NextResponse.json({
      success: true,
      classification: entry.classification,
      isDisposable: entry.isDisposableEmailAddress,
      isRole: entry.isRoleAccount,
    });
  } catch (error) {
    console.error("Verify email error:", error);
    return NextResponse.json(
      { success: false, message: "Email verification failed" },
      { status: 500 }
    );
  }
}
