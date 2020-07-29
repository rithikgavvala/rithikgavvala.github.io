import React from 'react';
import {FaPython,FaJava, FaSwift} from 'react-icons/fa'
import {DiJavascript1, DiReact, DiBitbucket, DiGithubBadge, DiAndroid} from 'react-icons/di'

export default [{
  name: 'StaffTrack',
  render: (
    <div className='portfolio-item'>
      <div className='portfolio-item__title'>
        StaffTrack
      </div>
      <div className='portfolio-item__desc'>
      </div>
      <div className='portfolio-item__icon'>
        <i><DiReact/></i>
        <i className="fa fa-html5"></i>
        <i className="fa fa-css3"></i>
        <i><DiJavascript1 /></i>
      

      </div>
      <div className='portfolio-item__links'>
        <a target="_blank" rel="noopener noreferrer" href="https://github.com/rahulrajus/StaffTrak">Code</a>
      </div>
    </div>
  )
}, {
  name: 'SkipIt!',
  render: (
    <div className='portfolio-item'>
      <div className='portfolio-item__title'>
        SkipIt!
      </div>
      <div className='portfolio-item__desc'>
      </div>
      <div className='portfolio-item__icon'>
        <i><DiReact/></i>
          <i className="fa fa-html5"></i>
          <i className="fa fa-css3"></i>
          <i><DiJavascript1 /></i>
    
      </div>
      <div className='portfolio-item__links'>
        <a target="_blank" rel="noopener noreferrer" href="https://github.com/rithikgavvala/FindYourScene">Code</a>
      </div>
    </div>
  )
}, {
  name: 'react-mern-boilerplate',
  render: (
    <div className='portfolio-item'>
      <div className='portfolio-item__title'>
        React-Mern Boilerplate
      </div>
      <div className='portfolio-item__desc'>
      </div>
      <div className='portfolio-item__icon'>
      <i><DiReact/></i>
        <i className="fa fa-html5"></i>
        <i className="fa fa-css3"></i>
        <i><DiJavascript1 /></i>
    
      </div>
      <div className='portfolio-item__links'>
        <a target="_blank" rel="noopener noreferrer" href="https://github.com/rithikgavvala/mern-bp">Code</a>
      </div>
    </div>
  )
},
 {
  name: 'Trvlert',
  render: (
    <div className='portfolio-item'>
      <div className='portfolio-item__title'>
        Trvlert
      </div>
      <div className='portfolio-item__desc'>
      </div>
      <div className='portfolio-item__icon'>
        <i className="fab fa-js"><FaSwift /></i>
      </div>
      <div className='portfolio-item__links'>
        <a target="_blank" rel="noopener noreferrer" href="https://github.com/apaljug/trvlert">Code</a>
      </div>
    </div>
  )
}, {
  name: 'FinMap',
  render: (
    <div className='portfolio-item'>
      <div className='portfolio-item__title'>
        FinMap
      </div>
      <div className='portfolio-item__desc'>
      </div>
      <div className='portfolio-item__icon'>
      <i className="fa fa-html5"></i>
        <i className="fa fa-css3"></i>
        <i><DiJavascript1 /></i>
        <i><DiAndroid /></i>

      </div>
      <div className='portfolio-item__links'>
        <a target="_blank" rel="noopener noreferrer" href="https://github.com/vamsidesu5/finmap">Code</a>
      </div>
    </div>
  )
},{
  name: 'LiveStocks',
  render: (
    <div className='portfolio-item'>
      <div className='portfolio-item__title'>
        LiveStocks
      </div>
      <div className='portfolio-item__desc'>

      </div>
      <div className='portfolio-item__icon'>
        <i><DiReact/></i>
        <i className="fa fa-html5"></i>
        <i className="fa fa-css3"></i>
        <i><DiJavascript1 /></i>
      </div>
      <div className='portfolio-item__links'>
        <a target="_blank" rel="noopener noreferrer" href="https://github.com/rithikgavvala/livestocks">Code</a>
      </div>
    </div>
  )
},{
  name: 'Evolutionary Mechanics',
  render: (
    <div className='portfolio-item'>
      <div className='portfolio-item__title'>
        Evolutionary Mechanics
      </div>
      <div className='portfolio-item__desc'>
      </div>
      <div className='portfolio-item__icon'>
        <i><DiGithubBadge /></i>
        <i className="fa fa-python"><FaPython /> </i>
      </div>
      <div className='portfolio-item__links'>
        <a target="_blank" rel="noopener noreferrer" href="https://github.com/rithikgavvala/evolutionarymechanics">Code</a>
      </div>
    </div>
  )
}]