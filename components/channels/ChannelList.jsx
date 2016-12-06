import React, {Component} from 'react';
import Channel from './Channel';

class ChannelList extends Component {
  render() {
    return (
      <ul>
        {
          this.props.channels.map(chan => 
            <Channel
              channel={chan}
              setChannel={this.props.setChannel}
            />
          )
        }
      </ul>
    );
  }
}

ChannelList.propTypes = {
  channels: React.Propstypes.array.isRequired,
  setChannel: React.Propstypes.func.isRequired,
}
export default ChannelList;