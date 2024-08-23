import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "../components/navigations/navbar";
import Footer from '../components/navigations/footer';

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "DoCreatorsLab: World's Largest Network of Creators",
  description: "The leading Creators network where like-minded Creators connect, meet and collaborate.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="h-full w-full bg-white dark:bg-[#0F0F11]">
          <Navbar />
          {children}
          <Footer />
        </div>
      </body>
    </html>
  );
}
