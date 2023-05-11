import { useState } from 'react';
import FetchAPI from './components/FetchAPI';
import Lifecycle from './components/Lifecycle';
import Resize from './components/Resize';

const App = () => {
	const [showLifecycle, setShowLifecycle] = useState(false);
	const [showResize, setshowResize] = useState(false);
	return (
		<div>
			{showLifecycle && <Lifecycle />}
			<FetchAPI />
			<button
				onClick={() => {
					setshowResize(!showResize);
				}}
			>
				{showResize ? 'Ocultar' : 'Mostrar'}
			</button>
			{showResize && <Resize />}
		</div>
	);
};

export default App;
