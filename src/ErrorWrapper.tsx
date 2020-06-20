import React, { Component, ErrorInfo } from 'react';

type IErrorProps = {
    props?: any
};

type IErrorState = {
    hasError: boolean,
    error?: Error,
    info?: ErrorInfo | undefined
};

class ErrorWrapper extends Component<IErrorProps, IErrorState> {
    state = {
        hasError: false,
        error: undefined,
        info: undefined
    };

    componentDidCatch(error: Error, info: ErrorInfo) {
        this.setState({ hasError: true, error: error, info: info });
    }

    render() {
        const info1 = { ...this.state };
        console.log(info1)
        if (this.state.hasError) {
            return (
                <div>
                    <h1>Oops, something went wrong :(</h1>
                    <p>The error: {this.state.error}</p>
                    {/* <p>Where it occured: { info1.componentStack }</p> */}
                </div>
            );
        };

        return this.props.children
    };
}

export default ErrorWrapper;