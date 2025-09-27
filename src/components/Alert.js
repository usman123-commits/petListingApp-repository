import React, { useContext, useEffect } from "react";
import {NoteContext} from "../context/notes/NoteState";

const Alert = () => {
  const { Alert, setAlert } = useContext(NoteContext);

  // Automatically clear alert after 4 seconds
  useEffect(() => {
    if (Alert) {
      const timer = setTimeout(() => {
        setAlert(""); 
      }, 4000);
      return () => clearTimeout(timer); 
    }
  }, [Alert]); 

  // Extract type and message from Alert using destructuring
  const { type: alertType, message: alertMessage } = Alert || {};

  return (
    <div 
      style={{ position: 'sticky', top: '58px', zIndex: '1000', width: '100%' }} 
      className={Alert ? '' : 'invisible'} // Hide the alert if no message is present
    >
      {Alert && (
        <div 
          className={`alert alert-${alertType} d-flex justify-content-between align-items-center`} 
          role="alert" 
          aria-live="assertive"
        >
          <span>{alertMessage} !</span>
          <button 
            type="button" 
            className="btn-close" 
            aria-label="Close" 
            onClick={() => setAlert("")}
            style={{ border: 'none', background: 'transparent' }}
          >
            ✕
          </button>
        </div>
      )}
    </div>
  );
};

export default Alert;
