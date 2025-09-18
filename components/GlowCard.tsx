"use client";

import React, { useRef } from "react";
import Image from "next/image";

interface Props {
  card: {
    title: string;
    imgPath: string;
    review: string;
    logoPath: string;
    date: string;
    responsibilities: string[];
  };
  children: React.ReactNode;
  index: number;
}

const GlowCard = ({ card, children, index }: Props): React.JSX.Element => {
  const cardRefs = useRef([]);

  const handleMuseMove = (index: number) => (e) => {
    const card = cardRefs.current[index];
    if (!card) return;
    // Get the mouse position reltive to the card
    // @ts-expect-error// TypeScript doesn't know about the current ref
    const rect = card.getBoundingClientRect();
    const mouseX = e.clientX - rect.left - rect.width / 2;
    const mouseY = e.clientY - rect.top - rect.height / 2;

    //calc the angle from the center of the card
    let angle = Math.atan2(mouseY, mouseX) * (180 / Math.PI);

    angle = (angle + 360) % 360;

    card.style.setProperty("--start", angle + 60);
  };

  return (
    <div
      ref={(el) => (cardRefs.current[index] = el)}
      onMouseMove={handleMuseMove(index)}
      className="card card-border timeline-card rounded-xl p-10"
    >
      <div className="glow" />
      <div className="flex items-center gap-1 mb-5">
        {Array.from({ length: 5 }, (_, i) => (
          <Image
            src="/images/star.png"
            alt="star"
            key={i}
            className="size-5"
            width={500}
            height={500}
          />
        ))}
      </div>

      <div className="mb-5">
        <p className="text-white-50 text-lg">{card.review}</p>
      </div>

      {children}
    </div>
  );
};
export default GlowCard;
