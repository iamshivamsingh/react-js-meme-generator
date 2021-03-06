  
import React, { Component } from 'react';
import { connect } from 'react-redux';

class MyMemes extends Component{
  render(){
    return(
    <div>
        {
        this.props.myMemes.map((meme, index) =>{
            return(
            <img
                key={index}
                src={meme.meme.data.url}
                alt="my-meme"
                className="my-meme-img"
            />
            )
        })
        }
    </div>
    )
  }
}

const mapStateToProps =(state)=>({
    myMemes : state.myMeme
})

export default connect(mapStateToProps, null)(MyMemes);