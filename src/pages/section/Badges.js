import React from 'react'
import c from './CustomData.json'
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
              <span>{c.badges[0]['value']}</span>
            </h3>
            <h4>{c.badges[0]['name']}</h4>
          </div>
          {/* Fact Badge Item Ends */}
          {/* Fact Badge Item Starts */}
          <div className="col-md-4 col-sm-4 badge-item">
            <h3>
              <i className="fa fa-stethoscope" />
              <span>{c.badges[1]['value']}</span>
            </h3>
            <h4>{c.badges[1]['name']}</h4>
          </div>
          {/* Fact Badge Item Ends */}
          {/* Fact Badge Item Starts */}
          <div className="col-md-4 col-sm-4 badge-item">
            <h3>
              <i className="fa fa-heart" />
              <span>{c.badges[2]['value']}</span>
            </h3>
            <h4>{c.badges[2]['name']}</h4>
          </div>
          {/* Fact Badge Item Ends */}
        </div>
      </div>
    </section>
    {/* Badges Ends */}
    </>
  )
}
