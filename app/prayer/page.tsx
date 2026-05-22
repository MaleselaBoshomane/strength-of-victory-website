export default function PrayerPage() {
  return (
    <main className="min-h-screen bg-gray-100 text-gray-800 pt-32 px-6">

      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center">

        <img
          src="/Prayer.png"
          alt="Prayer"
          className="rounded-[2rem] shadow-2xl w-full h-[500px] object-cover"
        />

        <div>

          <p className="text-yellow-600 uppercase tracking-[0.3em] mb-4">
            Prayer Requests
          </p>

          <h1 className="text-5xl font-bold mb-8">
            We Are Standing In Agreement With You
          </h1>

          <form
            action="mailto:bosho.mf@gmail.com"
            method="POST"
            encType="text/plain"
            className="bg-white rounded-3xl p-8 shadow-lg space-y-5"
          >

            <input
              type="text"
              placeholder="Full Name"
              className="w-full p-4 rounded-2xl border"
            />

            <input
              type="email"
              placeholder="Email Address"
              className="w-full p-4 rounded-2xl border"
            />

            <textarea
              rows={5}
              placeholder="Prayer Request"
              className="w-full p-4 rounded-2xl border"
            />

            <button className="bg-yellow-500 hover:bg-yellow-600 text-white w-full py-4 rounded-2xl font-semibold">
              Submit Prayer Request
            </button>

          </form>

        </div>

      </div>

    </main>
  );
}