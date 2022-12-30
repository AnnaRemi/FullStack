import React  from 'react';
import './Home_page.css'
import {
  useNavigate
} from "react-router-dom";

export default function Root(){
  const navigate = useNavigate();
  return(
    <div>
      <div className="container">
      <form className="first-page screen">
        <div className="background-1">
          <div className="background-2">
            <h1 className="title">
              Welcome to MyNotes!
            </h1>
            <div className="link_front">
              <div className="learn_more align text">
                <nav>
                    <li>
                      <a href={`/signin`}>sign in</a>
                    </li>
                    <li>
                      <a href={`/learnmore`}>learn more</a>
                    </li>
                    <li>
                      <a href={`/signup`}>sign up</a>
                    </li>
                </nav>
              </div>
            </div>
          </div>
          <div className="flex_row">
            <p className="intro">
            It's your new notebook, which <br />will assist you in your everyday tasks: 
            you can add any sticker, make a to-do list or simply<br /> write down your thoughts
            </p>
            
          </div>
          <a>
            {/* <div className="button_front group">
                <div className="lets_start align">
                  Let's start
                </div>
            </div> */}
            <button onClick={() => navigate("/newnote")} className='button_front group lets_start align'>
                Let's start
            </button>
          </a>
        </div>
      </form>
    </div>
  </div>
  )
}

