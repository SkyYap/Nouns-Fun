import React from 'react';

interface NFTCardProps {
  imageUrl: string;
  link: string;
  delay: number;
  position: {
    x: number;
    y: number;
  };
}

export const NFTCard: React.FC<NFTCardProps> = ({ imageUrl, link, delay, position }) => {
  const floatDuration = 10 + Math.random() * 10; // Random duration between 10-20s
  const rotateAmount = Math.random() * 360; // Random initial rotation

  return (
    <a
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      className="absolute cursor-pointer transform hover:scale-110 transition-transform duration-300"
      style={{
        animation: `float ${floatDuration}s infinite ${delay}s`,
        transform: `rotate(${rotateAmount}deg)`,
        left: `${position.x}%`,
        top: `${position.y}%`,
        opacity: 0,
        animationFillMode: 'forwards',
      }}
    >
      <img
        src={imageUrl}
        alt="NFT"
        className="w-24 h-24 rounded-lg shadow-lg hover:shadow-2xl animate-appear"
        style={{ animationDelay: `${delay}s` }}
      />
    </a>
  );
};