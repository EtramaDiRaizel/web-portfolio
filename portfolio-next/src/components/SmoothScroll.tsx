"use client";

import { useEffect, ReactNode } from "react";
import Lenis from "lenis";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function SmoothScroll({ children }: { children: ReactNode }) {
  useEffect(() => {
    // Exact same params as vanilla
    const lenis = new Lenis({
      lerp: 0.08,
      smoothWheel: true,
    });

    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);

    lenis.on('scroll', ScrollTrigger.update);

    // Global ScrollTrigger for reveals
    const revealElements = document.querySelectorAll('.reveal-up');
    revealElements.forEach(el => {
        gsap.to(el, {
            scrollTrigger: {
                trigger: el,
                start: 'top 85%',
                end: 'bottom 20%',
                toggleActions: 'play none none reverse',
            },
            y: 0,
            opacity: 1,
            duration: 1,
            ease: 'power3.out'
        });
    });

    // Handle internal anchor links (exact copy from vanilla)
    const handleAnchor = (e: MouseEvent) => {
        const target = e.target as HTMLElement;
        const anchor = target.closest('a');
        if (anchor && anchor.hash && anchor.origin === window.location.origin) {
            e.preventDefault();
            const targetElement = document.querySelector(anchor.hash);
            if (targetElement) {
                lenis.scrollTo(targetElement as any, {
                    offset: -50,
                    duration: 1.5
                });
            }
        }
    };

    document.addEventListener('click', handleAnchor);

    return () => {
      lenis.destroy();
      document.removeEventListener('click', handleAnchor);
    };
  }, []);

  return <>{children}</>;
}
