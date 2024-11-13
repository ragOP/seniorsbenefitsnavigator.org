import React, { useState, useEffect } from "react";
//@ts-ignore
import TagManager from "react-gtm-module";
import axios from "axios";
import "./styles.scss";

import { scrollTo } from "../utils";
import { ToastContainer, toast, cssTransition } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Head_bg from "../assets/emily.png";
import {  Link } from 'react-router-dom';
import Headline from "../assets/emily.png";

// google tag manager

const tagManagerArgs = {
  gtmId: "GTM-KZJBC3B",
};

// TagManager.initialize(tagManagerArgs);

export default function Tsf() {

  
  useEffect(() => {
    window.document.title = "Senior's Allowance Program 2024";

 
  }, []);

  const handleCall = () => {

  };

  const [quiz, setQuiz] = useState("Are you over the age of 64?  ");
  const [step, setStep] = useState("process");
  const [min, setMin] = useState(3);
  const [second, setSecond] = useState<any>(0);
  const [yes,setYes]=useState("YES, I'M 65 OR OLDER")
  const [no,setNo]=useState("NO, I'M 64 OR YOUNGER")
  

  const stepProcess = () => {
    if (step === "Reviewing Your Answers...") {
      setTimeout(() => {
        setStep("Matching With Best Options...");
      }, 1500);
    }
    if (step === "Matching With Best Options...") {
      setTimeout(() => {
        setStep("Confirming Eligibility...");
      }, 1500);
    }
    if (step === "Confirming Eligibility...") {
      setTimeout(() => {
        setStep("completed");

       
      }, 1500);
    }

    if (step === "completed") {
      const startTime: any = new Date();
      const timer = setInterval(() => {
        const nowTime: any = new Date();
        setSecond((180 - Math.round((nowTime - startTime) / 1000)) % 60);
        setMin(
          Math.floor((180 - Math.round((nowTime - startTime) / 1000)) / 60)
        );
      }, 1000);
    }
  };

  useEffect(() => {
    stepProcess();
  }, [step]);

  const topScroll = (id: any) => {
    scrollTo({ id });
  };

  const handleQuizP = () => {
    topScroll("btn");
    if (quiz === "Are you over the age of 64?  ") {
      setYes("Yes")
      setNo("No")
      setQuiz("Are You Currently Enrolled in Medicare Part A or Part B?");
    } else {
      setStep("Reviewing Your Answers...");
     
      topScroll("top");
    }


  };

  const [rgbaTags, setRgbaTags] = useState(
    (window as any)._rgba_tags || [] // Temporary assertion for _rgba_tags
  );
  
  // Function to append the parameter to the URL
  // Function to append the parameter to the URL
  const appendToURL = (param: string, value: string) => {
    let url = window.location.href;
    const hashIndex = url.indexOf('#');
    let hash = '';

    // Check and save hash part of the URL
    if (hashIndex !== -1) {
      hash = url.substring(hashIndex);
      url = url.substring(0, hashIndex);
    }

    const newParam = `${param}=${encodeURIComponent(value)}`;
    if (url.includes('?')) {
      if (url.includes(`${param}=`)) {
        const regex = new RegExp(`${param}=[^&]*`);
        url = url.replace(regex, newParam);
      } else {
        url += `&${newParam}`;
      }
    } else {
      url += `?${newParam}`;
    }

    // Update the URL without reloading the page
    window.history.pushState(null, '', url + hash);
  };


  const handleQuizN = () => {
    if (quiz === "Are you over the age of 64?  ") {
      // Transition to the second question when "NO" is clicked on the first question
      setQuiz("Are You Currently Enrolled in Medicare Part A or Part B?");
      // Set the options for the second question (Yes and No)
      setYes("Yes");
      setNo("No");
    } else if (quiz === "Are You Currently Enrolled in Medicare Part A or Part B?") {
      // Logic for when the "NO" button is pressed on the second question
      appendToURL('ab', 'no');
  
      // Update the _rgba_tags array
      const updatedTags = [...rgbaTags, { ab: 'no' }];
      setRgbaTags(updatedTags);
      (window as any)._rgba_tags = updatedTags;
  
      // Scroll to the "NO" button section
      topScroll("btn");
  
      // Update quiz state for next question or review step
      setStep("Reviewing Your Answers...");
      topScroll("top");
  
      // Update visit data using Axios
      axios.get(process.env.REACT_APP_PROXY + `/visits/8`).then(({ data }) => {
        const _id = data[0]._id;
        const _visits = data[0].visits;
        const _views = data[0].views;
        const _calls = data[0].calls;
        const _positives = data[0].positives;
        const _negatives = data[0].negatives;
        const visits = {
          visits: _visits,
          views: _views,
          calls: _calls,
          positives: _positives,
          negatives: _negatives + 1,  // Increment negative count
        };
        axios
          .put(
            process.env.REACT_APP_PROXY + `/visits/update-visits8/` + _id,
            visits
          )
          .catch((err) => console.log(err));
      });
    }
  };

  useEffect(()=>{
    const url = window.location.href.split('?')[0]; // Remove query params from URL
    window.history.replaceState(null, '', url);
  },[])

  return (
    <div>
{/*      <ToastContainer /> */}
      <div style={{marginBottom:'4px'}} className="top-sticky-blue-test2" id="top">
      Senior's Allowance Program 2024
      </div>
      {step === "process" ? (
        <>
          <div className="main-container-5">
            <div className="main-descrition-5-5">
              <div className="main-des-title-6-7">
                <b>
                Americans Over 65 Can Now Qualify For The $900 Food Allowance Card Under 2024 Medicare Policy!
                </b>
              </div>
              {/* <img className='topic-img-larger' src = {Headline} alt = "head"/> */}
              <img className="topic-img-middle-z" src={Head_bg} alt="head" />
              <div  style={{marginTop:'14px'}}className="main-des-5">
              Americans over 65 years old can claim the 2024 Food Allowance Card that gives them up to $900. Americans can use the funds to fully cover their Food, Prescriptions at Walmart and thousands of other participating stores!

              </div>
              <div className="main-des-5"  style={{marginTop:'-5px'}}>
              If you have not yet claimed your monthly allowance then answer the questions below and once approved <b>you will have your $900 Food Allowance mailed to you within a few days ready for use!</b>
              </div>
              {/* <div className='main-des-5' style = {{marginTop:"1rem"}}><b>Simplemente responda las siguientes preguntas:</b></div> */}
            </div>
            <div style={{marginTop:'-5px'}} className="survey">
              <div className="quiz-5" id="btn">
                {quiz}
              </div>
              <div  className="answer">
                <div className="answer-btn-5" onClick={handleQuizP}>
              {yes}
                </div>
                <div className="answer-btn-5" onClick={handleQuizN}>
              {no}
                </div>
              </div>
            </div>
          </div>
        </>
      ) : step !== "process" && step !== "completed" ? (
        <div className="checking" style={{ fontWeight: "700" }}>
          {step}
        </div>
      ) : (
        <div className="checking">
          <div className="congrats">Congratulations, You Qualify!</div>
          <div className="top-description-5">
            Make A <b>Quick Call</b> To Claim Your Food Allowance!
          </div>
          <div className="spots-count">Spots remaining: 4</div>
          <div className="tap-direction">👇 TAP BELOW TO CALL 👇</div>
          <a href="tel:+13236897861">             <div className="call-btn" onClick={handleCall}>            CALL (323) 689-7861        </div>           </a>
          <div className="sub-description">
          Make sure to ask for medicare benefit for your area in order to receive the <b> Highest Possible Allowance.</b>
          </div>
          <div className="sub-title">We Have Reserved Your Spot</div>
          <div className="sub-description">
            Due to high call volume, your official agent is waiting for only{" "}
            <b>3 minutes</b>, then your spot will not be reserved.
          </div>
          <div className="timer">
            <div className="timer-cell">{min}</div>
            <div className="timer-cell">:</div>
            <div className="timer-cell">{second}</div>
          </div>
        </div>
      )}
      <div className="footer2">
      <div className="terms2">
          <Link to="/terms-and-conditions">Terms & Conditions</Link> | 
          <Link to="/privacy-policy">Privacy Policy</Link>
        </div>
        {/* <div className="terms2">Terms & Conditions | Privacy Policy</div> */}
        <div className="copyright">
          Copyright © 2024 - All right reserved Daily America Savings.
        </div>
        {/* <p>{zipCode} </p> */}
      </div>

    </div>
  );
}
