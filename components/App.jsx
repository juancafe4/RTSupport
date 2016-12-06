import React, {Component} from 'react';

import ChannelSection from './channels/ChannelSection';
import UserSection from './users/UserSection';
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      channels: [],
      activeChannel: {},
      users: [],
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
      </div>
    );
  }
}

export default App