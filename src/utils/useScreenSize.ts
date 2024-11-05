import { useState, useEffect } from 'react';

export function useScreenSize() {
    const [screenSize, setScreenSize] = useState<string>('sm');

    useEffect(() => {
        function getCurrentScreenSize() {
            if (typeof window !== 'undefined') {
                const width = window.innerWidth;
                if (width < 640) return 'sm'; 
                if (width >= 640 && width < 768) return 'md';
                if (width >= 768 && width < 1024) return 'lg'; 
                return 'xl';
            }
            return 'sm';
        }

        function handleResize() {
            setScreenSize(getCurrentScreenSize());
        }

        handleResize();

        window.addEventListener('resize', handleResize);

        return () => window.removeEventListener('resize', handleResize);
    }, []);

    return screenSize;
}