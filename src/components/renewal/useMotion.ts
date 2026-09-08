import { useLayoutEffect, type RefObject } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Lenis from "lenis";
import "lenis/dist/lenis.css";

gsap.registerPlugin(ScrollTrigger);

export function useMotion(root: RefObject<HTMLDivElement | null>) {
  useLayoutEffect(() => {
    const element = root.current;
    if (!element) return;
    window.scrollTo(0, 0);
    const media = gsap.matchMedia();
    media.add(
      "(prefers-reduced-motion: no-preference)",
      () => {
        const lenis = new Lenis({
          duration: 1.05,
          smoothWheel: true,
          anchors: true,
        });
        lenis.on("scroll", ScrollTrigger.update);
        const tick = (time: number) => lenis.raf(time * 1000);
        gsap.ticker.add(tick);
        const counts = Array.from(
          element.querySelectorAll<HTMLElement>("[data-count]"),
        ).map((el) => ({ el, text: el.textContent }));
        const context = gsap.context(() => {
          gsap.utils.toArray<HTMLElement>("[data-reveal]").forEach((el) => {
            gsap.from(el, {
              y: 34,
              opacity: 0,
              duration: 0.85,
              ease: "power2.out",
              scrollTrigger: { trigger: el, start: "top 94%", once: true },
              clearProps: "transform,opacity",
            });
          });
          gsap.utils.toArray<HTMLElement>("[data-button]").forEach((el) => {
            gsap.from(el, {
              rotation: -3,
              scale: 0.94,
              duration: 0.95,
              ease: "elastic.out(1, 0.55)",
              scrollTrigger: { trigger: el, start: "top 96%", once: true },
              clearProps: "transform",
            });
          });
          gsap.utils.toArray<HTMLElement>("[data-count]").forEach((el) => {
            const value = Number(el.dataset.count);
            const digits = Number.isInteger(value) ? 0 : 1;
            const state = { value: 0 };
            gsap.to(state, {
              value,
              duration: 1.8,
              ease: "power2.out",
              scrollTrigger: { trigger: el, start: "top 95%", once: true },
              onUpdate: () => {
                el.textContent = `${state.value.toLocaleString("en-US", { minimumFractionDigits: digits, maximumFractionDigits: digits })}${el.dataset.suffix}`;
              },
            });
          });
          gsap.utils
            .toArray<HTMLElement>(".dw-bar-fill")
            .forEach((el) =>
              gsap.from(el, {
                scaleX: 0,
                transformOrigin: "left center",
                duration: 1.5,
                ease: "power2.out",
                scrollTrigger: { trigger: el, start: "top 95%", once: true },
              }),
            );
        }, element);
        const refresh = () => ScrollTrigger.refresh();
        document.fonts.ready.then(refresh);
        const images = Array.from(element.querySelectorAll("img"));
        images.forEach((img) => img.addEventListener("load", refresh));
        const observer = new IntersectionObserver(
          (entries) =>
            entries.forEach((entry) =>
              entry.target.classList.toggle("dw-in-view", entry.isIntersecting),
            ),
          { rootMargin: "80px" },
        );
        element
          .querySelectorAll("section,footer")
          .forEach((section) => observer.observe(section));
        return () => {
          observer.disconnect();
          images.forEach((img) => img.removeEventListener("load", refresh));
          context.revert();
          counts.forEach(({ el, text }) => {
            el.textContent = text;
          });
          gsap.ticker.remove(tick);
          lenis.destroy();
        };
      },
      element,
    );
    return () => media.revert();
  }, [root]);
}
