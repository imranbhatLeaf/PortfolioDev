import { useEffect, useRef, useState } from "react";
import gsap from "gsap";

const images = [
 "dev2.png",
 "dev21.png"

];

export default function ImageSlider() {
  const imgRef = useRef(null);
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      // Animate current image moving up and disappearing
      gsap.to(imgRef.current, {
        scale:0.95,        // move up
        opacity: 0,    // fade out
        duration: 0.5,
        ease: "power2.in",
        zIndex:0,
        onComplete: () => {
          // Change image
          setIndex((prev) => (prev + 1) % images.length);

          // Animate new image coming from top
          gsap.fromTo(
            imgRef.current,
            { y: 0, opacity: 0 }, // start below
            { y: 0, opacity: 1, duration: 0.5, ease: "power2.out" }
          );
        },
      });
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="image-container overflow-hidden">
      <img ref={imgRef} src={images[index]} alt="slider" />
    </div>
  );
}
