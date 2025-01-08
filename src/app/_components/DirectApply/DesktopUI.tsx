'use client'
import { connect } from 'http2';
import Image from 'next/image'
import React, { useState, useEffect, useRef } from 'react'
import { SubmitHandler, useForm } from "react-hook-form";
import { Button } from "@/components/ui/button";
import { ArrowRight, Loader2, Turtle, } from "lucide-react";
import resumeUploadIcon from '@/utilities/icons/resume-upload.svg'
import checkCircleIcon from '@/utilities/icons/check-circle.svg'
import closeIcon from '@/utilities/icons/close.svg'


function DesktopUi() {

    const [loading, setLoading] = useState(false);
    const [terms, setTerms] = useState(false);
    const [fileContent, setFileContent] = useState<File | null>(null);

    const {
        register,
        handleSubmit,

        formState: { errors },
    } = useForm<FormData>({
        mode: "onChange",
    });
    type FormData = {
        firstName: string;
        lastName: string;
        email: string;
        phone: string;
        message: string;
        subject: string;
    };

    const onSubmit: SubmitHandler<FormData> = async (data) => {
        console.log("data--->", data);
    };

    const handleFileChange = (e: any) => {
        const selectedFile = e.target.files[0];
        if (selectedFile) {
            setFileContent(selectedFile);
        }

        e.target.value = null;
    };

    return (
        <div className='my-[80px] bg-[#FAFAFA] min-h-screen'>
            <div className='flex items-center justify-between py-[100px] px-[124px]'>
                <div className='flex flex-col gap-[12px]'>
                    <p className='font-normal text-[52px] leading-[62.05px] text-[#131313]'>Step into your <br />future with us.</p>
                    <p className='font-normal text-[16px] leading-[24px] text-[#6D6D6D]'>Send us your application <br />we might just have the perfect spot for you soon!</p>
                </div>

                {/* Right Section */}
                <div className="w-full lg:w-1/2">


                    <form onSubmit={handleSubmit(onSubmit as SubmitHandler<FormData>)}>
                        {/* Upload Resume */}
                        <div className="mb-4 w-full">
                            <div className='w-full'>
                                <label htmlFor="first-name" className="block text-sm mb-2">
                                    Resume*
                                </label>
                                {fileContent === null ?
                                    (
                                        <div onClick={() => document.getElementById('fileInput')?.click()} className='w-full rounded-[8px] border border-[#4C6EFF] h-[52px] flex justify-center items-center gap-2 cursor-pointer'>
                                            <Image src={resumeUploadIcon} alt='resumeUploadIcon' width={24} height={24} />
                                            <p className='font-normal text-[16px] leading-[19.09px] text-[#4C6EFF]'>Upload Your Resume</p>
                                        </div>
                                    )
                                    :
                                    (
                                        <div className='w-full rounded-[8px] px-4 border border-[#4C6EFF] bg-[#4C6EFF] h-[52px] flex justify-between items-center'>
                                            <div className='gap-2 flex items-center'>
                                                <Image src={checkCircleIcon} alt='checkCircleIcon' width={24} height={24}/>
                                                <p className='font-normal text-[16px] leading-[19.09px] text-[#FFFFFF]'>{fileContent?.name}</p>
                                            </div>
                                            <div className='cursor-pointer' onClick={() => setFileContent(null)}>
                                                <Image src={closeIcon} alt='closeIcon' width={16} height={16}/>
                                            </div>
                                        </div>
                                    )
                                }
                                <input
                                    id="fileInput"
                                    type="file"
                                    accept=".pdf,.ppt,.pptx,.mp4,/*"
                                    className="hidden"
                                    onChange={handleFileChange}
                                />
                            </div>
                        </div>

                        {/* First Name and Last Name */}
                        <div className="mb-4 grid grid-cols-1 sm:grid-cols-2 gap-4">
                            <div>
                                <label htmlFor="first-name" className="block text-sm mb-2">
                                    First Name*
                                </label>
                                <input
                                    id="first-name"
                                    type="text"
                                    placeholder="First Name"
                                    {...register("firstName", { required: "First name is required" })}
                                    className="w-full h-[52px] px-[16px] py-[12px] border border-[#D1D1D1] rounded-[8px] placeholder:text-sm"
                                />
                                {errors.firstName && (
                                    <p className="text-red-500 text-sm mt-1">{errors?.firstName?.message?.toString()}</p>
                                )}
                            </div>

                            <div>
                                <label htmlFor="last-name" className="block text-sm mb-2">
                                    Last Name
                                </label>
                                <input
                                    id="last-name"
                                    type="text"
                                    placeholder="Last Name"
                                    {...register("lastName")}
                                    className="w-full h-[52px] px-[16px] py-[12px] border border-[#D1D1D1] rounded-[8px] placeholder:text-sm"
                                />
                                {errors.lastName && (
                                    <p className="text-red-500 text-sm mt-1">{errors?.lastName?.message?.toString()}</p>
                                )}
                            </div>
                        </div>

                        {/* Email and Phone Number */}
                        <div className="mb-4 grid grid-cols-1 sm:grid-cols-2 gap-4">
                            <div>
                                <label htmlFor="email" className="block text-sm mb-2">
                                    Email*
                                </label>
                                <input
                                    id="email"
                                    placeholder="Email"
                                    {...register("email", {
                                        required: "Email is required",
                                        pattern: {
                                            value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                                            message: "Enter a valid email address",
                                        },
                                    })}
                                    className="w-full h-[52px] px-[16px] py-[12px] border border-[#D1D1D1] rounded-[8px] placeholder:text-sm"
                                />
                                {errors.email && (
                                    <p className="text-red-500 text-sm mt-1">{errors?.email?.message?.toString()}</p>
                                )}
                            </div>

                            <div>
                                <label htmlFor="phone" className="block text-sm mb-2">
                                    Phone Number*
                                </label>
                                <input
                                    id="phone"
                                    type="number"
                                    placeholder="Phone Number"
                                    {...register("phone", {
                                        required: "Phone number is required",
                                        minLength: { value: 10, message: "Phone number must be at least 10 characters" },
                                        maxLength: { value: 10, message: "Phone number must be at most 10 characters" },
                                    })}
                                    className="w-full h-[52px] px-[16px] py-[12px] border border-[#D1D1D1] rounded-[8px] placeholder:text-sm"
                                />
                                {errors.phone && (
                                    <p className="text-red-500 text-sm mt-1">{errors?.phone?.message?.toString()}</p>
                                )}
                            </div>
                        </div>

                        {/* Location and Linked in profile */}
                        <div className="mb-6 grid grid-cols-1 sm:grid-cols-2 gap-4">
                            <div>
                                <label htmlFor="email" className="block text-sm mb-2">
                                    Location*
                                </label>
                                <input
                                    id="location"
                                    placeholder="Enter your location"
                                    {...register("email", {
                                        required: "Email is required",
                                        pattern: {
                                            value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                                            message: "Enter a valid email address",
                                        },
                                    })}
                                    className="w-full h-[52px] px-[16px] py-[12px] border border-[#D1D1D1] rounded-[8px] placeholder:text-sm"
                                />
                                {errors.email && (
                                    <p className="text-red-500 text-sm mt-1">{errors?.email?.message?.toString()}</p>
                                )}
                            </div>

                            <div>
                                <label htmlFor="phone" className="block text-sm mb-2">
                                    Linked Profile*
                                </label>
                                <input
                                    id="phone"
                                    type="number"
                                    placeholder="Enter Linked link"
                                    {...register("phone", {
                                        required: "Phone number is required",
                                        minLength: { value: 10, message: "Phone number must be at least 10 characters" },
                                        maxLength: { value: 10, message: "Phone number must be at most 10 characters" },
                                    })}
                                    className="w-full h-[52px] px-[16px] py-[12px] border border-[#D1D1D1] rounded-[8px] placeholder:text-sm"
                                />
                                {errors.phone && (
                                    <p className="text-red-500 text-sm mt-1">{errors?.phone?.message?.toString()}</p>
                                )}
                            </div>
                        </div>

                        {/* Terms and conditions */}
                        <div className="mb-6 flex py-[16px] gap-[10px]">
                            <input
                                type="checkbox"
                                className="form-checkbox h-[20px] cursor-pointer w-[20px] transition duration-150 ease-in-out"
                                style={{ accentColor: "#1E3A76" }}
                                onChange={() => {
                                    setTerms(!terms)
                                }}
                                checked={terms}
                            />
                            <p className='font-normal text-[14px] leading-[16.94px] text-[#11192B]'>By clicking this box, you will declare that you will read and <br />
                                agree to the <span className='text-[#4C6EFF]'>Privacy policy</span> of Squadramedia</p>
                        </div>


                        {/* Submit Button */}
                        <Button disabled={loading} type="submit" className="px-6 py-4 float-right bg-black text-white rounded-md">
                            {loading && <Loader2 className="animate-spin" />}  {loading ? "Please wait..." : "Apply Now"}
                            {!loading && <ArrowRight className="ml-2 h-4 w-4" />}
                        </Button>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default DesktopUi