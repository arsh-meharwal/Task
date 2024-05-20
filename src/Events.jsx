import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

function ReusableImage({ src, alt, className }) {
  return <img loading="lazy" src={src} alt={alt} className={className} />;
}

function ReusableText({ className, children }) {
  return <div className={className}>{children}</div>;
}

function Events() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedOption, setSelectedOption] = useState("left");
  const images = [
    "/Pic.png",
    "/Summer_Music_Festival_PT_7f.jpg",
    "/Pic.png",
    "/desktop-wallpaper-live-concert.jpg",
  ];
  const navigate = useNavigate();
  const getTransformValue = () => {
    const offset = 20; // Offset from the left
    let totalOffset;
    if (currentIndex === 0) {
      totalOffset = offset;
    } else if (currentIndex === images.length - 1) {
      totalOffset = -offset;
    } else {
      totalOffset = 0;
    }
    return `calc(-${currentIndex * 50}% + ${totalOffset}%)`;
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  return (
    <main className="lg:pr-8 lg:pl-4 bg-zinc-900 max-md:pr-5 overflow-y-auto h-screen">
      <div className="flex  max-md:flex-col max-md:gap-0">
        <section className="flex flex-col w-[58%] h-full max-md:ml-0 max-md:w-full">
          <header className="flex flex-col grow font-bold whitespace-nowrap">
            {/* Logo */}
            <div className="flex gap-4 pt-4 text-4xl font-extrabold tracking-tight text-amber-300 leading-[64px]">
              <ReusableImage
                src="fa1e936b6cdfac43d3b841a6d2b92e26d5eac80adf2d21bef8845644005ab0b9.svg"
                alt=""
                className="shrink-0 aspect-square w-[74px]"
              />
              <ReusableText className="">Astrix.</ReusableText>
            </div>
            {/* Images ,Title & Button*/}
            <div className="relative w-full h-full">
              <div className="absolute  inset-0 flex items-center justify-center z-10 pt-96 ">
                <div className="overflow-hidden min-w-full  flex items-center justify-center">
                  <div
                    className="flex transition-transform duration-700 ease-in-out"
                    style={{
                      transform: `translateX(${getTransformValue()})`,
                    }}
                  >
                    {images.map((image, index) => (
                      <div
                        key={index}
                        className={`min-w-[50%] px-2 flex-shrink-0 transition-opacity duration-700 ease-in-out`}
                      >
                        <img
                          src={image}
                          alt={`Slide ${index}`}
                          className={`w-full h-[500px] object-cover  ${
                            currentIndex === index
                              ? "brightness-100"
                              : "brightness-75"
                          }`}
                        />
                      </div>
                    ))}
                  </div>
                </div>
              </div>
              <ReusableText className="mt-10 text-9xl max-sm:text-5xl leading-[118px] text-white text-opacity-20 max-md:mt-10 max-md:text-4xl max-md:leading-10 relative z-0">
                ASTRIX
                <br />
                <br /> EVENTS
              </ReusableText>
            </div>
            {/* Button */}
            <div className="flex text-stone-50 bottom-2 pt-96 pb-12 max-sm:mt-60 text-lg leading-5 text-center rounded-[100px]  max-md:mx-2.5 max-md:mt-10">
              <div className="relative w-[44%] h-12 bg-zinc-800 rounded-full">
                <div
                  className={`absolute top-0 bottom-0 left-0 transition-transform duration-300 ease-in-out transform ${
                    selectedOption === "left"
                      ? "translate-x-0"
                      : "translate-x-full"
                  }`}
                  style={{ width: "50%" }}
                >
                  <div className="h-full  bg-neutral-600 rounded-full shadow-md"></div>
                </div>
                <div className="absolute inset-0 flex">
                  <button
                    onClick={() => {
                      setSelectedOption("left");
                      navigate("/");
                    }}
                    className="w-1/2 h-full z-10 text-center focus:outline-none max-sm:text-sm"
                  >
                    Events
                  </button>
                  <button
                    onClick={() => {
                      setSelectedOption("right");
                      navigate("/collection");
                    }}
                    className="w-1/2 h-full z-10 text-center focus:outline-none max-sm:text-sm"
                  >
                    Collections
                  </button>
                </div>
              </div>
            </div>
          </header>
        </section>
        {/* aside for purple text ribbon */}
        <aside className="flex bg-violet-400 w-20 max-md:ml-0 max-md:w-full max-sm:w-full max-sm:mt-10">
          <div className=" flex flex-row justify-center  grow gap-0 max-md:flex-wrap overflow-hidden max-sm:w-screen">
            <p className="   my-2 text-2xl font-bold text-black  animate-moveVertical">
              Clifton Hotel, Near ISBT road, main market Janpath, New delhi
            </p>
          </div>
        </aside>
        {/* Event name column */}
        <section className="flex flex-col w-[35%] ml-5 max-md:ml-0 max-md:w-full">
          <div className="flex flex-col self-stretch my-auto max-md:mt-10 max-md:max-w-full">
            <header className="text-2xl font-bold text-white max-md:max-w-full">
              Explore Events You Like
            </header>
            <ReusableText className="mt-28 text-6xl font-bold text-white max-md:mt-10 max-md:max-w-full max-md:text-4xl">
              Sunburn
            </ReusableText>
            <section className="flex flex-col items-start pr-12 pl-4 mt-9 font-semibold text-white max-md:pr-5 max-md:max-w-full">
              <div className="flex gap-5 justify-between text-xl leading-7">
                <div className="flex gap-3.5 whitespace-nowrap">
                  <ReusableImage
                    src="6b6a37eda92fcb0a3387f989545c84764b45f23dcb5c5f39d1972187b51e393c.svg"
                    alt="Venue icon"
                    className="shrink-0 self-start aspect-square w-[27px]"
                  />
                  <ReusableText>Delhi</ReusableText>
                </div>
                <div className="flex gap-3.5">
                  <ReusableImage
                    src="92afb152713c2f0eb0f2824f4678d98df657f21bd414eeb747470dbc55f00857.svg"
                    alt="Date and time icon"
                    className="shrink-0 self-start aspect-square w-[27px]"
                  />
                  <p style={{ fontSize: "19px" }}>04/3/2024 @18:00</p>
                </div>
              </div>
              <p className="mt-7 text-base tracking-normal leading-6">
                Lorem ipsum dolor sit amet consectetur. Ac lorem massa in morbi
                et sed ipsum. Pellentesque mattis condimentum ut nulla.
              </p>
              <header className="mt-12 text-2xl max-md:mt-10">
                Artist Lineup
              </header>
            </section>
            <ReusableImage
              src="eaaf902d7b9255b79d21a5bc279e3a68abc6b793d47c41e3bca594edd4c86982.png"
              alt="Artist Lineup"
              className="mt-10 w-full rounded-lg aspect-[2.33] max-md:mt-10 max-md:max-w-full"
            />
            <section className="mt-36 max-md:pr-5 max-md:mt-10 max-md:max-w-full">
              <div className="flex gap-5 max-md:flex-col max-md:gap-0">
                <ReusableText className="flex flex-col w-6/12 max-md:ml-0 max-md:w-full">
                  <ReusableImage
                    src="ff642c084dbe1066ecd6be58413af34233faf50a426cda8f1155e016e0988888.png"
                    alt="Event image"
                    className="shrink-0 max-w-full aspect-square w-[105px] max-md:mt-10"
                  />
                </ReusableText>
                <ReusableText className="flex flex-col ml-5 w-6/12 max-md:ml-0 max-md:w-full">
                  <button className="grow justify-center px-5 py-2.5 mt-14 w-full text-2xl font-bold leading-8 bg-amber-300 rounded-[40px] text-zinc-900 max-md:mt-10">
                    Join Waitlist
                  </button>
                </ReusableText>
              </div>
            </section>
          </div>
        </section>
      </div>
    </main>
  );
}

export default Events;
