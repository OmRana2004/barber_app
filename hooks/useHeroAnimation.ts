"use client";

import { useEffect } from "react";

export function useHeroAnimation() {
  useEffect(() => {
    let isMounted = true;

    const init = () => {
      const container = document.getElementById("hero-tools");
      if (!container || !isMounted) return;

      const random = (max: number) => Math.random() * max;

      const createEl = () => {
        const el = document.createElement("div");
        el.style.position = "absolute";
        el.style.pointerEvents = "none";
        return el;
      };

      const spawnScissors = () => {
        const el = createEl();
        el.innerText = "✂";

        el.style.left = `${random(90)}%`;
        el.style.top = `${random(70)}%`;
        el.style.fontSize = "26px";
        el.style.opacity = "0";
        el.style.transition = "all 0.5s ease";

        container.appendChild(el);

        requestAnimationFrame(() => {
          el.style.opacity = "0.8";
          el.style.transform = "rotate(10deg) scale(1.2)";
        });

        setTimeout(() => el.remove(), 1200);
      };

      const spawnSparkles = () => {
        const el = createEl();

        el.style.left = `${random(100)}%`;
        el.style.top = `${random(100)}%`;
        el.style.width = "4px";
        el.style.height = "4px";
        el.style.background = "#c9a84c";
        el.style.borderRadius = "50%";
        el.style.opacity = "0";

        container.appendChild(el);

        requestAnimationFrame(() => {
          el.style.opacity = "1";
          el.style.transform = "scale(1.5)";
        });

        setTimeout(() => el.remove(), 1000);
      };

      const interval = setInterval(() => {
        spawnScissors();
        spawnSparkles();
      }, 1000);

      return interval;
    };

    const interval = init();

    return () => {
      isMounted = false;
      if (interval) clearInterval(interval);
    };
  }, []);
}