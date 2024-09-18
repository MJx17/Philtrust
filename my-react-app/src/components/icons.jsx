// CustomArrows.js
import React from 'react';
import EastIcon from '@mui/icons-material/East';
import WestIcon from '@mui/icons-material/West';
import '../styles/home.scss'; // Add your CSS styles here

export const CustomArrows = ({ prevRef, nextRef }) => {
  return (
    <>
      <button className="custom-prev-button" ref={prevRef}>
        <WestIcon fontSize="large" />
      </button>
      <button className="custom-next-button" ref={nextRef}>
        <EastIcon fontSize="large" />
      </button>
    </>
  );
};

export default CustomArrows;
