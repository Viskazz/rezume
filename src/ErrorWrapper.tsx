import React, { Component, ErrorInfo } from 'react';

type IErrorProps = {
    props?: any
};

type IErrorState = {
    hasError: boolean,
    error?: Error | null,
    info: ErrorInfo | null
};

class ErrorWrapper extends Component<IErrorProps, IErrorState> {
    state = {
        hasError: false,
        error: null,
        info: null as ErrorInfo | null 
    };

    componentDidCatch(error: Error, info: ErrorInfo) {
        this.setState({ hasError: true, error: error, info: info });
    }

    render(): React.ReactNode {
            
        if (this.state.hasError) {
            console.log(this.state.info )
            return (
                <div>
                    <h1>Oops, something went wrong :(</h1>
                    <p>The error: {this.state.error}</p>
                    <p>Where it occured: { this.state.info?.componentStack }</p>
                </div>
            );
        };

        return this.props.children
    };
}

export default ErrorWrapper;