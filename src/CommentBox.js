import React, {Component} from 'react'
import CommentList from './CommentList'
import CommentForm from './CommentForm'
import style from './style'

class CommentBox extends Component {
  constructor(props){
    super(props)
    this.state = {
      data: []
    }
  }

  render(){
    return(
      <div style={style.commentBox}>
        <h2>Comments:</h2>
        <CommentForm />
        <CommentList data={ this.state.data } />
      </div>
    )
  }
}

export default CommentBox
