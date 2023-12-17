import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";


export default function MainLayout({ children }) {
    return (

        <main className="h-full">
            <Navbar />
                {children}
            <Footer />
        </main>

    );
  }