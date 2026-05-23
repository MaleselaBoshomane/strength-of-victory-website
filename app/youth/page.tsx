export default function YouthPage() {

  const youthImages = [
    "/youth2.jpeg",
    "/youth9.jpeg",
    "/youth8.jpeg",
    "/youth7.jpeg",
    "/youth6.jpeg",
    "/youth5.jpeg",
  ];

  return (
    <main className="min-h-screen bg-black text-yellow-500 pt-32 px-6">

      <div className="max-w-7xl mx-auto">

        {/* Heading */}
        <div className="text-center mb-16">
          <h1 className="text-7xl font-bold mb-4">
            Youth Ministry
          </h1>

          <p className="text-lg text-white max-w-2xl mx-auto">
            Raising a generation that walks in faith, purpose and power.
          </p>
        </div>

        {/* Main Section */}
        <div className="grid lg:grid-cols-2 gap-14 items-center mb-24">

          <img
            src="/Youth.png"
            alt="Youth"
            className="rounded-[2rem] shadow-2xl w-full h-[500px] object-cover"
          />

          <div className="space-y-6">

            <p className="text-lg leading-8 text-white">
              S.O.V Youth Ministries consists of young people who continually
              strive to pursue a righteous and transparent lifestyle.
            </p>

            <p className="text-lg leading-8 text-white">
              We empower young people through worship, prayer, leadership,
              outreach and discipleship.
            </p>

          </div>

        </div>





        {/* Youth Gallery */}
        <section>

          <div className="text-center mb-12">
            <h2 className="text-5xl font-bold mb-3">
              Youth Gallery
            </h2>

            <p className="text-white">
              Moments from our youth services, worship and fellowship.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">

            {youthImages.map((image, index) => (
              <div
                key={index}
                className="overflow-hidden rounded-3xl shadow-xl group"
              >
                <img
                  src={image}
                  alt={`Youth ${index + 1}`}
                  className="w-full h-[300px] object-cover group-hover:scale-110 transition duration-700"
                />
              </div>
            ))}

          </div>

        </section>

      </div>

    </main>
  );
}