import React, { Component } from "react";

class ErrorBoundary extends Component {
    constructor(props) {
        super(props);
        this.state = {
            hasError: false
        }
    }

    //similar to the tri-catch method in JavaScript. If anything errors
    //out, it'll run the below life cycle hook. it'll set boolean
    //hasError to true and return the h1 tag.
    componentDidCatch(error, info) {
        this.setState({ hasError: true })
    }
    
    //if the child wrapped by component ErrorBoundaary gives an error,
    //render the h1 tag error message. Otherwise, render the props of the
    //child.
    render() {
        if(this.state.hasError) {
            return <h1>Ooops. That is not good.</h1>
        }
        return this.props.children
    }
}

export default ErrorBoundary;