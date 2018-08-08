import React from 'react'
import { Link } from "react-router-dom";


const CarteChoice = (props) => {
  return (
    <div>
      <br/>
            <h1 className="display-4 text-center">Carte du Restaurant</h1>
            <br/>
            <div  className="row">
                <div   className='col-6 '>
                    <Link to="/carte/Breakfast" className=" d-block cursor container__image">
                        <img  className="image" style={{width: "100%"}} src="https://media.najeti.fr/photo/commun-hotels/1920x1080/petit-dejeuner.jpg" alt="photo_img" />
                        <div className="middle">
                            <div className="text">Breakfast</div>
                        </div>
                    </Link>
                    <br/>
                    <Link to="/carte/Dinner" className="d-block cursor container__image">
                        <img className="image" style={{width: "100%"}} src="http://img.over-blog-kiwi.com/0/81/82/75/20140919/ob_027f03_photo-1.JPG" alt="photo_img" />
                        <div className="middle">
                            <div className="text">Dinner</div>
                        </div>
                    </Link>
                    <br/>
                    <Link to="/carte/All" className="d-block cursor container__image">
                        <img className="image" style={{height: "115px", width: "100%"}} src="https://i.ytimg.com/vi/S0KP2Nt7Z7o/hqdefault.jpg" alt="photo_img" />
                        <div className="middle">
                            <div className="text">All choice</div>
                        </div>
                    </Link>
                </div>
                
                <br/>
                <div className='col-6'>
                <Link to="carte/Lunch" className="cursor d-block container__image">
                        <img className="image" style={{width: "100%"}} src="https://d1dwpi19junerd.cloudfront.net/images/original/e/26/e26aad5d5623c7335d48115e53fd998f" alt="photo_img" />
                        <div className="middle">
                            <div className="text">Lunch</div>
                        </div>
                    </Link>
                    <br/>
                    <Link to="carte/Others" className="cursor d-block container__image">
                        <img className="image" style={{width: "100%"}} src="https://image.afcdn.com/recipe/20160315/13034_w420h344c1cx2880cy1920.jpg" alt="photo_img" />
                        <div className="middle">
                            <div className="text">Others</div>
                        </div>
                    </Link>
                </div>
            </div>
            <hr/>
    </div>
  )
}

export default CarteChoice
