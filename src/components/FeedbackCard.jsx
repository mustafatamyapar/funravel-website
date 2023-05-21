import { quotes } from "../assets";

const FeedbackCard = ({ content, name, title, img , logbookLink, linkedinLink}) => (
  <div className="flex justify-between flex-col px-10 py-12 rounded-[20px]  max-w-[370px] md:mr-10 sm:mr-5 mr-0 my-5 feedback-card">
    <div className="flex flex-row">
    <img src={img} alt={name} className="w-[188px] h-[188px] rounded-lg" style={{ borderRadius: '8px' }} />
      <div className="flex flex-col ml-4">
        <a href={linkedinLink} target="_blank" className="font-poppins font-semibold text-[20px] leading-[32px] text-pink">
          {name}
        </a>
        <p className="font-poppins font-normal text-[16px] leading-[24px] text-blue">
          {title}
        </p>
        <a
        href={logbookLink}
        target="_blank"
        className="font-poppins font-normal text-[14px] text-dimWhite"
      >
        Logbook
      </a>
      </div>
    </div>
  </div>
);


export default FeedbackCard;
