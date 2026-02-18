import React from "react";

const Experience = () => {
  const experiences = [
    {
      id: 1,
      title: "Everest Base Camp Trek",
      location: "Solukhumbu",
      price: "$1200",
      image:
        "https://cms.altitudehimalaya.com/media/Blog/Adventures/Everest-Base-Camp.jpg",
    },
    {
      id: 2,
      title: "Pokhara Paragliding",
      location: "Pokhara",
      price: "$120",
      image:
        "https://www.visithimalayastrek.com/uploads/blogs/base-camp-trek-with-the-best-companies-893106.jpg",
    },
    {
      id: 3,
      title: "Trishuli River Rafting",
      location: "Chitwan",
      price: "$90",
      image:
        "https://pictures.altai-travel.com/1920x0/tents-at-everest-base-camp-1204.jpg",
    },
    {
      id: 4,
      title: "Bhaktapur Heritage Tour",
      location: "Bhaktapur",
      price: "$40",
      image:
        "https://cms.altitudehimalaya.com/media/Blog/Adventures/Everest-Base-Camp.jpg",
    },
  ];

  return (
    <div className="pt-[90px] px-6 md:px-16 lg:px-24 mb-20">
      <div className="mb-10 mt-20">
        <h1 className="text-3xl md:text-4xl font-semibold">
          Explore Experiences
        </h1>
        <p className="text-gray-500 mt-2">
          Discover activities and adventures for your trip.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {experiences.map((exp) => (
          <div
            key={exp.id}
            className="bg-white rounded-2xl shadow hover:shadow-xl transition duration-300 cursor-pointer"
          >
            <img
              src={exp.image}
              alt={exp.title}
              className="h-60 w-full object-cover rounded-t-2xl"
            />

            <div className="p-5">
              <h2 className="text-lg font-semibold">{exp.title}</h2>
              <p className="text-sm text-gray-500">{exp.location}</p>

              <div className="flex justify-between items-center mt-4">
                <span className="font-semibold">{exp.price}</span>
                <button className="bg-black text-white px-4 py-2 rounded-full text-sm hover:bg-gray-800">
                  Book Now
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Experience;
