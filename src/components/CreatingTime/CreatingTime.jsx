import { formatDistanceToNow } from 'date-fns'
import PropTypes from 'prop-types'
import { useState, useEffect  } from 'react'

const CreatingTime = ({date}) => {
  
  function getTime(){
    return formatDistanceToNow(date, {
      includeSeconds: true,
      addSuffix: true
    })
  }
  
  const [timeLeft, setTimeLeft] = useState(getTime())

  useEffect(()=> {
    const timerID = setInterval(()=>{
      let time = getTime()
      setTimeLeft(time)
    }, 10000)
    
    return () => clearInterval(timerID)
  }, [])

  return (
    <span className="description">{timeLeft}</span>
  )
}

CreatingTime.propTypes = {
  date: PropTypes.instanceOf(Date)
}
  
CreatingTime.defaultProps = {
  date: new Date()
}

export default CreatingTime