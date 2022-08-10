import './Error.css'

const Error = () => {
    return (
     <div>
         <div className="logoDiv">
            <img src="../assets/image/Group 7265.png" alt="logo"/>
        </div>

        <div className="darkModeDiv">
            <img src="../assets/images/Light and Dark Switch Icon.png" alt="bark mode button"/>
        </div>

        <div className="circle"></div>
        
            <div className="text">
                <h3> Oops!</h3>
                <p> We can't seem to find the page you <br/> are looking for...</p>
                <form>
                    <div className="searchbutton">
                    <input type="search" placeholder="Search..."/>
                    <button className="searchbtn" type="submit">
                        <img src="../assets/images/Vector.svg" alt="search icon"/>
                    </button>
                    </div>
                </form>
                <a className="homebtn" href="#"> Back to Home </a>
            </div>

            <div className="icon">
                <img src="../assets/images/Frame 5988.gif" className="gif"/>
            </div>

            <div className="circle2"></div>
            <div className="circle3"></div>

            
        <div><p className="copyRight"> Copyright &copy; 2022.Animations by Zuri Inc.</p></div>


      </div>
    );
  };
  export default Error;