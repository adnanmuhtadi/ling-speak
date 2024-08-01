import React from "react"; // Import React library
import { IconPaperclip } from "@tabler/icons-react"; // Import the Paperclip icon from Tabler Icons

// Define the FileUpload component with a handleFileUpload prop
const FileUpload = ({ handleFileUpload }) => (
  <label htmlFor="file-upload" className="cursor-pointer"> {/* Set up label to trigger file input */}
    <IconPaperclip size={21} /> {/* Render the Paperclip icon with size 21 */}
    <input
      type="file" // Specify input type as file
      id="file-upload" // Associate with label via id
      onChange={handleFileUpload} // Set the onChange handler to the provided handleFileUpload function
      className="hidden" // Hide the default file input
    />
  </label>
);

export default FileUpload; // Export the FileUpload component as default
