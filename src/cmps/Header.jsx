import React from "react";
import { Avatar } from "@mui/material";
const Header = () => {
  return (
    <div className="avatar-container flex space-between align center">
      <Avatar
        alt="Remy Sharp"
        className="custom-avatar"
        sx={{
          overflow: "hidden",
          bgcolor: "primary.dark",
          "& img": {
            objectFit: "cover",
            height: "auto",
          },
        }}
        src="/images/avatar7.png"
      />
      <div className="work-status flex space-between align-center">
        <div className="dash"></div>
        <p className="font-Gilmer-Medium">Available For Work</p>
      </div>
    </div>
  );
};

export default Header;
