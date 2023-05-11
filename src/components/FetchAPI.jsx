import { useEffect, useState } from 'react';
import getUser from '../helpers/getUser';

const FetchAPI = () => {
	const [user, setUser] = useState({});
	const [posts, setPosts] = useState([]);

	const updateUser = () => {
		getUser().then(newUser => {
			setUser(newUser);
		});
	};

	useEffect(() => {
		updateUser();
	}, []);

	return (
		<div>
			<button onClick={updateUser}>Otro usuario</button>
			<h4>{user.name}</h4>
		</div>
	);
};

export default FetchAPI;
