import { useEffect, useRef } from 'react';

export function useInterval(callback: () => void, delay: number) {
    const savedCallback = useRef(() => {});

    useEffect(() => {
        savedCallback.current = callback;
    }, [callback]);

    useEffect(() => {
        function tick() {
            savedCallback.current();
        }
        if (delay !== 0) {
            let id = setInterval(tick, delay);
            return () => clearInterval(id);
        }
    }, [delay]);
}
