'use client';

import { useEffect } from 'react';

export default function HomePage() {
  useEffect(() => {
 
    fetch('http://localhost:3001/save-ip', {
      method: 'POST',
    })
      .then((response) => response.json())
      .then((data) => {
        console.log('IP data:', data);
      })
      .catch((error) => console.error('Error saving IP:', error));
  }, []);

  return (
    <>
    
    </>
  );
}
