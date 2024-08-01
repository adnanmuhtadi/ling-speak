import React from "react"; // Import React library

// Define the IconButton component with props: Icon and onClick
const IconButton = ({ Icon, onClick }) => (
  <span
    className="cursor-pointer flex items-center space-x-2" // Add styles: cursor pointer, flex container, space between items
    onClick={onClick} // Set the onClick handler
  >
    <Icon size={22} /> // Render the passed Icon component with size 22
  </span>
);

export default IconButton; // Export the IconButton component as default
