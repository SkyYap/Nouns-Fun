import React from 'react';
import { NFTCard } from './NFTCard';

// Function to generate random position within constraints
const generatePosition = (index: number, total: number) => {
  // Divide the screen into sectors for better distribution
  const angle = (index / total) * 2 * Math.PI;
  const radius = 20 + Math.random() * 30; // Random radius between 20-50% from center
  
  return {
    x: 50 + Math.cos(angle) * radius,
    y: 50 + Math.sin(angle) * radius
  };
};

const nfts = [
  {
    imageUrl: 'https://images.unsplash.com/photo-1620641788421-7a1c342ea42e?w=300&h=300&fit=crop',
    link: 'https://opensea.io',
    delay: 0.2
  },
  {
    imageUrl: 'https://images.unsplash.com/photo-1634193295627-1cdddf751ebf?w=300&h=300&fit=crop',
    link: 'https://rarible.com',
    delay: 0.4
  },
  {
    imageUrl: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=300&h=300&fit=crop',
    link: 'https://foundation.app',
    delay: 0.6
  },
  {
    imageUrl: 'https://images.unsplash.com/photo-1646967506564-32800ab53f96?w=300&h=300&fit=crop',
    link: 'https://superrare.com',
    delay: 0.8
  },
  {
    imageUrl: 'https://images.unsplash.com/photo-1635322966219-b75ed372eb01?w=300&h=300&fit=crop',
    link: 'https://niftygateway.com',
    delay: 1.0
  }
].map((nft, index, array) => ({
  ...nft,
  position: generatePosition(index, array.length)
}));

export const Wormhole: React.FC = () => {
  return (
    <div className="relative w-full h-full">
      <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
        <div className="relative w-64 h-64">
          <div className="absolute inset-0 bg-gradient-to-r from-purple-600 via-pink-500 to-blue-500 rounded-full animate-spin-slow" 
               style={{ filter: 'blur(20px)' }} />
          <div className="absolute inset-4 bg-black rounded-full animate-pulse" />
          <div className="absolute inset-0 bg-gradient-to-r from-purple-600/30 via-pink-500/30 to-blue-500/30 rounded-full animate-ping-slow" />
        </div>
      </div>
      {nfts.map((nft, index) => (
        <NFTCard key={index} {...nft} />
      ))}
    </div>
  );
};