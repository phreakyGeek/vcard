import React from 'react'

export default function Badges() {
  return (
    <>
    {/* Badges Starts */}
    <section className="badges">
      <div className="container">
        <div className="row text-center">
          {/* Fact Badge Item Starts */}
          <div className="col-md-4 col-sm-4 badge-item">
            <h3>
              <i className="fa fa-heartbeat" />
              <span>87+</span>
            </h3>
            <h4>successful operations</h4>
          </div>
          {/* Fact Badge Item Ends */}
          {/* Fact Badge Item Starts */}
          <div className="col-md-4 col-sm-4 badge-item">
            <h3>
              <i className="fa fa-stethoscope" />
              <span>99+</span>
            </h3>
            <h4>consultations</h4>
          </div>
          {/* Fact Badge Item Ends */}
          {/* Fact Badge Item Starts */}
          <div className="col-md-4 col-sm-4 badge-item">
            <h3>
              <i className="fa fa-heart" />
              <span>78+</span>
            </h3>
            <h4>saved lifes</h4>
          </div>
          {/* Fact Badge Item Ends */}
        </div>
      </div>
    </section>
    {/* Badges Ends */}
    </>
  )
}
