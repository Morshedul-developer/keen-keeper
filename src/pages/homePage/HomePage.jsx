import Banner from "../../components/homePage/Banner";
import YourFriends from "../../components/homePage/YourFriends";

const HomePage = () => {
  return (
    <div className="bg-[#F8FAFC]">
      <div className="max-w-6xl mx-auto py-10 md:py-20">
        <Banner />
        <hr className="border-t border-[#E9E9E9] my-10" />
        <YourFriends/>
      </div>
    </div>
  );
};

export default HomePage;
