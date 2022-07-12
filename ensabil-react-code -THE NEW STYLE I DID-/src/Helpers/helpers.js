import { useState, useEffect } from 'react';

export const useWindowDimension = () => {
    const [dimension, setDimension] = useState(typeof window !== 'undefined' ? [window.innerWidth, window.innerHeight] : [0, 0])

    useEffect(() => {
        typeof window !== 'undefined' && setDimension([window.innerWidth, window.innerHeight])
        const debouncedResizeHandler = debounce(() => {
            setDimension([window.innerWidth, window.innerHeight]);
        }, 10);
        window.addEventListener('resize', debouncedResizeHandler);
        return () => window.removeEventListener('resize', debouncedResizeHandler);
    }, []);
    return dimension;
}

function debounce(fn, ms) {
    let timer;
    return _ => {
        clearTimeout(timer);
        timer = setTimeout(_ => {
            timer = null;
            fn.apply(this, arguments);
        }, ms);
    };
}

export const useForceUpdate = () => {
    const [value, setValue] = useState(0); // integer state
    return () => setValue((value) => value + 1); // update the state to force render
}
