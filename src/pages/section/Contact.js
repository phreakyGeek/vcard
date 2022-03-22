import React from 'react'

export default function Contact() {
  return (
    <>
    
          {/* Contact Section Starts */}
          <section className="contact">
            <div className="container">
              {/* Section Title Starts */}
              <div className="row text-center">
                <div className="title">
                  <h2 className="center-align text-uppercase">
                    <span>get </span>
                    <span>in touch</span>
                  </h2>
                  <span className="title-bg">contact</span>
                </div>
              </div>
              {/* Section Title Ends */}
              <div className="row contact-content" id="contact">
                <div className="col-xs-12 col-md-8 contact-form">
                  <h3 className="col-xs-12">feel free to drop me a message</h3>
                  <p className="col-xs-12 second-font">Need to speak to me? Do you have any queries or suggestions? or even you want to say Hello ! Please contact me about all enquiries using the form below.</p>
                  {/* Contact Form Starts */}
                  <form className="form-contact" method="post" action="php/process-form.php">
                    {/* Input Field Starts */}
                    <div className="form-group col-md-6">
                      <input className="form-control" name="firstname" id="firstname" placeholder="YOUR NAME" type="text" required />
                    </div>
                    {/* Input Field Ends */}
                    {/* Input Field Starts */}
                    <div className="form-group col-md-6">
                      <input className="form-control" name="email" id="email" placeholder="YOUR EMAIL" type="email" required />
                    </div>
                    {/* Input Field Ends */}
                    {/* Input Field Starts */}
                    <div className="form-group col-xs-12">
                      <textarea className="form-control" id="message" name="message" placeholder="YOUR MESSAGE" required defaultValue={""} />
                    </div>
                    {/* Input Field Ends */}
                    {/* Submit Form Button Starts */}
                    <div className="form-group col-xs-12 col-sm-4">
                      <button className="btn btn-primary btn-contact" type="submit">send message</button>
                    </div>
                    {/* Submit Form Button Ends */}
                    {/* Form Submit Message Starts */}
                    <div className="col-xs-12 text-center output_message_holder d-none">
                      <p className="output_message" />
                    </div>
                    {/* Form Submit Message Ends */}
                  </form>
                  {/* Contact Form Ends */}
                </div>
                {/* Contact Widget Starts */}
                <div className="col-xs-12 col-md-4">
                  <div className="widget">
                    <div className="contact-page-info">
                      {/* Contact Info Box Starts */}
                      <div className="contact-info-box">
                        <i className="fa fa-home big-icon" />
                        <div className="contact-info-box-content">
                          <h4>Residence</h4>
                          <p className="second-font">123 Disney Street Slim Av. Brooklyn Bridge, NY, New York</p>
                        </div>
                      </div>
                      {/* Contact Info Box Ends */}
                      {/* Contact Info Box Starts */}
                      <div className="contact-info-box">
                        <i className="fa fa-phone big-icon" />
                        <div className="contact-info-box-content">
                          <h4>Phone</h4>
                          <p className="second-font">+216 21 184 010</p>
                        </div>
                      </div>
                      {/* Contact Info Box Ends */}
                      {/* Contact Info Box Starts */}
                      <div className="contact-info-box">
                        <i className="fa fa-envelope big-icon" />
                        <div className="contact-info-box-content">
                          <h4>Email</h4>
                          <p className="second-font">maryouma@example.com</p>
                        </div>
                      </div>
                      {/* Contact Info Box Ends */}
                      {/* Social Media Icons Starts */}
                      <div className="contact-info-box">
                        <i className="fa fa-share-alt big-icon" />
                        <div className="contact-info-box-content">
                          <h4>Social Profiles</h4>
                          <div className="social-contact">
                            <ul>
                              <li className="facebook"><a href="#" target="_blank"><i className="fa fa-facebook" /></a></li>
                              <li className="twitter"><a href="#" target="_blank"><i className="fa fa-twitter" /></a></li>
                              <li className="google-plus"><a href="#" target="_blank"><i className="fa fa-google-plus" /></a></li>
                            </ul>
                          </div>
                        </div>
                      </div>
                      {/* Social Media Icons Starts */}
                    </div>
                  </div>
                </div>
                {/* Contact Widget Ends */}
              </div>
            </div>
          </section>
          {/* Contact Section Ends */}
    </>
  )
}
