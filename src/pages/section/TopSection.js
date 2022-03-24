import React from 'react'
import CustomData from './CustomData.json'

export default function TopSection() {
  let fullName = CustomData.firstName + " " + CustomData.lastName;
  // console.log(CustomData.profilePicture)
  return (
      <>
     {/* Top Section Starts */}
     <section className="container-fluid top-section">
     <div className="container">
       <div className="row">
         {/* Right Side Starts */}
         <div className="col-lg-8 col-md-7 col-sm-8 col-sm-push-4 col-md-push-5 col-lg-push-4 right-side">
           <div>
             {/* Text Rotator Starts */}
             <div className="selector uppercase text-center text-rotator" id="selector">
               <h6  className="text-uppercase">Hi There ! I'm</h6>
               <h3 className="ah-headline text-uppercase">
                 <span className="ah-words-wrapper">
                   {/* <b className="is-visible">{fullName}</b> */}
                   <b className="is-visible">{fullName}</b>

                   {/* <b>a {CustomData.profession[0]}</b>
                   <b>a {CustomData.profession[1]}</b>
                   <b>a {CustomData.profession[2]}</b> */}
                 </span>
               </h3>
               {/* Social Media Icons */}
               <ul className="unstyled hidden-xs">
                 <li><a href="#" target="_blank"><i className="fa fa-facebook" /></a></li>
                 <li><a href="#" target="_blank"><i className="fa fa-twitter" /></a></li>
                 <li><a href="#" target="_blank"><i className="fa fa-google-plus" /></a></li>
                 <li><a href="#" target="_blank"><i className="fa fa-behance" /></a></li>
                 <li><a href="#" target="_blank"><i className="fa fa-dribbble" /></a></li>
               </ul>
               {/* Social Media Ends */}
             </div>
             {/* Text Rotator Ends */}
           </div>
         </div>
         {/* Right Side Ends */}
         {/* Left Side Starts */}
         <div className="col-lg-4 col-md-5 col-sm-4 col-sm-pull-8 col-md-pull-7 col-lg-pull-8 left-side">
           <img src={CustomData.profilePicture} className="img-responsive" alt="picture" />
         </div>
         {/* Left Side Ends */}
       </div>
     </div>
   </section>
   {/* Top Section Ends */}
  </>
  )
}
