export default function ContactPage() {
  return (
    <main className="min-h-screen bg-black text-white pt-32 px-6 pb-24">
      <div className="max-w-7xl mx-auto">

        {/* HEADER */}
        <div className="text-center mb-16">
          <p className="text-yellow-500 uppercase tracking-[0.3em] mb-4">
            Contact Us
          </p>

          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            We Would Love To Hear From You
          </h1>

          <p className="text-lg text-gray-400 max-w-3xl mx-auto">
            Reach out to Strength of Victory International Ministries for
            prayer, counselling, partnerships, or general enquiries.
          </p>
        </div>

        {/* CONTENT */}
        <div className="grid md:grid-cols-2 gap-16 items-center">

          {/* CONTACT CARD */}
          <div className="bg-zinc-900 border border-zinc-800 text-white rounded-[2rem] p-10 shadow-2xl">
            <h2 className="text-3xl font-bold mb-8 text-yellow-500">
              Contact Information
            </h2>

            <div className="space-y-6 text-lg text-gray-300">

              <p>📍 Shoshanguve Block XX, Gauteng</p>

              <p>📞 +27 799645579</p>

              <p>✉️ info@strengthofvictory.org.za</p>

              {/* SOCIAL MEDIA */}
              <div className="pt-6">
                <h3 className="text-white text-2xl font-bold mb-6">
                  Follow Us
                </h3>

                <div className="flex gap-6 flex-wrap">

                  {/* FACEBOOK */}
                  <a
                    href="https://facebook.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-white/10 hover:bg-yellow-500 hover:text-black transition duration-300 p-4 rounded-full"
                  >
                    Facebook
                  </a>

                  {/* INSTAGRAM */}
                  <a
                    href="https://instagram.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-white/10 hover:bg-yellow-500 hover:text-black transition duration-300 p-4 rounded-full"
                  >
                    Instagram
                  </a>

                  {/* TWITTER */}
                  <a
                    href="https://twitter.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-white/10 hover:bg-yellow-500 hover:text-black transition duration-300 p-4 rounded-full"
                  >
                    Twitter
                  </a>

                  {/* TIKTOK */}
                  <a
                    href="https://tiktok.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-white/10 hover:bg-yellow-500 hover:text-black transition duration-300 p-4 rounded-full"
                  >
                    TikTok
                  </a>

                </div>
              </div>
            </div>
          </div>

          {/* LOGO */}
          <div className="flex justify-center">
            <img
              src="/logo.png"
              alt="Church Logo"
              className="w-full max-w-md h-auto object-contain"
            />
          </div>

        </div>
      </div>
    </main>
  );
}