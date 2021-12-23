//import logo from './logo.svg';
import './App.css';
import Profile from './components/Profile/Profile';
import user from './user.json';

function App() {
  return (
		<Profile
			username={user.username}
			tag={user.tag}
			location={user.location}
			avatar={user.avatar}
			followers={user.stats.followers}
			views={user.stats.views}
			likes={user.stats.likes}
   />
  );
}

export default App;
