import React from "react"; // Import React library

// Define the TextArea component with props: id, value, onChange, placeholder
const TextArea = ({ id, value, onChange, placeholder }) => (
  <textarea
    rows={5} // Set the number of rows to 5
    id={id} // Assign the id prop to the textarea
    className="py-2.5 px-4 border-none focus:outline-none block w-full border-transparent 
    rounded-lg dark:bg-neutral-900 dark:border-transparent dark:text-neutral-400" // Styling: padding, border styles, focus outline, block display, full width, rounded corners, dark mode styles
    placeholder={placeholder} // Set the placeholder text
    value={value} // Set the value of the textarea
    onChange={onChange} // Handle change events with the onChange prop
  />
);

export default TextArea; // Export the TextArea component as default
