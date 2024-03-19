import { Link } from "react-router-dom";

const title = "About Modify Me";
const desc = "Modify Me is a Augmented Reality based vehicle modification app and selling web site";
const ItemTitle = "Categories";
const quickTitle = "Quick Links";

const addressList = [
    {
        iconName: 'icofont-google-map',
        text: 'Bambalapitiya, Colombo, Sri Lanka',
    },
    {
        iconName: 'icofont-phone',
        text: '+9471 600 5000',
    },
    {
        iconName: 'icofont-envelope',
        text: 'modifyme@gmail.com',
    },
]

const socialList = [
    {
        iconName: 'icofont-facebook',
        siteLink: '#',
        className: 'facebook',
    },
    {
        iconName: 'icofont-twitter',
        siteLink: '#',
        className: 'twitter',
    },
    {
        iconName: 'icofont-linkedin',
        siteLink: '#',
        className: 'linkedin',
    },
    {
        iconName: 'icofont-instagram',
        siteLink: '#',
        className: 'instagram',
    },
    {
        iconName: 'icofont-pinterest',
        siteLink: '#',
        className: 'pinterest',
    },
]

const ItemList = [
    {
        text: 'All Products',
        link: '/shop',
    },
    {
        text: 'Shop',
        link: '/shop',
    },
    {
        text: 'About',
        link: '/about',
    },
    {
        text: 'Contact Us',
        link: '/contactus',
    },
    {
        text: 'Cart',
        link: '/cart',
    }
]

const quickList = [
    {
        text: 'Spoilers',
        link: '#',
    },
    {
        text: 'Badges',
        link: '#',
    },
    {
        text: 'Alloy Wheels',
        link: '#',
    },
    {
        text: 'Grills',
        link: '#',
    },
]

const Footer = () => {
  return (
    <footer className="style-2">
    <div className="footer-top dark-view padding-tb">
        <div className="container">
            <div className="row g-4 row-cols-xl-4 row-cols-sm-2 row-cols-1 justify-content-center">
                <div className="col">
                    <div className="footer-item our-address">
                        <div className="footer-inner">
                            <div className="footer-content">
                                <div className="title">
                                    <h4>{title}</h4>
                                </div>
                                <div className="content">
                                    <p>{desc}</p>
                                    <ul className="lab-ul office-address">
                                        {addressList.map((val, i) => (
                                            <li key={i}><i className={val.iconName}></i>{val.text}</li>
                                        ))}
                                    </ul>
                                    <ul className="lab-ul social-icons">
                                        {socialList.map((val, i) => (
                                            <li key={i}>
                                                <a href={val.siteLink} className={val.className}><i className={val.iconName}></i></a>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col">
                    <div className="footer-item">
                        <div className="footer-inner">
                            <div className="footer-content">
                                <div className="title">
                                    <h4>{ItemTitle}</h4>
                                </div>
                                <div className="content">
                                    <ul className="lab-ul">
                                        {ItemList.map((val, i) => (
                                            <li key={i}><a href={val.link}>{val.text}</a></li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col">
                    <div className="footer-item">
                        <div className="footer-inner">
                            <div className="footer-content">
                                <div className="title">
                                    <h4>{quickTitle}</h4>
                                </div>
                                <div className="content">
                                    <ul className="lab-ul">
                                        {quickList.map((val, i) => (
                                            <li key={i}><a href={val.link}>{val.text}</a></li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div className="footer-bottom">
        <div className="container">
            <div className="section-wrapper">
                <p>&copy; 2024 <Link to="/">Designed by ModVision</Link> </p>
            </div>
        </div>
    </div>
</footer>
  )
}

export default Footer