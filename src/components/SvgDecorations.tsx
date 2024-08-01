import React from "react"; // Import React library

// Define the SvgDecorations component
const SvgDecorations: React.FC = () => {
  return (
    <>
      {/* First SVG decoration - Positioned at the top-right corner for medium screens and above */}
      <div className="hidden z-[200] md:block absolute top-0 end-0 -translate-y-12 translate-x-20">
        <svg
          className="w-16 h-auto text-orange-500" // Styling: width 16, auto height, orange color
          width="121" // SVG width
          height="135" // SVG height
          viewBox="0 0 121 135" // SVG view box dimensions
          fill="none" // No fill color
          xmlns="http://www.w3.org/2000/svg" // SVG namespace
        >
          {/* Path for the first decoration */}
          <path
            d="M5 16.4754C11.7688 27.4499 21.2452 57.3224 5 89.0164" // Path data for the decoration
            stroke="currentColor" // Stroke color matches current text color
            strokeWidth="10" // Stroke width
            strokeLinecap="round" // Rounded stroke caps
          />
          {/* Path for the second decoration */}
          <path
            d="M33.6761 112.104C44.6984 98.1239 74.2618 57.6776 83.4821 5" // Path data for the decoration
            stroke="currentColor" // Stroke color matches current text color
            strokeWidth="10" // Stroke width
            strokeLinecap="round" // Rounded stroke caps
          />
          {/* Path for the third decoration */}
          <path
            d="M50.5525 130C68.2064 127.495 110.731 117.541 116 78.0874" // Path data for the decoration
            stroke="currentColor" // Stroke color matches current text color
            strokeWidth="10" // Stroke width
            strokeLinecap="round" // Rounded stroke caps
          />
        </svg>
      </div>

      {/* Second SVG decoration - Positioned at the bottom-left corner for medium screens and above */}
      <div className="hidden md:block absolute bottom-0 start-0 translate-y-10 -translate-x-32">
        <svg
          className="w-40 h-auto text-cyan-500" // Styling: width 40, auto height, cyan color
          width="347" // SVG width
          height="188" // SVG height
          viewBox="0 0 347 188" // SVG view box dimensions
          fill="none" // No fill color
          xmlns="http://www.w3.org/2000/svg" // SVG namespace
        >
          {/* Path for the second decoration */}
          <path
            d="M4 82.4591C54.7956 92.8751 30.9771 162.782 68.2065 181.385C112.642 203.59 127.943 78.57 122.161 25.5053C120.504 2.2376 93.4028 -8.11128 89.7468 25.5053C85.8633 61.2125 130.186 199.678 180.982 146.248L214.898 107.02C224.322 95.4118 242.9 79.2851 258.6 107.02C274.299 134.754 299.315 125.589 309.861 117.539L343 93.4426" // Path data for the decoration
            stroke="currentColor" // Stroke color matches current text color
            strokeWidth="7" // Stroke width
            strokeLinecap="round" // Rounded stroke caps
          />
        </svg>
      </div>
    </>
  );
};

export default SvgDecorations; // Export the SvgDecorations component as default
