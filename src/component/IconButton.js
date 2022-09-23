import React from "react";



const IconButton = ({ icon: Icon, label }) => {
    return (
        <button className="flex item-center space-x-2 hover:text-white">
            <Icon className="icon" />
            <span className="">{label}</span>
        </button>
    );
};

export default IconButton;
