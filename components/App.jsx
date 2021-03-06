import React, {Component} from 'react';

import ChannelSection from './channels/ChannelSection';
import UserSection from './users/UserSection';
import MessageSection from './messages/MessageSection'
import Socket from '../socket'
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
    this.socket.emit('channel add', {name})
  } 
  setChannel(activeChannel) {
    this.setState({activeChannel})
    this.socket.emit('message unsubscribe');

    this.setState({messages: []});
    this.socket.emit('message subscribe', {channelId: activeChannel,id});
  }
  setUserName(name) {
   this.socket.emit('user edit', {name});
  }
  addMessage(body) {
    let {activeChannel} = this.state;
    this.socket.emit('message add', {channelId: activeChannel.id, body})
  }

  onAddChannel(channel) {
    let {channels} = this.state;
    channels.push(channel);
    this.setState({channels});
  }
  componentDidMount() {
    let socket = this.socket = new Socket();
    socket.on('connect', this.onConnect.bind(this));
    socket.on('disconnect', this.onDisconnect.bind(this));
    socket.on('channel add', this.onAddChannel.bond(this));
    socket.on('user add', this.onAddUser.bind(this));
    socket.on('user edit', this.onEditUser.bind(this));
    socket.on('user remove', this.onRemoveUser.bind(this));
    socket.on('message add', this.onAddMessage.bind(this));
  }

  onMessageAdd(message) {
    let {messages} = this.state;
    messages.push(message);
    this.setState({messages});
  }
  onAddUser(user) {
    let {users} = this.state;
    users.push(user);
    this.setState({users});
  }
  onEditUser(editUser) {
    let {users} = this.state;

    users = users.map((user) => {
      if (editUser.id === user.id) {
        return editUser;
      } else {
        return user;
      }
    });

    this.setState({users});
  }
  onRemoveUser(removeUser) {
    users = users.filter((user) => {
      return removeUser.id !== user.id;
    });

    this.setState({users});
  }
  onConnect() {
    this.setState({connected: true});
    this.socket.emit('channel subscribe');
    this.socket.emit('user subscribe');
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