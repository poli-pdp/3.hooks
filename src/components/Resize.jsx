import { useEffect, useState } from 'react';

const Resize = () => {
	useEffect(() => {
		const handlerResize = () => {
			setWindowsWidth(window.innerWidth);
		};
		window.addEventListener('resize', handlerResize);
		return () => {
			console.log('desmontar componente - UseEffect');
			window.removeEventListener('resize', handlerResize);
		};
	}, []);

	const [windowsWidth, setWindowsWidth] = useState(window.innerWidth);
	return <div>windows Width: {windowsWidth}</div>;
};

export default Resize;
