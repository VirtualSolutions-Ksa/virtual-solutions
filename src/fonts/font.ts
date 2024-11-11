import { Krub, Rubik, Noto_Naskh_Arabic } from "next/font/google";

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

export const noto = Noto_Naskh_Arabic({
    weight: ['400', '500', '600', '700'],
    display: 'swap',
    variable: '--font-noto',
    subsets: ['arabic']
})
