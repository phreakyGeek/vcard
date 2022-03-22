import React from 'react'

export default function Portfolio() {
  return (
    <>
    
          {/* Portfolio Section Starts */}
          <section className="portfolio">
            {/* Container Starts */}
            <div className="container p-0">
              {/* Section Title Starts */}
              <div className="row text-center">
                <div className="title">
                  <h2 className="center-align text-uppercase">
                    <span>My </span>
                    <span>portfolio</span>
                  </h2>
                  <span className="title-bg">works</span>
                </div>
              </div>
              {/* Section Title Ends */}
              <div>
                <div className="portfolio-container">
                  {/* Project Starts */}
                  <div className="col-xs-12 col-sm-4 col-md-4 portfolio-item" data-category={1}>
                    <div className="magnific-popup-gallery">
                      {/* Thumbnail Starts */}
                      <figure className="thumbnail thumbnail__portfolio">
                        <a className="image-wrap" href="images/projects/project-1.jpg" data-gal="magnific-pop-up[image]" title="Image project"><img className="img-responsive" src="images/projects/project-1.jpg" alt="Image Project" /><span className="zoom-icon" /></a>
                      </figure>
                      {/* Thumbnail Ends */}
                      {/* Caption Starts */}
                      <div className="caption">
                        <h3>Image Project</h3>
                        <p className="second-font">dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi</p>
                      </div>
                      {/* Caption Ends */}
                    </div>
                  </div>
                  {/* Project Ends */}
                  {/* Project Starts */}
                  <div className="col-xs-12 col-sm-4 col-md-4 portfolio-item" data-category={2}>
                    <div className="magnific-popup-gallery">
                      {/* Thumbnail Starts */}
                      <figure className="thumbnail thumbnail__portfolio">
                        <a className="image-wrap mfp-youtube" href="https://www.youtube.com/watch?v=0gv7OC9L2s8"><img className="img-responsive" src="images/projects/project-2.jpg" alt="Gallery project" /><span className="zoom-icon video-icon" /></a>
                      </figure>
                      {/* Thumbnail Ends */}
                      {/* Caption Starts */}
                      <div className="caption">
                        <h3>Youtube Project</h3>
                        <p className="second-font">dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi</p>
                      </div>
                      {/* Caption Ends */}
                    </div>
                  </div>
                  {/* Project Ends */}
                  {/* Project Starts */}
                  <div className="col-xs-12 col-sm-4 col-md-4 portfolio-item" data-category={1}>
                    <div className="magnific-popup-gallery">
                      {/* Thumbnail Starts */}
                      <figure className="thumbnail thumbnail__portfolio">
                        <a className="image-wrap" href="images/projects/project-3.jpg" data-gal="magnific-pop-up[gallery]" title="Gallery project"><img className="img-responsive" src="images/projects/project-3.jpg" alt="Gallery project" /><span className="zoom-icon gallery-icon" /></a>
                      </figure>
                      <a href="images/projects/project-1.jpg" title="Gallery project" data-gal="magnific-pop-up[gallery]" style={{display: 'none'}} />
                      <a href="images/projects/project-2.jpg" title="Gallery project" data-gal="magnific-pop-up[gallery]" style={{display: 'none'}} />
                      <a href="images/projects/project-3.jpg" title="Gallery project" data-gal="magnific-pop-up[gallery]" style={{display: 'none'}} />
                      <a href="images/projects/project-4.jpg" title="Gallery project" data-gal="magnific-pop-up[gallery]" style={{display: 'none'}} />
                      <a href="images/projects/project-5.jpg" title="Gallery project" data-gal="magnific-pop-up[gallery]" style={{display: 'none'}} />
                      <a href="images/projects/project-6.jpg" title="Gallery project" data-gal="magnific-pop-up[gallery]" style={{display: 'none'}} />
                      {/* Thumbnail Ends */}
                      {/* Caption Starts */}
                      <div className="caption">
                        <h3>Gallery Photos</h3>
                        <p className="second-font">dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi</p>
                      </div>
                      {/* Caption Ends */}
                    </div>
                  </div>
                  {/* Project Ends */}
                  {/* Project Starts */}
                  <div className="col-xs-12 col-sm-4 col-md-4 portfolio-item" data-category={3}>
                    <div className="magnific-popup-gallery">
                      {/* Thumbnail Starts */}
                      <figure className="thumbnail thumbnail__portfolio">
                        <a className="image-wrap" href="#" title="portfolio"><img className="img-responsive" src="images/projects/project-4.jpg" alt="portfolio" /><span className="zoom-icon external-icon" /></a>
                      </figure>
                      {/* Thumbnail Ends */}
                      {/* Caption Starts */}
                      <div className="caption">
                        <h3>External link</h3>
                        <p className="second-font">dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi</p>
                      </div>
                      {/* Caption Ends */}
                    </div>
                  </div>
                  {/* Project Ends */}
                  {/* Project Starts */}
                  <div className="col-xs-12 col-sm-4 col-md-4 portfolio-item" data-category={1}>
                    <div className="magnific-popup-gallery">
                      {/* Thumbnail Starts */}
                      <figure className="thumbnail thumbnail__portfolio">
                        <a className="image-wrap" href="images/projects/project-5.jpg" data-gal="magnific-pop-up[image]" title="Image project"><img className="img-responsive" src="images/projects/project-5.jpg" alt="Image Project" /><span className="zoom-icon" /></a>
                      </figure>
                      {/* Thumbnail Ends */}
                      {/* Caption Starts */}
                      <div className="caption">
                        <h3>Image Project</h3>
                        <p className="second-font">dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi</p>
                      </div>
                      {/* Caption Ends */}
                    </div>
                  </div>
                  {/* Project Ends */}
                  {/* Project Starts */}
                  <div className="col-xs-12 col-sm-4 col-md-4 portfolio-item" data-category={2}>
                    <div className="magnific-popup-gallery">
                      {/* Thumbnail Starts */}
                      <figure className="thumbnail thumbnail__portfolio">
                        <a className="image-wrap mfp-youtube" href="https://www.youtube.com/watch?v=O_C5CN1L3Xo"><img className="img-responsive" src="images/projects/project-6.jpg" alt="Gallery project" /><span className="zoom-icon video-icon" /></a>
                      </figure>
                      {/* Thumbnail Ends */}
                      {/* Caption Starts */}
                      <div className="caption">
                        <h3>Youtube Project</h3>
                        <p className="second-font">dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi</p>
                      </div>
                      {/* Caption Ends */}
                    </div>
                  </div>
                  {/* Project Ends */}
                  {/* Project Starts */}
                  <div className="col-xs-12 col-sm-4 col-md-4 portfolio-item" data-category={1}>
                    <div className="magnific-popup-gallery">
                      {/* Thumbnail Starts */}
                      <figure className="thumbnail thumbnail__portfolio">
                        <a className="image-wrap" href="images/projects/project-7.jpg" data-gal="magnific-pop-up[image]" title="Image project"><img className="img-responsive" src="images/projects/project-7.jpg" alt="Image Project" /><span className="zoom-icon" /></a>
                      </figure>
                      {/* Thumbnail Ends */}
                      {/* Caption Starts */}
                      <div className="caption">
                        <h3>Image Project</h3>
                        <p className="second-font">dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi</p>
                      </div>
                      {/* Caption Ends */}
                    </div>
                  </div>
                  {/* Project Ends */}
                  {/* Project Starts */}
                  <div className="col-xs-12 col-sm-4 col-md-4 portfolio-item" data-category={2}>
                    <div className="magnific-popup-gallery">
                      {/* Thumbnail Starts */}
                      <figure className="thumbnail thumbnail__portfolio">
                        <a className="image-wrap mfp-vimeo" href="https://vimeo.com/23534361"><img className="img-responsive" src="images/projects/project-8.jpg" alt="Gallery project" /><span className="zoom-icon video-icon" /></a>
                      </figure>
                      {/* Thumbnail Ends */}
                      {/* Caption Starts */}
                      <div className="caption">
                        <h3>Vimeo Project</h3>
                        <p className="second-font">dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi</p>
                      </div>
                      {/* Caption Ends */}
                    </div>
                  </div>
                  {/* Project Ends */}
                  {/* Project Starts */}
                  <div className="col-xs-12 col-sm-4 col-md-4 portfolio-item" data-category={1}>
                    <div className="magnific-popup-gallery">
                      {/* Thumbnail Starts */}
                      <figure className="thumbnail thumbnail__portfolio">
                        <a className="image-wrap" href="images/projects/project-9.jpg" data-gal="magnific-pop-up[gallery]" title="Slider project"><img className="img-responsive" src="images/projects/project-9.jpg" alt="Slider project" /><span className="zoom-icon gallery-icon" /></a>
                      </figure>
                      <a href="images/projects/project-1.jpg" title="Gallery project" data-gal="magnific-pop-up[gallery]" style={{display: 'none'}} />
                      <a href="images/projects/project-2.jpg" title="Gallery project" data-gal="magnific-pop-up[gallery]" style={{display: 'none'}} />
                      <a href="images/projects/project-6.jpg" title="Gallery project" data-gal="magnific-pop-up[gallery]" style={{display: 'none'}} />
                      {/* Thumbnail Ends */}
                      {/* Caption Starts */}
                      <div className="caption">
                        <h3>Image Project</h3>
                        <p className="second-font">dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi</p>
                      </div>
                      {/* Caption Ends */}
                    </div>
                  </div>
                  {/* Project Ends */}
                </div>
              </div>
            </div>
            {/* Container Ends */}
          </section>
          {/* Portfolio Section Ends */}
    </>
  )
}
