import React from 'react'

export default function Testimonials() {
  return (
    <>
    
          {/* Testimonials Section Starts */}
          <section className="testimonials">
            {/* Container Starts */}
            <div className="container">
              {/* Blockquotes Starts */}
              <div id="quote-carousel" className="carousel slide" data-ride="carousel">
                {/* Wrapper For Sliders Starts */}
                {/* Indicators Starts */}
                <ol className="carousel-indicators">
                  <li data-target="#quote-carousel" data-slide-to={0} className="active" />
                  <li data-target="#quote-carousel" data-slide-to={1} />
                  <li data-target="#quote-carousel" data-slide-to={2} />
                </ol>
                {/* Indicators Ends */}
                <div className="carousel-inner">
                  {/* Quote #1 Starts */}
                  <div className="item active">
                    <blockquote>
                      <img className="img-circle img-responsive" src="images/testimonials/client1.jpg" alt="client" />
                      <p className="second-font">First time we worked together, Erik came up with several on-target creative concepts under significant deadline pressure. he's creative, deliberate in his strategy and focused on results. he knows that online content is king and understands how to pull leads into the pipeline.</p>
                      <h5 className="text-uppercase">Miss Elina Pool</h5>
                      <h6 className="second-font">Developer - Adobe</h6>
                    </blockquote>
                  </div>
                  {/* Quote #1 Ends */}
                  {/* Quote #2 Starts */}
                  <div className="item">
                    <blockquote>
                      <img className="img-circle img-responsive" src="images/testimonials/client2.jpg" alt="client" />
                      <p className="second-font">Erik is a talented and extremely creative writer and thinker. From drafting engaging sales collateral to producing company videos that captured the energy and upbeat morale of our office</p>
                      <h5 className="text-uppercase">Mr. Antoine Varane</h5>
                      <h6 className="second-font">Manager - Twitter</h6>
                    </blockquote>
                  </div>
                  {/* Quote #2 Ends */}
                  {/* Quote #3 Starts */}
                  <div className="item">
                    <blockquote>
                      <img className="img-circle img-responsive" src="images/testimonials/client3.jpg" alt="client" />
                      <p className="second-font">Erik adds tremendous value working either individually or in a team framework. he is a talented writer who is bright, highly motivated and known for her on-time delivery. he is a joy to be around with her quick wit and optimism.</p>
                      <h5 className="text-uppercase">Miss Lucy Walker</h5>
                      <h6 className="second-font">Manager - Envato</h6>
                    </blockquote>
                  </div>
                  {/* Quote #3 Ends */}
                </div>
                {/* Wrapper For Sliders Ends */}
              </div>
              {/* Blockquotes Ends */}
              {/* Container Ends */}
            </div>
          </section>
          {/* Testimonials Section Ends */}
    </>
  )
}
