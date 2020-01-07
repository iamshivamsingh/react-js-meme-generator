import React, { Component } from 'react'
import { connect } from 'react-redux'
import { fetchMemes } from '../Actions';
import MemeItem from './MemeItem';
import MyMemes from './MyMemes'
import { Input, Dimmer, Loader, Image, Segment  } from 'semantic-ui-react'

class App extends Component {
  constructor(){
    super()
    this.state ={
      memeLimit : 10,
      top:'',
      bottom:''
    }
  }
  componentDidMount(){
    this.props.dispatch(fetchMemes())
  }
  MemeList =props=> {
    const data = this.props.memes.memes;
    if(!this.props.memes.loading){
      return(
        <div>
        {
          data.slice(0, this.state.memeLimit).map((meme, i) => {
            return (
              <MemeItem 
                key={i} 
                meme={meme} 
                top={this.state.top}
                bottom={this.state.bottom}
              />
            )
          })
        }
        <h2 onClick={()=>this.setState({memeLimit:this.state.memeLimit + 10})} className="meme-button">Load 10 more memes</h2>
        </div>
      )
    }else{
      return (
        <Segment>
          <Dimmer active>
            <Loader content='Loading'  size='small' />
          </Dimmer>
          <Image src='https://react.semantic-ui.com/images/wireframe/short-paragraph.png' />
        </Segment>
      )
    }
  }
  render() {
    return (
      <div>
      <h1>Generate Meme</h1>
      <MyMemes />
      <div className="formBody">
        <Input 
          placeholder='Upper Text' 
          style={{ width: "300px" }} 
          onChange={(event) => this.setState({top:event.target.value})}
        />{'     '}
        <Input 
          placeholder='Bottom Text'
          style={{ width: "300px" }}
          onChange={(event) => this.setState({bottom:event.target.value})}
        />
        {'     '}
      </div>
        {this.MemeList()}
      </div>
    )
  }
}

const mapStateToProps = state => ({
  memes : state.memes
})

export default connect(mapStateToProps, null)(App);