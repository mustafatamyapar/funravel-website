import { features } from "../constants";
import styles, { layout } from "../style";
import Button from "./Button";

const FeatureCard = ({ icon, title, content, index }) => (
  <div className={`flex flex-row p-6 rounded-[20px] ${index !== features.length - 1 ? "mb-6" : "mb-0"} feature-card`}>
    <div className={`w-[64px] h-[64px] rounded-full ${styles.flexCenter} bg-dimBlue`}>
      <img src={icon} alt="star" className="w-[50%] h-[50%] object-contain" />
    </div>
    <div className="flex-1 flex flex-col ml-3">
      <h4 className="font-poppins font-semibold text-white text-[18px] leading-[23.4px] mb-1">
        {title}
      </h4>
      <p className="font-poppins font-normal text-dimWhite text-[16px] leading-[24px]">
        {content}
      </p>
    </div>
  </div>
);

const Business = () =>  (
  <section id="features" className={layout.section}>
    <div className={layout.sectionInfo}>
      <h2 className={styles.heading2}>
       Why Funravel?
      </h2>
      <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
      Funravel is your one-stop app for concert travel, offering an unmatched suite of features designed to make your concert trips effortless and enjoyable. Unlike our competitors, Funravel provides: Personalized comprehensive travel plans, fan connections and personalized user experience.
      </p>
      <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
      When compared to our competitors:
      </p>
      <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
      Bandsintown: Bandsintown offers some basic travel planning features only for hotels, and a review feature but they do not have comprehensive plan features and other social features.
      </p>
      <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
      Songkick: While they provide a concert discovery feature , they lack the travel planning and fan connection features available in Funravel.
      </p>
      <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
      StubHub, Vivid Seats, Ticketmaster: These ticket marketplaces offer buying and selling of tickets but fall short by not offering any travel planning features or fan interaction options.
      </p>
      
    </div>

    <div className={`${layout.sectionImg} flex-col`}>
      {features.map((feature, index) => (
        <FeatureCard key={feature.id} {...feature} index={index} />
      ))}
    </div>
  </section>
);

export default Business;
