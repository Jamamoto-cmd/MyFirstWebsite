import React from "react";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  return (
    <footer className="flex items-end justify-center bg-white dark:bg-black text-black dark:text-white shadow-md shadow-black dark:shadow-white w-full h-40">
      <p className="m-4">
        &copy; {currentYear} &nbsp; <i>Jonny Günther</i>
        &nbsp;&nbsp;&nbsp;&nbsp;All rights reserved.
      </p>
    </footer>
  );
};

export default Footer;
