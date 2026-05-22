export default function AboutPage() {
  return (
    <main className="min-h-screen pt-32 px-6 bg-black text-white">

      <div className="max-w-7xl mx-auto">

        {/* HEADER */}

        <div className="text-center mb-20">

          <p className="text-yellow-500 uppercase tracking-[0.3em] font-semibold mb-4">
            About Us
          </p>

          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            About Our Church
          </h1>

          <p className="text-gray-400 text-lg max-w-3xl mx-auto leading-8">
            A ministry committed to restoring lives, empowering believers,
            and advancing the Kingdom of God through faith, worship,
            discipleship and outreach.
          </p>

        </div>

        {/* CONTENT */}

        <div className="grid md:grid-cols-2 gap-16 items-center">

          {/* TEXT SIDE */}

          <div>

            <div className="bg-zinc-900 border border-white/10 rounded-[2rem] p-10 shadow-2xl">

              <h2 className="text-3xl font-bold mb-8 text-yellow-500">
                Who We Are
              </h2>

              <p className="text-lg text-gray-300 leading-8 mb-6">
                Strength of Victory International Ministries is a home for all
                people — rich and poor, young and old, widows, orphans and the
                community as a whole.
              </p>

              <p className="text-lg text-gray-300 leading-8 mb-6">
                We believe in restoring hope, raising disciples and reaching the
                world through evangelism and the Word of God.
              </p>

              <p className="text-lg text-gray-300 leading-8">
                Our mission is to train both the young and old for outreach
                missions while helping people discover their purpose and calling
                in Christ.
              </p>

            </div>

          </div>

          {/* IMAGE SIDE */}

          <div>

            <img
              src="/background.png"
              alt="Church"
              className="rounded-[2rem] shadow-2xl w-full h-auto object-cover border border-white/10"
            />

          </div>

        </div>

        {/* VALUES SECTION */}

        <div className="grid md:grid-cols-3 gap-8 mt-24">

          <div className="bg-zinc-900 border border-white/10 rounded-[2rem] p-8 shadow-xl">
            <h3 className="text-2xl font-bold text-yellow-500 mb-4">
              Vision
            </h3>

            <p className="text-gray-300 leading-7">
              To raise a generation filled with faith, purpose and spiritual
              victory through Jesus Christ.
            </p>
          </div>

          <div className="bg-zinc-900 border border-white/10 rounded-[2rem] p-8 shadow-xl">
            <h3 className="text-2xl font-bold text-yellow-500 mb-4">
              Mission
            </h3>

            <p className="text-gray-300 leading-7">
              To preach the Gospel, disciple believers and transform communities
              through prayer, worship and outreach.
            </p>
          </div>

          <div className="bg-zinc-900 border border-white/10 rounded-[2rem] p-8 shadow-xl">
            <h3 className="text-2xl font-bold text-yellow-500 mb-4">
              Values
            </h3>

            <p className="text-gray-300 leading-7">
              Faith, love, holiness, unity, compassion and dedication to the
              Word of God.
            </p>
          </div>

        </div>

      </div>

    </main>
  );
}