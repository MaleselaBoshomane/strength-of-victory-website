export default function YouthPage() {
  return (
    <main className="min-h-screen bg-white text-gray-800 pt-32 px-6">
      <div className="max-w-7xl mx-auto">

        <h1 className="text-5xl font-bold mb-12 text-center">
          Youth Ministry
        </h1>

        <div className="grid md:grid-cols-2 gap-14 items-center">

          <img
            src="/Youth.png"
            alt="Youth"
            className="rounded-[2rem] shadow-2xl w-full h-[500px] object-cover"
          />

          <div>

            <p className="text-lg leading-8 text-gray-700 mb-6">
              S.O.V Youth Ministries consists of young people who continually
              strive to pursue a righteous and transparent lifestyle.
            </p>

            <p className="text-lg leading-8 text-gray-700">
              We empower young people through worship, prayer, leadership,
              outreach and discipleship.
            </p>

          </div>

        </div>

      </div>
    </main>
  );
}