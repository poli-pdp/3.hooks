import { useState } from 'react';
import FetchAPI from './components/FetchAPI';
import Lifecycle from './components/Lifecycle';

const App = () => {
	const [showLifecycle, setShowLifecycle] = useState(false);
	return (
		<div>
			{showLifecycle && <Lifecycle />}
			<FetchAPI />
		</div>
	);
};

export default App;
