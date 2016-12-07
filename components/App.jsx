import React, {Component} from 'react';

import ChannelSection from './channels/ChannelSection';
import UserSection from './users/UserSection';
import MessageSection from './messages/MessageSection'
import Socket from '../socker.js'
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      channels: [],
      activeChannel: {},
      users: [],
      messages: [],
      connected: false,
    }
  }

  addChannel(name) {
    let {channels} = this.state;
    // channels.push({id: channels.length, name});

    // this.setState({channels});
    // TODO server stuff

    let msg = {
      name: 'channel add',
      data: {
        id: channels.length,
        name,
      },
    }
    this.ws.send(JSON.stringify(msg))
  } 
  setChannel(activeChannel) {
    this.setState({activeChannel})
    // TODO Get Channel messages
  }
  setUserName(name) {
    let {users} = this.state;
    users.push({id: users.length, name});
    
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

  newChannel(channel) {
    let {channels} = this.state;
    channels.push(channel);
    this.setState({channels});
  }
  componentDidMount() {
    let socket = this.socket = new Socket();
    socket.on('connect', this.onConnect.bind(this));
    socket.on('disconnect', this.onDisconnect.bind(this));
  }

  onConnect() {
    this.setState({connected: true});
  }
  disConnect() {
    this.setState({connected: false});
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
        </div>
          <MessageSection
            {...this.state}
            addMessage={this.addMessage.bind(this)}
          />
      </div>
    );
  }
}

export default App