import { Quicksand } from "next/font/google";
import "./globals.css";

const quicksandFont = Quicksand({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata = {
  title: "Portfolio - SebSoftware",
  description: "",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${quicksandFont.variable} antialiased`}>{children}</body>
    </html>
  );
}
