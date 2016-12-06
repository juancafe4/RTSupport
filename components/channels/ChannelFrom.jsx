import React, {Component} from 'react';

class ChannelForm extends Component {
  onSubmit(e) {
    e.preventDefault();

    const node = this.refs.channel;
    const val = node.value;
    this.props.addChannel(val);
    node.value = '';
  }
  render() {
    return (
     <form onSubmit={this.onSubmit.bind(this)}>
      <input 
        type="text"
        ref="channel"
      />
     </form>
    );
  }
}

ChannelForm.propTypes = {
  addChannel: React.Propstypes.func.isRequired,
}
export default ChannelForm;