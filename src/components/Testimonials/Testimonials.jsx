import React, { useRef } from "react";
import "./Testimonials.css";
import next_icon from "../../assets/next-icon.png";
import back_icon from "../../assets/back-icon.png";
import user_1 from "../../assets/user-1.png";
import user_2 from "../../assets/user-2.png";
import user_3 from "../../assets/user-3.png";
import user_4 from "../../assets/user-4.png";
function Testimonials() {
const slider=useRef()
let tx=0;
const slideFoward = () => {
    if (tx > -50) {
       tx -= 25;
    }
    slider.current.style.transform = `translate(${tx}%)`;
   };
   const slideBackward = () => {
    if (tx < 0) {
       tx += 25;
    }
    slider.current.style.transform = `translate(${tx}%)`;
   };
   
  return (
    <div className="testimonials">
      <img src={next_icon} alt="" className="next-btn" onClick={slideFoward} />
      <img src={back_icon} alt="" className="back-btn" onClick={slideBackward} />
      <div className="slider">
        <ul ref={slider}>
        <li>
 <div className="slide">
    <div className="user-info">
      <img src={user_1} alt="William Jackson's profile picture" />
      <div>
        <h3>William Jackson</h3>
        <span>Edusity, USA</span>
      </div>
    </div>
    <p>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia, sit rerum quis consectetur quas quasi sequi iure, molestiae possimus minus, vitae rem eveniet corrupti quisquam deserunt eos. Unde quam totam ad quod fugit, delectus adipisci voluptatum dolore! Obcaecati aliquam nulla possimus sapiente? Qui hic molestiae quam ut animi enim expedita.
    </p>
 </div>
</li>
<li>
 <div className="slide">
    <div className="user-info">
      <img src={user_2} alt="William Jackson's profile picture" />
      <div>
        <h3>William Jackson</h3>
        <span>Edusity, USA</span>
      </div>
    </div>
    <p>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia, sit rerum quis consectetur quas quasi sequi iure, molestiae possimus minus, vitae rem eveniet corrupti quisquam deserunt eos. Unde quam totam ad quod fugit, delectus adipisci voluptatum dolore! Obcaecati aliquam nulla possimus sapiente? Qui hic molestiae quam ut animi enim expedita.
    </p>
 </div>
</li>
<li>
 <div className="slide">
    <div className="user-info">
      <img src={user_3} alt="William Jackson's profile picture" />
      <div>
        <h3>William Jackson</h3>
        <span>Edusity, USA</span>
      </div>
    </div>
    <p>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia, sit rerum quis consectetur quas quasi sequi iure, molestiae possimus minus, vitae rem eveniet corrupti quisquam deserunt eos. Unde quam totam ad quod fugit, delectus adipisci voluptatum dolore! Obcaecati aliquam nulla possimus sapiente? Qui hic molestiae quam ut animi enim expedita.
    </p>
 </div>
</li>
<li>
 <div className="slide">
    <div className="user-info">
      <img src={user_4} alt="William Jackson's profile picture" />
      <div>
        <h3>William Jackson</h3>
        <span>Edusity, USA</span>
      </div>
    </div>
    <p>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia, sit rerum quis consectetur quas quasi sequi iure, molestiae possimus minus, vitae rem eveniet corrupti quisquam deserunt eos. Unde quam totam ad quod fugit, delectus adipisci voluptatum dolore! Obcaecati aliquam nulla possimus sapiente? Qui hic molestiae quam ut animi enim expedita.
    </p>
 </div>
</li>

        </ul>
      </div>
    </div>
  );
}

export default Testimonials;
