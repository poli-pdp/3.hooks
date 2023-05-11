import { useEffect, useState } from 'react';
console.log('Pre-render');
const Lifecycle = () => {
	console.log('Logic-render');
	const [counter1, setCounter1] = useState(0);
	const [counter2, setCounter2] = useState(0);

	useEffect(() => {
		console.log('useEffect sin dependencias/default');
	});
	useEffect(() => {
		console.log('useEffect [] con dependencias pero vacio');
	}, []);
	useEffect(() => {
		console.log('useEffect [counter1] ');
	}, [counter1]);
	useEffect(() => {
		console.log('useEffect [counter1,counter2] ');
	}, [counter1, counter2]);

	return (
		<div>
			{console.log('return-render')}
			Lifecycle
			<h4>Counter 1: {counter1}</h4>
			<h4>Counter 2: {counter2}</h4>
			<button onClick={() => setCounter1(counter1 + 1)}>Counter1</button>
			<button onClick={() => setCounter2(counter2 + 1)}>Counter2</button>
		</div>
	);
};

export default Lifecycle;
