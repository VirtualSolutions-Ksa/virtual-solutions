"use client";
import { Link } from "@/i18n/i18n.config";
import { useRef } from "react";

interface RippleButtonProps {
    buttonCss: string;
    buttonText: string;
    href?: string;
    handleClick?: () => void;
    component?: "link" | "button";
}

export default function RippleButton({
    buttonCss,
    buttonText,
    component = 'button',
    href,
    handleClick,
}: RippleButtonProps) {

    const buttonRef = useRef<HTMLButtonElement>(null);
    const linkRef = useRef<HTMLParagraphElement>(null);

    const handleMouseMove: React.MouseEventHandler = (e) => {
        const element =
            component === "button" ? buttonRef.current : linkRef.current;
        if (element) {
            const x = e.nativeEvent.offsetX;
            const y = e.nativeEvent.offsetY;

            element.style.setProperty("--x", `${x}px`);
            element.style.setProperty("--y", `${y}px`);
        }
    };

    if (component === "button") {
        return (
            <button
                ref={buttonRef}
                onMouseMove={handleMouseMove}
                className={`${buttonCss} ripple-button`}
                onClick={handleClick || (() => { })}
            >
                <span className="relative z-[1]">{buttonText}</span>
            </button>
        );
    }

    return (
        <Link href={href ?? ""} passHref>
            <p
                ref={linkRef}
                onMouseMove={handleMouseMove}
                className={`${buttonCss} ripple-button`}
            >
                <span className="relative z-[1]">{buttonText}</span>
            </p>
        </Link>
    );
};