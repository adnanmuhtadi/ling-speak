import React, { useEffect } from "react"; // Import React and useEffect hook
import SpeechRecognition, { useSpeechRecognition } from "react-speech-recognition"; // Import SpeechRecognition and hook
import { IconMicrophone } from "@tabler/icons-react"; // Import the Microphone icon from Tabler Icons

// Define the SpeechRecognitionComponent with a setSourceText prop
const SpeechRecognitionComponent = ({ setSourceText }) => {
  const { transcript, listening } = useSpeechRecognition(); // Destructure transcript and listening state from the hook

  // useEffect to update source text whenever transcript changes
  useEffect(() => {
    setSourceText(transcript); // Set the source text to the current transcript
  }, [transcript, setSourceText]); // Dependencies: transcript and setSourceText

  // Function to handle voice recording
  const handleVoiceRecording = () => {
    if (listening) {
      SpeechRecognition.stopListening(); // Stop listening if already listening
    } else {
      SpeechRecognition.startListening({ continuous: true }); // Start listening continuously if not listening
    }
  };

  return (
    <div>
      <IconMicrophone
        size={22} // Set the icon size to 22
        className="text-gray-400" // Apply gray color to the icon
        onClick={handleVoiceRecording} // Set onClick handler to toggle voice recording
      />
    </div>
  );
};

export default SpeechRecognitionComponent; // Export the SpeechRecognitionComponent as default
