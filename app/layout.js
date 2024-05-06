import { Inter } from "next/font/google";
import "./globals.css";
import Welcome from "@/components/global/Welcome";
import TopLocationBar from "@/components/global/TobLocationBar";
import Search from "@/components/global/Search";
import NavigationBar from "@/components/global/NavigationBar";
import ImageSlider from "@/components/global/ImageSlider";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Best Electronic in Bangladesh",
  description: "Generated by Best Electronics",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Welcome />
        <TopLocationBar />
        <Search />
        <NavigationBar />
        <ImageSlider />
        {children}
      </body>
    </html>
  );
}
