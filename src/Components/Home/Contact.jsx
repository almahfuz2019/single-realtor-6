/* eslint-disable react/no-unescaped-entities */
"use client";
import Image from "next/image";
import { useForm } from "react-hook-form";


const Contact = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
  };


  return (
    <div className="bg-primary py-12 md:py-24 overflow-hidden">
      <div className="max-w-[1420px] mx-auto px-4 md:px-6 lg:px-16">
        <header
          className="text-center flex flex-col gap-y-3 md:gap-y-6 mb-10 md:mb-20"
          data-aos="fade-up"
        >
          <h1 className="text-3xl md:text-5xl font-merriweather font-normal text-neutral">
            Contact Me
          </h1>
          <p className="text-lg md:text-2xl font-normal text-[#F3E3E2B2] font-raleway mt-3">
            Streamlined Steps to Homeownership: Our Proven Process Ensures a
            Smooth, Transparent, and Efficient Journey from Property Search to
            Closing the Deal.
          </p>
        </header>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          <div data-aos="fade-up">
            <Image
              src="https://i.ibb.co/KmKsmn4/Rectangle-3924-1.png"
              height={730}
              width={665}
              alt="Contact Image"
              className="w-full h-auto rounded-lg"
            />
          </div>
          <div data-aos="fade-up">
            <p className="text-xl md:text-[28px] leading-[36px] font-normal font-merriweather text-neutral mb-8">
              Connect Today for Personalized Assistance: Your Dream Home Awaits,
              Let's Make It Happen Together!
            </p>
            <div
              className="flex flex-col gap-4 my-8 border border-[#F3E3E233] border-x-0 border-t-0 pb-8"
              data-aos="fade-up"
            >
              <div className="text-[#F3E3E2CC] flex items-center gap-2">
                <Image
                  src="https://i.ibb.co/kgfKsFj/Mask-group-20.png"
                  height={28}
                  width={28}
                  alt="Email Icon"
                />
                <p className="text-lg md:text-2xl font-normal font-raleway">
                  sarah.thompson98@gmail.com
                </p>
              </div>
              <div className="text-[#F3E3E2CC] flex items-center gap-2">
                <Image
                  src="https://i.ibb.co/dL0q3d8/Mask-group-21.png"
                  height={28}
                  width={28}
                  alt="Phone Icon"
                />
                <p className="text-lg md:text-2xl font-normal font-raleway">
                  +96-7657-9876
                </p>
              </div>
              <div className="text-[#F3E3E2CC] flex items-center gap-2">
                <Image
                  src="https://i.ibb.co/DKLzjW8/Mask-group-22.png"
                  height={28}
                  width={28}
                  alt="Address Icon"
                />
                <p className="text-lg md:text-2xl font-normal font-raleway">
                  12/A House, 42 Trudo Road, Toronto
                </p>
              </div>
            </div>
            <form
              onSubmit={handleSubmit(onSubmit)}
              className="space-y-8 md:space-y-10 mt-5 text-[#F3E3E2CC]"
              data-aos="fade-up"
            >
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <input
                    id="name"
                    type="text"
                    placeholder="Name"
                    className="w-full p-2 bg-transparent border-b-2 border-[#F3E3E2CC] focus:border-primary"
                    {...register("name", { required: "Name is required" })}
                  />
                  {errors.name && (
                    <p className="text-red-500 text-sm mt-1">
                      {errors.name.message}
                    </p>
                  )}
                </div>

                <div>
                  <input
                    id="address"
                    type="text"
                    placeholder="Address"
                    className="w-full p-2 bg-transparent border-b-2 border-[#F3E3E2CC] focus:border-primary"
                    {...register("address", {
                      required: "Address is required",
                    })}
                  />
                  {errors.address && (
                    <p className="text-red-500 text-sm mt-1">
                      {errors.address.message}
                    </p>
                  )}
                </div>
              </div>
              <div>
                <input
                  id="email"
                  type="email"
                  placeholder="Your Email"
                  className="w-full p-2 bg-transparent border-b-2 border-[#F3E3E2CC] focus:border-primary"
                  {...register("email", {
                    required: "Email is required",
                    pattern: {
                      value:
                        /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/,
                      message: "Enter a valid email address",
                    },
                  })}
                />
                {errors.email && (
                  <p className="text-red-500 text-sm mt-1">
                    {errors.email.message}
                  </p>
                )}
              </div>
              <div>
                <textarea
                  id="message"
                  rows="6"
                  placeholder="Type Your Message"
                  className="w-full p-2 bg-transparent border-b-2 border-[#F3E3E2CC] focus:border-primary"
                  {...register("message", { required: "Message is required" })}
                ></textarea>
                {errors.message && (
                  <p className="text-red-500 text-sm mt-1">
                    {errors.message.message}
                  </p>
                )}
              </div>
              <button
                type="submit"
                className="w-full p-2 rounded bg-neutral text-primary transition text-2xl font-medium duration-200 "
              >
                Send
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
