import { useEffect, useState } from 'react';
import getPosts from '../helpers/getPosts';
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

	const updatePosts = () => {
		getPosts(user.id).then(newPosts => {
			setPosts(newPosts);
		});
	};
	useEffect(() => {
		if (user?.id) updatePosts();
	}, [user]);

	return (
		<div>
			<button onClick={updateUser}>Otro usuario</button>
			<h4>{user.name}</h4>
			<ul>
				{posts.map(post => (
					<li key={post.id}>{post.title}</li>
				))}
			</ul>
		</div>
	);
};

export default FetchAPI;
