import React from "react";

interface StarRatingProps {
  rating: number;
  reviewCount: number;
}

const StarRating: React.FC<StarRatingProps> = ({ rating, reviewCount }) => {
  return (
    <div className="flex items-center gap-1">
      <svg className="w-[14px] h-[12px]" viewBox="0 0 14 12" fill="none">
        <path
          d="M7.63046 0.421875C7.50624 0.164062 7.24374 0 6.95546 0C6.66718 0 6.40702 0.164062 6.28046 0.421875L4.77343 3.52266L1.4078 4.01953C1.12655 4.06172 0.89218 4.25859 0.805461 4.52812C0.718742 4.79766 0.789055 5.09531 0.990617 5.29453L3.43281 7.71094L2.85624 11.1258C2.80937 11.407 2.92655 11.693 3.15859 11.8594C3.39062 12.0258 3.69765 12.0469 3.95077 11.9133L6.95781 10.3078L9.96484 11.9133C10.218 12.0469 10.525 12.0281 10.757 11.8594C10.9891 11.6906 11.1062 11.407 11.0594 11.1258L10.4805 7.71094L12.9226 5.29453C13.1242 5.09531 13.1969 4.79766 13.1078 4.52812C13.0187 4.25859 12.7867 4.06172 12.5055 4.01953L9.13749 3.52266L7.63046 0.421875Z"
          fill="#00A5B4"
        />
      </svg>
      <span className="text-[11px] font-[Inter] dark:text-gray-200 text-[#003542]">
        {rating}/5 ({reviewCount})
      </span>
    </div>
  );
};

export default StarRating;
