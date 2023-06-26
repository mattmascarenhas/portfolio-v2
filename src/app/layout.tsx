import { Header } from "@/components/header/Header";
import "../styles/globals.css";
import { Inter } from "next/font/google";
import Footer from "@/components/sections/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Matheus Mascarenhas",
  description: "Matheus Mascarenhas Dev",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      className={inter.className}
      lang="en"
      style={{ scrollBehavior: "smooth" }}
    >
      <head>
        <link rel="icon" href="logo.png" />
      </head>
      <body>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
