import Header from "@/components/Header";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import Footer from "@/components/Footer";
import { Toaster } from "sonner";

export const metadata = {
  title: "Hezekiah Elisha",
  keywords: [
    "Hezekiah Elisha",
    "Portfolio",
    "Web Developer",
    "Software Engineer",
    "Next.js",
    "React",
    "JavaScript",
  ],
  authors: [
    {
      name: "Hezekiah Elisha",
      url: "https://hezekiahelisha.com",
    },
  ],
  creator: "Hezekiah Elisha",
  description: "Generated by create next app",
};
export const viewport = {
  themeColor: "#dde0e4",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`antialiased`} suppressHydrationWarning>
      <body className="w-screen h-screen bg-gradient-to-r from-secondary/95 via-secondary/90 to-secondary/85">
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <Header />
          {children}
          <Toaster />
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
