"use client";

import { useState, useEffect, useCallback, useRef } from 'react';

const CHARS = '!<>-_\\/[]{}—=+*^?#________';

export default function useScramble(text: string, displayOverride?: string, animateOnMount = false) {
    const [displayText, setDisplayText] = useState(displayOverride || text);
    const [isAnimating, setIsAnimating] = useState(false);
    const frameRef = useRef(0);
    const queueRef = useRef<{ char: string, start: number, end: number }[]>([]);
    const requestRef = useRef<number | null>(null);

    const update = useCallback(() => {
        let output = '';
        let complete = 0;
        const queue = queueRef.current;
        const frame = frameRef.current;

        for (let i = 0, n = queue.length; i < n; i++) {
            let { char, start, end } = queue[i];

            if (frame >= end) {
                complete++;
                output += char;
            } else if (frame >= start) {
                if (!char || char === ' ') {
                    output += ' ';
                } else {
                    output += CHARS[Math.floor(Math.random() * CHARS.length)];
                }
            } else {
                output += CHARS[Math.floor(Math.random() * CHARS.length)];
            }
        }

        setDisplayText(output);

        if (complete === queue.length) {
            setIsAnimating(false);
        } else {
            frameRef.current++;
            requestRef.current = requestAnimationFrame(update);
        }
    }, []);

    const scramble = useCallback(() => {
        if (isAnimating) return;
        setIsAnimating(true);

        const queue = [];
        for (let i = 0; i < text.length; i++) {
            const char = text[i];
            const start = Math.floor(Math.random() * 20);
            const end = start + Math.floor(Math.random() * 20);
            queue.push({ char, start, end });
        }
        queueRef.current = queue;
        frameRef.current = 0;
        requestRef.current = requestAnimationFrame(update);
    }, [text, isAnimating, update]);

    useEffect(() => {
        if (animateOnMount) {
            // Match the 500ms delay from vanilla main.js
            const timeout = setTimeout(scramble, 500);
            return () => clearTimeout(timeout);
        }
    }, [animateOnMount, scramble]);

    useEffect(() => {
        return () => {
            if (requestRef.current) cancelAnimationFrame(requestRef.current);
        };
    }, []);

    return { displayText, scramble, isAnimating };
}
