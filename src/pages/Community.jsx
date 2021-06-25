import FullPage from '../components/ui/FullPage'
import FooterSide from '../components/layout/Footer/FooterSide'

const Community = () => {
	const commContent = {
		title: 'Where To Get Support',
		subtitle: 'React has a community of millions of developers.',
		info:
			'On this page we’ve listed some React-related communities that you can be a part of; see the other pages in this section for additional online and in-person learning materials.',
		list: [
			{
				title: 'Stack Overflow',
				hash: 'stack-overflow',
				info:
					'Stack Overflow is a popular forum to ask code-level questions or if you’re stuck with a specific error. Read through the existing questions tagged with reactjs or ask your own!'
			},
			{
				title: 'Popular Discussion Forums ',
				hash: 'discussion',
				info:
					'There are many online forums which are a great place for discussion about best practices and application architecture as well as the future of React. If you have an answerable code-level question, Stack Overflow is usually a better fit.'
			},
			{
				title: 'News',
				hash: 'news',
				info:
					'For the latest news about React, follow @reactjs on Twitter and the official React blog on this website.'
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
		<div>
			<FullPage title="community resources" content={commContent} links={commLinks} />
			<FooterSide />
		</div>
	)
}

export default Community
