import React from "react";
import Layout from "../components/Layout/Layout";
const Explore = () => {
  const dataCard = [
    {
      id: 1,
      img: "/images/content/how-to-choose-best-bike-for-spring-in-bangladesh-thumb.jpg",
      info: "Features",
      date: "Friday 13 August",
      title: "How To Choose Best Bike For Spring In Bangladesh?",
      des: " If you ever wish to buy a motorcycle for you than you must think a lot before buying... ",
    },
    {
      id: 2,
      img: "/images/content/photography-ideas-for-beginners-using-dslr-thumb.jpg",
      info: "New",
      date: "Friday 13 August",
      title: "photography ideas for beginners using DSLR.",
      des: "Before the days of DSLR — if you can remember such a time — taking a great..",
    },
    {
      id: 3,
      img: "/images/content/how-to-search-for-hotels-near-a-street-address-thumb.jpg",
      info: "New",
      date: "Friday 13 August",
      title: "How to search for hotels near a street address?",
      des: "If you are looking for hotels near a street address, this simple search form will help you find...",
    },
    {
      id: 4,
      img: "/images/content/how-to-create-web-application-using-python.jpg",
      info: "New",
      date: "Friday 13 August",
      title: "how to create web application using python?",
      des: "If you are looking for hotels near a street address, this simple search form will help you find...",
    },
    {
      id: 5,
      img: "/images/content/using-gimbal-and-camera-without-drone.jpg",
      info: "Features",
      date: "Friday 13 August",
      title: "Using Gimbal and Camera Without Drone?",
      des: "You wrote a Python script that you're proud of, and now you want to show it off to the world.",
    },
    {
      id: 6,
      img: "/images/content/how-to-make-a-simple-car-for-school-project.jpg",
      info: "New",
      date: "Friday 13 August",
      title: "How to make a simple car for school project?",
      des: "We can see a lot of models of toy car at market. There are varieties according to size, cost...",
    },
  ];
  return (
    <div className="flex-1 p-[30px] lg:mr-7 bg-gray-50 rounded-2xl">
      <div className="flex flex-col md:flex-row items-center flex-wrap gap-7">
        {dataCard.map((value) => (
          <div
            className="w-3/4 md:w-[calc(50%-30px)] xl:w-[calc(33%-30px)] h-[420px] md:h-[430px] bg-white rounded-lg"
            key={value.id}
          >
            <img
              src={value.img}
              alt="image"
              className="w-full shrink-0 object-cover h-48 rounded-t-lg"
            />
            <div className="p-4 flex-1 flex flex-col">
              <div className="flex-1">
                <div className="flex gap-2">
                  <div className="px-2 rounded bg-red-100">
                    <p className="text-sm text-red-400 font-medium">
                      {value.info}
                    </p>
                  </div>
                  <p className="text-gray-400 text-sm">{value.date}</p>
                </div>
                <h2 className="font-bold text-lg my-4 text-gray-600">
                  {value.title}
                </h2>
                <p className="font-normal text-sm my-3 text-gray-400">
                  {value.des}
                </p>
              </div>
              <div className="flex gap-2 cursor-pointer mb-0 shrink-0">
                <div className="px-1 rounded">
                  <p className="text-sm text-blue-500 font-medium uppercase">
                    Read more
                  </p>
                </div>
                <img src="/images/icons/arrow-top-right.svg" />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Explore;
Explore.getLayout = function getLayout(page) {
  return <Layout>{page}</Layout>;
};
