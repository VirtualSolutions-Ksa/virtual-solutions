'use client'
import { Link, Locale } from "@/i18n/i18n.config";
import { useLocale, useTranslations } from "next-intl";
import LocaleSwitcher from "../LocaleSwitcher/LocaleSwitcher";
import Image from "next/image";
import HamburgerMenu from "../HamburgerMenu";
import { usePathname } from "next/navigation";


export default function Header() {
    const pathName = usePathname(); 
    

    const t = useTranslations("Header");
    const locale = useLocale() as Locale;

    const navLinks = [
        { text: 'Home', url: '/' },
        { text: 'About', url: '/about' },
        { text: 'Services', url: '/services' },
        { text: 'Contact Us', url: '/contact' },
        { text: 'Careers', url: '/careers' },
    ]

    return (
        <header className={`relative ${pathName === '/' || pathName === '/ar' ? 'bg-[hsla(196,60%,22%,0.25)]' : 'bg-primary'} `}>
            <div className="relative flex justify-between gap-6 items-center py-4 px-2 sm:px-4 md:py-5 lg:py-6 lg:px-10">
                <div className="flex gap-2 md:gap-3 lg:gap-4 items-center">
                    <div className="h-10 w-10 md:h-14 md:w-14 ">
                        <Link href='/'>
                            <Image src="/images/logo.png" alt="Virtual Solutions Logo" width={80} height={80} />
                        </Link>
                    </div>
                    <Link href='/' className="font-rubik text-base text-nowrap md:text-xl lg:text-2xl leading-none font-semibold uppercase text-white">
                        <h1 aria-label="website-name">{t('appTitle')}</h1>
                        <h2 aria-label="sub-name" className="text-sm md:text-lg lg:text-xl leading-none">{t('appSubTitle')}</h2>
                    </Link>
                </div>
                <div className="hidden lg:flex items-center gap-8">
                    <div className="flex gap-3 items-center">
                        <div className="h-12 w-12">
                            <Image src="/icons/time.svg" alt="time icon" width={56} height={56} />
                        </div>
                        <div className="text-white text-nowrap font-kurb text-sm font-medium leading-[136%]">
                            <p>{t('openTime')}</p>
                            <p>{t('closedDay')}</p>
                        </div>
                    </div>
                    <div className="flex gap-3 items-center">
                        <div className="h-12 w-12">
                            <Image src="/icons/email.svg" alt="email icon" width={56} height={56} />
                        </div>
                        <div className="text-white text-nowrap font-kurb text-sm font-medium leading-[136%]">
                            <p>Email</p>
                            <Link href="mailto:info@yourwebsite.com">
                                Ops-cs@virtualksa.com
                            </Link>
                        </div>
                    </div>
                    <div className="flex gap-3 text-nowrap items-center">
                        <div className="h-12 w-12">
                            <Image src="/icons/phone.svg" alt="email icon" width={56} height={56} />
                        </div>
                        <div className="text-white font-kurb text-sm font-medium leading-[136%]">
                            <p>Call Us</p>
                            <Link href="tel:+966051842353">
                               +966 051842353
                            </Link>
                        </div>
                    </div>
                </div>
                <HamburgerMenu navLinks={navLinks} />
            </div>
            <nav className={`hidden lg:flex justify-center gap-8 py-5 absolute w-full top-full left-0 z-[1] ${pathName !== '/' ? 'bg-[hsla(196,60%,22%,0.25)]': ''}`}>
                {navLinks.map((link) => (
                    <Link
                        key={link.url}
                        href={link.url}
                        className="text-white font-kurb text-lg font-semibold hover:text-secondary"
                    >
                        {link.text}
                    </Link>
                ))}
            </nav>
        </header>
    );
}