import React, {Component} from 'react';
import Message from './Message';

class MessageList extends Component {
  render() {
    return (
      <ul>
        {
          this.props.Messages.map((message) => {
            return <Message
              message={message}
              key={message.id}

            />
          })
        }
      </ul>
    );
  }
}

MessageList.propTypes = {
  messages: React.PropTypes.array.isRequired,
}
export default MessageList;