import React, {Component} from 'react'
import style from './style'

class CommentForm extends Component {

  // NOTE: initializes state
  constructor(props){
    super(props)
    this.state = {
      author: '',
      text: ''
    }
  }

  handleAuthorChange(event) {
    this.setState({
      author: event.target.value
    })
  }

  handleTextChange(event) {
    this.setState({
      text: event.target.value
    })
  }

  handleSubmit(event) {
    event.preventDefault();
    console.log(`${this.state.author} said: "${this.state.text}"`);
  }

  render(){
    return(
      <div>
        <form style={style.commentForm} onSubmit={this.handleSubmit}>
          <input
            type='text'
            style={style.commentFormAuthor}
            placeholder='Name'
            value={this.state.author}
            onChange={this.handleAuthorChange} />
          <input
            type='text'
            style={style.commentFormText}
            placeholder='Enter your comment'
            value={this.state.text}
            onChange={this.handleTextChange} />
          <button
            type='submit'
            style={style.commentFormPost}>
              Submit
          </button>
        </form>
      </div>
    )
  }
}

export default CommentForm
