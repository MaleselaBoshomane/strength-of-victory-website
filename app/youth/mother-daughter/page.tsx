export default function MotherDaughterPage() {
  return (
    <main className="min-h-screen pt-32 px-6 bg-white">

      <div className="max-w-7xl mx-auto">

        <p className="text-yellow-600 uppercase tracking-[0.3em] font-semibold mb-4">
          Mother & Daughter Ministry
        </p>

        <h1 className="text-5xl font-bold mb-12 text-gray-900">
          Building Strong Mothers & Daughters In Christ
        </h1>

        <div className="grid md:grid-cols-2 gap-14 items-center">

          <img
            src="/mother.png"
            alt="Mother and Daughter"
            className="rounded-[2rem] shadow-2xl w-full h-[550px] object-cover"
          />

          <div>

            <p className="text-lg leading-8 text-gray-700 mb-6">
              S.O.V Mother & Daughter Ministry is a place where mothers and
              daughters grow together in faith, love, wisdom and purpose
              through the Word of God.
            </p>

            <p className="text-lg leading-8 text-gray-700">
              We encourage strong family bonds, prayerful living and
              Christ-centred relationships.
            </p>

          </div>

        </div>

      </div>

    </main>
  );
}