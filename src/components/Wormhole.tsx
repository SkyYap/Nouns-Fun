import React from 'react';
import { NFTCard } from './NFTCard';
import  Navbar from './Navbar';

// Function to generate random position within constraints
const generatePosition = (index: number, total: number) => {
  const angle = (index / total) * 2 * Math.PI;
  const radius = 20 + Math.random() * 30;
  
  return {
    x: 50 + Math.cos(angle) * radius,
    y: 50 + Math.sin(angle) * radius
  };
};

// Update the base URL for Nouns images
const NOUNS_IMAGE_BASE = "https://noun.pics/";

const nfts = Object.entries({
  1317: "https://eth.blockscout.com/token/0x9C8fF314C9Bc7F6e59A9d9225Fb22946427eDC03/instance/1317",
  1316: "https://eth.blockscout.com/token/0x9C8fF314C9Bc7F6e59A9d9225Fb22946427eDC03/instance/1316",
  1315: "https://eth.blockscout.com/token/0x9C8fF314C9Bc7F6e59A9d9225Fb22946427eDC03/instance/1315",
  1314: "https://eth.blockscout.com/token/0x9C8fF314C9Bc7F6e59A9d9225Fb22946427eDC03/instance/1314",
  1313: "https://eth.blockscout.com/token/0x9C8fF314C9Bc7F6e59A9d9225Fb22946427eDC03/instance/1313",
  1312: "https://eth.blockscout.com/token/0x9C8fF314C9Bc7F6e59A9d9225Fb22946427eDC03/instance/1312",
  1311: "https://eth.blockscout.com/token/0x9C8fF314C9Bc7F6e59A9d9225Fb22946427eDC03/instance/1311",
  1310: "https://eth.blockscout.com/token/0x9C8fF314C9Bc7F6e59A9d9225Fb22946427eDC03/instance/1310",
  1309: "https://eth.blockscout.com/token/0x9C8fF314C9Bc7F6e59A9d9225Fb22946427eDC03/instance/1309",
  1308: "https://eth.blockscout.com/token/0x9C8fF314C9Bc7F6e59A9d9225Fb22946427eDC03/instance/1308",
  1307: "https://eth.blockscout.com/token/0x9C8fF314C9Bc7F6e59A9d9225Fb22946427eDC03/instance/1307",
  1306: "https://eth.blockscout.com/token/0x9C8fF314C9Bc7F6e59A9d9225Fb22946427eDC03/instance/1306",
  1305: "https://eth.blockscout.com/token/0x9C8fF314C9Bc7F6e59A9d9225Fb22946427eDC03/instance/1305",
  1304: "https://eth.blockscout.com/token/0x9C8fF314C9Bc7F6e59A9d9225Fb22946427eDC03/instance/1304",
  1303: "https://eth.blockscout.com/token/0x9C8fF314C9Bc7F6e59A9d9225Fb22946427eDC03/instance/1303",
  1302: "https://eth.blockscout.com/token/0x9C8fF314C9Bc7F6e59A9d9225Fb22946427eDC03/instance/1302",
  1301: "https://eth.blockscout.com/token/0x9C8fF314C9Bc7F6e59A9d9225Fb22946427eDC03/instance/1301",
  1300: "https://eth.blockscout.com/token/0x9C8fF314C9Bc7F6e59A9d9225Fb22946427eDC03/instance/1300",
  1299: "https://eth.blockscout.com/token/0x9C8fF314C9Bc7F6e59A9d9225Fb22946427eDC03/instance/1299",
  1298: "https://eth.blockscout.com/token/0x9C8fF314C9Bc7F6e59A9d9225Fb22946427eDC03/instance/1298",
  1297: "https://eth.blockscout.com/token/0x9C8fF314C9Bc7F6e59A9d9225Fb22946427eDC03/instance/1297",
}).map(([tokenId, link], index, array) => ({
  imageUrl: `${NOUNS_IMAGE_BASE}${tokenId}.png`,
  link,
  delay: (index * 0.1) % 1, // Shorter delays to make animation more dynamic
  position: generatePosition(index, array.length)
}));

export const Wormhole: React.FC = () => {
  return (
    <div className="min-h-screen bg-black">
      <Navbar />
      <div className="relative w-full h-[calc(100vh-64px)]">
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
    </div>
  );
};