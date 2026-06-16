import Banner from "../../components/homePage/Banner";
import YourFriends from "../../components/homePage/YourFriends";

const HomePage = () => {
  return (
    <div className="bg-[#F8FAFC] py-10 md:py-20">
      <div className="max-w-6xl mx-auto px-4 lg:px-0">
        <Banner />
        <hr className="border-t border-[#E9E9E9] my-10" />
        <YourFriends/>
      </div>
    </div>
  );
};

export default HomePage;
