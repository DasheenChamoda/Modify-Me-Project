import { Link } from "react-router-dom";

const btnText = "Sign up for Free";
const title = "Haven't You Tried Our AR Based Modification App?";
const desc = "Still this available only on Android, try it now. Check how the modification part look on your vehicle before buy it";

const AppSection = () => {
  return (
    <div className="app-section padding-tb">
    <div className="container">
        <div className="section-header text-center">
            <Link to="/signup" className="lab-btn mb-4"><span>{btnText}</span></Link>
            <h2 className="title">{title}</h2>
            <p>{desc}</p>
        </div>
        <div className="section-wrapper">
            <ul className="lab-ul">
                <li><a href="#"><img src="/src/assets/images/app/01.jpg" alt="education" /></a></li>
                <li><a href="#"><img src="/src/assets/images/app/02.jpg" alt="education" /></a></li>
            </ul>
        </div>
    </div>
</div>
  )
}

export default AppSection