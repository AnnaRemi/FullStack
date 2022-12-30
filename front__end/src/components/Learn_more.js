import React  from 'react';
import './Learn_more.css'
import {
  useNavigate
} from "react-router-dom";

export default function Log_in_page() {
  const navigate = useNavigate();
  
  return (
    <div className="container-learn-more">
    <form className="big_box-learn-more">
      <p className='text-learn-more align'>
      Hi! <br />
      I’m Anna and I just really love all types of diaries and I want to share my passion for writing things down with everyone!
I really hope you’ll find my app funny and usefull, as you can easily write your thoughts, add stickers, pictures or posters just like you would do in a usual diary, but now you can do this anywhere from you phone, tablet or laptop, no need to carry extra weight to do what you like. 
For any suggestions or comments you can contact me at telegram: <br />
<a href='https://t.me/AnnaRemi'>@AnnaRemi <br /></a>
or by e-mail: <br />
<a href='mailto:remizova.av@phystech.edu'>remizova.av@phystech.edu</a>
      </p>
    </form>
    <button onClick={() => navigate("/")} className='text home'>
                home
            </button>
  </div>
  )
}