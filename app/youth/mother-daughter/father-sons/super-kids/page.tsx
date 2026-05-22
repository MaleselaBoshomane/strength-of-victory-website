export default function SuperKidsPage() {
  return (
    <main className="min-h-screen pt-32 px-6 bg-gradient-to-b from-white to-yellow-50">
      <div className="max-w-7xl mx-auto">

        {/* Heading */}
        <div className="text-center mb-16">
          <p className="text-yellow-600 uppercase tracking-[0.3em] font-semibold mb-4">
            Super Kids Ministry
          </p>

          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 leading-tight">
            Raising Super Kids For Christ
          </h1>

          <div className="w-32 h-1 bg-yellow-500 mx-auto mt-6 rounded-full"></div>
        </div>

        {/* Content */}
        <div className="grid md:grid-cols-2 gap-14 items-center">

          {/* Image */}
          <div className="relative overflow-hidden rounded-[2rem] shadow-2xl group">
            <img
              src="/superkids.png"
              alt="Super Kids Ministry"
              className="w-full h-[600px] object-cover group-hover:scale-105 transition duration-700"
            />

            {/* Overlay */}
            <div className="absolute inset-0 bg-black/10"></div>
          </div>

          {/* Text Content */}
          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              Teaching Children To Love God
            </h2>

            <p className="text-lg leading-8 text-gray-700 mb-6">
              S.O.V Super Kids Ministry is dedicated to helping children grow
              in faith, confidence, love, and understanding of God’s Word in a
              fun and exciting environment.
            </p>

            <p className="text-lg leading-8 text-gray-700 mb-8">
              We nurture young hearts through Bible teaching, worship,
              friendship, prayer, and activities that inspire children to walk
              boldly with Jesus from an early age.
            </p>

            {/* Features */}
            <div className="space-y-4 mb-10">

              <div className="flex items-center gap-4">
                <div className="w-4 h-4 bg-yellow-500 rounded-full"></div>
                <p className="text-gray-700 font-medium">
                  Bible Lessons & Worship
                </p>
              </div>

              <div className="flex items-center gap-4">
                <div className="w-4 h-4 bg-yellow-500 rounded-full"></div>
                <p className="text-gray-700 font-medium">
                  Fun Learning Activities
                </p>
              </div>

              <div className="flex items-center gap-4">
                <div className="w-4 h-4 bg-yellow-500 rounded-full"></div>
                <p className="text-gray-700 font-medium">
                  Friendship & Spiritual Growth
                </p>
              </div>

            </div>

            {/* Button */}
            <button className="bg-yellow-500 hover:bg-yellow-600 text-white px-8 py-4 rounded-full font-semibold shadow-xl transition duration-300 hover:scale-105">
              Join Super Kids
            </button>

          </div>
        </div>
      </div>
    </main>
  );
}