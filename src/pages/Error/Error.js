import { Link } from 'react-router-dom'

import RoundImg from "../../assets/images/Frame 5988.gif"
import './Error.css'

const Error = () => {
    return (
        <div>
        <div className="container">
            <div className="circle"></div>
            <div className="Errortext">
                <h3> Oops!</h3>
                <p className="pp"> We can't seem to find the page you <br/> are looking for...</p>
                <Link to="/landing" className="homebtn">Back to Home</Link>
            </div>
            <div className="icon">
                <img src={RoundImg} className="gif" alt="round gif"/>
            </div>

            <div className="circle2"></div>
            <div className="circle3"></div>
        </div>
        </div>
    );
};

export default Error;