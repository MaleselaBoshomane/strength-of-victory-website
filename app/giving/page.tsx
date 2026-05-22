export default function GivingPage() {
  return (
    <main className="min-h-screen bg-white text-gray-800 py-32 px-6">

      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center">

        <div>

          <p className="text-yellow-600 uppercase tracking-[0.3em] mb-4">
            Giving
          </p>

          <h1 className="text-5xl font-bold mb-8">
            Make A Difference Today
          </h1>

          <div className="bg-gray-100 rounded-[2rem] shadow-2xl p-10 border">

            <h2 className="text-3xl font-bold mb-8">
              Banking Details
            </h2>

            <div className="space-y-4 text-lg">

              <p>
                <strong>Account Holder:</strong> Strength of Victory
              </p>

              <p>
                <strong>Account Number:</strong> 9142724028
              </p>

              <p>
                <strong>Bank:</strong> Absa Bank
              </p>

              <p>
                <strong>Branch Code:</strong> 632005
              </p>

            </div>

          </div>

        </div>

        <img
          src="/seed.png"
          alt="giving"
          className="rounded-[2rem] shadow-2xl w-full h-[600px] object-cover"
        />

      </div>

    </main>
  );
}