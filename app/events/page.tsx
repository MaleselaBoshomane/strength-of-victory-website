export default function EventsPage() {
  return (
    <main className="min-h-screen bg-black text-yellow-500 pt-32 px-6">
      <div className="max-w-7xl mx-auto">

        <h1 className="text-5xl font-bold text-center mb-16">
          Upcoming Events
        </h1>

        <div className="grid md:grid-cols-3 gap-10">

          <div className="bg-gray-500 rounded-[2rem] p-8 shadow-xl">
            <h2 className="text-2xl font-bold mb-4">
              Sunday Worship
            </h2>

            <p className="text-white
             mb-3">
              Every Sunday
            </p>

            <p className="text-white">
              Join us for powerful worship and the Word of God.
            </p>
          </div>

          <div className="bg-gray-500 rounded-[2rem] p-8 shadow-xl">
            <h2 className="text-2xl font-bold mb-4">
              Thanksgiving Service
            </h2>

            <p className="text-white mb-3">
              October 2026
            </p>

            <p className="text-white">
              Thanking God for his goodness.
            </p>
          </div>

          <div className="bg-gray-500 rounded-[2rem] p-8 shadow-xl">
            <h2 className="text-2xl font-bold mb-4">
              Worship Night
            </h2>

            <p className="text-white mb-3">
              30 August 2026
            </p>

            <p className="text-white">
              A night of prayer, worship and breakthrough.
            </p>
          </div>

        </div>

      </div>
    </main>
  );
}