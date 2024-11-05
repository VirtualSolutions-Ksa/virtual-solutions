import { Krub, Rubik } from "next/font/google";

export const rubik = Rubik({
    subsets: ["latin"],
    display: "swap",
    variable: "--font-rubik",
});

export const krub = Krub({
    weight: ['400', '500', '600', '700'],
    display: 'swap',
    variable: '--font-kurb',
    subsets: ['latin']
});
