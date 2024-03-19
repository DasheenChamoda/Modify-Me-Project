
import CountUp from 'react-countup';
import { Link } from "react-router-dom";

const subTitle = "Why Choose Us";
const title = "Become a Part of Us";
const desc = "Take an opportunity to improve your skills and earn some money. Be a part of us. Send an email with your CV.";
const btnText = "Send Now";

const countList = [
    {
        iconName: 'icofont-users-alt-4',
        count: '100',
        text: 'Sellers',
    },
    {
        iconName: 'icofont-user-alt-5',
        count: '2',
        text: '3D Developers',
    },
    {
        iconName: 'icofont-users',
        count: '5',
        text: 'Web Developers',
    },
]

const AboutUs = () => {
  return (
    <div className="instructor-section style-2 padding-tb section-bg-ash">
    <div className="container">
        <div className="section-wrapper">
            <div className="row g-4 justify-content-center row-cols-1 row-cols-md-2 row-cols-xl-3 align-items-center">
                <div className="col">
                    {countList.map((val, i) => (
                        <div className="count-item" key={i}>
                            <div className="count-inner">
                                <div className="count-icon">
                                    <i className={val.iconName}></i>
                                </div>
                                <div className="count-content">
                                    <h2><span className="count"><CountUp end={val.count} /></span><span>+</span></h2>
                                    <p>{val.text}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
                <div className="col">
                    <div className="instructor-content">
                        <span className="subtitle">{subTitle}</span>
                        <h2 className="title">{title}</h2>
                        <p>{desc}</p>
                        <Link to="/contactus" className="lab-btn"><span>{btnText}</span></Link>
                    </div>
                </div>
                <div className="col">
                    <div className="instructor-thumb">
                        <img src="src/assets/images/instructor/01.png" alt="" />
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
  )
}

export default AboutUs