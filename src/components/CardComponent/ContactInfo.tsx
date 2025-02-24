import React from "react";

interface ContactInfoProps {
  address: string;
  city: string;
  state: string;
  zip: string;
  phone: string;
}

const ContactInfo: React.FC<ContactInfoProps> = ({
  address,
  city,
  state,
  zip,
  phone,
}) => {
  return (
    <>
      <p className="text-[12px] dark:text-gray-200 text-[rgba(33,37,41,0.75)] leading-[15px] tracking-[0.1px]">
        {address}
      </p>
      <p className="text-[12px] dark:text-gray-200 text-[rgba(33,37,41,0.75)] leading-[18px] tracking-[0.1px]">
        {city}, {state} {zip}
      </p>
      <div className="flex items-center gap-2">
        <svg className="w-[12px] h-[12px]" viewBox="0 0 13 12" fill="none">
          <path
            d="M8.76014 0.576603C8.9406 0.140665 9.41639 -0.0913661 9.87107 0.0328527L11.9336 0.595353C12.3414 0.707853 12.625 1.07817 12.625 1.50004C12.625 7.29848 7.92342 12 2.12498 12C1.7031 12 1.33279 11.7164 1.22029 11.3086L0.657792 9.24613C0.533573 8.79145 0.765604 8.31567 1.20154 8.1352L3.45154 7.1977C3.83357 7.03832 4.27654 7.14848 4.5367 7.46957L5.48357 8.62504C7.13357 7.84457 8.46951 6.50863 9.24998 4.85863L8.09451 3.9141C7.77342 3.6516 7.66326 3.21098 7.82264 2.82895L8.76014 0.578946V0.576603Z"
            fill="#00A5B4"
          />
        </svg>
        <span className="text-[12px] dark:text-gray-200 text-[rgba(33,37,41,0.75)] leading-[18px] tracking-[0.1px]">{phone}</span>
      </div>
    </>
  );
};

export default ContactInfo;
