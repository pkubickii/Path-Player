import React, { useEffect } from 'react';

const useLeafletScripts = () => {
  useEffect(() => {
    const link = document.createElement('link');
    const script = document.createElement('script');

    link.rel = 'stylesheet';
    link.href = 'https://unpkg.com/leaflet@1.7.1/dist/leaflet.css';
    link.integrity = 'sha512-xodZBNTC5n17Xt2atTPuE1HxjVMSvLVW9ocqUKLsCC5CXdbqCmblAshOMAS6/keqq/sMZMZ19scR4PsZChSR7A==';
    link.crossOrigin = '';

    document.body.appendChild(link);

    script.src = 'https://unpkg.com/leaflet@1.7.1/dist/leaflet.js';
    script.integrity = 'sha512-xodZBNTC5n17Xt2atTPuE1HxjVMSvLVW9ocqUKLsCC5CXdbqCmblAshOMAS6/keqq/sMZMZ19scR4PsZChSR7A==';
    script.crossOrigin = '';
    script.async = true;

    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
      document.body.removeChild(link);
    };
  }, []);
};

export default useLeafletScripts;
