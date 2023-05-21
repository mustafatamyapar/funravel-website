import styles from "../style";
import { logo } from "../assets";
import { footerLinks, socialMedia } from "../constants";

const Footer = () => (
  <section className={`${styles.flexCenter} ${styles.paddingY} flex-col`}>
  

    <div className="w-full flex justify-between items-center md:flex-row flex-col pt-6 border-t-[1px] border-t-[#3F3E45]">
      <p className="font-poppins font-normal text-center text-[14px] leading-[27px] text-white">
        Copyright Ⓒ 2023 Funravel All Rights Reserved.
      </p>
      <p className="font-poppins font-normal text-center text-[12px] leading-[27px] text-dimWhite">
        contact: funravelapp@gmail.com
      </p>
    </div>
  </section>
);

export default Footer;
