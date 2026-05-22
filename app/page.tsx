"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import {
  Menu,
  X,
  ChevronDown,
} from "lucide-react";
import { motion } from "framer-motion";

export default function StrengthOfVictoryChurchWebsite() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [ministriesOpen, setMinistriesOpen] = useState(false);

  const handlePrayerSubmit = (
    e: React.FormEvent<HTMLFormElement>
  ) => {
    e.preventDefault();

    alert(
      "Prayer request submitted successfully. We are praying with you."
    );
  };

  return (
    <main className="min-h-screen bg-black text-white overflow-x-hidden">

      {/* ========================= NAVIGATION ========================= */}

      <nav className="fixed top-0 left-0 w-full bg-black/90 backdrop-blur-md z-50 border-b border-yellow-500/20">

        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">

          {/* LOGO */}

          <div className="flex items-center gap-4">

            <Image
              src="/logo.png"
              alt="Church Logo"
              width={46}
              height={46}
              className="object-contain"
              priority
            />

            <h1 className="text-white text-lg md:text-2xl font-bold">
              Strength of Victory Ministries
            </h1>

          </div>

          {/* DESKTOP MENU */}

          <div className="hidden lg:flex gap-8 text-white font-medium items-center">

            <Link
              href="/"
              className="hover:text-yellow-400 transition"
            >
              Home
            </Link>

            <Link
              href="/about"
              className="hover:text-yellow-400 transition"
            >
              About
            </Link>

            {/* DROPDOWN */}

            <div className="relative group">

              <button className="flex items-center gap-2 hover:text-yellow-400 transition">
                Ministries
                <ChevronDown size={18} />
              </button>

              <div className="absolute left-0 top-10 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 flex flex-col bg-black/95 text-white rounded-xl shadow-2xl min-w-[260px] py-4 overflow-hidden z-50 border border-white/10">

                <Link
                  href="/youth"
                  className="px-6 py-3 hover:bg-yellow-500 hover:text-black transition"
                >
                  Youth Ministry
                </Link>

                <Link
                  href="/youth/mother-daughter"
                  className="px-6 py-3 hover:bg-yellow-500 hover:text-black transition"
                >
                  Mother & Daughter
                </Link>
               <Link
                  href="/youth/mother-daughter/father-sons"
                  className="px-6 py-3 hover:bg-yellow-500 hover:text-black transition"
                >
                  Father & Sons
                </Link>
                <Link
                  href="/youth/mother-daughter/father-sons/super-kids"
                  className="px-6 py-3 hover:bg-yellow-500 hover:text-black transition"
                >
                  Super Kids
                </Link> 

              </div>

            </div>

            <Link
              href="/events"
              className="hover:text-yellow-400 transition"
            >
              Events
            </Link>

            <Link
              href="/sermons"
              className="hover:text-yellow-400 transition"
            >
              Sermons
            </Link>

            <Link
              href="/prayer"
              className="hover:text-yellow-400 transition"
            >
              Prayer
            </Link>

            <Link
              href="/giving"
              className="hover:text-yellow-400 transition"
            >
              Giving
            </Link>

            <Link
              href="/contact"
              className="hover:text-yellow-400 transition"
            >
              Contact
            </Link>

          </div>

          {/* MOBILE BUTTON */}

          <button
            className="lg:hidden text-white"
            onClick={() => setMobileOpen(!mobileOpen)}
          >
            {mobileOpen ? <X size={32} /> : <Menu size={32} />}
          </button>

        </div>

        {/* MOBILE MENU */}

        {mobileOpen && (

          <div className="lg:hidden bg-black border-t border-white/10 px-6 py-6 flex flex-col gap-6 text-white">

            <Link href="/">Home</Link>

            <Link href="/about">About</Link>

            {/* MOBILE DROPDOWN */}

            <button
              onClick={() =>
                setMinistriesOpen(!ministriesOpen)
              }
              className="text-left flex items-center gap-2"
            >
              Ministries
              <ChevronDown size={18} />
            </button>

            {ministriesOpen && (

              <div className="flex flex-col gap-4 pl-4 text-gray-300">

                <Link href="/youth">
                  Youth Ministry
                </Link>

                <Link href="/youth/mother-daughter">
                  Mother & Daughter
                </Link>

                <Link href="/youth/mother-daughter/father-sons">
                  Father & Sons
                </Link>
                
                <Link href="/youth/mother-daughter/father-sons/super-kids">
                  Super Kids
                </Link>

              </div>

            )}

            <Link href="/events">Events</Link>

            <Link href="/sermons">Sermons</Link>

            <Link href="/prayer">Prayer</Link>

            <Link href="/giving">Giving</Link>

            <Link href="/contact">Contact</Link>

          </div>

        )}

      </nav>

      {/* ========================= HERO ========================= */}

    <section
  className="relative min-h-screen flex items-center justify-center text-center overflow-hidden bg-cover bg-center"
  style={{
    backgroundImage:
      "linear-gradient(rgba(0,0,0,0.15), rgba(0,0,0,0.15)), url('/hero-bg.png')",

  }}

      >

        <div className="absolute inset-0 bg-black/80"></div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="relative z-10 px-6 max-w-5xl"
        >

          <Image
            src="/logo.png"
            alt="Church Logo"
            width={120}
            height={120}
            className="mx-auto mb-8"
            priority
          />

          <p className="text-yellow-400 uppercase tracking-[0.4em] mb-4">

            Standing In The Gap Ezekiel 22:30

          </p>

          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">

            Strength of Victory International Ministries

          </h1>

          <p className="text-xl md:text-2xl text-gray-200 leading-8 mb-10">

            A place of worship, restoration, hope and transformation
            through the Word of God and the power of Jesus Christ.

          </p>

          <p className="text-3xl md:text-5xl font-bold text-yellow-500 mb-6 leading-tight">

            Welcome

          </p>

        </motion.div>

      </section>

      {/* ========================= FOOTER ========================= */}

      <footer className="bg-black border-t border-white/10 text-gray-500 py-10 text-center px-6">

        <p>

          © 2026 Strength of Victory International Ministries.
          All rights reserved.

        </p>

      </footer>

    </main>
  );
}