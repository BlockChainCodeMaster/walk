import { useState, useRef, useEffect } from "react";

export default function Home() {
  const [advantage, setAdvantage] = useState([
    {
      icon: "/rewards.svg",
      title: "Rewards",
      desc: "Keep fit & making money",
    },
    {
      icon: "/safety.svg",
      title: "Safety",
      desc: "e.g. mineral water, bread, feminine hygiene products, shoes, slippers, food",
    },
    {
      icon: "/recognition.svg",
      title: "Recognition",
      desc: "A healthier life style, transfer accumulated tokens to others",
    },
  ]);
  const [roadmap, setRoadmap] = useState([
    {
      year: "2023",
      section: "Q2-Q3",
      desc: [
        "Seed round",
        "Project initiation",
        "Marketplace for trading goods with tokens",
      ],
    },
    {
      year: "2023",
      section: "Q2-Q3",
      desc: [
        "Seed round",
        "Project initiation",
        "Marketplace for trading goods with tokens",
      ],
    },
    {
      year: "2023",
      section: "Q2-Q3",
      desc: [
        "Seed round",
        "Project initiation",
        "Marketplace for trading goods with tokens",
      ],
    },
  ]);

  const desc = (desc: string[]) =>
    desc.map((el, index) => (
      <li className="text-xs list-disc " key={index}>
        {el}
      </li>
    ));
  return (
    <main className="flex flex-col justify-center">
      <video
        className="absolute top-0 object-cover w-full h-full -z-10"
        autoPlay
        loop
        muted
      >
        <source src="/slogan_video.mp4" type="video/mp4" />
      </video>
      <div className="flex -mb-40 bg-black bg-opacity-50 py-60 sm:py-72 -mt-14">
        <div className="flex flex-col w-11/12 m-auto text-center sm:w-8/12">
          <img src="/slogan.png" className="w-full pb-10 m-auto sm:w-8/12 " />
          <p className="text-white opacity-50 ">
            Reward users for walking. Everywhere you walk,you could make money
            and have fun. Simple design,easy to use.
          </p>
          <p className="flex justify-center pt-10 ">
            <button className="flex flex-row items-center px-4 py-2 text-sm text-white bg-orange-600 rounded-md cursor-pointer hover:bg-orange-500">
              <img
                src="/icon_download.svg"
                width={14}
                height={14}
                className="mr-1 "
              />
              <span>Download Walk.Fun APP</span>
            </button>
          </p>
        </div>
      </div>
      <div className=" bg-[url('/advantage.png')] flex bg-[length:900px_auto] bg-no-repeat sm:bg-[length:1920px_auto] bg-top pt-40 sm:pt-48 pb-10 sm:pb-20">
        <ul className="flex flex-row w-11/12 gap-2 m-auto mt-4 sm:gap-8 sm:w-8/12 sm:mt-40 ">
          {advantage.map((el, index) => (
            <li
              key={index}
              className="flex flex-col justify-center  px-2 py-2 sm:px-8 sm:py-14 bg-[#D4FE58] rounded-md w-4/12"
            >
              <i className="flex justify-center p-4 m-auto bg-white rounded-md bg-opacity-5">
                <img
                  src={el.icon}
                  className="w-10 h-10 sm:w-16 sm:h-16"
                  alt="icon"
                />
              </i>
              <h1 className="h-10 mt-2 sm:mt-4 text-basic  font-[SairaB] italic">
                {el.title}
              </h1>
              <p className=" h-24 sm:h-10 mt-1 sm:mt-2 text-xs text-left text-black opacity-50  font-[SairaB]">
                {el.desc}
              </p>
            </li>
          ))}
        </ul>
      </div>
      <div className=" bg-[url('/download_bg.png')] bg-cover relative pt-10 pb-40 sm:py-40">
        <video
          className="absolute top-0 object-cover w-full h-full "
          autoPlay
          loop
          muted
        >
          <source src="/download_video.mp4" type="video/mp4" />
        </video>
        <div className="relative flex flex-col w-full h-auto m-auto sm:flex-row sm:w-8/12 sm:justify-between sm:h-80">
          <div className="w-full pt-6 text-center sm:w-3/6 sm:pt-0 sm:text-left">
            <h1 className="text-4xl italic font-[SairaB] text-orange-500">
              Download the mobile app to start mining today! Join now.
            </h1>
            <h2 className="text-white ">
              walk to earn web3 app for people live in Africa & more
            </h2>
            <div className="flex justify-center gap-4 mt-10 sm:justify-start">
              <button className="bg-[url('/app_android.png')] w-40 h-12 bg-contain bg-no-repeat"></button>
              <button className="bg-[url('/app_ios.png')] w-40 h-12 bg-contain bg-no-repeat"></button>
            </div>
          </div>
          <img
            src="/download_mobile.png"
            className="relative w-full m-auto mt-4 -bottom-10 sm:mt-0 sm:absolute sm:right-0 sm:w-7/12 h-fit"
          />
        </div>
      </div>
      <div className=" z-20 -mt-60 pb-60 sm:pb-80 bg-[url('/partners_bg.png')]  bg-[length:900px_auto] bg-no-repeat sm:bg-[length:1920px_auto] ">
        <img
          src="/partners.png"
          className="w-6/12 mx-auto mt-20 sm:mt-40 sm:w-3/12 h-fit"
        />
        <div className="flex flex-row flex-wrap w-10/12 gap-10 m-auto sm:flex-nowrap sm:w-6/12">
          <img src="/cyberconnect.png" className="w-4/12 sm:w-2/12 h-fit" />
          <img src="/hooked.png" className="w-4/12 sm:w-2/12 h-fit" />
          <img src="/lifeform.png" className="w-4/12 sm:w-2/12 h-fit" />
        </div>
        {/* <ul className="flex flex-row flex-wrap w-full gap-2 py-8 m-auto text-white sm:flex-nowrap sm:w-8/12 ">
          {roadmap.map((el, index) => (
            <li key={index} className="w-5/12 text-center sm:w-4/12">
              <h1 className="text-2xl italic font-[SairaB]">{el.year}</h1>
              <h2 className="mb-4 text-5xl italic font-bolder  font-[SairaB]">
                {el.section}
              </h2>
              <ul className="ml-10 text-left sm:ml-0">{desc(el.desc)}</ul>
            </li>
          ))}
        </ul> */}
      </div>
    </main>
  );
}
