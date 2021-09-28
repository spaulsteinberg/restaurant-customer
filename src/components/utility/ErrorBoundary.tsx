import React, {Component} from 'react';

class ErrorBoundary extends Component {
    state = {
        hasError: false
    }

    componentDidCatch = (error:any, info:any) => {
        this.setState({hasError: true})
    }
    render(){
        return this.state.hasError
             ? <h1 className="centered-danger-message">Something went wrong! Please reload the application.</h1>
             : this.props.children;
    }
}

export default ErrorBoundary;