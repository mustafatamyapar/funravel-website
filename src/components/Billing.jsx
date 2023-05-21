import { feedback ,report} from "../constants";
import styles from "../style";
import FeedbackCard from "./FeedbackCard";
import ReportCard from "./ReportCard";
const Billing = () => (
  <section id="reports" className={`${styles.paddingY} ${styles.flexCenter} flex-col relative `}>
    <div className="absolute z-[0] w-[60%] h-[60%] -right-[50%] rounded-full blue__gradient bottom-40" />

    <div className="w-full flex justify-between items-center md:flex-row flex-col sm:mb-16 mb-6 relative z-[1]">
      <h2 className={styles.heading2}>
       Project Reports<br className="sm:block hidden" /> 
      </h2>
    </div>

    <div className="flex flex-wrap sm:justify-start justify-center w-full feedback-container relative z-[1]">
      {report.map((card) => <ReportCard key={card.id} {...card} />)}
    </div>
  </section>
);

export default Billing;
