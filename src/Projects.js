import React from 'react';

function Projects() {
  const info = [
    {
      title: "Medical Store Management System",
      description: "PYTHON, libraries like tkinter, pandas, matplotlib",
      link: "https://github.com/Trivendar-Reddy-Nukala/Medical-Store-Management-System"
    },
    {
      title: "Tic-Tac-Toe",
      description: "HTML, CSS, Javascript",
      link: "https://github.com/Trivendar-Reddy-Nukala/Tic-Tac-Toe"
    },
  ];

  return (
    <div style={{backgroundColor:'black', color:'white', paddingTop: '5rem', height:'100vh',padding:'5rem'}}>
      <div className='row my-3'>
        {info.map(({ title, description, link }) => (
          <div className='col-12 col-md-6 mb-4 my-1'  key={title}>
            <div className='card' style={{border:'1px solid white'}}>
              <div className='card-body' style={{backgroundColor:'black',color:'white'}}>
                <h5 className='card-title'>{title}</h5>
                <p className='card-text'>{description}</p>
                <a href={link} className='card-link'>Project Link</a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Projects;
