import React, {Component} from 'react';
import Channel from './Channel';

class ChannelForm extends Component {
  onSubmit(e) {
    e.preventDefault();
    const node = this.refs.channel;
    const val = node.value
    // channel name
    this.props.addChannel(val);

    node.value = '';
  }
  render() {
    return (
      <form onSubmit={this.onSubmit.bind(this)}>
        <div className="form-group">
          <input 
            className="form-control"
            placeholder="Add Chanel"
            type="text"
            ref="channel"
          />
        </div>
      </form>
    );
  }
}

ChannelForm.propTypes = {
  addChannel: React.PropTypes.func.isRequired,
}
export default ChannelForm;