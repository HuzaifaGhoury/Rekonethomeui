"use client";
import React from "react";
import facebook from "../../public/Images/logo/facebook.svg";
import Image from "next/image";
export default function page() {
  const [showCuston, setShowCustom] = React.useState(false);
  const days = [];
  for (let i = 1; i <= 31; i++) {
    days.push(
      <option key={i} value={i}>
        {i}
      </option>
    );
  }

  const months = [
    { value: 1, label: "January" },
    { value: 2, label: "February" },
    { value: 3, label: "March" },
    { value: 4, label: "April" },
    { value: 5, label: "May" },
    { value: 6, label: "June" },
    { value: 7, label: "July" },
    { value: 8, label: "August" },
    { value: 9, label: "September" },
    { value: 10, label: "October" },
    { value: 11, label: "November" },
    { value: 12, label: "December" },
  ];
  const monthOptions = months.map((month) => (
    <option key={month.value} value={month.value}>
      {month.label}
    </option>
  ));

  const currentYear = new Date().getFullYear();
  const years = [];
  for (let i = currentYear; i >= currentYear - 100; i--) {
    years.push(
      <option key={i} value={i}>
        {i}
      </option>
    );
  }
  return (
    <div>
      <div className="md:flex flex-col justify-center items-center gap-1.50 bg-[#f0f2f5] h-screen w-[100%] p-5">
        <div className="md:block hidden">
          <Image src={facebook} alt="facebook" width={400} height={400} />
        </div>
        <div className="md:hidden  flex justify-center">
          <Image src={facebook} alt="facebook" width={200} height={200} />
        </div>
        <div className="md:w-[45%] sm:mt-4 w-full flex justify-center ">
          <div className=" bg-white rounded-lg shadow-md md:w-[530px] w-full ">
            <div className="p-3 border-b-2 border-gray text-center ">
              <h2 className="text-2xl font-bold">Create a new account</h2>
              <h5 className="text-base text-[#606770]">It's quick an easy</h5>
            </div>
            <form className="space-y-3 p-6">
              <div className="flex gap-3">
                <div>
                  <input
                    type="text"
                    id="firstName"
                    name="firstName"
                    placeholder="First name"
                    className="mt-1 p-1.5 w-full border border-gray-300 rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                  />
                </div>
                <div>
                  <input
                    type="text"
                    id="surname"
                    name="surname"
                    placeholder="Surname"
                    className="mt-1 p-1.5 w-full border border-gray-300 rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                  />
                </div>
              </div>
              <div>
                <input
                  type="text"
                  id="emailOrPhone"
                  name="emailOrPhone"
                  placeholder="Email address or Phone number"
                  className="mt-1 p-1.5 w-full border border-gray-300 rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                />
              </div>
              <div>
                <input
                  type="password"
                  id="password"
                  name="password"
                  placeholder="Password"
                  className="mt-1 p-1.5 w-full border border-gray-300 rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                />
              </div>
              <div>
                <label className="text-sm">Date of Birth</label>
                <br />
                <div className="flex gap-3">
                  <select className="mt-1 p-1.5 w-full border border-gray-300 rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500">
                    <option value="">Day</option>
                    {days}
                  </select>
                  <select className="mt-1 p-1.5 w-full border border-gray-300 rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500">
                    <option value="">Month</option>
                    {monthOptions}
                  </select>
                  <select className="mt-1 p-1.5 w-full border border-gray-300 rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500">
                    <option value="">Year</option>
                    {years}
                  </select>
                </div>
              </div>
              <div>
                <label className="text-sm">Gender</label>
                <br />
                <div className="flex gap-3 mb-3">
                  <div className="mt-1  flex justify-between p-1.5 w-full border border-gray-300 rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500">
                    <label>Male</label>
                    <input type="radio" />
                  </div>{" "}
                  <div className="mt-1 flex justify-between p-1.5 w-full border border-gray-300 rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500">
                    <label>Female</label>
                    <input type="radio" />
                  </div>
                  <div className="mt-1 flex justify-between p-1.5 w-full border border-gray-300 rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500">
                    <label>Custom</label>
                    <input
                      type="radio"
                      onClick={() => setShowCustom(!showCuston)}
                    />
                  </div>
                </div>
                {showCuston && (
                  <>
                    <select className="mt-1 p-1.5 w-full border border-gray-300 rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500">
                      <option value="">Select your pronoun</option>
                      <option value="1">
                        He: "Wish him a happy birthday!"
                      </option>
                      <option value="2">
                        She: "Wish her a happy birthday!"
                      </option>
                      <option value="3">
                        They: "Wish them a happy birthday!"
                      </option>
                    </select>
                    <div>
                      <input
                        type="text"
                        id="gender"
                        name="gender"
                        placeholder="Gender (optional)"
                        className="mt-3 p-1.5 w-full border border-gray-300 rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                      />
                    </div>
                  </>
                )}
              </div>
              <p className="text-sm ">
                People who use our service may have uploaded your contact
                information to Facebook.{" "}
                <span className="text-[#1877f2] cursor-pointer">
                  Learn more.
                </span>
              </p>
              <p className="text-sm">
                By clicking Sign Up, you agree to our Terms, Privacy Policy and
                Cookies Policy. You may receive SMS notifications from us and
                can opt out at any time.
              </p>
              <div className="text-center">
                <button
                  type="submit"
                  className="w-56 mt-2 py-2 px-4 border border-transparent rounded-md shadow-sm text-white text-[18px] bg-[#42b72a] hover:[#42b72a] font-semibold focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                >
                  Sign up
                </button>
              </div>
              <div className="text-center ">
                <a
                  href="/login"
                  className="text-sm text-blue-600 hover:underline"
                >
                  Already have an account?
                </a>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
