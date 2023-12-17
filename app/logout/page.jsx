"use client";

import { signOut } from "next-auth/react";
import { useSession } from "next-auth/react";


export default function Logout() {
  const { data: session } = useSession();
  return (
    <>

      <div className="flex min-h-full flex-1 items-center justify-center px-4 py-12 sm:px-6 lg:px-8">
        <div className="w-full max-w-sm space-y-10">
          <div>
            <a href="/"> {/* Replace 'https://example.com' with your desired URL */}
              <img
                className="mx-auto h-10 w-auto"
                src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
                alt="Your Company"
              />
            </a>

            <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
              You want to Sign Out
            </h2>
          </div>
          <button
            onClick={() => signOut()}
            className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
          >
            Log Out
          </button>


        </div>
      </div>
    </>
  )
}
