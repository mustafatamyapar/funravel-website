import styles from "../style";
import { discount, robot,home,apple,google} from "../assets";
import GetStarted from "./GetStarted";
import { stats } from "../constants";

const Hero = () => {
  return (
    <section id="home" 
    className={`flex md:flex-row flex-col ${styles.paddingY} justify-center items-center`} 
    style={{backgroundImage: `url(${"https://images.pexels.com/photos/1190297/pexels-photo-1190297.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"})`, backgroundSize: 'cover'}}>
      <div className={`flex-1 ${styles.flexStart} flex-col xl:px-0 sm:px-16 px-6`}>
        <div className="flex flex-row items-center py-[6px] px-4 bg-discount-gradient rounded-[10px] mb-2">
          <p className={`${styles.paragraph} ml-2`}>
          Unravel<span className="text-white"> travel</span>  and have{" "}
            <span className="text-white">fun!</span>
          </p>
        </div>

        <div className="flex flex-row justify-between items-center w-full">
          <h1 className="flex-1 font-poppins font-semibold ss:text-[72px] text-[52px] text-white ss:leading-[100.8px] leading-[75px]">
            Your Ultimate<br className="sm:block hidden" />{" "}
            <span className="text-gradient"> Concert </span>{" "}
          </h1>
          <div className="ss:flex hidden md:mr-4 mr-0">
            
          </div>
        </div>

        <h1 className="font-poppins font-semibold ss:text-[68px] text-[52px] text-white ss:leading-[100.8px] leading-[75px] w-full">
          Companion
        </h1>
        <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
        Funravel, a comprehensive travel planning app designed specifically for concert enthusiasts who are eager to explore new events and connect with like-minded fans. Our mission is to simplify and optimize your event-based travel experiences, taking the hassle out of planning while allowing you to focus on enjoying your favorite concerts to the fullest.
        </p>
      </div>

      <div className={`flex-1 flex ${styles.flexCenter} md:my-0 my-10 relative`}>

        {/* gradient start */}
        <div className="absolute z-[0] w-[40%] h-[35%] top-0 pink__gradient" />
        <div className="absolute z-[1] w-[80%] h-[80%] rounded-full white__gradient bottom-40" />
        <div className="absolute z-[0] w-[50%] h-[50%] right-20 bottom-20 blue__gradient" />
        {/* gradient end */}
      </div>

      <div className={`ss:hidden ${styles.flexCenter}`}>
      </div>
      <div className={`flex w-full justify-center items-center flex-wrap mt-10`}>
      <div className="flex flex-row flex-wrap sm:mt-10 mt-6" style={{marginTop: '400px'}}>
          <a href="https://www.apple.com/app-store/" target="_blank" rel="noopener noreferrer">
            <img src={apple} alt="App Store" className="w-[168.86px] h-[82.05px] object-contain mr-5 cursor-pointer" />
          </a>
          <a href="https://play.google.com/store/apps/details?id=com.funravel_v0&gl=TR" target="_blank" rel="noopener noreferrer">
            <img src={google} alt="Google Play Store" className="w-[184.17px] h-[83.08px] object-contain cursor-pointer" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
