import React, { Fragment } from 'react'
// import { useState,useEffect } from 'react';
import c from './CustomData.json'
export default function AboutSection() {
 
  return (
    <> {/* About Section Starts */}
    <section className="about-me" id="about">
      <div className="container">
        {/* Section Title Starts */}
        <div className="row text-center">
          <div className="title">
            <h2 className="center-align text-uppercase">
              <span>{c.about} </span>
              <span>{c.me}</span>
            </h2>
            <span className="title-bg">{c.resume}</span>
          </div>
        </div>
        {/* Section Title Ends */}
        {/* Resume Starts */}
        <div className="resume-container">
          <div className="row">
            {/* Resume Menu Starts */}
            <div className="resume-list col-md-4 hidden-sm hidden-xs">
              <div className="resume-list-item is-active" data-index={0} id="resume-list-item-0">
                <div className="resume-list-item-inner inner-personal-informations">
                  <h6 className="resume-list-item-title uppercase"><i className="fa fa-vcard" /> {c.profileName}</h6>
                </div>
              </div>
              <div className="resume-list-item" data-index={1} id="resume-list-item-1">
                <div className="resume-list-item-inner inner-experience">
                  <h6 className="resume-list-item-title uppercase"><i className="fa fa-briefcase" /> {c.experience}</h6>
                </div>
              </div>
              <div className="resume-list-item" data-index={2} id="resume-list-item-2">
                <div className="resume-list-item-inner inner-education">
                  <h6 className="resume-list-item-title uppercase"><i className="fa fa-graduation-cap" /> {c.education}</h6>
                </div>
              </div>
              <div className="resume-list-item" data-index={3} id="resume-list-item-3">
                <div className="resume-list-item-inner inner-skills">
                  <h6 className="resume-list-item-title uppercase"><i className="fa fa-star" /> {c.skills}</h6>
                </div>
              </div>
            </div>
            {/* Resume Menu Ends */}
            {/* Resume Content Starts */}
            <div className="col-md-8 resume-cards-container col-sm-12">
              <div className="resume-cards">
                {/* Peronsal Informations Starts */}
                <div className="resume-card resume-card-0 front" data-index={0}>
                  {/* Experience Header Title Starts */}
                  <div className="resume-card-header">
                    <div className="resume-card-name"><i className="fa fa-vcard" /> {c.profileName}</div>
                  </div>
                  {/* Experience Header Title Ends */}
                  {/* Peronsal Informations Content Starts */}
                  <div className="resume-card-body personal-informations">
                    <div className="row resume-card-body-container second-font">
                      <div className="col-xs-12 p-0">
                        <p className="second-font">
                          {c.profileText}
                        </p>
                      </div>
                      <div className="col-md-6 col-sm-12 p-0">
                        <ul className="second-font list-1 unstyled">
                          <li><span>First Name: </span>{c.firstName}</li>
                          <li><span>Last Name: </span>{c.lastName}</li>
                          <li><span>Date of birth: </span>{c.dob} </li>
                          <li><span>Job: </span>{c.job} </li>
                          <li><span>Nationality: </span>{c.nationality}</li>
                          <li><span>Freelance: </span>{c.freelance}</li>
                        </ul>
                      </div>
                      <div className="col-md-6 col-sm-12 p-0">
                        <ul className="second-font list-2 unstyled">
                          <li><span>Phone: </span>{c.phone}</li>
                          <li><span>Residence: </span>{c.residence}</li>
                          <li><span>Email: </span>{c.email}</li>
                          <li><span>Spoken Langages: </span>{c.spokenLanguages.join(", ")}</li>
                          <li><span>Skype: </span>{c.skypeName}</li>
                          <li><span>Whatsapp: </span>{c.whatsappNo}</li>
                        </ul>
                      </div>
                      <div className="col-xs-12 buttons">
                        <a href="/#" className="btn btn-primary">
                          <i className="fa fa-file-pdf-o" /> Download my Resume 
                        </a>
                        <a target="_blank" href="blog.html" className="btn btn-primary secondary">
                          <i className="fa fa-edit" /> visit My Blog 
                        </a>
                      </div>
                    </div>
                  </div>
                  {/* Peronsal Informations Content Starts */}
                </div>
                {/* Peronsal Informations Ends */}
                {/* Experience Starts */}
                <div className="resume-card resume-card-1" data-index={1}>
                  {/* Experience Header Title Starts */}
                  <div className="resume-card-header">
                    <div className="resume-card-name"><i className="fa fa-briefcase" /> {c.experience}</div>
                  </div>
                  {/* Experience Header Title Ends */}
                  {/* Experience Content Starts */}
                  <div className="resume-card-body experience">
                    
                    <div className="resume-card-body-container second-font">
                      {
                      Object.values(c.experiences).map((item, index)=>{
                        return (
                        <Fragment key={"res"+index}>
                          {/* Single Experience Starts */}
                          <div className="resume-content">
                          <h6 className="uppercase"><span>{item.type} - </span>{item.value}</h6>
                          <span className="date"><i className="fa fa-calendar-o" /> {item.from} - {item.to}</span>
                          <p className="second-font">{item.details}</p>
                          </div>
                          {/* Single Experience Ends */}
                          <span className="separator" />
                        </Fragment>)
                      })
                      }
                      
                    </div>
                  </div>
                  {/* Experience Content Starts */}
                </div>
                {/* Experience Ends */}
                {/* Education Starts */}
                <div className="resume-card resume-card-2" data-index={2}>
                  {/* Experience Header Title Starts */}
                  <div className="resume-card-header">
                    <div className="resume-card-name"><i className="fa fa-graduation-cap" /> Education</div>
                  </div>
                  {/* Experience Header Title Ends */}
                  <div className="resume-card-body education">
                    <div className="resume-card-body-container second-font">
                      {
                        Object.values(c.edu).map((currentItem, index)=>{
                          return (
                            <Fragment key={'res'+index}>
                          {/* Single Education Starts */}
                          <div className="resume-content">
                            <h6 className="uppercase"><span>{currentItem.type} - </span>{currentItem.value}</h6>
                            <span className="date"><i className="fa fa-calendar-o" /> {currentItem.from} - {currentItem.to}</span>
                            <p className="second-font">{currentItem.details}</p>
                          </div>
                          {/* Single Education Ends */}
                          <span className="separator" />
                        </Fragment>
                        )    
                        })
                      }
                      
                    </div>
                  </div>
                </div>
                {/* Education Ends */}
                {/* Skills Starts */}
                <div className="resume-card resume-card-3" data-index={3}>
                  {/* Experience Header Title Starts */}
                  <div className="resume-card-header">
                    <div className="resume-card-name"><i className="fa fa-star" /> Skills</div>
                  </div>
                  {/* Experience Header Title Ends */}
                  <div className="resume-card-body skills">
                    <div className="resume-card-body-container second-font">
                      <div className="row">
                        {/* Skills Row Starts */}
                        
                        <div className="col-xs-6">

                        {
                          Object.values(c.skill.row0).map((currentItem, index)=>{
                            return(
                              <Fragment key={'skill'+index}>
                                {/* Single Skills Starts */}
                                <div className="resume-content">
                                  <h6 className="uppercase">{currentItem.name}</h6>
                                  <p>
                                    {
                                      currentItem.fullStar
                                      // currentItem.map((item, index)=>{
                                      //   console.log(item)
                                      //   console.log(index)
                                      // })
                                      // Object.values(currentItem.fullStar).Arrayof(currentItem.fullStar)
                                      // console.log(Object.values(currentItem.fullStar).Arrayof(currentItem.fullStar))
                                    }
                                    </p>
                                </div>
                                {/* Single Skills Ends */}
                              </Fragment>
                            )
                          })
                        }
                          
                        </div>
                        {/* Skills Row Ends */}
                        {/* Skills Row Starts */}
                        <div className="col-xs-6">
                          {/* Single Skills Starts */}
                          <div className="resume-content">
                            <h6 className="uppercase">Skill 6</h6>
                            <p><i className="fa fa-star" /> <i className="fa fa-star" /> <i className="fa fa-star" /> <i className="fa fa-star" /> <i className="fa fa-star-half-empty" /></p>
                          </div>
                          {/* Single Skills Ends */}
                          {/* Single Skills Starts */}
                          <div className="resume-content">
                            <h6 className="uppercase">Skill 7</h6>
                            <p><i className="fa fa-star" /> <i className="fa fa-star" /> <i className="fa fa-star" /> <i className="fa fa-star-half-empty" /> <i className="fa fa-star-o" /></p>
                          </div>
                          {/* Single Skills Ends */}
                          {/* Single Skills Starts */}
                          <div className="resume-content">
                            <h6 className="uppercase">Skill 8</h6>
                            <p><i className="fa fa-star" /> <i className="fa fa-star" /> <i className="fa fa-star" /> <i className="fa fa-star" /> <i className="fa fa-star-o" /></p>
                          </div>
                          {/* Single Skills Ends */}
                          {/* Single Skills Starts */}
                          <div className="resume-content">
                            <h6 className="uppercase">Skill 9</h6>
                            <p><i className="fa fa-star" /> <i className="fa fa-star" /> <i className="fa fa-star" /> <i className="fa fa-star" /> <i className="fa fa-star" /></p>
                          </div>
                          {/* Single Skills Ends */}
                          {/* Single Skills Starts */}
                          <div className="resume-content">
                            <h6 className="uppercase">Skill 10</h6>
                            <p><i className="fa fa-star" /> <i className="fa fa-star" /> <i className="fa fa-star" /> <i className="fa fa-star" /> <i className="fa fa-star-o" /></p>
                          </div>
                          {/* Single Skills Ends */}
                        </div>
                        {/* Skills Row Ends */}
                      </div>
                    </div>
                  </div>
                </div>
                {/* Skills Ends */}
              </div>
            </div>
            {/* Resume Content Ends */}
          </div>
        </div>
        {/* Resume Ends */}
      </div>
    </section>
    {/* About Section Ends */}
</>
  )
}
