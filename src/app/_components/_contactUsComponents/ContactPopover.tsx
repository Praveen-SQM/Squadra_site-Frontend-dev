"use client"

import * as React from "react"
import { Phone } from 'lucide-react'

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"
import { useRouter } from "next/navigation"

export function ContactPopover() {
  const [open, setOpen] = React.useState(false)
  const [phoneNumber, setPhoneNumber] = React.useState("+91")
const router=useRouter();
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle the submission logic here
    console.log("Submitted phone number:", phoneNumber)
  }

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger
        onMouseEnter={() => setOpen(true)}
        onMouseLeave={() => setOpen(false)}
        asChild
      >
      <button onClick={()=>router.push("/contact-us")}
  className="text-md text-white p-0 border-none h-auto hover:no-underline focus:ring-0 focus:outline-none"
>
  Contact Us
</button>

      </PopoverTrigger>
      <PopoverContent
        className="w-[400px] p-1 bg-gray-200"
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
                +91 7204701593
              </a>
            </div>
            </CardContent>
           </Card>
           <Card className="mt-2 py-4 shadow-none border-none">

           
          <CardContent className="grid gap-6">
          
            <div className="grid gap-4">
              <h3 className="text-lg font-semibold">Request a call back</h3>
              <form onSubmit={handleSubmit} className="grid gap-4">
                <div className="grid gap-2">
                  <label htmlFor="phone" className="text-sm font-medium">
                    Phone Number*
                  </label>
                  <div className="flex gap-2">
                    {/* <div className="flex items-center gap-1 rounded-md border px-3">
                      <img
                        src="https://flagcdn.com/w20/in.png"
                        alt="India"
                        className="h-4 w-6"
                      />
                      <span className="text-sm">+91</span>
                    </div> */}
                  <Input
  id="phone"
  type="number"
  value={phoneNumber}
  onChange={(e) => {
    const maxLength = 10; 
    if (e.target.value.length <= maxLength) {
      setPhoneNumber(e.target.value);
    }
  }}
  className="flex-1"
  required
/>

                  </div>
                </div>
                <Button type="submit" className="w-full bg-gray-500 hover:bg-gray-600">
                  Send Request
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
  )
}

