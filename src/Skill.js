import React from 'react';
import c from './assets/c_photo.png';
import python from './assets/py_photo.jpg';
import javascript from './assets/js_photo.png';
import html from './assets/html_phot.png';
import css from './assets/css_photo.jpg';

function Skill() {
  const Parrimg = [c, python, javascript]; 
  const Darrimg = [html, css, javascript];

  return (
    <div style={{backgroundColor:'black', color:'white', paddingTop: '5rem', height:'100%',padding:'5rem',fontSize:'25px'}}>
      <div className='row my-3'>
        <h3>Programming Languages</h3>
        <div className='d-flex flex-wrap justify-content-around'>
          {Parrimg.map((img, index) => (
            <div className='p-2' key={index}>
              <img src={img} className="img-thumbnail" alt={`Skill ${index + 1}`} style={{ height: '150px', width: '150px' }} />
            </div>
          ))}
        </div>
      </div>
      <div className='row my-3'>
        <h3>Development Languages</h3>
        <div className='d-flex flex-wrap justify-content-around'>
          {Darrimg.map((img, index) => (
            <div className='p-2' key={index}>
              <img src={img} className="img-thumbnail" alt={`Skill ${index + 1}`} style={{ height: '150px', width: '150px' }} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Skill;
