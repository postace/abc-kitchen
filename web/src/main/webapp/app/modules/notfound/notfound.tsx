import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export default class NotFound extends React.Component {
  render() {
    return (
      <div style={{ textAlign: 'center' }}>
        <h1>
          <FontAwesomeIcon icon="ban" color="orange" />
          &nbsp;Sorry, Page not found!
        </h1>
      </div>
    );
  }
}
