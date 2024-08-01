import React from "react"; // Import React library
import { IconLink } from "@tabler/icons-react"; // Import the Link icon from Tabler Icons

// Define the LinkPaste component with a handleLinkPaste prop
const LinkPaste = ({ handleLinkPaste }) => (
  <label htmlFor="link-input" className="cursor-pointer"> {/* Set up label to trigger text input */}
    <IconLink size={21} /> {/* Render the Link icon with size 21 */}
    <input
      type="text" // Specify input type as text
      id="link-input" // Associate with label via id
      className="hidden" // Hide the default text input
      onChange={handleLinkPaste} // Set the onChange handler to the provided handleLinkPaste function
    />
  </label>
);

export default LinkPaste; // Export the LinkPaste component as default
