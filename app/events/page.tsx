export default function EventsPage() {
  return (
    <main className="min-h-screen bg-white text-gray-800 pt-32 px-6">
      <div className="max-w-7xl mx-auto">

        <h1 className="text-5xl font-bold text-center mb-16">
          Upcoming Events
        </h1>

        <div className="grid md:grid-cols-3 gap-10">

          <div className="bg-gray-100 rounded-[2rem] p-8 shadow-xl">
            <h2 className="text-2xl font-bold mb-4">
              Sunday Worship
            </h2>

            <p className="text-gray-700 mb-3">
              Every Sunday
            </p>

            <p className="text-gray-700">
              Join us for powerful worship and the Word of God.
            </p>
          </div>

          <div className="bg-gray-100 rounded-[2rem] p-8 shadow-xl">
            <h2 className="text-2xl font-bold mb-4">
              Youth Conference
            </h2>

            <p className="text-gray-700 mb-3">
              June 2026
            </p>

            <p className="text-gray-700">
              Empowering the next generation through Christ.
            </p>
          </div>

          <div className="bg-gray-100 rounded-[2rem] p-8 shadow-xl">
            <h2 className="text-2xl font-bold mb-4">
              Prayer Night
            </h2>

            <p className="text-gray-700 mb-3">
              Friday 7PM
            </p>

            <p className="text-gray-700">
              A night of prayer, worship and breakthrough.
            </p>
          </div>

        </div>

      </div>
    </main>
  );
}