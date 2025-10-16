import LeftSection from "./components/leftsection/LeftSection";
import RightSection from "./components/rightsection/RightSection";
import Navbar from "./components/navbar/Navbar";

const App = () => {
  return (
    <div className="h-screen w-full  flex justify-center p-6 bg-black ">
      <div id='parent-div' className=" bg-[#222] w-[90%] p-9 shadow-2xl shadow-[#222] rounded-4xl">
      <Navbar />
        <div className="flex p-4">
        <LeftSection /> 
        <RightSection />
        </div>
      </div>
    </div>
  );
};

export default App;
