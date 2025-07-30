"use client"

import Image from "next/image"
import { ChevronDown } from "lucide-react"
import { useState, useEffect } from "react"
import Services from "@/components/Services"
import About from "@/components/About"
import Standardized from "@/components/Standardized"
import Footer from "@/components/Footer"

export default function HomePage() {
  const [currentSlide, setCurrentSlide] = useState(0)
  const slides = [
    { image: "https://aslegal.sk/wp-content/uploads/2017/03/slider1.png", alt: "Legal office interior" },
    { image: "https://aslegal.sk/wp-content/uploads/2017/03/slider2.png", alt: "Fountain pen on documents" },
    { image: "https://aslegal.sk/wp-content/uploads/2017/03/slider3.png", alt: "Law office meeting room" },
  ]

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length)
    }, 5000)
    return () => clearInterval(timer)
  }, [slides.length])

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
<header className="relative bg-[#3a3b3e] text-white overflow-hidden">
      {/* Diagonal white shape */}
      <div className="absolute inset-y-0 left-1/4 w-[120px] bg-white transform -skew-x-12 hidden md:block"></div>

      <div className="relative z-10 container mx-auto px-4 py-6">
        <div className="flex items-center justify-between">
          {/* Logo Section */}
      <div className="flex items-center space-x-4">
  <div className="w-8 h-8 rounded-full overflow-hidden border border-white shadow-md">
    <img
      src="/unnamed.jpg"
      alt="AS Legal Logo"
      className="w-full h-full object-cover"
    />
  </div>

  <div className="flex flex-col text-white">
    <span className="uppercase text-xs font-semibold tracking-widest">
      Mgr. František Lipka
    </span>
    <span className="text-[11px] font-light tracking-wide">advokát</span>
  </div>
</div>


          {/* Centered Navigation */}
          <nav className="hidden md:flex items-center space-x-10 absolute left-1/2 transform -translate-x-1/2">
            <div className="flex items-center space-x-1 cursor-pointer hover:text-cyan-300 transition-colors">
              <span className="text-sm font-light tracking-wide">SLUŽBY</span>
              <ChevronDown className="w-4 h-4" />
            </div>
            <div className="flex items-center space-x-1 cursor-pointer text-cyan-400 hover:text-cyan-300 transition-colors">
              <span className="text-sm font-light tracking-wide">O NÁS</span>
              <ChevronDown className="w-4 h-4" />
            </div>
            <div className="cursor-pointer hover:text-cyan-300 transition-colors">
              <span className="text-sm font-light tracking-wide">KONTAKT</span>
            </div>
          </nav>

          {/* Mobile Button */}
          <button className="md:hidden text-white z-20">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </div>
    </header>
      {/* Hero Slider Section */}
<section className="relative h-[300px] md:h-[390px] lg:h-[420px] overflow-hidden">
  {/* ===== Slider background ===== */}
  <div className="absolute inset-0">
    {slides.map((s, i) => (
      <div
        key={i}
        className={`absolute inset-0 transition-opacity duration-700 ease-in-out ${
          i === currentSlide ? "opacity-100" : "opacity-0"
        }`}
        aria-hidden={i !== currentSlide}
      >
        {/* Use next/image if available */}
        <img
          src={s.image}
          alt={s.alt}
          className="w-full h-full object-cover"
        />
        {/* Subtle white gradient to match reference */}
        <div className="absolute inset-0 bg-gradient-to-r from-white/70 via-white/40 to-white/20" />
      </div>
    ))}
  </div>

  {/* ===== Optional left blueprint overlay (under cards) ===== */}
  

  {/* ===== Foreground content (cards) ===== */}
  <div className="relative z-10 container mx-auto h-full px-4">
    <div className="h-full flex items-center justify-between gap-6">
      {/* Left purple title card */}
      <div className="bg-purple-800/80 -translate-y-14 text-white shadow-lg px-6 py-6 md:px-8 md:py-8 max-w-sm">
        <h2 className="text-2xl md:text-3xl font-semibold mb-2">Starostlivosť</h2>
        <p className="text-lg md:text-xl font-light leading-snug">
          Vaše záujmy v<br />centre pozornosti
        </p>
      </div>

      {/* Spacer on small screens so right card doesn’t crowd */}
      <div className="flex-1 hidden md:block" />

      {/* Right purple paragraph card */}
    <div className="bg-purple-800/80 translate-y-10 md:translate-y-24 text-white shadow-lg px-4 py-4 md:px-8 md:py-8 max-w-[170px] md:max-w-[300px] text-[8px] md:text-sm leading-relaxed font-light">
  Advokátska kancelária AS LEGAL bola založená v roku 2008 ako spoločný projekt
  advokátov, ktorí zlučili svoju dlhoročnú prax, aby klientom poskytli právny servis
  na novej úrovni. Filozofiou kancelárie sa od začiatku .
</div>

    </div>
  </div>

  {/* ===== Dots navigation ===== */}
  <div className="absolute bottom-4 md:bottom-6 left-1/2 -translate-x-1/2 z-10 flex items-center gap-3">
    {slides.map((_, i) => (
      <button
        key={i}
        onClick={() => setCurrentSlide(i)}
        className={`w-3 h-3 rounded-full transition-all ${
          i === currentSlide ? "bg-cyan-400 scale-110" : "bg-black/60 hover:bg-black/80"
        }`}
        aria-label={`Go to slide ${i + 1}`}
      />
    ))}
  </div>
</section>


      {/* Services Section */}
     <Services />

      {/* About Section */}
    <About/>

      {/* Standardized Services Section */}
     <Standardized/>

      {/* Footer */}
     <Footer/>
    </div>
  )
}
