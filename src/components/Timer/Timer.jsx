import PropTypes from 'prop-types'
import { useState, useEffect, useContext } from 'react'

import MyContext from '../MyContext/MyContext'

const Timer = ({id, min, sec, play, timerId}) => {

  const [playState, setPlayState] = useState(play)
  const [minState, setMinState] = useState(min)
  const [secState, setSecState] = useState(sec)
  const holdTimer= useContext(MyContext)
  

  useEffect(() => {
    let s = secState
    let m = minState
    if(timerId) clearInterval(timerId)
    timerId = setInterval(() => {
     
      if (playState){ 
        if(s){
          s--
        } else if(m) {
          m--
          s=59
        } else if (!m){
          clearInterval(timerId)
        }
        holdTimer(id, m, s, playState, timerId)
        setSecState(s)
        setMinState(m)
      }
    }, 1000)
  }, [playState])

  const timerPlay = () => {
    setPlayState(true)
  }

  const timerPause = () => {
    setPlayState(false)
    clearInterval(timerId)
    holdTimer(id, minState, secState, playState, timerId)
  }
  
  const iconPlayPause = playState?
    <button className="icon icon-pause" onClick={timerPause} />:
    <button className="icon icon-play" onClick={timerPlay}/>
  
  return(
    <span className="description">
      {iconPlayPause}
      {minState}:{secState}
    </span>
  )
}


Timer.propTypes = {
  id: PropTypes.string,
  min: PropTypes.number,
  sec: PropTypes.number,
  play:PropTypes.bool,
}

Timer.defaultProps = {
  min: 0,
  sec: 0,
}

export default Timer