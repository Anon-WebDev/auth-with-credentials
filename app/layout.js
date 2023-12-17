import { AuthProvider } from "./Providers";
import "./globals.css";
import { Inter } from "next/font/google";


const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Starter App Cred-Auth",
  description: "Starter App Cred-Auth",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="h-full">
        <AuthProvider>
          
          {children}
          
        </AuthProvider>
      </body>
    </html>
  );
}
