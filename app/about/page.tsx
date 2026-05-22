export default function AboutPage() {
  return (
    <main className="min-h-screen bg-black text-white pt-32 px-6 pb-24">

      <div className="max-w-7xl mx-auto">

        {/* ================= HEADER ================= */}

        <div className="text-center mb-24">

          <p className="text-yellow-500 uppercase tracking-[0.4em] font-semibold mb-4">
            About Us
          </p>

          <h1 className="text-5xl md:text-7xl font-extrabold mb-8 leading-tight">
            About Our Church
          </h1>

          <p className="text-gray-400 text-lg md:text-2xl max-w-4xl mx-auto leading-relaxed">
            A ministry committed to restoring lives, empowering believers,
            and advancing the Kingdom of God through faith, worship,
            discipleship and outreach.
          </p>

        </div>

        {/* ================= CONTENT ================= */}

        <div className="grid lg:grid-cols-2 gap-16 items-center">

          {/* TEXT SIDE */}

          <div>

            <div className="bg-zinc-900/80 backdrop-blur-sm border border-white/10 rounded-[2rem] p-10 md:p-14 shadow-2xl">

              <h2 className="text-4xl font-bold mb-8 text-yellow-500">
                Who We Are
              </h2>

              <div className="space-y-6">

                <p className="text-lg text-gray-300 leading-9">
                  Strength of Victory International Ministries is a home for all
                  people — rich and poor, young and old, widows, orphans and
                  the community as a whole.
                </p>

                <p className="text-lg text-gray-300 leading-9">
                  We believe in restoring hope, raising disciples and reaching
                  the world through evangelism and the Word of God.
                </p>

                <p className="text-lg text-gray-300 leading-9">
                  Our mission is to train both the young and old for outreach
                  missions while helping people discover their purpose and
                  calling in Christ.
                </p>

              </div>

            </div>

          </div>

          {/* IMAGE SIDE */}

          <div className="relative group">

            <img
              src="/hero-bg.png"
              alt="Church"
              className="w-full h-[500px] md:h-[650px] object-cover rounded-[2rem] border border-white/10 shadow-2xl"
            />

            {/* OVERLAY */}

            <div className="absolute inset-0 bg-black/20 rounded-[2rem]"></div>

            {/* GLOW EFFECT */}

            <div className="absolute -inset-1 bg-yellow-500/10 blur-2xl rounded-[2rem] -z-10"></div>

          </div>

        </div>

        {/* ================= VALUES ================= */}

        <div className="grid md:grid-cols-3 gap-8 mt-28">

          {/* VISION */}

          <div className="bg-zinc-900 border border-white/10 rounded-[2rem] p-8 shadow-xl hover:border-yellow-500/30 transition duration-300">

            <h3 className="text-3xl font-bold text-yellow-500 mb-5">
              Vision
            </h3>

            <p className="text-gray-300 leading-8">
              To raise a generation filled with faith, purpose and spiritual
              victory through Jesus Christ.
            </p>

          </div>

          {/* MISSION */}

          <div className="bg-zinc-900 border border-white/10 rounded-[2rem] p-8 shadow-xl hover:border-yellow-500/30 transition duration-300">

            <h3 className="text-3xl font-bold text-yellow-500 mb-5">
              Mission
            </h3>

            <p className="text-gray-300 leading-8">
              To preach the Gospel, disciple believers and transform communities
              through prayer, worship and outreach.
            </p>

          </div>

          {/* VALUES */}

          <div className="bg-zinc-900 border border-white/10 rounded-[2rem] p-8 shadow-xl hover:border-yellow-500/30 transition duration-300">

            <h3 className="text-3xl font-bold text-yellow-500 mb-5">
              Values
            </h3>

            <p className="text-gray-300 leading-8">
              Faith, love, holiness, unity, compassion and dedication to the
              Word of God.
            </p>

          </div>

        </div>

        {/* ================= WEEKLY SERVICES ================= */}

        <div className="mt-28">

          <div className="text-center mb-16">

            <p className="text-yellow-500 uppercase tracking-[0.3em] font-semibold mb-4">
              Join Us
            </p>

            <h2 className="text-5xl font-bold mb-6">
              Weekly Services
            </h2>

            <div className="w-28 h-1 bg-yellow-500 mx-auto rounded-full"></div>

          </div>

          <div className="grid md:grid-cols-3 gap-8">

            {/* Sunday Service */}

            <div className="bg-zinc-900 border border-white/10 rounded-[2rem] p-8 shadow-xl hover:border-yellow-500/30 transition duration-300">

              <h3 className="text-3xl font-bold text-yellow-500 mb-4">
                Sunday Service
              </h3>

              <p className="text-gray-300 text-lg leading-8">
                Join us every Sunday for a powerful worship experience,
                prayer and the Word of God.
              </p>

              <div className="mt-6 text-yellow-400 font-semibold text-xl">
                09:00 AM
              </div>

            </div>

            {/* Bible Study */}

            <div className="bg-zinc-900 border border-white/10 rounded-[2rem] p-8 shadow-xl hover:border-yellow-500/30 transition duration-300">

              <h3 className="text-3xl font-bold text-yellow-500 mb-4">
                Bible Study
              </h3>

              <p className="text-gray-300 text-lg leading-8">
                Grow deeper in understanding God’s Word through teaching,
                discussion and fellowship.
              </p>

              <div className="mt-6 text-yellow-400 font-semibold text-xl">
                Wednesday — 06:00 PM
              </div>

            </div>

            {/* Prayer Service */}

            <div className="bg-zinc-900 border border-white/10 rounded-[2rem] p-8 shadow-xl hover:border-yellow-500/30 transition duration-300">

              <h3 className="text-3xl font-bold text-yellow-500 mb-4">
                Prayer Service
              </h3>

              <p className="text-gray-300 text-lg leading-8">
                Experience the power of prayer, worship and spiritual
                encouragement together.
              </p>

              <div className="mt-6 text-yellow-400 font-semibold text-xl">
                Friday — 06:00 PM
              </div>

            </div>

          </div>

        </div>

      </div>

    </main>
  );
}