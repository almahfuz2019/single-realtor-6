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
    <div className="bg-primary py-24">
      <div className="max-w-[1420px] mx-auto ">
        <header className="text-center justify-center flex flex-col gap-y-3 md:gap-y-6 mb-20">
          <h1 className="text-5xl font-merriweather font-normal text-neutral">
            Contact Me
          </h1>
          <p className="text-2xl font-normal text-[#F3E3E2B2] font-raleway mt-3 text-center">
            Streamlined Steps to Homeownership: Our Proven Process Ensures a
            Smooth, Transparent, and Efficient Journey from Property Search to
            Closing the Deal.
          </p>
        </header>

        <div className="grid grid-cols-2 gap-10 items-center justify-start">
          <div>
            <Image
              src="https://i.ibb.co/KmKsmn4/Rectangle-3924-1.png"
              height="730"
              width="665"
              alt=""
            />
          </div>
          <div>
            <p className="text-[28px] leading-[35px] font-normal font-merriweather text-neutral">
              Connect Today for Personalized Assistance: Your Dream Home Awaits,
              Let's Make It Happen Together!
            </p>
            <div className="flex flex-col gap-4 my-8 border border-[#F3E3E233] border-x-0 border-t-0 pb-8">
              <div className="text-[#F3E3E2CC] flex  items-center gap-2">
                <Image
                  src="https://i.ibb.co/kgfKsFj/Mask-group-20.png"
                  height="28"
                  width="28"
                  alt=""
                />
                <p className="text-2xl font-normal font-raleway">
                  sarah.thompson98@gmail.com
                </p>
              </div>
              <div className="text-[#F3E3E2CC] flex  items-center gap-2">
                <Image
                  src="https://i.ibb.co/dL0q3d8/Mask-group-21.png"
                  height="28"
                  width="28"
                  alt=""
                />
                <p className="text-2xl font-normal font-raleway">
                  +96-7657-9876
                </p>
              </div>
              <div className="text-[#F3E3E2CC] flex  items-center gap-2">
                <Image
                  src="https://i.ibb.co/DKLzjW8/Mask-group-22.png"
                  height="28"
                  width="28"
                  alt=""
                />
                <p className="text-2xl font-normal font-raleway">
                  12/A House, 42 Trudo Road, Toronto
                </p>
              </div>
            </div>
            <form
              onSubmit={handleSubmit(onSubmit)}
              className="space-y-10 text-[#F3E3E2CC]"
            >
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <input
                    id="name"
                    type="text"
                    placeholder="Name"
                    className="w-full p-2 bg-transparent border-b-2 border-[#F3E3E2CC] focus:border-primary "
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
                    className="w-full p-2 bg-transparent border-b-2 border-[#F3E3E2CC] focus:border-primary "
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
                  className="w-full p-2 bg-transparent border-b-2 border-[#F3E3E2CC] focus:border-primary "
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
                  placeholder=" Type Your Message"
                  className="w-full p-2 bg-transparent border-b-2 border-[#F3E3E2CC] focus:border-primary "
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
                className="w-full p-2 rounded bg-pink-600 hover:bg-pink-700 transition duration-200"
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
