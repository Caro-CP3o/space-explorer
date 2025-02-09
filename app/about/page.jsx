export default function About() {
  return (
    <div className="backgd-image bg-about flex flex-col items-center justify-center w-full min-h-screen flex-grow relative items-stretch">
      <div className="flex items-center justify-center px-4 py-2">
        <div className="bg-white-300 rounded-xl bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-50 border border-indigo-800 shadow-xl py-10 px-5 mt-5">
          <h1 className="text-white py-10 text-xl font-bold text-center">
            About Space-Explorer
          </h1>
          <div className="flex text-lg justify-center text-center">
            <p>
              Space Explorer is a web application/school project that allows
              users to explore space, discover space missions, and learn about
              space exploration through interactive features.
              <br />
              It is build with NextJs, React, Tailwind and uses the Nasa Api.
            </p>
          </div>
          <br />
          <div className="container-about text-lg flex align-center justify-between gap-2">
            <div className="flex justify-between gap-8 max-w-[500px] py-3 px-3">
            <div className="max-w-[60px] max-h-[60px] flex items-center justify-center bg-indigo-800/50 rounded-full">
              <img
                className="max-w-[60px] max-h-[60px]"
                src="./images/astronaut.png"
                alt=""
              />
            </div>
              <p>
                Embark on our Space-ship, we will assign you a badge on the Home
                deck
              </p>
            </div>
            <div className="flex justify-between gap-8 max-w-[500px] py-3 px-3">
            <div className="max-w-[60px] max-h-[60px] flex items-center justify-center bg-indigo-800/50 rounded-full">
              <img
                className="max-w-[60px] max-h-[60px]"
                src="./images/orbit.png"
                alt=""
              />
            </div>
              <p>Discover the Astronomy Picture of the Day on the Apod deck</p>
            </div>
            <div className="flex justify-between gap-8 max-w-[500px] py-3 px-3">
            <div className="max-w-[60px] max-h-[60px] flex items-center justify-center bg-indigo-800/50 rounded-full">
              <img
                className="max-w-[60px] max-h-[60px]"
                src="./images/comet.png"
                alt=""
              />
            </div>
              <p>
                Learn about the main events surrounding space with the
                intergalactic Timeline
              </p>
            </div>
            <div className="flex justify-between gap-8 max-w-[500px] py-3 px-3">
            <div className="max-w-[60px] max-h-[60px] flex items-center justify-center bg-indigo-800/50 rounded-full">
              <img
                className="max-w-[60px] max-h-[60px]"
                src="./images/rover.png"
                alt=""
              />
            </div>
              <p>
                Explore Mars with the cutest rovers of all: Perseverance and
                Curiosity
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
