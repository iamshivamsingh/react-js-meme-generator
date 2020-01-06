import React, { Component } from 'react'
import { connect } from 'react-redux'
import { fetchMemes } from '../actions';
import MemeItem from './MemeItem';

class App extends Component {
  constructor(){
    super()
    this.state ={
      memeLimit : 10
    }
  }
  componentDidMount(){
    this.props.dispatch(fetchMemes())
  }
  render() {
    if(!this.props.memes.loading){
      const data = this.props.memes.memes;
      return (
        <div>
        <h1>Generate Meme</h1>
          {
            data.slice(0, this.state.memeLimit).map((meme, i) => {
              return (
                <MemeItem key={i} meme={meme} />
              )
            })
          }
          <h2 onClick={()=>this.setState({memeLimit:this.state.memeLimit + 10})} className="meme-button">Load 10 more memes</h2>
        </div>
      )
    }else{
      return (
        <div><h1 style={{cursor: 'pointer'}}>Loading Memes...</h1></div>
      )
    }
  }
}

const mapStateToProps = state => ({
  memes : state.memes
})

export default connect(mapStateToProps, null)(App);