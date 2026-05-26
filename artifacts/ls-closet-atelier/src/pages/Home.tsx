import React from "react";
import { Link } from "wouter";
import { ArrowRight, MoveRight } from "lucide-react";

export function Home() {
  const base = import.meta.env.BASE_URL;

  return (
    <div className="pb-20">
      <style>{`
        .bg-jewel {
          background-color: hsl(var(--card));
        }
        .text-gold {
          color: hsl(var(--primary));
        }
        .border-gold {
          border-color: rgba(212, 175, 55, 0.3);
        }
      `}</style>

      {/* Hero Section */}
      <section className="relative w-full h-[100dvh] overflow-hidden flex items-center justify-center">
        <div className="absolute inset-0 z-0">
          <img 
            src={`${base}images/atelier-hero.png`}
            alt="Couture competitive dance dress bodice" 
            className="w-full h-full object-cover opacity-80"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-black/40"></div>
          <div className="absolute inset-0 bg-gradient-to-b from-background/40 via-transparent to-transparent"></div>
        </div>
        
        <div className="relative z-10 text-center max-w-4xl px-4 mt-20">
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-medium tracking-tight mb-6 leading-[1.1] text-white">
            Movement <br/> <span className="italic text-gold">Engineered.</span>
          </h1>
          <p className="text-lg md:text-xl text-zinc-300 max-w-xl mx-auto mb-10 font-light">
            Precision-cut couture and expert alterations for the competitive stage and beyond.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
            <a href="#services" className="group flex items-center gap-2 text-sm tracking-widest uppercase border-b border-gold pb-1 text-white hover:text-gold transition-colors">
              Explore Our Services
              <MoveRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </a>
          </div>
        </div>
      </section>

      {/* Philosophy Section */}
      <section className="py-32 px-6 md:px-12 lg:px-24 max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-16">
        <div className="w-full md:w-1/2 order-2 md:order-1">
          <img 
            src={`${base}images/dancer-garden.jpg`}
            alt="Dancer in garden" 
            className="w-full aspect-[3/4] object-cover rounded-sm shadow-2xl shadow-black/50"
          />
        </div>
        <div className="w-full md:w-1/2 order-1 md:order-2 space-y-8">
          <h2 className="text-3xl md:text-5xl leading-tight">The Discipline of <br/><span className="italic text-gold">Glamour.</span></h2>
          <p className="text-zinc-400 text-lg leading-relaxed font-light">
            A competitive dress is not merely worn; it is performed in. It must breathe, stretch, and sculpt without compromising an ounce of its visual drama.
          </p>
          <p className="text-zinc-400 text-lg leading-relaxed font-light">
            At L's Closet Atelier, we approach each garment with the rigor of an architect and the eye of an artist. From intricate beadwork that catches the stage lights to structural alterations that ensure perfect fit under extreme movement, our craft elevates your performance.
          </p>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-24 bg-jewel border-y border-white/5">
        <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-24">
          <h2 className="text-4xl text-center mb-20 italic tracking-wide text-foreground">Our Services</h2>
          
          <div className="grid md:grid-cols-2 gap-12 lg:gap-24">
            {/* Alterations */}
            <Link href="/alteration" className="group block">
              <div className="h-[400px] bg-[#110A0D] border border-white/5 rounded-sm p-10 flex flex-col justify-between transition-colors hover:border-gold/50 relative overflow-hidden">
                <div>
                  <span className="text-gold tracking-widest text-xs uppercase mb-4 block">Refinement</span>
                  <h3 className="text-3xl mb-4 text-foreground">Alteration Requests</h3>
                  <p className="text-zinc-400 font-light leading-relaxed max-w-sm">
                    Impeccable adjustments for fit, structure, and movement. Whether it is a slight hem or a complete bodice reconstruction.
                  </p>
                </div>
                <div className="flex items-center gap-3 text-sm tracking-widest uppercase group-hover:text-gold transition-colors text-foreground">
                  Request Service <ArrowRight className="w-4 h-4" />
                </div>
              </div>
            </Link>

            {/* Couture */}
            <Link href="/costume" className="group block">
              <div className="h-[400px] bg-[#110A0D] border border-white/5 rounded-sm p-10 flex flex-col justify-between transition-colors hover:border-gold/50 relative overflow-hidden">
                <div>
                  <span className="text-gold tracking-widest text-xs uppercase mb-4 block">Creation</span>
                  <h3 className="text-3xl mb-4 text-foreground">Couture Costumes</h3>
                  <p className="text-zinc-400 font-light leading-relaxed max-w-sm">
                    Bespoke competitive wear designed exclusively for your choreography and body. From sketch to the final stone.
                  </p>
                </div>
                <div className="flex items-center gap-3 text-sm tracking-widest uppercase group-hover:text-gold transition-colors text-foreground">
                  Begin Commission <ArrowRight className="w-4 h-4" />
                </div>
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* Philosophy Quote */}
      <section className="py-24 px-6 md:px-12 lg:px-24">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-4xl text-center mb-20 italic tracking-wide">Our Philosophy</h2>
          <blockquote className="text-xl md:text-2xl lg:text-3xl leading-relaxed italic text-zinc-200 font-light">
            "True luxury is found in the absence of the unnecessary. It is the perfect seam, the flawless drape, the quiet confidence of a garment built entirely around you."
          </blockquote>
          <div className="w-12 h-px bg-primary mx-auto mt-12 opacity-60"></div>
        </div>
      </section>
    </div>
  );
}