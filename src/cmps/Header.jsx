import React from "react";
import { Avatar } from "@mui/material";
const Header = () => {
  return (
    <div className="avatar-container flex space-between align center">
      <Avatar
        alt="Remy Sharp"
        sx={{
          width: "110px", // Width of the Avatar
          height: "110px", // Height of the Avatar
          overflow: "hidden", // Ensures no part of the image spills out
          bgcolor: "primary.dark",
          "& img": {
            objectFit: "cover", // Covers the available area
            // width: "100%",
            height: "auto",
            // transform: "translate(4%, 6%)",
          },
        }}
        src="/images/avatar7.png"
      />
      <div className="personal-blog ">
        <button>Blog</button>
      </div>
    </div>
  );
};

export default Header;
