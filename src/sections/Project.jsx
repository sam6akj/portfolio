import React from 'react';
import blockcahin_app from '../assets/project.png';
import employeeChurn from '../assets/employee-churn.png';
import dashboard from '../assets/dashboard.png';
import portfolio from '../assets/portfolio.png';

function Project() {
  const projects = [
    {
      id: 1,
      src: employeeChurn,
      link: '',
      repo: 'https://github.com/sam6akj/ChurnPrediction',
      buttonType: 'GitHub',
      about: 'Leveraged machine learning to build a predictive model for employee churn.'
    },
    {
      id: 2,
      src: dashboard,
      link: '',
      repo: 'https://github.com/sam6akj/Superstore-Sales-Analysis',
      buttonType: 'GitHub',
      about: 'Optimized Superstore sales strategy with SQL and Power BI, including a 15-day sales forecast.'
    },
    {
      id: 3,
      src: portfolio,
      link: '',
      repo: 'https://github.com/sam6akj/portfolio',
      buttonType: 'GitHub',
      about: 'Discover how my innovative web development and data insights create unique, functional, and visually captivating solutions'
    },
    {
      id: 4,
      src: blockcahin_app,
      link: 'https://aethereo.netlify.app/',
      repo: 'https://github.com/rahulkarda/Wave-Portal',
      about: 'Aethero: Send crypto globally with ease.',
      buttonType: 'Demo & GitHub'
    }
  ];

  return (
    <div name="project" className="bg-[#222] w-full text-white md:h-screen portfolio pt-56">
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-14 flex justify-center">
          <p className="text-5xl font-bold inline text-gray-400">My Projects</p>
        </div>
        
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0">
          {projects.map(({ id, src, link, repo, about, buttonType }) => (
            <div key={id} className="relative rounded-lg overflow-hidden duration-200 hover:scale-105">
              <img
                src={src}
                alt="projects"
                className="rounded-md w-full h-auto"
              />
              <div className="absolute inset-0 flex flex-col justify-start bg-black bg-opacity-75 opacity-0 hover:opacity-100 transition-opacity duration-300">
                <p className="text-gray-400 px-4 pt-4">{about}</p>
              </div>
              <div className="flex items-center justify-center mt-4">
                {buttonType === 'Demo & GitHub' && (
                  <button 
                    className="w-1/2 px-6 py-3 m-4 text-white hover:text-gray-400 transition duration-300 transform hover:scale-110" 
                    onClick={() => window.open(link, '_blank')}
                  >
                    Demo
                  </button>
                )}
                <button className="w-1/2 px-6 py-3 m-4 hover:text-gray-400 transition duration-300 transform hover:scale-110" onClick={() => window.open(repo, '_blank')}>
                  GitHub
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Project;
