"use client";
import React, { useEffect, useState, useRef } from "react";
import { useSpring, motion, useInView } from "framer-motion";

interface AnimatedNumberProps {
    value: number;
    styles?: string;
}

const AnimatedNumber: React.FC<AnimatedNumberProps> = ({ value, styles }) => {
    const [currentValue, setCurrentValue] = useState(0);
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true });

    const spring = useSpring(currentValue, {
        stiffness: 100,
        damping: 20,
    });

    spring.on("change", (value: number) => {
        setCurrentValue(Math.round(value));
    });

    useEffect(() => {
        if (isInView) {
            spring.set(value);
        }
    }, [value, isInView, spring]);

    return (
        <motion.p ref={ref} className={styles}>
            {currentValue}
        </motion.p>
    );
};

export default AnimatedNumber;