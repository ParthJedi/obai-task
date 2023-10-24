import React from 'react';
import PageContent from './components/pageContent/PageContent';
import 'bootstrap/dist/css/bootstrap.css';
import ErrorBoundary from './components/errorBoundary/ErrorBoundary';

function App() {
	return (
		<>
			<ErrorBoundary
				fallbackUI={'Kindly refresh. Something went wrong in the UI'}
			>
				<div className='App'>
					<PageContent />
				</div>
			</ErrorBoundary>
		</>
	);
}

export default App;
