import React, {Component} from 'react';

import ChannelSection from './channels/ChannelSection';
import UserSection from './users/UserSection';
import MessageSection from './messages/MessageSection'

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      channels: [],
      activeChannel: {},
      users: [],
      messages: [],
    }
  }

  addChannel(name) {
    let {channels} = this.state;
    channels.push({id: channels.length, name});

    this.setState({channels});
    // TODO server stuff
  } 
  setChannel(activeChannel) {
    this.setState({activeChannel})
    // TODO Get Channel messages
  }
  setUserName(name) {
    let {users} = this.state;
    users.push({id: users.length, name});
    console.log('users ', users)
    this.setState({users});
    // TODO server stuff
  }
  addMessage(body) {
    let {messages, users} = this.state;
    let createdAt = new Date;
    let author = users.length > 0 ? users[0].name : 'anonymous';
    messages.push({id: messages.length, body, createdAt, author});

    this.setState({messages});
    // TODO server stuff
  }
  render() {
    return (
      <div className="app">
        <div className="nav">
          <ChannelSection
            {...this.state}
            addChannel={this.addChannel.bind(this)}
            setChannel={this.setChannel.bind(this)}
          />
          <UserSection
            {...this.state}
            setUserName={this.setUserName.bind(this)}
          />
          <MessageSection
            {...this.state}
            addMessage={this.addMessage.bind(this)}
          />
        </div>
      </div>
    );
  }
}

export default App