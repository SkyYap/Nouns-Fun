import React from 'react';
import { Wormhole } from './components/Wormhole';

function App() {
  return (
    <div className="min-h-screen bg-black overflow-hidden">
      <div className="fixed inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-purple-900/20 via-black to-black" />
      <div className="relative z-10 w-full h-screen">
        <Wormhole />
      </div>
    </div>
  );
}

export default App;