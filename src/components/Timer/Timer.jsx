import { Component } from 'react'
import PropTypes from 'prop-types'

export default class Timer extends Component {
  
  state={ 
    play:this.props.play,
    sec:this.props.sec,
    min:this.props.min
  }

  componentDidMount() {
    if(this.state.play) {
      this.timerID = setInterval(() => this.tick(), 1000)
    }
  }

  componentWillUnmount() {
    this.props.holdTimer(this.state)
    clearInterval(this.timerID)
  }

  togglePlay = () => { 
    if(!this.state.play) {
      this.timerID = setInterval(() => this.tick(), 1000)
    } else {
      clearInterval(this.timerID)
    }
    this.setState({
      play:!this.state.play
    })
   
  }

  tick = ()  =>{
    let {sec, min} = this.state
    if (this.state.sec) {
      sec = this.state.sec-1
    } else if(this.state.min) {
      min=this.state.min-1
      sec=59
    } else if (!this.state.min){
      clearInterval(this.timerID)
      return
    }
    this.setState({
      sec:sec,
      min:min
    })
  }

  render() {
    const iconPlayPause = this.state.play?
      <button className="icon icon-pause" onClick={this.togglePlay} />:
      <button className="icon icon-play" onClick={this.togglePlay}/>
    const {min, sec} = this.state

    return(
      <span className="description">
        {iconPlayPause}
        {min}:{sec}
      </span>
    )
  }
}

Timer.propTypes = {
  min: PropTypes.number,
  sec: PropTypes.number,
  play:PropTypes.bool,
  holdTimer: PropTypes.func.isRequired,
}

Timer.defaultProps = {
  min: 0,
  sec: 0,
}