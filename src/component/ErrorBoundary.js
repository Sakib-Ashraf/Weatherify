import React, { Component } from 'react';

class ErrorBoundary extends Component{
    constructor(props) {
        super(props);
        this.state = {
            hasError : false,
        }
    }
    componentDidCatch(error, info) {
        this.setState({
            hasError : true,
        });
    }

    render() {
        return this.state.hasError ?
            <h1>Ooopsy doopsy.... something is wrong</h1> :
            this.props.children;
    }
}

export default ErrorBoundary;