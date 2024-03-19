import { Link } from "react-router-dom";

const subTitle = "We Have Any Type Of Modification Part";
const title = "Buy Any Type Of Modification Part with Us";
const btnText = "Get Started Now";

const categoryList = [
    {
        imgUrl: 'src/assets/images/category/01.jpg',
        imgAlt: 'category rajibraj91 rajibraj',
        iconName: 'icofont-brand-windows',
        title: 'Alloy Wheel',
    },
    {
        imgUrl: 'src/assets/images/category/02.jpg',
        imgAlt: 'category rajibraj91 rajibraj',
        iconName: 'icofont-brand-windows',
        title: 'Spoilers',
    },
    {
        imgUrl: 'src/assets/images/category/03.jpg',
        imgAlt: 'category rajibraj91 rajibraj',
        iconName: 'icofont-brand-windows',
        title: 'Grills',
    },
    {
        imgUrl: 'src/assets/images/category/04.jpg',
        imgAlt: 'category rajibraj91 rajibraj',
        iconName: 'icofont-brand-windows',
        title: 'Logo Badges',
    },
    {
        imgUrl: 'src/assets/images/category/05.jpg',
        imgAlt: 'category rajibraj91 rajibraj',
        iconName: 'icofont-brand-windows',
        title: 'Edition Badges',
    },
]

function HomeCategory() {
  return (
    <div className="category-section style-4 padding-tb">
        <div className="container">
            <div className="section-header text-center">
                <span className="subtitle">{subTitle}</span>
                <h2 className="title">{title}</h2>
            </div>
        </div>

        <div className="section-wrapper">
            <div className="row g-4 justify-content-center row-cols-md-3 row-cols-sm-2 row-cols-1">
                {categoryList.map((val, i) => (
                    <div className="col" key={i}>
                        <Link to="/shop" className="category-item">
                            <div className="category-inner">
                                <div className="category-thumb">
                                    <img src={`${val.imgUrl}`} alt={`${val.imgAlt}`} />
                                </div>
                                <div className="category-content">
                                    <div className="cate-icon">
                                        <i className={`${val.iconName}`}></i>
                                    </div>
                                    <Link to="/shop"><h6>{val.title}</h6></Link>
                                </div>
                            </div>
                        </Link>
                    </div>
                ))}
            </div>
            <div className="text-center mt-5">
                <Link to="/shop" className="lab-btn"><span>{btnText}</span></Link>
            </div>
        </div>
    </div>
  )
}

export default HomeCategory