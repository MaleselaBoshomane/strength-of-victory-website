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
            action="https://formsubmit.co/prayer@strengthofvictory.org.za"
            method="POST"
            className="bg-white rounded-3xl p-8 shadow-lg space-y-5"
          >

            {/* Disable Captcha */}
            <input type="hidden" name="_captcha" value="false" />

            {/* Email Subject */}
            <input
              type="hidden"
              name="_subject"
              value="New Prayer Request"
            />

            <input
              type="email"
              name="email"
              placeholder="Email Address"
              required
              className="w-full p-4 rounded-2xl border"
            />

            <textarea
              rows={5}
              name="message"
              placeholder="Prayer Request"
              required
              className="w-full p-4 rounded-2xl border"
            />

            <button
              type="submit"
              className="bg-yellow-500 hover:bg-yellow-600 text-white w-full py-4 rounded-2xl font-semibold"
            >
              Submit Prayer Request
            </button>

          </form>

        </div>

      </div>

    </main>
  );
}