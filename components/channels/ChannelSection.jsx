import React, {Component} from 'react';
import ChannelList from './ChannelList';
import ChannelForm from './ChannelForm';

class ChannelSection extends Component {
  render() {
    return (
      <div className="support panel panel-primary">
        <div className="panel-heading">
          <strong>Channels</strong>
        </div>
        <div className="panel-heading channels">
          <ChannelList 
            {...this.props}
          />
          <ChannelForm 
            {...this.props}
          /></div>
      </div>
    );
  }
}

ChannelForm.propTypes = {
  channels: React.PropTypes.array.isRequired,
  setChannel: React.PropTypes.func.isRequired,
  addChannel: React.PropTypes.func.isRequired,
  activeChannel: React.PropTypes.object.isRequired,
}
export default ChannelSection;