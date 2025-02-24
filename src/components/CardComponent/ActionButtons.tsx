import React from "react";

const ActionButtons: React.FC = () => {
  const buttons = [
    {
      icon: (
        <svg
          className="w-[20px] h-[16px] mx-auto mb-1"
          viewBox="0 0 21 17"
          fill="none"
        >
          <path
            d="M1.5875 6.5H19.2844C19.9187 6.5 20.4344 5.98438 20.4344 5.35C20.4344 5.12187 20.3656 4.9 20.2406 4.7125L17.8813 1.16875C17.6031 0.75 17.1375 0.5 16.6344 0.5H4.24062C3.74062 0.5 3.27188 0.75 2.99375 1.16875L0.63125 4.70937C0.50625 4.9 0.4375 5.12188 0.4375 5.34688C0.4375 5.98438 0.953125 6.5 1.5875 6.5ZM2.4375 7.5V12.5V15C2.4375 15.8281 3.10938 16.5 3.9375 16.5H10.9375C11.7656 16.5 12.4375 15.8281 12.4375 15V12.5V7.5H10.4375V12.5H4.4375V7.5H2.4375ZM16.4375 7.5V15.5C16.4375 16.0531 16.8844 16.5 17.4375 16.5C17.9906 16.5 18.4375 16.0531 18.4375 15.5V7.5H16.4375Z"
            fill="#00A5B4"
          />
        </svg>
      ),
      text: "Clinic Page",
    },
    {
      icon: (
        <svg
          className="w-[16px] h-[16px] mx-auto mb-1"
          viewBox="0 0 17 17"
          fill="none"
        >
          <path
            d="M7.17812 0.865625C7.66563 0.378125 8.45625 0.378125 8.94687 0.865625L15.6969 7.61562C16.1844 8.10313 16.1844 8.89375 15.6969 9.38437L8.94687 16.1344C8.45937 16.6219 7.66875 16.6219 7.17812 16.1344L0.428125 9.38437C-0.059375 8.89687 -0.059375 8.10625 0.428125 7.61562L7.17812 0.865625Z"
            fill="#00A5B4"
          />
        </svg>
      ),
      text: "Google Maps",
    },
    {
      icon: (
        <svg
          className="w-[16px] h-[16px] mx-auto mb-1"
          viewBox="0 0 17 17"
          fill="none"
        >
          <path
            d="M7.80312 0.865625C8.29063 0.378125 9.08125 0.378125 9.57187 0.865625L16.3219 7.61562C16.8094 8.10313 16.8094 8.89375 16.3219 9.38437L9.57187 16.1344C9.08437 16.6219 8.29375 16.6219 7.80312 16.1344L1.05313 9.38437C0.565625 8.89687 0.565625 8.10625 1.05313 7.61562L7.80312 0.865625Z"
            fill="#00A5B4"
          />
        </svg>
      ),
      text: "Apple Maps",
    },
  ];

  return (
    <div className="flex gap-8 mt-4">
      {buttons.map((button, index) => (
        <div key={index} className="text-center">
          {button.icon}
          <p className="text-[12px] dark:text-gray-200 text-[rgba(33,37,41,0.75)] leading-[18px] tracking-[0.1px]">
            {button.text.split(" ").map((word, i) => (
              <React.Fragment key={i}>
                {word}
                {i < button.text.split(" ").length - 1 && <br />}
              </React.Fragment>
            ))}
          </p>
        </div>
      ))}
    </div>
  );
};

export default ActionButtons;
