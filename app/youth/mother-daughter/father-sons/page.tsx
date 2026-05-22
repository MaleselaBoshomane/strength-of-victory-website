export default function FatherSonPage() {
  return (
    <main className="min-h-screen pt-32 px-6 bg-white">
      <div className="max-w-7xl mx-auto">

        {/* Heading */}
        <p className="text-yellow-600 uppercase tracking-[0.3em] font-semibold mb-4">
          Father & Son Ministry
        </p>

        <h1 className="text-5xl md:text-6xl font-bold mb-12 text-gray-900 leading-tight">
          Raising Strong Fathers & Sons In Christ
        </h1>

        {/* Content */}
        <div className="grid md:grid-cols-2 gap-14 items-center">

          {/* Image */}
          <div className="overflow-hidden rounded-[2rem] shadow-2xl">
            <img
              src="/father-son.png"
              alt="Father and Son Ministry"
              className="w-full h-[550px] object-cover hover:scale-105 transition duration-500"
            />
          </div>

          {/* Text */}
          <div>
            <p className="text-lg leading-8 text-gray-700 mb-6">
              S.O.V Father & Son Ministry is dedicated to building godly men
              through faith, wisdom, leadership, and strong biblical values.
            </p>

            <p className="text-lg leading-8 text-gray-700 mb-6">
              We encourage fathers and sons to grow together spiritually,
              strengthen family relationships, and walk boldly in the purpose
              God has prepared for them.
            </p>

            <div className="mt-8">
              <button className="bg-yellow-500 hover:bg-yellow-600 text-white px-8 py-4 rounded-full font-semibold transition duration-300 shadow-lg">
                Join The Ministry
              </button>
            </div>
          </div>

        </div>
      </div>
    </main>
  );
}