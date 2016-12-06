import React, {Component} from 'react';
import ChannelList from './ChannelList';
import ChannelForm from './ChannelForm';

class ChannelSection extends Component {
  onSubmit(e) {
  render() {
    return (
      <div>
        <ChannelList 
          {...this.props}
        />
        <ChannelFrom 
          {...this.props}
        />
      </div>
    );
  }
}

ChannelForm.propTypes = {
  channels: React.Propstypes.array.isRequired,
  setChannel: React.Propstypes.func.isRequired,
  addChannel: React.Propstypes.func.isRequired,
}
export default ChannelSection;