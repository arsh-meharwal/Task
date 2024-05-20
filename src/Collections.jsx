// import * as React from "react";

// const CollectibleCard = ({ imageSrc, imageAlt, year, author, name }) => (
//   <div className="flex flex-col grow px-2.5 py-3 mx-auto w-full bg-violet-300 rounded-lg max-md:mt-4">
//     <div className="flex gap-5 justify-between">
//       <div className="justify-center px-1.5 py-px text-xs font-bold text-white whitespace-nowrap bg-black rounded-lg">
//         {year}
//       </div>
//       <div className="text-xs font-semibold text-black">
//         <span className="font-medium">By</span>{" "}
//         <span className="font-bold">{author}</span>
//       </div>
//     </div>
//     <div className="self-center mt-2.5 text-xs font-medium text-black">
//       {name}
//     </div>
//     <div className="flex justify-center items-center mt-1.5 bg-black rounded-lg border border-black border-solid">
//       <img
//         loading="lazy"
//         src={imageSrc}
//         alt={imageAlt}
//         className="z-10 -mt-1.5 mb-0 w-36 aspect-[0.81]"
//       />
//     </div>
//   </div>
// );

// function Collections() {
// const collectibles = [
//   {
//     imageSrc:
//       "f748f044ffa1a1208446c5f77121c3b2ca3d7aa5e32325dd9b5f9e8ff1678823.png",
//     imageAlt: "Collectible Image 1",
//     year: "2024",
//     author: "Pablo",
//     name: "Collectible Name",
//   },
//   {
//     imageSrc:
//       "f748f044ffa1a1208446c5f77121c3b2ca3d7aa5e32325dd9b5f9e8ff1678823.png",
//     imageAlt: "Collectible Image 2",
//     year: "2024",
//     author: "Pablo",
//     name: "Collectible Name",
//   },
//   {
//     imageSrc:
//       "ce4d119dadbb0873c6c0f6a3ae8e8569a6eab19cac662e2c430f2aacb39e6c5b.png",
//     imageAlt: "Collectible Image 3",
//     year: "2024",
//     author: "Pablo",
//     name: "Collectible Name",
//   },
// ];

//   return (
//     <div className="pl-4 bg-zinc-900">
//       <div className="flex gap-5 max-md:flex-col max-md:gap-0">
//         <section className="flex flex-col w-[63%] max-md:ml-0 max-md:w-full">
//           <section className="flex grow gap-0 max-md:flex-wrap max-md:mt-10 max-md:max-w-full">
//             <article className="flex flex-col grow shrink-0 self-start mt-4 basis-0 w-fit max-md:max-w-full">
//               <section className="max-md:max-w-full">
//                 <section className="flex gap-5 max-md:flex-col max-md:gap-0">
//                   <article className="flex flex-col w-2/5 max-md:ml-0 max-md:w-full">
//                     <section className="flex z-10 flex-col grow whitespace-nowrap">
//                       <section className="flex gap-4 text-4xl font-extrabold tracking-tight text-amber-300 leading-[64px]">
//                         <img
//                           loading="lazy"
//                           src="fa1e936b6cdfac43d3b841a6d2b92e26d5eac80adf2d21bef8845644005ab0b9.svg"
//                           alt="Astrix Logo"
//                           className="shrink-0 aspect-square w-[74px]"
//                         />
//                         <div>Astrix.</div>
//                       </section>
//                       <section className="mt-20 text-9xl font-bold leading-[118px] text-white text-opacity-20 max-md:mt-10 max-md:text-4xl max-md:leading-10">
//                         ASTRIX
//                         <br />
//                         <br />
//                         COLLECTIBLE
//                       </section>
//                     </section>
//                   </article>
//                   <section className="flex flex-col ml-5 w-3/5 max-md:ml-0 max-md:w-full">
//                     <section className="flex flex-col grow mt-36 max-md:mt-10 max-md:max-w-full" />
//                   </section>
//                 </section>
//               </section>
//               <section className="flex gap-5 justify-between pl-12 mt-16 ml-6 max-w-full text-lg font-bold leading-5 text-center whitespace-nowrap bg-zinc-800 rounded-[100px] w-[328px] max-md:pl-5 max-md:mt-10 max-md:ml-2.5">
//                 <div className="my-auto text-neutral-200">Events</div>
//                 <div className="z-10 justify-center px-9 py-5 bg-neutral-600 rounded-[100px] text-stone-50 max-md:px-5">
//                   Collections
//                 </div>
//               </section>
//             </article>
//             <section className="flex flex-col justify-center text-2xl text-black max-md:hidden" />
//           </section>
//         </section>
//         <section className="flex flex-col ml-5 w-[37%] max-md:ml-0 max-md:w-full">
//           <article className="flex z-10 flex-col self-stretch my-auto max-md:mt-10 max-md:max-w-full">
//             <div className="text-2xl font-bold text-white max-md:max-w-full">
//               Explore Your First Collectible
//             </div>
//             <div className="mt-14 text-6xl font-extrabold tracking-tight text-white leading-[64px] max-md:mt-10 max-md:mr-2.5 max-md:max-w-full max-md:text-4xl max-md:leading-[50px]">
//               Meta Lives
//             </div>
//             <div className="mt-3 text-2xl font-bold leading-8 text-white max-md:max-w-full">
//               Live in Astrix
//             </div>
//             <div className="mt-3 text-base font-semibold tracking-normal leading-6 text-white max-md:max-w-full">
//               Lorem ipsum dolor sit amet consectetur. Ac lorem massa in morbi et
//               sed ipsum. Pellentesque mattis condimentum ut nulla.{" "}
//             </div>
//             <div className="flex gap-3.5 py-0.5 mt-8 text-xl font-medium leading-10 text-stone-50 max-md:flex-wrap">
//               <img
//                 loading="lazy"
//                 src="d49bca9ec6e12be065d1960451644627267b6f220e7bb31bfd630cbdba3fa877.png"
//                 alt="Meta Lives Event"
//                 className="shrink-0 max-w-full aspect-[3.7] w-[150px]"
//               />
//               <div className="flex-auto my-auto">22k people interested</div>
//             </div>
//             <div className="mt-14 text-sm font-semibold text-white max-md:mt-10 max-md:max-w-full">
//               Collectibles
//             </div>
//             <div className="mt-5 max-md:max-w-full">
//               <section className="flex gap-5 max-md:flex-col max-md:gap-0">
//                 {collectibles.map((collectible, index) => (
//                   <article
//                     key={index}
//                     className="flex flex-col w-[33%] max-md:ml-0 max-md:w-full"
//                   >
//                     <CollectibleCard
//                       imageSrc={collectible.imageSrc}
//                       imageAlt={collectible.imageAlt}
//                       year={collectible.year}
//                       author={collectible.author}
//                       name={collectible.name}
//                     />
//                   </article>
//                 ))}
//               </section>
//             </div>
//             <button className="justify-center self-center px-5 py-2.5 mt-20 text-2xl font-bold leading-8 bg-amber-300 rounded-[40px] text-zinc-900 max-md:mt-10">
//               Join Waitlist
//             </button>
//           </article>
//         </section>
//       </div>
//     </div>
//   );
// }

// export default Collections;

import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const CollectibleCard = ({ imageSrc, imageAlt, year, author, name }) => (
  <div className="flex flex-col grow px-2.5 py-3 mx-auto w-full bg-violet-300 rounded-lg max-md:mt-4">
    <div className="flex gap-5 justify-between">
      <div className="justify-center px-1.5 py-px text-xs font-bold text-white whitespace-nowrap bg-black rounded-lg">
        {year}
      </div>
      <div className="text-xs font-semibold text-black">
        <span className="font-medium">By</span>{" "}
        <span className="font-bold">{author}</span>
      </div>
    </div>
    <div className="self-center mt-2.5 text-xs font-medium text-black">
      {name}
    </div>
    <div className="flex justify-center items-center mt-1.5 bg-black rounded-lg border border-black border-solid">
      <img
        loading="lazy"
        src={imageSrc}
        alt={imageAlt}
        className="z-10 -mt-1.5 mb-0 w-36 aspect-[0.81]"
      />
    </div>
  </div>
);

function ReusableImage({ src, alt, className }) {
  return <img loading="lazy" src={src} alt={alt} className={className} />;
}

function ReusableText({ className, children }) {
  return <div className={className}>{children}</div>;
}

function Collections() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedOption, setSelectedOption] = useState("right");

  const collectibles = [
    {
      imageSrc:
        "f748f044ffa1a1208446c5f77121c3b2ca3d7aa5e32325dd9b5f9e8ff1678823.png",
      imageAlt: "Collectible Image 2",
      year: "2024",
      author: "Pablo",
      name: "Collectible Name",
    },
    {
      imageSrc:
        "ce4d119dadbb0873c6c0f6a3ae8e8569a6eab19cac662e2c430f2aacb39e6c5b.png",
      imageAlt: "Collectible Image 3",
      year: "2024",
      author: "Pablo",
      name: "Collectible Name",
    },
  ];
  const images = [
    "/Pic.png",
    "/Summer_Music_Festival_PT_7f.jpg",
    "/Pic.png",
    "/desktop-wallpaper-live-concert.jpg",
  ];
  const navigate = useNavigate();
  const getTransformValue = () => {
    const offset = 18; // Offset from the left
    let totalOffset;
    if (currentIndex === 0) {
      totalOffset = offset * 2;
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
              <div className="absolute  inset-0 flex items-center justify-center z-10 pt-44 ">
                <div className="overflow-hidden min-w-full  flex items-center justify-center max-sm:pt-96">
                  <div
                    className="flex transition-transform duration-700 ease-in-out"
                    style={{
                      transform: `translateX(${getTransformValue()})`,
                    }}
                  >
                    {images.map((image, index) => (
                      <div
                        key={index}
                        className={`min-w-[10%] px-2 flex-shrink-0 transition-opacity duration-700 ease-in-out`}
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
              <ReusableText className="mt-10 text-9xl mr-96 max-sm:text-5xl leading-[118px] text-white text-opacity-20 max-md:mt-10 max-md:text-4xl max-md:leading-10 relative z-0">
                ASTRIX
                <br />
                <br /> COLLE
                <br /> CTIONS
              </ReusableText>
            </div>
            {/* Button */}
            <div className="flex text-stone-50 bottom-2 max-lg:pt-72 pb-12 pt-64 max-sm:mt-60 text-lg leading-5 text-center rounded-[100px]  max-md:mx-2.5 max-md:mt-10">
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
          <div className="flex flex-col self-stretch my-4 max-md:mt-10 max-md:max-w-full">
            <header className="text-2xl font-bold text-white max-md:max-w-full">
              Explore your first collectible
            </header>
            <ReusableText className="mt-28 text-6xl pl-4 font-bold text-white max-md:mt-10 max-md:max-w-full max-md:text-4xl">
              Sunburn
            </ReusableText>
            <section className="flex flex-col items-start pr-12 pl-4 mt-9 font-semibold text-white max-md:pr-5 max-md:max-w-full">
              <div className="flex gap-5 justify-between text-xl leading-7">
                <div className="flex gap-3.5 whitespace-nowrap ">
                  <ReusableText>Buy Collections for Sunburn</ReusableText>
                </div>
              </div>
              <p className="mt-7 text-base tracking-normal leading-6">
                Lorem ipsum dolor sit amet consectetur. Ac lorem massa in morbi
                et sed ipsum. Pellentesque mattis condimentum ut nulla.
              </p>
            </section>
            <div className="flex pl-4 gap-3.5 py-0.5 mt-8 text-xl font-medium leading-10 text-stone-50 max-md:flex-wrap">
              <img
                loading="lazy"
                src="d49bca9ec6e12be065d1960451644627267b6f220e7bb31bfd630cbdba3fa877.png"
                alt="Meta Lives Event"
                className="shrink-0 max-w-full aspect-[3.7] w-[150px]"
              />
              <div className="flex-auto my-auto ">22k people interested</div>
            </div>
            <section className="mt-12 max-md:pr-5 max-md:mt-10 max-md:max-w-full">
              <ReusableText className={`text-white`}>Collectibles</ReusableText>
              <div className="flex gap-5 max-md:flex-col max-md:gap-0">
                <div className="mt-5 max-md:max-w-full flex">
                  <section className="flex gap-5 max-md:flex-col max-md:gap-0">
                    {collectibles.map((collectible, index) => (
                      <article
                        key={index}
                        className="flex flex-col w-[33%] max-md:ml-0 max-md:w-full"
                      >
                        <CollectibleCard
                          imageSrc={collectible.imageSrc}
                          imageAlt={collectible.imageAlt}
                          year={collectible.year}
                          author={collectible.author}
                          name={collectible.name}
                        />
                      </article>
                    ))}
                  </section>
                </div>
              </div>
              <div className="flex">
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

export default Collections;
