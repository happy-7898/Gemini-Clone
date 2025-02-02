import React, { useContext } from 'react'
import './Main.css'
import { assets } from '../../Assets/assets'
import { Context } from '../../Context/Context'
const Main = () => {

  const {onSent,recentPrompt,showResult,loading,resultData,setInput,input}=useContext(Context)

  return (
    <div className='main'>
      <div className='nav'>
        <p>Gemini</p>
        <img src={assets.user_icon} alt=''></img>
      </div>
      <div className='main-container'>

        {!showResult?
          <>
            <div className='greet'>
              <p><span>Hello, Happy. </span></p>
              <p>How can I help you</p>
            </div>
            <div className='cards'>
              <div className='card' onClick={()=>{
                 setInput("Suggest some beautiful places for a roadtrip")

                }}>
                <p>Suggest some beautiful places for a roadtrip</p>
                <img src={assets.compass_icon} alt=''></img>
              </div>
              <div className='card'
              onClick={()=>{
                setInput("best cars under 20lakh")

               }}>
                <p>best cars under 20lakh</p>
                <img src={assets.bulb_icon} alt=''></img>
              </div>
              <div className='card' 
              onClick={()=>{
                setInput("breif info about hayabusa bike")

               }}>
                <p>breif info about hayabusa bike</p>
                <img src={assets.message_icon} alt=''></img>
              </div>
              <div className='card'
              onClick={()=>{
                setInput("suggest me some movies")

               }}
              >
                <p>suggest me some movies</p>
                <img src={assets.code_icon} alt=''></img>
              </div>
            </div>
          </>:
          <div className='result'>
            <div className='result-title'>
              <img src={assets.user_icon} alt=''></img>
              <p>{recentPrompt}</p>
            </div>
            <div className='result-data'>
              <img src={assets.gemini_icon} alt=''></img>
              {loading?
              <div className='loader'>
                <hr></hr>
                <hr></hr>
                <hr></hr>
              </div>
              :<p dangerouslySetInnerHTML={{__html:resultData}}></p>}
              
            </div>
          </div>
  

        }
        

        <div className='main-bottom'>
          <div className='search-box'>
            <input onChange={(e)=>setInput(e.target.value)} value={input} type='text' placeholder='Enter a prompt here'></input>
            <div>
              <img src={assets.gallery_icon} alt=''></img>
              <img src={assets.mic_icon} alt=''></img>
              {input?<img onClick={()=>onSent()} src={assets.send_icon} alt=''></img>:null}
            </div>
          </div>
          <p className='bottom-info'>Gemini may display inaccurate info, including about people, so double-check its responses.Your privacy and Gemini Apps</p>
        </div>
      </div>
    </div>
  )
}

export default Main