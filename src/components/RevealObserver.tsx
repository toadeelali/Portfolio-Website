'use client';

import { useEffect } from 'react';

export function RevealObserver() {
  useEffect(() => {
    const observers = new Set<IntersectionObserver>();

    const observe = (root: ParentNode) => {
      root.querySelectorAll<HTMLElement>('.reveal:not(.in-view)').forEach((el) => {
        if (el.dataset.revealObserved) return;
        el.dataset.revealObserved = '1';
        const io = new IntersectionObserver(
          (entries) => {
            for (const entry of entries) {
              if (entry.isIntersecting) {
                entry.target.classList.add('in-view');
                io.disconnect();
                observers.delete(io);
              }
            }
          },
          { threshold: 0.12, rootMargin: '0px 0px -6% 0px' }
        );
        io.observe(el);
        observers.add(io);
      });
    };

    observe(document);

    const mo = new MutationObserver(() => observe(document));
    mo.observe(document.body, { childList: true, subtree: true });

    return () => {
      mo.disconnect();
      observers.forEach((io) => io.disconnect());
      observers.clear();
      document
        .querySelectorAll<HTMLElement>('.reveal[data-reveal-observed]')
        .forEach((el) => delete el.dataset.revealObserved);
    };
  }, []);

  return null;
}
