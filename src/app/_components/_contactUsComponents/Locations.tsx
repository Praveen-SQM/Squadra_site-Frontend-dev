import Image from "next/image"
import flag from "../../../utilities/icons/flag.svg";
import mail from "../../../utilities/icons/mail-03.svg";
import enquiry from "../../../utilities/icons/enquiry.svg";
import user from "../../../utilities/icons/user.svg";
import message from "../../../utilities/icons/message.svg";
import location from '@/utilities/images/image 58.svg'
export default function Locations() {
  return (
    <div className="w-full min-h-screen bg-[#F8F8F8] px-6 py-12">
      <div className="max-w-[1350px] mx-auto">
        <h1 className="text-4xl sm:text-3xl md:text-5xl font-normal mb-4">
          Our Locations
        </h1>
        <p className="text-[#6D6D6D] sm:text-[16px] text-[16px] mb-12">
          We work in all corners of the world. Find a Squadra media location near you.
        </p>

        <div className="grid lg:grid-cols-[1fr,1fr] gap-16">
          <div className="space-y-6">
            <div className="relative h-[200px] sm:h-[300px] w-full rounded-none overflow-hidden">
              <Image
                src={location}
                alt="Bangalore Office"
                fill
                className="object-cover"
              />
            </div>
            <div className="flex items-center gap-3">
              <Image
                 src={flag}
                alt="India Flag"
                width={32}
                height={20}
                className="rounded"
              />
              <h2 className="text-2xl font-medium">Bangalore, India</h2>
            </div>
            <p className="text-gray-500">
              5th Floor, No. 1134, Shreeram Niwas, 100 Feet Rd,<br className="hidden md:block" />
              HAL 2nd Stage, Bengaluru, Karnataka 560038
            </p>
          </div>

          <div className="grid sm:grid-cols-2 gap-6">
            <div className="bg-[#F8F8F8] flex flex-row gap-4 items-center justify-start md:justify-start p-6 rounded-lg shadow-sm border border-[#E7E7E7]">
              <div className="">
                <Image
                 src={message}
                alt="mail"
                width={42}
                height={42}
                className="rounded"
              />
              </div>
              <div>

              <h3 className="font-medium mb-1">General Enquiry</h3>
              <p className="text-gray-600">+91 96068 27067</p>
              </div>
            </div>
              <div className="bg-[#F8F8F8] flex flex-row gap-4 items-center justify-start md:justify-start p-6 rounded-lg shadow-sm border border-[#E7E7E7]">
              <div className="">
                   <Image
                 src={user}
                alt="mail"
                width={42}
                height={42}
                className="rounded"
              />
              </div>
              <div>

              <h3 className="font-medium mb-1">Sales Enquiry</h3>
              <p className="text-gray-600">+91 96068 27067</p>
              </div>
            </div>
              <div className="bg-[#F8F8F8] flex flex-row gap-4 items-center justify-start md:justify-start p-6 rounded-lg shadow-sm border border-[#E7E7E7]">
              <div className="">
                  <Image
                 src={enquiry}
                alt="mail"
                width={42}
                height={42}
                className="rounded"
              />
              </div>
              <div>

              <h3 className="font-medium mb-1">HR enquiry</h3>
              <p className="text-gray-600">+91 96068 27067</p>
              </div>
            </div>


            <div className="bg-[#F8F8F8] flex flex-row gap-4 items-center justify-start md:justify-start p-6 rounded-lg shadow-sm border border-[#E7E7E7]">
              <div className="">
                  <Image
                 src={mail}
                alt="mail"
                width={42}
                height={42}
                className="rounded"
              />
              </div>
              <div>

              <h3 className="font-medium mb-1">Email</h3>
              <p className="text-gray-600">info@squadramedia.com</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

