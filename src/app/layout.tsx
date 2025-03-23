import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import SavatchaModal from "@/components/SavatchaModal";

const geistSans = Geist({
    variable: "--font-geist-sans",
    subsets: ["latin"],
});

const geistMono = Geist_Mono({
    variable: "--font-geist-mono",
    subsets: ["latin"],
});

export const metadata: Metadata = {
    title: "Mafid",
    description: "Generated by Mafid",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body
                className={`${geistSans.variable} ${geistMono.variable} antialiased`}
            >
                <div className="container mx-auto py-4">
                    <div className="flex justify-between">
                        <h2>LOGO</h2>
                        <SavatchaModal />
                    </div>
                    <div>
                        <ul className="flex w-full justify-between mt-4">
                            <li>
                                <a href="#">Texnologiya</a>
                            </li>
                            <li>
                                <a href="#">Ta&apos;lim</a>
                            </li>
                            <li>
                                <a href="#">Salomatlik</a>
                            </li>
                            <li>
                                <a href="#">Biznes</a>
                            </li>
                            <li>
                                <a href="#">O&apos;yin-kulgi</a>
                            </li>
                            <li>
                                <a href="#">Sayohat</a>
                            </li>
                            <li>
                                <a href="#">Sport</a>
                            </li>
                            <li>
                                <a href="#">Hayot tarzi</a>
                            </li>
                        </ul>
                    </div>
                </div>
                {children}
            </body>
        </html>
    );
}
