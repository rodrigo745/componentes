
import { Inter } from "next/font/google";
import "./globals.css";
import NavBar from "../components/NavBar"
import Aside from "../components/Aside";


const inter = Inter({ subsets: ["latin"] });

 export const metadata = {
   title: "Create Next App",
   description: "Generated by create next app",
 };

export default function RootLayout({ children }) {
  
  return (
    <html lang="es">
      <body className={inter.className}>
        <div className="flex flex-col md:flex-row w-screen justify-between">
          <div className="md:min-w-80">
          <NavBar/>
          </div>
          {children}
          <Aside/>
        </div>
      </body>
    </html>
  );
}
