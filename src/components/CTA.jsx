import styles from "../style";
import Button from "./Button";
import { img1, img2, img3, img4, img5, img6 } from "../assets";

const CTA = () => (
  <section
    className={`${styles.flexCenter} ${styles.marginY} ${styles.padding} sm:flex-row flex-col bg-black-gradient-2 rounded-[20px] box-shadow`}
  >
    <div className="flex-1 flex flex-col">
      <h2 className={styles.heading2}>Let’s Funravel</h2>

      <div className="flex justify-center mt-8">
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-4">
          <div>
            <img
              src={img4}
              alt="Screenshot 4"
              className="w-full h-full rounded-lg"
              style={{ borderRadius: '8px' }}
            />
          </div>
          <div>
            <img
              src={img5}
              alt="Screenshot 5"
              className="w-full h-full rounded-lg"
              style={{ borderRadius: '8px' }}
            />
          </div>
          <div>
            <img
              src={img2}
              alt="Screenshot 2"
              className="w-full h-full rounded-lg"
              style={{ borderRadius: '8px' }}
            />
          </div>
          <div>
            <img
              src={img1}
              alt="Screenshot 1"
              className="w-full h-full rounded-lg"
              style={{ borderRadius: '8px' }}
            />
          </div>
          <div>
            <img
              src={img3}
              alt="Screenshot 3"
              className="w-full h-full rounded-lg"
              style={{ borderRadius: '8px' }}
            />
          </div>
          <div>
            <img
              src={img6}
              alt="Screenshot 6"
              className="w-full h-full rounded-lg"
              style={{ borderRadius: '8px' }}
            />
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default CTA;
