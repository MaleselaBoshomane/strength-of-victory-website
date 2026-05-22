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
              href="/donations"
              className="hover:text-yellow-400 transition"
            >
              Donations
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

              </div>

            )}

            <Link href="/events">Events</Link>

            <Link href="/sermons">Sermons</Link>

            <Link href="/prayer">Prayer</Link>

            <Link href="/donations">Donations</Link>

            <Link href="/contact">Contact</Link>

          </div>

        )}

      </nav>

      {/* ========================= HERO ========================= */}

      <section
       className="relative min-h-screen flex items-center justify-center text-center overflow-hidden"
        style={{
    backgroundImage:
      "linear-gradient(rgba(0,0,0,0.65), rgba(0,0,0,0.65)), url('/hero-bg.png')",
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
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

            Standing In The Gap

          </p>

          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">

            Strength of Victory International Ministries

          </h1>

          <p className="text-xl md:text-2xl text-gray-200 leading-8 mb-10">

            A place of worship, restoration, hope and transformation
            through the Word of God and the power of Jesus Christ.

          </p>

          <div className="flex flex-col sm:flex-row gap-5 justify-center">

            <button className="bg-yellow-500 hover:bg-yellow-600 text-black px-8 py-4 rounded-2xl font-semibold transition">
              Join Us Sunday
            </button>

            <button className="border border-yellow-500 hover:bg-yellow-500 hover:text-black px-8 py-4 rounded-2xl font-semibold transition">
              Watch Sermons
            </button>

          </div>

        </motion.div>

      </section>

      {/* ========================= PRAYER SECTION ========================= */}

      <section className="bg-zinc-950 py-24 px-6 border-t border-white/10">

        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center">

          <Image
            src="/prayer.png"
            alt="Prayer"
            width={700}
            height={700}
            className="rounded-[2rem] shadow-2xl w-full h-auto object-cover"
          />

          <div>

            <p className="text-yellow-500 uppercase tracking-[0.3em] mb-4">

              Prayer Requests

            </p>

            <h2 className="text-5xl font-bold mb-8 text-white">

              We Are Standing In Agreement With You

            </h2>

            <form
              onSubmit={handlePrayerSubmit}
              className="bg-zinc-900 rounded-3xl p-8 shadow-lg space-y-5 border border-white/10"
            >

              <input
                type="text"
                placeholder="Full Name"
                required
                className="w-full p-4 rounded-2xl bg-black border border-white/10 text-white placeholder:text-gray-500 outline-none focus:border-yellow-500"
              />

              <input
                type="email"
                placeholder="Email Address"
                required
                className="w-full p-4 rounded-2xl bg-black border border-white/10 text-white placeholder:text-gray-500 outline-none focus:border-yellow-500"
              />

              <textarea
                rows={5}
                placeholder="Prayer Request"
                required
                className="w-full p-4 rounded-2xl bg-black border border-white/10 text-white placeholder:text-gray-500 outline-none focus:border-yellow-500"
              />

              <button
                type="submit"
                className="bg-yellow-500 hover:bg-yellow-600 text-black w-full py-4 rounded-2xl font-semibold transition"
              >

                Submit Prayer Request

              </button>

            </form>

          </div>

        </div>

      </section>

      {/* ========================= GIVING ========================= */}

      <section className="bg-black py-24 px-6 border-t border-white/10">

        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center">

          <div>

            <p className="text-yellow-500 uppercase tracking-[0.3em] mb-4">
              Giving
            </p>

            <h2 className="text-5xl font-bold mb-8">
              Make A Difference Today
            </h2>

            <div className="bg-zinc-900 rounded-[2rem] shadow-2xl p-10 border border-white/10">

              <h3 className="text-3xl font-bold mb-8">
                Banking Details
              </h3>

              <div className="space-y-4 text-lg text-gray-300">

                <p>
                  <strong>Account Holder:</strong>
                  {" "}
                  Strength of Victory
                </p>

                <p>
                  <strong>Account Number:</strong>
                  {" "}
                  9142724028
                </p>

                <p>
                  <strong>Bank:</strong>
                  {" "}
                  Absa Bank
                </p>

                <p>
                  <strong>Branch Code:</strong>
                  {" "}
                  632005
                </p>

              </div>

            </div>

          </div>

          <Image
            src="/seed.png"
            alt="Donations"
            width={700}
            height={700}
            className="rounded-[2rem] shadow-2xl w-full h-auto object-cover"
          />

        </div>

      </section>

      {/* ========================= CONTACT ========================= */}

      <section className="bg-zinc-950 text-white py-24 px-6 border-t border-white/10">

        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center">

          <div>

            <p className="text-yellow-500 uppercase tracking-[0.3em] mb-4">

              Contact Us

            </p>

            <h2 className="text-5xl font-bold mb-8">

              We Would Love To Hear From You

            </h2>

            <div className="space-y-6 text-lg text-gray-300">

              <p>
                📍 Shoshanguve Block XX, Gauteng
              </p>

              <p>
                📞 +27 79 964 5579
              </p>

              <p>
                ✉️ info@strengthofvictory.org.za
              </p>

            </div>

            {/* SOCIAL MEDIA */}

            <div className="mt-10 space-y-3 text-gray-300">

              <p>
                Facebook: Strength of Victory Ministries
              </p>

              <p>
                Instagram: @strengthofvictory
              </p>

              <p>
                TikTok: @strengthofvictory
              </p>

            </div>

          </div>

          <Image
            src="/logo.png"
            alt="Church Logo"
            width={400}
            height={400}
            className="mx-auto"
          />

        </div>

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