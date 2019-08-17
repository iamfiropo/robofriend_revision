import React, { Component } from 'react';

class ErrorBoundry extends Component {
  constructor(props) {
    super(props);
    this.state = {
      hasError: false,
    }
  }

  static getDerivedStateFromError() {
    return {
      hasError: true
    }
  }

  componentDidCatch(error, info) {
    // this.logComponentStackToMyService(info.componentStack);
    this.logErrorToMyService(error, info);
  }

  render() {
    const { hasError } = this.state;
    return (
      <div>
        {
          hasError 
        ?
          <h1>OOOPS. Something went wrong. Reach out to the administrator of this app</h1>
        :
          this.props.children
        }
      </div>
    )
  }
}

export default ErrorBoundry;