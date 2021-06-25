import { useRoutes } from 'react-router'
import Navbar from './components/layout/Navbar/Navbar'
import Home from './pages/Home/Home'
import Docs from './pages/Docs'
import Tutorial from './pages/Tutorial'
import Blog from './pages/Blog'
import Community from './pages/Community'

const routes = [
	{ path: '/', element: <Home /> },
	{ path: '/docs', element: <Docs /> },
	{ path: '/tutorial', element: <Tutorial /> },
	{ path: '/blog', element: <Blog /> },
	{ path: '/community', element: <Community /> }
]

const App = () => {
	let element = useRoutes(routes)

	return (
		<div>
			<Navbar />
			<div>{element}</div>
		</div>
	)
}

export default App
