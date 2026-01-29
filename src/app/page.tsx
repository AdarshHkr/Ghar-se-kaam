'use client';

import { useRef } from 'react';
import Link from 'next/link';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';

gsap.registerPlugin(useGSAP);

export default function Home() {
  const containerRef = useRef<HTMLDivElement>(null);
  const heroRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    // Hero Animation
    gsap.from('.hero-text', {
      y: 50,
      opacity: 0,
      duration: 1,
      stagger: 0.2,
      ease: 'power3.out'
    });

    // Cards Animation
    gsap.from('.feature-card', {
      y: 100,
      opacity: 0,
      duration: 0.8,
      stagger: 0.15,
      ease: 'back.out(1.7)',
      delay: 0.5
    });

    // Background Particles Animation
    gsap.to('.particle', {
      y: 'random(-50, 50)',
      x: 'random(-50, 50)',
      duration: 'random(5, 10)',
      repeat: -1,
      yoyo: true,
      ease: 'sine.inOut',
      stagger: {
        amount: 2,
        from: "random"
      }
    });

  }, { scope: containerRef });


  return (
    <main ref={containerRef} className="relative min-h-[calc(100vh-68px)] flex flex-col items-center justify-center p-6 overflow-hidden">

      {/* Background Particles - purely decorative */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="particle absolute top-1/4 left-1/4 w-64 h-64 bg-blue-600/20 rounded-full blur-3xl" />
        <div className="particle absolute bottom-1/3 right-1/4 w-96 h-96 bg-purple-600/20 rounded-full blur-3xl" />
        <div className="particle absolute top-1/2 left-1/2 w-48 h-48 bg-pink-500/20 rounded-full blur-3xl" />
      </div>

      <div className="z-10 w-full max-w-5xl mx-auto flex flex-col items-center gap-12">

        {/* Hero Section */}
        <section ref={heroRef} className="text-center space-y-6">
          <h1 className="hero-text text-5xl md:text-7xl font-bold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-white via-blue-100 to-gray-400 drop-shadow-sm">
            Remote User <br />
            <span className="text-blue-500">Monitoring </span>
          </h1>

          <p className="hero-text text-lg md:text-xl text-gray-400 max-w-2xl mx-auto leading-relaxed">
            Build using <span className="font-semibold text-white">LiveKit SFU</span>.
            Experience optimized, low-latency screen sharing and real-time monitoring designed for performance.
          </p>

          <div className="hero-text flex flex-wrap justify-center gap-3">
            <span className="px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-sm">Real-time SFU</span>
            <span className="px-3 py-1 rounded-full bg-purple-500/10 border border-purple-500/20 text-purple-400 text-sm">Low Latency</span>
            <span className="px-3 py-1 rounded-full bg-green-500/10 border border-green-500/20 text-green-400 text-sm">Secure</span>
          </div>
        </section>


        {/* Action Cards */}
        <div ref={cardsRef} className="flex flex-col md:flex-row gap-6 w-full justify-center perspective-1000">

          {/* Join Room Card */}
          <Link href="/join" className="group relative feature-card w-full md:w-80 h-64">
            <div className="absolute inset-0 bg-gradient-to-br from-blue-600/20 to-indigo-600/20 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            <div className="relative h-full bg-gray-900/40 backdrop-blur-xl border border-white/10 rounded-2xl p-8 flex flex-col items-center justify-center text-center hover:border-blue-500/50 transition-colors duration-300 group-hover:transform group-hover:-translate-y-2">
              <div className="p-4 rounded-full bg-blue-500/10 mb-4 group-hover:bg-blue-500/20 transition-colors">
                <svg className="w-8 h-8 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"></path></svg>
              </div>
              <h3 className="text-2xl font-semibold text-white mb-2">Join Room</h3>
              <p className="text-gray-400 text-sm">Connect instantly as a participant</p>
            </div>
          </Link>

          {/* Create Room Card */}
          <Link href="/admin/create" className="group relative feature-card w-full md:w-80 h-64">
            <div className="absolute inset-0 bg-gradient-to-br from-green-600/20 to-emerald-600/20 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            <div className="relative h-full bg-gray-900/40 backdrop-blur-xl border border-white/10 rounded-2xl p-8 flex flex-col items-center justify-center text-center hover:border-green-500/50 transition-colors duration-300 group-hover:transform group-hover:-translate-y-2">
              <div className="p-4 rounded-full bg-green-500/10 mb-4 group-hover:bg-green-500/20 transition-colors">
                <svg className="w-8 h-8 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 9v3m0 0v3m0-3h3m-3 0H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
              </div>
              <h3 className="text-2xl font-semibold text-white mb-2">Create Room</h3>
              <p className="text-gray-400 text-sm">Start a new session as an Admin</p>
            </div>
          </Link>

          {/* Admin Login Card */}
          <Link href="/admin/login" className="group relative feature-card w-full md:w-80 h-64">
            <div className="absolute inset-0 bg-gradient-to-br from-yellow-600/20 to-orange-600/20 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            <div className="relative h-full bg-gray-900/40 backdrop-blur-xl border border-white/10 rounded-2xl p-8 flex flex-col items-center justify-center text-center hover:border-yellow-500/50 transition-colors duration-300 group-hover:transform group-hover:-translate-y-2">
              <div className="p-4 rounded-full bg-yellow-500/10 mb-4 group-hover:bg-yellow-500/20 transition-colors">
                <svg className="w-8 h-8 text-yellow-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"></path></svg>
              </div>
              <h3 className="text-2xl font-semibold text-white mb-2">Admin Access</h3>
              <p className="text-gray-400 text-sm">Secure login for administrators</p>
            </div>
          </Link>

        </div>
      </div>
    </main>
  );
}