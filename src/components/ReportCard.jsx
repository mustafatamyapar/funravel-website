import { quotes } from "../assets";

const ReportCard = ({ name, title, download }) => (
  <div className="flex justify-between flex-col px-10 py-12 rounded-[20px]  w-[370px] md:mr-10 sm:mr-5 mr-0 my-5 feedback-card">
    <div className="flex  justify-center flex-row">
      <div className="flex justify-center flex-col ml-4">
        <h4 className="font-poppins font-semibold text-[20px] leading-[32px] text-white flex justify-center">
          {name}
        </h4>
        <p className="font-poppins font-normal text-[16px] leading-[24px] text-dimWhite">
          {title}
        </p>
      </div>
    </div>
    <div className="mt-4 flex justify-center">
    <a href={download} target="_blank" className="px-2 py-2 border-2 border-white text-white rounded-md">
        Download
      </a>
    </div>
  </div>
);

export default ReportCard;