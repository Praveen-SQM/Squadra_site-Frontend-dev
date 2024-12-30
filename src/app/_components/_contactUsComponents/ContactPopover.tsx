"use client";

import * as React from "react";
import { Phone } from "lucide-react";
import { useForm, SubmitHandler } from "react-hook-form";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { usePathname } from "next/navigation";
import Image from "next/image";
import callIcon from "@/utilities/icons/Call.svg";
import callIconBlack from "@/utilities/icons/call-icon-black.svg";
import toast from "react-hot-toast";

interface FormData {
  phone: string;
}

export function ContactPopover({ isScrolled }: { isScrolled: boolean }) {
  const [open, setOpen] = React.useState(false);
  const pathname = usePathname();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>();

  const [loading, setLoading] = React.useState(false);


  const onSubmit: SubmitHandler<FormData> = async (data) => {
    setLoading(true);
    try {
      const response = await fetch("/api/sendEmail", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          to: [process.env.NEXT_PUBLIC_EMAIL_TO],
          cc: [""],
          bcc: [process.env.NEXT_PUBLIC_EMAIL_BCC],
          message: {
            subject: "Callback Request",
            text: `Callback requested for phone number: ${data.phone}`,
            html: `
          <html>
            <head></head>
            <body>
              <p>Hello Team,</p>
              <p>A user has requested a callback.</p>
              <p><b>Phone Number:</b> ${data.phone}</p>
              <br>
              <p>Thank you & Regards,<br><b>Team</b></p>
            </body>
          </html>`
          },
        }),
      });

      const result = await response.json();
      if (response.ok) {
        toast.success("Callback Requested successfully");
      } else {
        toast.error(result.message || 'Failed to send callback request');
      }
    } catch (error) {
      toast.error('An error occurred while sending the callback request');
      console.error("Error sending callback request:", error);
    } finally {
      setLoading(false);
    }
  };


  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger
        onMouseEnter={() => setOpen(true)}
        onMouseLeave={() => setOpen(false)}
        asChild
      >
        <div className="flex items-center gap-3">
          <Image className="cursor-pointer"
            src={pathname.includes("/contact-us") ? callIconBlack : isScrolled ? callIconBlack : callIcon}
            alt="Call Icon"
            width={24}
            height={24}
          />
          
            <p
              className={`hidden md:block cursor-pointer text-[16px] leading-[19px] ${isScrolled ? 'text-black' : 'text-white'
                }`}
            >
              Schedule a Call
            </p>
        
        </div>

      </PopoverTrigger>
      <PopoverContent
        className="w-[400px] p-1 bg-gray-200 m"
        onMouseEnter={() => setOpen(true)}
        onMouseLeave={() => setOpen(false)}
      >
        <Card className="border-0 shadow-none">
          <CardHeader className="pb-4">
            <CardTitle className="text-xl">Connect with a Sales Specialist</CardTitle>
            <p className="text-sm text-muted-foreground">
              Our team of experts is available around the clock to guide you toward the perfect solution for your business.
            </p>
          </CardHeader>
          <CardContent className="grid gap-6">
            <div className="flex items-center gap-2">
              <Phone className="h-4 w-4" />
              <a
                href="tel:+917204701593"
                className="text-lg font-semibold hover:underline"
              >
                +91  96068 27607
              </a>
            </div>
          </CardContent>
        </Card>

        <Card className="mt-2 py-4 shadow-none border-none">
          <CardContent className="grid gap-6">
            <div className="grid gap-4">
              <h3 className="text-lg font-semibold">Request a call back</h3>
              <form onSubmit={handleSubmit(onSubmit)} className="grid gap-4">
                <div className="grid gap-2">
                  <label htmlFor="phone" className="text-sm font-medium">
                    Phone Number*
                  </label>
                  <Input
                    id="phone"
                    type="number"
                    className="flex-1"
                    {...register("phone", {
                      required: "Phone number is required",
                      pattern: {
                        value: /^[0-9]{10}$/,
                        message: "Enter a valid 10-digit phone number",
                      },
                    })}
                  />
                  {errors.phone && (
                    <p className="text-red-500 text-sm">{errors.phone.message}</p>
                  )}
                </div>
                <Button
                  type="submit"
                  className="w-full bg-gray-500 hover:bg-gray-600"
                  disabled={loading}
                >
                  {loading ? "Sending..." : "Send Request"}
                </Button>
                <p className="text-center text-sm text-muted-foreground">
                  Our team usually responds in a matter of minutes.
                </p>
              </form>
            </div>
          </CardContent>
        </Card>
      </PopoverContent>
    </Popover>
  );
}