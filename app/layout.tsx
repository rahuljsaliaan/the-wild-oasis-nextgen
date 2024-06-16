import type { Metadata } from "next";
import Navigation from "@/app/_components/Navigation";
import Logo from "@/app/_components/Logo";

export const metadata: Metadata = {
  title: "The Wild Oasis",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <header>
          <Logo />
          <Navigation />
        </header>
        <main>{children}</main>
      </body>
    </html>
  );
}
