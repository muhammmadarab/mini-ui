import React from "react";

const Alert = ({ alertText }) => {
  return (
    <div
      className="p-4 mb-4 mt-10 text-sm text-red-800 rounded-lg bg-red-50 dark:bg-gray-800 dark:text-red-400"
      role="alert"
    >
      {alertText}
    </div>
  );
};

export default Alert;
