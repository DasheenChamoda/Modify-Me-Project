 import React from 'react'

 const subTitle = "About Our Brand";
const title = "Better Experiance on AR Thechnology";
const desc = "With our app, users can see the modification parts are sute for their cast or not befor buying it. still there are limited parts but hopfully our developpers will develop more in future. Our selling website is only filled with verified sellers and we are taking the responsibilty of selling parts. IF there are any questions we have a friendly custome care servise availbe for 24h. ";

const year = "30+";
const expareance = "Modification parts";

const aboutList = [
    {
        imgUrl: '/src/assets/images/about/icon/01.jpg',
        imgAlt: 'about icon rajibraj91 rajibraj',
        title: 'Frendly Custom Care',
        desc: '24H availble friendly custom care',
    },
    {
        imgUrl: '/src/assets/images/about/icon/02.jpg',
        imgAlt: 'about icon rajibraj91 rajibraj',
        title: 'Verified Sellers',
        desc: 'Only verified sellers selling items on our site',
    },
    {
        imgUrl: '/src/assets/images/about/icon/03.jpg',
        imgAlt: 'about icon rajibraj91 rajibraj',
        title: 'Easy Payment Methods',
        desc: 'Easy payment methods',
    },
]
 
 const About = () => {
   return (
    <div>
        {/*<PageHeader title={'About Our Brand'} curPage={'About'} />*/}
        <div className="about-section style-3 padding-tb section-bg">
            <div className="container">
                <div className="row justify-content-center row-cols-xl-2 row-cols-1 align-items-center">
                    <div className="col">
                        <div className="about-left">
                            <div className="about-thumb">
                                <img src="/src/assets/images/about/01.jpg" alt="about" />
                            </div>
                            <div className="abs-thumb">
                                <img src="/src/assets/images/about/02.png" alt="about" />
                            </div>
                            <div className="about-left-content">
                                <h3>{year}</h3>
                                <p>{expareance}</p>
                            </div>
                        </div>
                    </div>
                    <div className="col">
                        <div className="about-right">
                            <div className="section-header">
                                <span className="subtitle">{subTitle}</span>
                                <h2 className="title">{title}</h2>
                                <p>{desc}</p>
                            </div>
                            <div className="section-wrapper">
                                <ul className="lab-ul">
                                    {aboutList.map((val, i) => (
                                        <li key={i}>
                                            <div className="sr-left">
                                                <img src={`${val.imgUrl}`} alt={`${val.imgAlt}`} />
                                            </div>
                                            <div className="sr-right">
                                                <h5>{val.title}</h5>
                                                <p>{val.desc}</p>
                                            </div>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
   )
 }
 
 export default About