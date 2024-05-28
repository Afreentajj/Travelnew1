import React from 'react';
import sunsetPic from '../assets/img/sunset pic.jpg'; // Import the sunset image
import { Button } from "@material-tailwind/react"; // Import Button from Material Tailwind
import { Link } from 'react-router-dom'; // Import Link from react-router-dom

const SunsetPicture = () => {
  return (
    <div className="relative flex flex-col justify-center items-center h-screen w-screen overflow-hidden">
      <img src={sunsetPic} alt="Sunset" className="absolute inset-0 w-full h-full object-cover" />
      <div className="absolute flex justify-center items-center h-full w-full">
        <div className="mb-8 flex gap-4">
          <div className="flex items-center gap-4">
            <Link to="/login">
              <Button variant="gradient" className="rounded-full" style={{ fontFamily: 'Arial, sans-serif' }}>
                LOGIN
              </Button>
            </Link>
            <Link to="/register">
              <Button variant="gradient" className="rounded-full" style={{ fontFamily: 'Arial, sans-serif' }}>
                REGISTER
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SunsetPicture;
