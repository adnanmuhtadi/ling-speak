import React from "react"; // Import React library
import { IconLanguage } from "@tabler/icons-react"; // Import the Language icon from Tabler Icons

// Define the LanguageSelector component with props: selectedLanguage, setSelectedLanguage, languages
const LanguageSelector = ({
  selectedLanguage, // Currently selected language
  setSelectedLanguage, // Function to update the selected language
  languages, // Array of available languages
}) => (
  <span
    className="cursor-pointer rounded-full space-x-1 pl-2
   bg-[#000000] flex items-center flex-row" // Styling for the container: pointer cursor, rounded, padding-left, background color, flexbox layout, center-aligned items
  >
    <IconLanguage size={20} /> {/* Render the Language icon with size 20 */}
    <select
      value={selectedLanguage} // Set the value of the select to the currently selected language
      onChange={(e) => setSelectedLanguage(e.target.value)} // Update selected language on change
      className="bg-[#000000] flex flex-row rounded-full py-1
       text-white" // Styling for the select element: background color, flexbox layout, rounded, padding, white text
    >
      {languages.map((language) => ( // Iterate over the languages array and create an option for each language
        <option key={language} value={language}> {/* Use language as the key and value */}
          {language} {/* Display the language */}
        </option>
      ))}
    </select>
  </span>
);

export default LanguageSelector; // Export the LanguageSelector component as default
