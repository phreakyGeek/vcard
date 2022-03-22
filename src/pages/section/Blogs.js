import React from 'react'

export default function Blogs() {
  return (
    <>
    {/* Blog Section Starts */}
    <section className="blog">
            <div className="container">
              {/* Section Title Starts */}
              <div className="row text-center">
                <div className="title">
                  <h2 className="center-align text-uppercase">
                    <span>latest </span>
                    <span>posts</span>
                  </h2>
                  <span className="title-bg">articles</span>
                </div>
              </div>
              {/* Section Title Ends */}
              {/* Section Content Starts */}
              <div className="row latest-posts-content">
                {/* Article Starts */}
                <div className="col-sm-4 col-md-4 col-xs-12">
                  <div className="latest-post">
                    {/* Featured Image Starts */}
                    <a href="blog-post.html"><img className="img-responsive" src="images/blog/blog-post-small-1.jpg" alt="img" /></a>
                    {/* Featured Image Ends */}
                    {/* Article Content Starts */}
                    <div className="post-body">
                      <h4 className="post-title">
                        <a href="blog-post.html">How to be a good freelancer?</a>
                      </h4>
                      <div className="post-text">
                        <p className="second-font">incididunt ut labore et dolore magna aliqua. Ut enim aminim veniam, quis nostrud...</p>
                      </div>
                    </div>
                    <div className="post-date">
                      <span>01</span>
                      <span>JAN</span>
                    </div>
                    {/* Article Content Ends */}
                  </div>
                </div>
                {/* Article Ends */}
                {/* Article Starts */}
                <div className="col-sm-4 col-md-4 col-xs-12">
                  <div className="latest-post">
                    {/* Featured Image Starts */}
                    <a href="blog-post.html"><img className="img-responsive" src="images/blog/blog-post-small-2.jpg" alt="img" /></a>
                    {/* Featured Image Ends */}
                    {/* Article Content Starts */}
                    <div className="post-body">
                      <h4 className="post-title">
                        <a href="blog-post.html">Collaboration with Envato</a>
                      </h4>
                      <div className="post-text">
                        <p className="second-font">incididunt ut labore et dolore magna aliqua. Ut enim aminim veniam, quis nostrud...</p>
                      </div>
                    </div>
                    <div className="post-date">
                      <span>17</span>
                      <span>MAR</span>
                    </div>
                    {/* Article Content Ends */}
                  </div>
                </div>
                {/* Article Ends */}
                {/* Article Start */}
                <div className="col-sm-4 col-md-4 col-xs-12">
                  <div className="latest-post">
                    {/* Featured Image Starts */}
                    <a href="blog-post.html"><img className="img-responsive" src="images/blog/blog-post-small-3.jpg" alt="img" /></a>
                    {/* Featured Image Ends */}
                    {/* Article Content Starts */}
                    <div className="post-body">
                      <h4 className="post-title">
                        <a href="blog-post.html">why themeforest is the best?</a>
                      </h4>
                      <div className="post-text">
                        <p className="second-font">incididunt ut labore et dolore magna aliqua. Ut enim aminim veniam, quis nostrud...</p>
                      </div>
                    </div>
                    <div className="post-date">
                      <span>25</span>
                      <span>FEB</span>
                    </div>
                    {/* Article Content Ends */}
                  </div>
                </div>
              </div>
              {/* Section Content Ends */}
            </div>
          </section>
          {/* Blog Section Ends */}
    </>
  )
}
