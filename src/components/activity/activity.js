import "./activity.css";

import {Helmet} from "react-helmet";

import ActiveVector from "../../assets/images/activeVector.png";
import React from "react";



const Activity = () => {
  return (
    <div>
        <div className="activityBody">
        <h2 className="active">Activities</h2>
    <p className="here">Here are animations you've liked</p>
    <span className="bounce"> <span id="bounce"></span><span onclick="x()" className="x">&#10005;</span></span>
     {/* <span class="bounce">Flip <span class="x">&#10005;</span></span>  */}
    <br/>
    <br/>
    <br/>
    <small className="small">You can remove the animations you have liked by clicking the X icon</small>

    <h2 className="gen">Generated codes</h2>
    <p className="gene">Here are generated codes for all the animation(s) above</p>
    <div className="code">
        <div className="class">
            <p>CODE BLOCK </p>
            <span className="x">&#10005;</span> 
        </div>
        <code id="copy">This is a block of code</code>
        <div className="hr"> </div>
        <div onclick="copyEvent('copy')" className="flex copy">
            <div className="text">Copy</div>
            <span>
                <img src={ActiveVector} alt="copy" width="15" height="15" />
            </span>
        </div>
    </div>
        </div>
         <Helmet>
                <script src="activityApp.js" type="text/javascript" />
         </Helmet>
    </div>
  );
};
export default Activity;