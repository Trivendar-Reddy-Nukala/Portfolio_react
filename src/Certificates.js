import React from 'react';
import cisco from './assets/cisco_py.jpeg';
import hackathon from './assets/Hackathon.jpg';
import infosys from './assets/Infosys.jpg';
import nptel from './assets/nptel_c.jpeg';

function Certificates() {
  const imgarr = [cisco, hackathon, infosys, nptel];
  return (
    <div style={{backgroundColor:'black', color:'white', paddingTop: '5rem', height:'100%',padding:'5rem',fontSize:'25px'}}>
      <div className="row m-3">
        {imgarr.map((img, index) => (
          <div className="col-12 col-md-6 mb-4 p-3" key={index}>
            <img 
              src={img} 
              className="img-fluid" 
              alt={`Certificate ${index + 1}`} 
              style={{ width: '100%', height: 'auto' }} 
            />
          </div>
        ))}
      </div>
    </div>
  );
}

export default Certificates;
