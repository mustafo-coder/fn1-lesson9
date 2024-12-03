import HomeAboutCard from "./home-aboutCard";

const cards = [
  {
    id: 1,
    title: "Uses Client First",
    body: "Euismod faucibus turpis eu gravida mi. Pellentesque et velit aliquam sed faucib turpis eu gravida mi. Pellentesque et velit aliquam sed mi. ",
    icon: "fa-users",
  },
  {
    id: 2,
    title: "Two Free Revision Round",
    body: "Euismod faucibus turpis eu gravida mi. Pellentesque et velit aliquam sed faucib turpis eu gravida mi. Pellentesque et velit aliquam sed mi. ",
    icon: "fa-circle-check",
  },
  {
    id: 3,
    title: "Template Customization",
    body: "Euismod faucibus turpis eu gravida mi. Pellentesque et velit aliquam sed faucib turpis eu gravida mi. Pellentesque et velit aliquam sed mi. ",
    icon: "fa-pen-ruler",
  },
  {
    id: 4,
    title: "24/7 Support",
    body: "Euismod faucibus turpis eu gravida mi. Pellentesque et velit aliquam sed faucib turpis eu gravida mi. Pellentesque et velit aliquam sed mi. ",
    icon: "fa-circle-question",
  },
  {
    id: 5,
    title: "Quick Delivery",
    body: "Euismod faucibus turpis eu gravida mi. Pellentesque et velit aliquam sed faucib turpis eu gravida mi. Pellentesque et velit aliquam sed mi. ",
    icon: "fa-stopwatch",
  },
  {
    id: 6,
    title: "Hands-on approach",
    body: "Euismod faucibus turpis eu gravida mi. Pellentesque et velit aliquam sed faucib turpis eu gravida mi. Pellentesque et velit aliquam sed mi. ",
    icon: "fa-newspaper",
  },
];
const HomeAbout = () => {
  return (
    <div className="bg-[#F4F6FC]">
      <div className="container py-20">
        <div className="text-center">
          <p>Features</p>
          <h2 className="text-5xl max-sm:text-3xl max-md:text-4xl mx-auto mt-3 font-bold max-w-[630px]">
            Design that solves problems, one product at a time
          </h2>
        </div>
        <div className="grid grid-cols-3 max-sm:grid-cols-1 max-lg:grid-cols-2 max-md:gap-3 gap-5 mt-20">
          {cards.map((c) => (
            <HomeAboutCard key={c.id} icon={c.icon} title={c.title} body={c.body}/>
          ))}
        </div>
      </div>
    </div>
  );
};

export default HomeAbout;
