import React from 'react';
import {FaPython,FaJava} from 'react-icons/fa'
import {DiJavascript1, DiReact, DiBitbucket, DiGithubBadge} from 'react-icons/di'
export default [{
  name: 'American Express',
  render: (
    <div className='portfolio-item'>
      <div className='portfolio-item__title'>
        American Express (2020)
      </div>
      <div className='portfolio-item__desc'>
        *insert description here*
      </div>
      <div className='portfolio-item__icon'>
        <i><DiGithubBadge /></i>
        <i className="fa fa-python"><FaPython/> </i>
        <i><DiBitbucket/></i>
        
      </div>
    </div>
  )
}, {
  name: 'Florida Blue',
  render: (
    <div className='portfolio-item'>
      <div className='portfolio-item__title'>
        Florida Blue (2019)
      </div>
      <div className='portfolio-item__desc'>
        *insert description here*
      </div>
      <div className='portfolio-item__icon'>
        <i><DiReact/></i>
        <i className="fa fa-html5"></i>
        <i className="fa fa-css3"></i>
        <i><DiJavascript1 /></i>

      </div>
      

    </div>
  )
}, {
  name: 'Blink! Photogroup',
  render: (
    <div className='portfolio-item'>
      <div className='portfolio-item__title'>
        Blink! Photogroup (2018)
      </div>
      <div className='portfolio-item__desc'>
       *insert description here*
      </div>
      <div className='portfolio-item__icon'>
        <i className="fa fa-html5"></i>
        <i className="fa fa-css3"></i>
        <i className="fab fa-js"><FaJava/></i>



      </div>

    </div>
  )
}]