"use client";

import React from 'react';
import useScramble from '@/hooks/useScramble';

interface ScrambleTextProps {
    text: string;
    displayOverride?: string;
    className?: string;
    animateOnMount?: boolean;
    triggerOnHover?: boolean;
}

export default function ScrambleText({ text, displayOverride, className, animateOnMount = false, triggerOnHover = true }: ScrambleTextProps) {
    const { displayText, scramble } = useScramble(text, displayOverride, animateOnMount);

    return (
        <span 
            className={className} 
            onMouseEnter={triggerOnHover ? scramble : undefined}
            style={{ display: 'inline-block' }}
        >
            {displayText}
        </span>
    );
}
