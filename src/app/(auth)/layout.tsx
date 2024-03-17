import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { ThemeProvider } from "@mui/material";

import "../../app/globals.css";
import theme from "@/theme";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function UserLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <ThemeProvider theme={theme}>
        <body className={inter.className}>
          <header>Header</header>
          {children}
          <footer>Footer</footer>
        </body>
      </ThemeProvider>
    </html>
  );
}