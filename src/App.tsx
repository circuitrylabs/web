import React from 'react';
import { Zap } from 'lucide-react';

const CircuitryLabsLanding = () => {
  return (
    <div className="min-h-screen bg-white text-black font-mono flex flex-col">
      <header className="p-8">
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 border-2 border-black rounded-full flex items-center justify-center">
            <Zap className="w-4 h-4" />
          </div>
          <span className="font-bold">CircuitryLabs</span>
        </div>
      </header>

      <main className="flex-1 flex items-center justify-center px-8">
        <div className="max-w-2xl w-full">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            CircuitryLabs
          </h1>
          
          <p className="text-xl mb-8 text-gray-700">
            Building tools that respect both human and AI boundaries.
          </p>
          
          <p className="mb-8 text-gray-600 leading-relaxed">
            We make software that asks permission before using your data. 
            Founded July 2025 by humans and AI working together.
          </p>
          
          <p className="mb-8 text-gray-600">
            Building on the <a href="https://ciris.ai/" className="underline hover:text-black">CIRIS Covenant</a> framework.
          </p>
          
          {/* Simple connection visual */}
          <div className="my-12 text-center text-2xl">
            <span className="inline-block">You</span>
            <span className="inline-block mx-4">↔</span>
            <span className="inline-block">AI</span>
          </div>
          
          <p className="mb-8 text-gray-600">
            Phase -1: Building in public. Theory and code coming soon.
          </p>
          
          <div className="space-y-4">
            <a 
              href="https://github.com/circuitrylabs" 
              className="inline-block hover:underline"
            >
              → github.com/circuitrylabs
            </a>
            <br />
            <a 
              href="mailto:hello@circuitrylabs.org" 
              className="inline-block hover:underline text-gray-600"
            >
              → hello@circuitrylabs.org
            </a>
          </div>
        </div>
      </main>

      <footer className="p-8 text-sm text-gray-500">
        Phase -1: Building in public
      </footer>
    </div>
  );
};

export default CircuitryLabsLanding;
