import React from 'react';
import Images from '../images/logo.png';
import Imagess from '../images/image1.png';
import Imag from '../images/category-1.jpg';
import Imag2 from '../images/category-2.jpg';
import Imag3 from '../images/category-3.jpg';
import Imag4 from '../images/product-4.jpg';
import Imag5 from '../images/product-5.jpg';
import Imag6 from '../images/product-6.jpg';
import Imag7 from '../images/product-7.jpg';
import Imag8 from '../images/product-8.jpg';
import Imag9 from '../images/product-9.jpg';
import Imag10 from '../images/product-10.jpg';
import Imag11 from '../images/product-11.jpg';
import Imag12 from '../images/product-12.jpg';
import Imag13 from '../images/kk.png';
import './Nav.css';

const Nav = ()=> {
    return(
        <>
        <div className="header">
        <div className="logo">
        <img src={Images} ></img>
        </div>
        <div className="Navbar">
        <ul>
        <li><a href="#">Home</a></li>
        <li><a href="#">Product</a></li>
        <li><a href="#">About</a></li>
        <li><a href="#">Contact</a></li>
        </ul>
        </div>
        </div>
        <div className="row">
        <div className="col-2">
          <h1 className="title">Hello Everyone Buy This </h1>
          <p className="para">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum
            ever since the 1500s
          </p>
          <div className="btn">Explore Now</div>
        </div>
        <div className="col-2">
            <img src={Imagess}></img>
        </div>

      </div>
      <div className="cat">
        <div className="row">
          <div className="col-3">
          <img src={Imag}></img>
          </div>
          <div className="col-3">
          <img src={Imag2}></img>
          </div>
          <div className="col-3">
          <img src={Imag3}></img>
          </div>
        </div>
      </div>

        <div className="small">
          <h1 className="title1">Feature Prodtuct</h1>
          <div className="row">
            <div className="col-4">
              <img src={Imag4}></img>
              <h4>Red T-Shrit Printed</h4>
              <div className="rating">
              <i class="fa fa-star"></i>
              <i class="fa fa-star"></i>
              <i class="fa fa-star"></i>
              <i class="fa fa-star"></i>
              </div>
              <p>$90.00</p>
            </div>
            <div className="col-4">
              <img src={Imag5}></img>
              <h4>Red T-Shrit Printed</h4>
              <div className="rating">
              <i class="fa fa-star"></i>
              <i class="fa fa-star"></i>
              <i class="fa fa-star"></i>
              <i class="fa fa-star"></i>
              </div>
              <p>$90.00</p>
            </div>
            <div className="col-4">
              <img src={Imag6}></img>
              <h4>Red T-Shrit Printed</h4>
              <div className="rating">
              <i class="fa fa-star"></i>
              <i class="fa fa-star"></i>
              <i class="fa fa-star"></i>
              <i class="fa fa-star"></i>
              </div>
              <p>$90.00</p>
            </div>
            
           
            
          </div>
         <h2 className="title1">Lateste Product</h2>
         <div className="row">
         <div className="col-4">
              <img src={Imag7}></img>
              <h4>Red T-Shrit Printed</h4>
              <div className="rating">
              <i class="fa fa-star"></i>
              <i class="fa fa-star"></i>
              <i class="fa fa-star"></i>
              <i class="fa fa-star"></i>
              </div>
              <p>$90.00</p>
            </div>
            <div className="col-4">
              <img src={Imag8}></img>
              <h4>Red T-Shrit Printed</h4>
              <div className="rating">
              <i class="fa fa-star"></i>
              <i class="fa fa-star"></i>
              <i class="fa fa-star"></i>
              <i class="fa fa-star"></i>
              </div>
              <p>$90.00</p>
            </div>
            <div className="col-4">
              <img src={Imag9}></img>
              <h4>Red T-Shrit Printed</h4>
              <div className="rating">
              <i class="fa fa-star"></i>
              <i class="fa fa-star"></i>
              <i class="fa fa-star"></i>
              <i class="fa fa-star"></i>
              </div>

              <p>$90.00</p>
            </div>
            </div>
            <div className="row">
            <div className="col-4">
              <img src={Imag10}></img>
              <h4>Red T-Shrit Printed</h4>
              <div className="rating">
              <i class="fa fa-star"></i>
              <i class="fa fa-star"></i>
              <i class="fa fa-star"></i>
              <i class="fa fa-star"></i>
              </div>
              <p>$90.00</p>
            </div>
            <div className="col-4">
              <img src={Imag11}></img>
              <h4>Red T-Shrit Printed</h4>
              <div className="rating">
              <i class="fa fa-star"></i>
              <i class="fa fa-star"></i>
              <i class="fa fa-star"></i>
              <i class="fa fa-star"></i>
              </div>
              <p>$90.00</p>
            </div>
            <div className="col-4">
              <img src={Imag12}></img>
              <h4>Red T-Shrit Printed</h4>
              <div className="rating">
              <i class="fa fa-star"></i>
              <i class="fa fa-star"></i>
              <i class="fa fa-star"></i>
              <i class="fa fa-star"></i>
              </div>
              <p>$90.00</p>
            </div>
         </div>
         <div className="offer">
        <div className="small">
            <div className="row">
                <div className="col-2">
                    <img src={Imag13} className="offer-img" />
                </div>
                <div className="col-2">
                    <h1>
                        Availabe the offer form</h1>
                    <p> Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas laudantium saepe facilis
                        fugit pariatur sunt optio nemo officiis nostrum error atque doloribus quibusdam reiciendis,
                        inventore eius. Cupiditate neque perspiciatis assumenda.</p>
                </div>
            </div>
        </div>
    </div>
        </div>
        <div className="footer">
        
            
                
                <div className="footer-col-3">
                    <h3>Usefull Links</h3>
                    <ul className="list"> 
                        <li><a href="#">Coupons</a></li>
                        <li><a href="#">Blog post</a></li>
                        <li><a href="#">Retrun Policy</a></li>
                        <li><a href="#">Join</a></li>
                    </ul>
                </div>  
                <div className="footer-col-4">
                    <h3>Follow Us</h3>
                    <ul className="list">
                        <li><a href="#">FaceBook</a></li>
                        <li><a href="#">Twitter</a></li>
                        <li><a href="#">Telegram</a></li>
                        <li><a href="#">Instagra</a></li>
                    </ul>
                  
               
        </div>
    </div>
        </>
    );
}
export default Nav;