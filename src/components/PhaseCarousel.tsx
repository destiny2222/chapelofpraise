"use client";

import Image from "next/image";
import { useState, useEffect } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

type CarouselImage = {
  src: string;
  alt: string;
};

export default function PhaseCarousel({ images }: { images: CarouselImage[] }) {
  const [slidesToShow, setSlidesToShow] = useState(3);

  useEffect(() => {
    const update = () => {
      if (window.innerWidth < 768) setSlidesToShow(1);
      else if (window.innerWidth < 1024) setSlidesToShow(2);
      else setSlidesToShow(3);
    };
    update();
    window.addEventListener("resize", update);
    return () => window.removeEventListener("resize", update);
  }, []);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow,
    slidesToScroll: 1,
    autoplay: true,
    arrows: false,
    autoplaySpeed: 3000,
    swipe: true,
    touchMove: true,
  };

  return (
    <div className="phase-carousel-wrapper">
      <Slider {...settings} className="-mx-3">
        {images.map((img, idx) => (
          <div key={idx} className="px-3">
            <div className="relative aspect-[4/3]  overflow-hidden  group">
              <Image
                src={img.src}
                alt={img.alt}
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-700"
              />
            </div>
          </div>
        ))}
      </Slider>
      <style jsx global>{`
        .phase-carousel-wrapper {
          padding-bottom: 40px;
        }
        .phase-carousel-wrapper .slick-track {
          display: flex !important;
          gap: 0;
        }
        .phase-carousel-wrapper .slick-slide {
          height: inherit !important;
        }
        .phase-carousel-wrapper .slick-dots {
          bottom: -40px;
        }
        .phase-carousel-wrapper .slick-dots li button:before {
          color: #1A2A3A; /* brand-900 */
          font-size: 10px;
          opacity: 0.25;
        }
        .phase-carousel-wrapper .slick-dots li.slick-active button:before {
          color: #D4AF37; /* accent-500 */
          opacity: 1;
        }
      `}</style>
    </div>
  );
}
