import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";
import { authOptions } from "../api/auth/[...nextauth]/route";
import UserInfo from "@/components/UserInfo";


export default function Dashboard() {
  


  return (
    <main>
     <h1>dashboard</h1> 
     
     <UserInfo />
      
    </main>
  );
}
