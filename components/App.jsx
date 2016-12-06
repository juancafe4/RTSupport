import React, {Component} from 'react';

import ChannelSection from './channels/ChannelSection';

class App extends Component {
  constructor(props) {
    super(props);
    this.state.channels = {
      channels: [],
    }
  }

  addChannel(name) {
    let {channels} = this.state;
    channels.push(name);

    this.setState({channels});
    // TODO server stuff
  } 
  setChannel(activeChannel) {
    this.setState({activeChannel})
    // TODO Get Channel messages
  }
  render() {
    return (
      <ChannelSection
        channels={this.state.channels}
        addChannel={this.addChannel.bind(this)}
        setChannel={this.setChannel.bind(this)}
      />
    );
  }
}

export default App