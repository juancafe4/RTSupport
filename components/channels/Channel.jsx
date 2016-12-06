import React from 'react';
class Channel extends React.Component {
  onClick(e) {
    e.preventDefault();
    const {channel, setChannel} = this.props;
    setChannel(channel);
  }
  render() {
    const {channel, activeChannel} = this.props;
    const active = channel === activeChannel ? 'active' : '';
    return (
      <li className={active}>
        <a onClick={this.onClick.bind(this)}>
          {channel.name}
        </a>
      </li>
    );
  }
}

Channel.propTypes = {
  channel: React.PropTypes.object.isRequired,
  setChannel: React.PropTypes.func.isRequired,
  activeChannel: React.PropTypes.object.isRequired,
}
export default Channel;