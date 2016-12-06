import React, {Component} from 'react';
import ChannelList from './ChannelList';
import ChannelForm from './ChannelForm';

class ChannelSection extends Component {
  render() {
    return (
      <div>
        <ChannelList 
          {...this.props}
        />
        <ChannelForm 
          {...this.props}
        />
      </div>
    );
  }
}

ChannelForm.propTypes = {
  channels: React.PropTypes.array.isRequired,
  setChannel: React.PropTypes.func.isRequired,
  addChannel: React.PropTypes.func.isRequired,
}
export default ChannelSection;