import React from "react";
import facebook from "@/public/Images/logo/facebook.svg";
import Image from "next/image";

export default function page() {
  return (
    <div>
      <div className="md:flex justify-center items-center gap-20 bg-[#f0f2f5] h-screen w-[100%] ">
        <div className="md:w-[53%] pl-[300px] md:block hidden">
          {/* <Image
            src={facebook}
            alt="facebook"
            width={400}
            height={400}
            style={{ marginLeft: "-34px" }}
          /> */}
          <h2 className="text-6xl font-bold text-[#1A5EFF] my-3">Welcome Back</h2>
          <h1 className="text-3xl font-medium">
            You can signin to acess with your Existing account.
          </h1>
        </div>
        <div className="md:w-[45%] sm:mt-4 w-full p-6">
          <div className="md:hidden  flex justify-center">
            <Image src={facebook} alt="facebook" width={300} height={300} />
          </div>
          <div className="items-center bg-white rounded-lg shadow-md p-6  mt-10 md:w-[450px] w-full">
            <form className="space-y-4">
              <div>
                <input
                  type="text"
                  id="emailOrPhone"
                  name="emailOrPhone"
                  placeholder="Email address or Phone number"
                  className="mt-1 p-2 w-full border border-gray-300 rounded-3xl px-4 focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                />
              </div>
              <div>
                <input
                  type="password"
                  id="password"
                  name="password"
                  placeholder="Password"
                  className="mt-1 p-2 w-full border border-gray-300 rounded-3xl px-4  focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                />
              </div>
              <button
                type="submit"

                className="w-full py-2 px-4 border border-transparent rounded-3xl shadow-sm text-white text-xl bg-blue-600 hover:bg-blue-700 font-semibold focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
              >
                <a href="/homepage">Log In</a>
              </button>
            </form>
            <div className="my-4 text-center ">
              <a href="#" className="text-sm text-blue-600 hover:underline">
                Forgot password?
              </a>
            </div>

            <hr />
            <div className="flex justify-center mt-5">
              <button
                type="submit"
                
                className="w-56 py-2 px-4 border border-transparent rounded-3xl shadow-sm text-white text-[18px] bg-[#42b72a] hover:[#42b72a]font-semibold focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
              >
                <a href="/signup">

                Create New Account
                </a>
              </button>
            </div>
          </div>
      
        </div>
      </div>
    </div>
  );
}
