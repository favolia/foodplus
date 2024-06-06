import { Inter, Sriracha } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/component/Navbar";

const inter = Inter({ subsets: ["latin"] });
const sriracha = Sriracha({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--font-sriracha"
});

export const metadata = {
  title: "Food+",
  description: "Food+ dashboard",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${inter.className} ${sriracha.variable} bg-gray-50/90`}>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
