import React from 'react';
import { Link as RouterLink } from 'react-router-dom';
import MWImg from './images/www.wards.com_.png';
import MWpop from './images/MW-popup.png';

function Project_2() {
    const mwLink = "https://www.wards.com/";

  return (
      <div className='project-main'>

        <div className='project-container'>

            <div className='d-script'>
                <h1>Colony Brands</h1>
                <p>Colony Brands is my current place of employment. I have been working here for over 1.5 years, helping to maintain regular updates on 15+ eCommerce storefronts. My primary responsibilities involve updating homepages using HTML and CSS, and occasionally adding functionality with JavaScript. However, the most valuable lessons I’ve learned are about working in a professional environment and figuring out how to coordinate effectively with project managers, designers, merchandisers, and a team of developers.

T                   his particular example is from wards.com, our largest brand. To clarify, I am not responsible for the design or the entirety of the webpage. However, it serves as a good example of the work I do and the types of elements I develop.
</p>
            </div>

            <div className='preview'>
                <div className='mock-browse'>
                    <div className='header'>
                        <div className='toolBar'>
                            <span className='dots'>
                                <span className='dot red'></span>
                                <span className='dot yellow'></span>
                                <span className='dot green'></span>
                            </span>
                            <span className='search'>{mwLink}</span>
                            <span className='plus'>+</span>
                        </div>
                    </div>
                    <div className='content'>
                        <div className='pic'>
                        <picture>
                            <source media="(min-width: 768px)" srcSet="" />
                            <img alt="Project Preview" src={MWImg} />
                        </picture>

                        </div>
                    </div>
                </div>
            </div>

        </div>

        <div className='project-second'>
            <div className='d-script'>
                <h1>Featured Skills</h1>
                <p>As mentioned, this project showcases my HTML, CSS, and JavaScript skills. It also highlights my collaboration abilities, team coordination, and capacity to work under pressure and meet deadlines.</p>
                <span><a className='goTo' href={mwLink} target="_blank" rel="noopener noreferrer">go to site </a><span className='arrow'>></span></span>
            </div>

            <div className='preview'>
                <div className='mock-browse'>
                    <div className='header'>
                        <div className='toolBar'>
                            <span className='dots'>
                                <span className='dot red'></span>
                                <span className='dot yellow'></span>
                                <span className='dot green'></span>
                            </span>
                            <span className='search'>{mwLink}</span>
                            <span className='plus'>+</span>
                        </div>
                    </div>
                    <div className='content'>
                        <div className='pic'>
                        <picture>
                            <source media="(min-width: 768px)" srcSet="" />
                            <img alt="Project Preview" src={MWpop} />
                        </picture>

                        </div>
                    </div>
                </div>
            </div>
        </div>

      </div>
    
  );
}

export default Project_2;
