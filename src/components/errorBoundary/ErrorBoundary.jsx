import React from 'react';

export default class ErrorBoundary extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			hasError: false
		};
	}

	static getDerivedStateFromError(error) {
		return { hasError: true };
	}

	componentDidCatch(error, info) {
		// logging error to analytics service
		console.log(error, info);
	}

	render() {
		return this.state.hasError ? (
			<>{this.props.fallbackUI}</>
		) : (
			<>{this.props.children}</>
		);
	}
}
