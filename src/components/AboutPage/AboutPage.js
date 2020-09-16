import React from 'react';
import ScrollToNext from '../../components/ScrollToNext/ScrollToNext';
import './style.scss';
import PortfolioItem from '../../components/PortfolioItem/PortfolioItem';
import portfolioItems from './portfolio-items';
import AboutItems from '../AboutItem/AboutItems';

import { Timeline, TimelineItem }  from 'vertical-timeline-component-for-react';
import { findRenderedComponentWithType } from 'react-dom/test-utils';

import {FaPython,FaJava} from 'react-icons/fa'
import {DiJavascript1, DiReact, DiBitbucket, DiGithubBadge} from 'react-icons/di'

const AboutPage = (props, context) => {

  return (
    <div className="about-page">
      <div className="content-grid">
        <h1>About</h1>
        <div className="about-container"> 
          <div className="about-content">
              <p style={{  'font-size': "1.125rem", 'font-weight':'400'}}>
                A CS-minded student that is self-driven, self-learning, and highly-motivated and can perform very efficiently with minimal oversight. Using his scientific and computing background, he can apply the skills necessary to accomplish any technical task at hand in a timely fashion. Experienced in data management and application development and further interested in artificial intelligence, machine learning, and Big Data.
              </p>
            </div>
            <div className="column">
              <Timeline  
                animate={true}
                lineColor={'#37474F'}
              >
                <TimelineItem
                  key='001'
                  style={{'color':"#F9A825", 'background':"#F9A825", backgroundColor: "#F9A825"}}
                  color="#F9A825"
                  background="#37474F"
                  dateText="June 2020 – August 2020"
                  dateInnerStyle={{ background: '#37474F', color: '#F9A825' }}
                  bodyContainerStyle={{
                    width: '125%',
                    background: '#37474F',
                    color:'#F9A825',
                    padding: '20px',
                    borderRadius: '8px',
                    boxShadow: '0.5rem 0.5rem 2rem 0 rgba(0, 0, 0, 0.2)',
                  }}
                >
                  <div className="job-row">
                    <div className="job-column">         <div className="job-title">
                      American Express
                        <div className="job-subheading">
                        Software Engineering Intern
                      </div>
                    </div></div>
                    <div className="job-column"> 
                      <div className='portfolio-item__icon'>
                      <i><DiGithubBadge /></i>
                      <i className="fa fa-python"><FaPython/> </i>
                      <i><DiBitbucket/></i></div>

                    </div>
                    
                  
                  </div>
             
                  
                
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

                </TimelineItem>
        
                       <TimelineItem
                  key='002'
                  background="#37474F"
                  style={{'color':"#F9A825", 'background':"#F9A825"}}

                  dateText="May 2019 – August 2019"
                  dateInnerStyle={{ background: '#37474F', color: '#F9A825' }}
                  bodyContainerStyle={{
                    width: '125%',
                    background: '#37474F',
                    color:'#F9A825',
                    padding: '20px',
                    borderRadius: '8px',
                    boxShadow: '0.5rem 0.5rem 2rem 0 rgba(0, 0, 0, 0.2)',
                  }}
                >
                           <div className="job-row">
                    <div className="job-column">         <div className="job-title">
                      Florida Blue
                        <div className="job-subheading">
                        Software Engineering Intern
                      </div>
                    </div></div>
                    <div className="job-column"> 
                      <div className='portfolio-item__icon'>
                      <i><DiReact/></i>
                      <i className="fa fa-html5"></i>
                      <i className="fa fa-css3"></i>
          <i><DiJavascript1 /></i>
                      
                      
                      
                      </div>

                    </div>
                    
                  
                  </div>
              
                  <ul>
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



                </TimelineItem>
                <TimelineItem
                  key='003'
                  background="#37474F"
                  style={{'color':"#F9A825", 'background':"#F9A825"}}

                  dateText="May 2018 – August 2018"
                  dateInnerStyle={{ background: '#37474F', color: '#F9A825' }}
                  bodyContainerStyle={{
                    width: '125%',
                    background: '#37474F',
                    color:'#F9A825',
                    padding: '20px',
                    borderRadius: '8px',
                    boxShadow: '0.5rem 0.5rem 2rem 0 rgba(0, 0, 0, 0.2)',
                  }}
                >
         <div className="job-row">
                    <div className="job-column">         <div className="job-title">
                      Blink! Photogroup
                        <div className="job-subheading">
                        Software Engineering Intern
                      </div>
                    </div></div>
                    <div className="job-column"> 
                      <div className='portfolio-item__icon'>
                      <i className="fa fa-html5"></i>
        <i className="fa fa-css3"></i>
        <i className="fab fa-js"><FaJava/></i>
                      
                      
                      
                      </div>

                    </div>
                    
                  
                  </div>
                  <ul>
          <li>
          Developed a front-end user interface for organizing and archiving images for a client. Created a Java program to extract the EXIF data from .jpeg files and import them into a database.
          </li>
          <li>
          Leveraged Java Database Connectivity (JDBC) frameworks to create a database that organized EXIF metadata from .jpeg files.
          </li>
        </ul>


                </TimelineItem>
                
               




      
           
              </Timeline>
              

            </div>
              
       

        </div>
 

      
     
          </div>
      <ScrollToNext pageSelector=".portfolio-page" />
    </div>
  );
};


export default AboutPage;
