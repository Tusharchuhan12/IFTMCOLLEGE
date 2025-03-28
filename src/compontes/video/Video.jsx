import React, { useRef } from 'react'
import "./video.css"
function Video({ play,setplay }) {
    const player= useRef(null);

    const closePlayer=(e)=>{
        if(e.target === player.current){
            setplay(false);
        }

    }
    const close =()=>{
       setplay(false)
    }
  return (
      <div className={` ${play ? '':'hide'}`} ref={player}
      onClick={closePlayer} 
      >
          <div className='video-player ' onClick={close}> 
              <video src="collegevideo.mp4" autoPlay muted controls></video>
    </div>
      </div>
  )
}

export default Video
