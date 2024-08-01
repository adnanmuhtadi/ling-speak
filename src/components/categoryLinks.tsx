import React from "react"; // Import React library
import {
  IconBriefcase, // Import the Briefcase icon
  IconBulb, // Import the Bulb icon
  IconSchool, // Import the School icon
  IconWriting, // Import the Writing icon
  IconMoodSmile, // Import the MoodSmile icon
  IconHeart, // Import the Heart icon
} from "@tabler/icons-react"; // Import icons from Tabler Icons

// Define an array of category objects with icon and label properties
const categories = [
  { icon: IconBriefcase, label: "Business" }, // Business category with Briefcase icon
  { icon: IconSchool, label: "Education" }, // Education category with School icon
  { icon: IconBulb, label: "Creative" }, // Creative category with Bulb icon
  { icon: IconHeart, label: "Health" }, // Health category with Heart icon
  { icon: IconWriting, label: "Journaling" }, // Journaling category with Writing icon
  { icon: IconMoodSmile, label: "Communication" }, // Communication category with MoodSmile icon
];

// Define the CategoryLinks component
const CategoryLinks: React.FC = () => {
  return (
    <div className="mt-10 sm:mt-20"> {/* Container with top margin, responsive */}
      {categories.map(({ icon: Icon, label }) => ( // Map over categories array to generate links
        <a
          key={label} // Use the label as the key for each link
          className="m-1 py-2 px-3 inline-flex 
          items-center gap-x-2 text-sm font-medium 
          rounded-lg border border-gray-200 
          bg-white text-gray-800 shadow-sm hover:bg-gray-50
           disabled:opacity-50 disabled:pointer-events-none
            dark:bg-neutral-900 dark:border-neutral-700
             dark:text-white dark:hover:bg-neutral-800" // Styling for the link: margin, padding, inline-flex, text size, font weight, rounded corners, border, background color, text color, shadow, hover effects, dark mode styling
          href="#" // Placeholder link (doesn't navigate)
        >
          <Icon size={18} /> {/* Render the icon with size 18 */}
          {label} {/* Render the label */}
        </a>
      ))}
    </div>
  );
};

export default CategoryLinks; // Export the CategoryLinks component as default
