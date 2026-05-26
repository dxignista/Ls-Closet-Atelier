import React from 'react';
import { cn } from "@/lib/utils";
import { ArrowRight } from "lucide-react";

export function TypographyOnly() {
  return (
    <div className="min-h-screen bg-[#FAFAF8] text-[#111111] font-serif flex flex-col selection:bg-[#EBEBE8] selection:text-[#111111] overflow-x-hidden">
      <style dangerouslySetInnerHTML={{__html: `
        @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;0,500;0,600;1,300;1,400&family=Inter:wght@300;400;500&display=swap');
        .font-serif { font-family: 'Cormorant Garamond', serif; }
        .font-sans { font-family: 'Inter', sans-serif; }
        .fade-in-up {
          animation: fadeInUp 1.2s cubic-bezier(0.2, 0.8, 0.2, 1) forwards;
          opacity: 0;
          transform: translateY(20px);
        }
        .delay-100 { animation-delay: 100ms; }
        .delay-200 { animation-delay: 200ms; }
        .delay-300 { animation-delay: 300ms; }
        .delay-500 { animation-delay: 500ms; }
        @keyframes fadeInUp {
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}} />

      {/* Header */}
      <header className="px-6 py-10 md:px-12 flex flex-col md:flex-row justify-between items-center border-b border-[#EBEBE8] fade-in-up">
        <div className="text-2xl md:text-3xl tracking-widest uppercase font-light mb-6 md:mb-0">
          L's Closet Atelier
        </div>
        <nav className="flex gap-8 text-sm md:text-xs font-sans tracking-[0.2em] uppercase text-[#555]">
          <a href="/alteration" className="hover:text-[#111] transition-colors duration-500">Alterations</a>
          <a href="/costume" className="hover:text-[#111] transition-colors duration-500">Couture</a>
        </nav>
      </header>

      {/* Hero */}
      <main className="flex-grow flex flex-col">
        <section className="min-h-[70vh] flex flex-col justify-center px-6 md:px-12 py-20">
          <div className="max-w-6xl mx-auto w-full">
            <h1 className="text-6xl md:text-8xl lg:text-[10rem] leading-[0.9] font-light tracking-tight mb-8">
              <span className="block fade-in-up delay-100">Impeccable</span>
              <span className="block italic fade-in-up delay-200 text-[#555]">&amp; Measured</span>
            </h1>
            <div className="grid grid-cols-1 md:grid-cols-12 gap-8 mt-16 fade-in-up delay-300">
              <div className="md:col-span-4 md:col-start-9">
                <p className="text-lg md:text-xl leading-relaxed text-[#444] font-light">
                  A sanctuary of precision where extraordinary garments are conceptualized, crafted, and refined for the competitive stage and beyond.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Services / CTAs */}
        <section className="px-6 md:px-12 py-32 bg-[#111] text-[#FAFAF8]">
          <div className="max-w-6xl mx-auto w-full">
            <h2 className="text-xs font-sans uppercase tracking-[0.3em] text-[#888] mb-16 border-b border-[#333] pb-6">
              Our Services
            </h2>
            <div className="flex flex-col gap-0 border-t border-[#333]">
              
              <a href="/alteration" className="group flex flex-col md:flex-row justify-between items-start md:items-center py-12 border-b border-[#333] hover:bg-[#1A1A1A] transition-colors duration-500 -mx-6 px-6 md:-mx-12 md:px-12">
                <div className="flex flex-col mb-4 md:mb-0">
                  <span className="text-sm font-sans tracking-[0.2em] text-[#888] mb-4">01</span>
                  <h3 className="text-4xl md:text-6xl font-light tracking-tight group-hover:italic transition-all duration-500">Alteration Requests</h3>
                </div>
                <div className="flex items-center gap-6 opacity-60 group-hover:opacity-100 transition-opacity duration-500">
                  <p className="hidden md:block text-sm font-sans tracking-widest uppercase max-w-[200px] text-right">
                    Refinement &amp; Precision
                  </p>
                  <ArrowRight className="w-8 h-8 font-light" strokeWidth={1} />
                </div>
              </a>

              <a href="/costume" className="group flex flex-col md:flex-row justify-between items-start md:items-center py-12 border-b border-[#333] hover:bg-[#1A1A1A] transition-colors duration-500 -mx-6 px-6 md:-mx-12 md:px-12">
                <div className="flex flex-col mb-4 md:mb-0">
                  <span className="text-sm font-sans tracking-[0.2em] text-[#888] mb-4">02</span>
                  <h3 className="text-4xl md:text-6xl font-light tracking-tight group-hover:italic transition-all duration-500">Couture Costumes</h3>
                </div>
                <div className="flex items-center gap-6 opacity-60 group-hover:opacity-100 transition-opacity duration-500">
                  <p className="hidden md:block text-sm font-sans tracking-widest uppercase max-w-[200px] text-right">
                    Bespoke Design
                  </p>
                  <ArrowRight className="w-8 h-8 font-light" strokeWidth={1} />
                </div>
              </a>

            </div>
          </div>
        </section>

        {/* Philosophy */}
        <section className="px-6 md:px-12 py-40">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-5xl font-light leading-snug mb-10 text-[#222]">
              "True luxury is found in the absence of the unnecessary. It is the perfect seam, the flawless drape, the quiet confidence of a garment built entirely around you."
            </h2>
            <p className="text-sm font-sans tracking-[0.2em] uppercase text-[#666]">
              — The Atelier Philosophy
            </p>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="px-6 md:px-12 py-8 border-t border-[#EBEBE8] flex flex-col md:flex-row justify-between items-center text-xs font-sans tracking-widest uppercase text-[#888]">
        <div className="mb-4 md:mb-0">
          &copy; {new Date().getFullYear()} L's Closet Atelier
        </div>
        <div className="flex gap-6">
          <a href="#" className="hover:text-[#111] transition-colors">Privacy Policy</a>
          <a href="#" className="hover:text-[#111] transition-colors">Terms of Service</a>
        </div>
      </footer>
    </div>
  );
}
