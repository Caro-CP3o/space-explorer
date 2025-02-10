const Contact = () => {
  return (
    <>
      <div className="backgd-image bg-contact flex flex-col items-center justify-center w-full min-h-screen flex-grow relative items-stretch">
        <div className="flex items-center justify-center px-4 py-2">
          <div className="bg-white-300 rounded-xl bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-50 border border-indigo-800 shadow-xl py-10 px-5 mt-5">
            <h1 className="text-white py-10 text-xl font-bold text-center">
            "Reach for the Stars – Contact Me!"
            </h1>
            <h2 className="text-white text-lg font-bold text-center">
            Got a question about the project, want to hire me for a space mission, or just want to chat about Star Wars ? I’d love to hear from you!
            </h2>
            <br />
            <div className="container-contact text-lg flex align-center justify-center gap-2">
              <div className="flex justify-center items-center gap-8 max-w-[600px] py-3 px-3">
                <div className="max-w-[60px] max-h-[60px] flex items-center justify-center bg-indigo-800/50 rounded-full">
                  <img
                    className="max-w-[60px] max-h-[60px]"
                    src="./images/call-center.png"
                    alt=""
                  />
                </div>
                <h2 className="text-white text-ms font-bold">
                Mission Control Center
                </h2>
                <a href="mailto:carolepes@gmail.com" className="rounded-xl bg-indigo-800/50 py-2 px-2 hover:bg-fuchsia-700/50 hover:text-shadow-lg transition-all duration-300 hover:scale-110">Send Transmission</a>
              </div>
              <div className="flex justify-center items-center gap-8 max-w-[600px] py-3 px-3">
                <div className="max-w-[60px] max-h-[60px] flex items-center justify-center bg-indigo-800/50 rounded-full">
                  <img
                    className="max-w-[60px] max-h-[60px]"
                    src="./images/space-colony.png"
                    alt=""
                  />
                </div>
                <h2 className="text-white text-ms font-bold">
                Space Explorer HQ
                </h2>
                <a href="https://www.carolepes.com" target="blank" className="underline">https://www.carolepes.com</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
