import { Component, type ErrorInfo, type ReactNode } from "react";

interface Props {
	children?: ReactNode;
	fallback: (error: Error) => ReactNode;
}

interface State {
	error: Error | undefined;
}

class ErrorBoundary extends Component<Props, State> {
	constructor(props: Props) {
		super(props);
		this.state = { error: undefined };
	}

	public state: State = {
		error: undefined,
	};

	public static getDerivedStateFromError(error: Error): State {
		// Update state so the next render will show the fallback UI.
		return { error };
	}

	public componentDidCatch(error: Error, errorInfo: ErrorInfo) {
		console.error("Uncaught error:", error, errorInfo);
	}

	public render() {
		if (this.state.error) {
			return this.props.fallback(this.state.error);
		}

		return this.props.children;
	}
}

export default ErrorBoundary;
