import About from '@/components/About'

import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";
import { authOptions } from "../api/auth/[...nextauth]/route";

export default function Home() {
  


  return (
    <main className="">
      <About />
    </main>
  )
}