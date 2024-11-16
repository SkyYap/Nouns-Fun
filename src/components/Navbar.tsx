import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTwitter, faDiscord, faGithub } from '@fortawesome/free-brands-svg-icons';

function Navbar() {
  return (
    <nav>
      <div className="flex flex-row mx-auto px-[40px] py-[25px] justify-between items-center bg-black">
        <div className="font-semibold text-lg text-white">
          <a href="/">Nouns-Fun</a>
        </div>
        <div className="flex flex-1 justify-center space-x-8 text-center">
          {/* Placeholder for additional center navbar items */}
        </div>
        <div className="flex space-x-4">
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-white">
            <FontAwesomeIcon icon={faTwitter} size="lg" />
          </a>
          <a href="https://github.com/SkyYap/Nouns-Fun" target="_blank" rel="noopener noreferrer" className="text-white">
            <FontAwesomeIcon icon={faGithub} size="lg" />
          </a>
          <a href="https://discord.com" target="_blank" rel="noopener noreferrer" className="text-white">
            <FontAwesomeIcon icon={faDiscord} size="lg" />
          </a>
        </div>
      </div>
      <hr className="border-t border-gray-600" />
    </nav>
  );
}

export default Navbar;