import React, {Component} from 'react';
import UserList from './UserList';
import UserForm from './UserForm';

class UserSection extends Component {
  render() {
    return (
      <div className="support panel panel-primary">
        <div className="panel-heading">
          <strong>Users</strong>
        </div>
        <div className="panel-heading channels">
          <UserList 
            {...this.props}
          />
          <UserFormForm 
            {...this.props}
          />
        </div>
      </div>
    );
  }
}

ChannelForm.propTypes = {
  users: React.PropTypes.array.isRequired,
  setUserName: React.PropTypes.func.isRequired,
}
export default UserSection;