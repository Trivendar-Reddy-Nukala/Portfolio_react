import React, { useState, useEffect } from 'react';
import profile from './assets/profile.jpeg';

function Home() {
  const [displayedAlphabets, setDisplayedAlphabets] = useState('');
  const delay = 500;

  useEffect(() => {
    let currentLetterIndex = 0;

    setTimeout(() => {
      const intervalId = setInterval(() => {
        setDisplayedAlphabets((prev) => {
          const newDisplayed = prev + 'Welcome To My Portfolio'.split('')[currentLetterIndex];
          if (currentLetterIndex < 'Welcome To My Portfolio'.split('').length - 1) {
            currentLetterIndex++;
          } else {
            clearInterval(intervalId);
          }
          return newDisplayed;
        });
      }, delay);

      return () => clearInterval(intervalId);
    }, 0);
  }, []);

  return (
    <div className="d-flex align-items-center justify-content-center" style={{ height: '100vh', backgroundColor: 'black' }}>
      <div className="container">
        <div className="row justify-content-center my-3">
          <div className="col-12 col-md-6 text-center">
            <img src={profile} style={{ height: '300px', width: '300px', borderRadius: '50%' }} alt="Profile" />
          </div>
          <div className="col-12 col-md-6 text-center">
            <div style={{ fontSize: '3rem', textAlign: 'center', marginTop: '2rem', fontFamily: 'Times New Roman', color: 'white' }}>
              {displayedAlphabets}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;