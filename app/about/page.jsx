export default function About() {
  return (
    <div className="bg-about flex flex-col items-center justify-center w-full">
      <div className="bg-white-300 rounded-xl bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-50 px-3 py-3 border border-indigo-800 shadow-xl mr-20 ml-20 py-10 px-5">
        <h1 className="text-white py-10 text-xl font-bold text-center">
          About Space-Explorer
        </h1>
        <div className="text-lg">
          <p>
            Space Explorer is a web application/school project that allows users
            to explore space, discover space missions, and learn about space
            exploration through interactive features.
            <br />
            It is build with NextJs, React, Tailwind and uses the Nasa Api.
          </p>
          <br />
          <p>
            Embark on our Space-ship, we will assign you a badge on the Home deck
          </p>
          <br />
          <p>Discover the Astronomy Picture of the Day on the Apod deck</p>
          <br />
          <p>
            Learn about the main events surrounding space with the intergalactic
            Timeline
          </p>
          <br />
          <p>
            Explore Mars with the cutest rovers of all: Perseverance and
            Curiosity
          </p>
        </div>
      </div>
    </div>
  );
}
