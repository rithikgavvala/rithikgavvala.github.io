import * as React from 'react';
import {useState} from 'react';
import PropTypes from 'prop-types';
import './style.scss';
import {FaPython,FaJava} from 'react-icons/fa'
import {DiJavascript1, DiReact, DiBitbucket, DiGithubBadge} from 'react-icons/di'





function AboutItems(props, context) {
  const [description, setDescription] = useState("")
  const [isHidden, setHidden] = useState(false)
  const [highlight, setHighlight] = useState(false)
  const [exp1, setExp1] = useState("#1f2024")
  const [exp2, setExp2] = useState("#1f2024")
  const [exp3, setExp3] = useState("#1f2024")


  const handleClick = val => {
  

    if (val == 0){
      setExp1("#606470")
      setExp2("#1f2024")
      setExp3("#1f2024")
      setDescription(
        <ul>
              <li>
          Finetuned and engineered an unsupervised learning model that uses K-means clustering for labeling and classifying
          personal identification documents such as bank statements, passports, tax documents, etc.
          </li>
          <li>
          Utilized supervised learning to develop a BERT-based ML model to classify OCR-scanned text to indicate document
          type based on a pre-existing set of labels.
          </li>
          <li>
          Planned and implemented a wrapper Python class to generate synthetic data for creating a training set using Pandas
          that accounted for common errors in OCR-scanned text and labeled documents.
          </li>


        </ul>
   

  

      )
  
    }
    else if (val == 1){
      setExp1("#1f2024")
      setExp2("#606470")
      setExp3("#1f2024")
      setDescription(<ul>
        <li>
        Created and designed a user interface in React.js for identifying discrepancies in member enrollment health insurance data throughout the transaction pipeline utilizing Redux for state management.
        </li>
        <li>
        Administered IBM DB2 and MongoDB databases and added support via Java and Node.js for discrepancy monitoring during thousands of transactions.

        </li>
        <li>
        Developed a REST API using Node.js and Express.js for member data analytics and custom data querying.
        </li>

      </ul>	
        
        
        )
    }
    else if(val == 2){
      setExp1("#1f2024")
      setExp2("#1f2024")
      setExp3("#606470")
      setDescription(
        <ul>
          <li>
          Developed a front-end user interface for organizing and archiving images for a client. Created a Java program to extract the EXIF data from .jpeg files and import them into a database.
          </li>
          <li>
          Leveraged Java Database Connectivity (JDBC) frameworks to create a database that organized EXIF metadata from .jpeg files.
          </li>
        </ul>
      )
    }

    if (isHidden == false){
      setHidden(true)
    }
  }




  return (

<div>
    <div className="portfolio-wrapper" >
      <div className='portfolio-item' style={{backgroundColor: exp1}} onClick={(val) => handleClick(0)}>
      <div className='portfolio-item__title'>
        American Express (2020)
      </div>

      <div className='portfolio-item__icon'>
        <i><DiGithubBadge /></i>
        <i className="fa fa-python"><FaPython /> </i>
        <i><DiBitbucket /></i>

      </div>
    </div>
        <div className='portfolio-item' style={{backgroundColor: exp2}}  onClick={(val) => handleClick(1)}>
        <div className='portfolio-item__title'>
          Florida Blue (2019)
        </div>

        <div className='portfolio-item__icon'>
          <i><DiReact/></i>
          <i className="fa fa-html5"></i>
          <i className="fa fa-css3"></i>
          <i><DiJavascript1 /></i>
  
        </div>
      </div>
      <div className='portfolio-item' style={{backgroundColor: exp3}}  onClick={(val) => handleClick(2)}>
      <div className='portfolio-item__title'>
        Blink! Photogroup (2018)
      </div>
      <div className='portfolio-item__icon'>
        <i className="fa fa-html5"></i>
        <i className="fa fa-css3"></i>
        <i className="fab fa-js"><FaJava/></i>



      </div>

    </div>

    </div>
    {
      isHidden &&
        <div>
          {description}
        </div>
        

    }
 
  </div>  

  );
};



export default AboutItems;
