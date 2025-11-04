import { JetBrains_Mono } from "next/font/google";
import "./globals.css";
import Headers from "@/components/Headers";
import PageTransition from "@/components/PageTransition";
import StairTransition from "@/components/StairTransition";



const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  weight: ["100","200","300","400","500","600","700","800"],
  variable: "--font-jetbrainsMono",
});

// const geistMono = Geist_Mono({
//   variable: "--font-geist-mono",
//   subsets: ["latin"],
// });

export const metadata = {
  title: "Ayon Portfolio",
  description: "Created by Ayon",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={jetbrainsMono.variable}>
        
          <Headers />
          <StairTransition />
          <PageTransition>{children}</PageTransition>
       
      </body>
    </html>
  );
}
