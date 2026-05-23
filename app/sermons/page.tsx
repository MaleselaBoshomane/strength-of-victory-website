export default function SermonsPage() {
  return (
    <main className="min-h-screen bg-black text-white pt-32 px-6 pb-24">

      <div className="max-w-7xl mx-auto">

        {/* HEADER */}

        <div className="text-center mb-24">

          <p className="text-yellow-500 uppercase tracking-[0.4em] font-semibold mb-4">
            Messages Of Hope
          </p>

          <h1 className="text-5xl md:text-7xl font-extrabold mb-8">
            Sermons
          </h1>

          <p className="text-gray-400 text-lg md:text-2xl max-w-4xl mx-auto leading-relaxed">
            Be inspired, strengthened and transformed through powerful teachings
            of faith, prayer and victory in Christ.
          </p>

        </div>

        {/* SERMON CARDS */}

        <div className="grid md:grid-cols-3 gap-10">

          {/* CARD 1 */}

          <div className="bg-zinc-900 border border-white/10 rounded-[2rem] overflow-hidden shadow-2xl hover:-translate-y-2 transition duration-300">

            <img
              src="/Faithover.png"
              alt="Faith Over Fear"
              className="w-full aspect-[9/16] object-cover"
            />

            <div className="p-8">

              <h2 className="text-3xl font-bold mb-4 text-yellow-500">
                Faith Over Fear
              </h2>

              <p className="text-gray-300 leading-8 mb-8">
                Learn how to trust God in every situation and walk boldly by faith
                no matter the challenges.
              </p>

              <button className="border border-yellow-500 hover:bg-yellow-500 hover:text-black px-8 py-4 rounded-2xl font-semibold transition duration-300">
                Watch Sermon
              </button>

            </div>

          </div>

          {/* CARD 2 */}

          <div className="bg-zinc-900 border border-white/10 rounded-[2rem] overflow-hidden shadow-2xl hover:-translate-y-2 transition duration-300">

            <img
              src="/victory.png"
              alt="Walking In Victory"
              className="w-full aspect-[9/16] object-cover"
            />

            <div className="p-8">

              <h2 className="text-3xl font-bold mb-4 text-yellow-500">
                Walking In Victory
              </h2>

              <p className="text-gray-300 mb-3 text-lg">
                Sunday Service
              </p>

              <p className="text-gray-300 leading-8 mb-8">
                Discover the power of living victoriously through Jesus Christ
                and overcoming every obstacle through faith.
              </p>

              <button className="border border-yellow-500 hover:bg-yellow-500 hover:text-black px-8 py-4 rounded-2xl font-semibold transition duration-300">
                Watch Sermon
              </button>

            </div>

          </div>

          {/* CARD 3 */}

          <div className="bg-zinc-900 border border-white/10 rounded-[2rem] overflow-hidden shadow-2xl hover:-translate-y-2 transition duration-300">

            <img
              src="/power.png"
              alt="Power Of Prayer"
              className="w-full aspect-[9/16] object-cover"
            />

            <div className="p-8">

              <h2 className="text-3xl font-bold mb-4 text-yellow-500">
                Power Of Prayer
              </h2>

              <p className="text-gray-300 mb-3 text-lg">
                Prayer Night
              </p>

              <p className="text-gray-300 leading-8 mb-8">
                Understanding the importance of prayer and how it changes lives
                through the power of God.
              </p>

              <button className="border border-yellow-500 hover:bg-yellow-500 hover:text-black px-8 py-4 rounded-2xl font-semibold transition duration-300">
                Watch Sermon
              </button>

            </div>

          </div>

        </div>

      </div>

    </main>
  );
}