export default function SermonsPage() {
  return (
    <main className="min-h-screen bg-white text-gray-800 pt-32 px-6">
      <div className="max-w-7xl mx-auto">

        <h1 className="text-5xl font-bold text-center mb-16">
          Sermons
        </h1>

        <div className="grid md:grid-cols-3 gap-10">

          <div className="bg-gray-100 rounded-[2rem] p-8 shadow-xl">
            <h2 className="text-2xl font-bold mb-4">
              Faith Over Fear
            </h2>

            <p className="text-gray-700 mb-3">
              Pastor Malesela
            </p>

            <p className="text-gray-700">
              Learn how to trust God in every situation.
            </p>
          </div>

          <div className="bg-gray-100 rounded-[2rem] p-8 shadow-xl">
            <h2 className="text-2xl font-bold mb-4">
              Walking In Victory
            </h2>

            <p className="text-gray-700 mb-3">
              Sunday Service
            </p>

            <p className="text-gray-700">
              Discover the power of living through Christ.
            </p>
          </div>

          <div className="bg-gray-100 rounded-[2rem] p-8 shadow-xl">
            <h2 className="text-2xl font-bold mb-4">
              Power Of Prayer
            </h2>

            <p className="text-gray-700 mb-3">
              Prayer Night
            </p>

            <p className="text-gray-700">
              Understanding the importance of prayer and faith.
            </p>
          </div>

        </div>

      </div>
    </main>
  );
}