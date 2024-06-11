import React, { useEffect } from 'react';
import Typed from 'typed.js';

const AutoType = () => {
  useEffect(() => {
    const options = {
      strings: ["Frontend Developer", "Backend Developer", "Fullstack Developer"],
      typeSpeed: 100,
      backSpeed: 100,
      loop: true
    };

    const typed = new Typed('.auto-type', options);
    
    // Destroy Typed instance during cleanup to prevent memory leaks
    return () => {
      typed.destroy();
    };
  }, []);

  return (
    <div className="auto-type"></div>
  );
}

export default AutoType;