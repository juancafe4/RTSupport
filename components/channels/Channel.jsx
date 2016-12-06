import React from 'react';
class Channel extends React.Component {
  onClick(e) {
    e.preventDefault();
    const {channel, setChannel} = this.props;
    setChannel(channel);
  }
  render() {
    const {channel} = this.props;
    return (
      <li>
        <a onClick={this.onClick.bind(this)}>
          {channel.name}
        </a>
      </li>
    );
  }
}

Channel.propTypes = {
  channel: React.Proptypes.object.isRequired,
  setChannel: React.PropTypes.func.isRequired,
}
export default Channel;