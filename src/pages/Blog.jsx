import FullPage from '../components/ui/FullPage'
import FooterSide from '../components/layout/Footer/FooterSide'

const Blog = () => {
	const blogContent = {
		title: 'The Plan for React 18',
		subtitle: 'The React team is excited to share a few updates:',
		info:
			'These updates are primarily aimed at maintainers of third-party libraries. If you’re learning, teaching, or using React to build user-facing applications, you can safely ignore this post. But you are welcome to follow the discussions in the React 18 Working Group if you’re curious!',
		list: [
			{
				title: "What's coming in React 18",
				hash: 'coming-up-18',
				info:
					'When it’s released, React 18 will include out-of-the-box improvements (like automatic batching), new APIs (like startTransition), and a new streaming server renderer with built-in support for React.lazy.'
			},
			{
				title: 'A gradual adoption strategy',
				hash: 'adoption',
				info:
					'Since concurrency in React 18 is opt-in, there are no significant out-of-the-box breaking changes to component behavior. You can upgrade to React 18 with minimal or no changes to your application code, with a level of effort comparable to a typical major React release. Based on our experience converting several apps to React 18, we expect that many users will be able to upgrade within a single afternoon.'
			},
			{
				title: 'Working with the community',
				hash: 'community',
				info:
					'We’re trying something new for this release: We’ve invited a panel of experts, developers, library authors, and educators from across the React community to participate in our React 18 Working Group to provide feedback, ask questions, and collaborate on the release. We couldn’t invite everyone we wanted to this initial, small group, but if this experiment works out, we hope there will be more in the future!'
			},
			{
				title: 'Accessing the React 18 Working Group',
				hash: 'working-group',
				info: 'Everyone can read the discussions in the React 18 Working Group repo.'
			},
			{
				title: 'How to try React 18 Alpha today',
				hash: 'react-alpha',
				info:
					'New alphas are regularly published to npm using the @alpha tag. These releases are built using the most recent commit to our main repo. When a feature or bugfix is merged, it will appear in an alpha the following weekday.'
			},
			{
				title: 'Projected React 18 release timeline',
				hash: 'timeline',
				info:
					'We don’t have a specific release date scheduled, but we expect it will take several months of feedback and iteration before React 18 is ready for most production applications.'
			}
		]
	}
	const commLinks = [
		'support',
		'team',
		'courses',
		'examples',
		'conferences',
		'articles',
		'videos',
		'external resources'
	]
	return (
		<>
			<FullPage title="blog shit" content={blogContent} links={commLinks} />
			<FooterSide />
		</>
	)
}

export default Blog
