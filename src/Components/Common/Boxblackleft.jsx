import React from 'react';
import boxhome4 from "../../Assets/boxhome4.png";
import "./Boxblackleft.css";

const Boxblackleft = () => {
    const title = "Web Design";
    const subtitle = "Learn UI/UX";
    const footer = "More Details";

    return (
        <div className='Boxblackleftdiv'>
            <img src={boxhome4} alt="boxhome4" />
            <h2 className="webtir1">{title}</h2>
            <h3 className="webtir2">{subtitle}</h3>

            <hr />

            <h3 className="webtir2">{footer}</h3>
        </div>
    );
};

export default Boxblackleft;