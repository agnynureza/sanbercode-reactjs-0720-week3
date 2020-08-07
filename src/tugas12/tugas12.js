import React from 'react';
import Moment from 'moment'

class Tugas12 extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            time: 0,
            timeNow : Moment().format('hh:mm:ss A')
        }
    }
    componentDidUpdate(){
        if(this.state.time <= 0){
            this.componentWillUnmount()
        }
    }
    componentDidMount(){
        if(this.props.start !== undefined){
            this.setState({time: this.props.start})
        }

        this.timerID = setInterval(
            ()=> this.tick(), 1000
        )
    }

    componentWillUnmount(){
        clearInterval(this.timerID)
    }

    tick(){
        this.setState({
            time: this.state.time - 1
        })
    }

  render(){
    return(
      <>
      { this.state.time > 0 &&
      <div class="jumbotron jumbotron-fluid">
      <div class="container">
        <h1 class="display-4">React StopWatch</h1>
        <h2>
            Sekarang jam : {this.state.timeNow}
          </h2>
          <h2>
            Hitung Mundur : {this.state.time}
          </h2>
      </div>
      </div>
  }
    </>
    )
  }
}
 
export default Tugas12;