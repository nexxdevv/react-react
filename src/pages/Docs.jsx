import FullPage from '../components/ui/FullPage'
import FooterSide from '../components/layout/Footer/FooterSide'

const Docs = () => {
	const docsContent = {
		title: 'Getting Started',
		subtitle: 'This page is an overview of the React documentation and related resources.',
		info:
			'React is a JavaScript library for building user interfaces. Learn what React is all about on our homepage or in the tutorial.',
		list: [
			{
				title: 'Try React',
				hash: 'try-react',
				info:
					'React has been designed from the start for gradual adoption, and you can use as little or as much React as you need. Whether you want to get a taste of React, add some interactivity to a simple HTML page, or start a complex React-powered app, the links in this section will help you get started.'
			},
			{
				title: 'Learn React',
				hash: 'learn-react',
				info:
					'People come to React from different backgrounds and with different learning styles. Whether you prefer a more theoretical or a practical approach, we hope you’ll find this section helpful.'
			},
			{
				title: 'Staying Informed',
				hash: 'staying-informed',
				info:
					'The React blog is the official source for the updates from the React team. Anything important, including release notes or deprecation notices, will be posted there first.'
			},
			{
				title: 'Versioned Documentation',
				hash: 'versioned-documentation',
				info:
					'This documentation always reflects the latest stable version of React. Since React 16, you can find older versions of the documentation on a separate page. Note that documentation for past versions is snapshotted at the time of the release, and isn’t being continuously updated.'
			},
			{
				title: 'Something Missing?',
				hash: 'something-missing',
				info:
					'If something is missing in the documentation or if you found some part confusing, please file an issue for the documentation repository with your suggestions for improvement, or tweet at the @reactjs account. We love hearing from you!'
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
			<FullPage title="doc stuff" content={docsContent} links={commLinks} />
			<FooterSide />
		</>
	)
}

export default Docs
