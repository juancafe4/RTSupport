import React, {Component} from 'react';

class MessageForm extends Component {
  onSubmit(e) {
    e.preventDefault();
    const node = this.refs.message;
    const val = node.value
    // message
    this.props.addMessage(val);

    node.value = '';
  }
  render() {
    let input = null;

    if (this.props.activeChannel.id !== undefined) {
      input = (
        <input 
          type="text"
          ref="message"
          className="form-control"
          placeholder="Add Message"
        />
      )
    }
    return (
      <form onSubmit={this.onSubmit.bind(this)}>
        <div className="form-group">
          {input}
        </div>
      </form>
    );
  }
}

MessageForm.propTypes = {
  addMessage: React.PropTypes.func.isRequired,
  activeChannel: React.PropTypes.object.isRequired,
}
export default MessageForm;