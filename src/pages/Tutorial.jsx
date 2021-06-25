import FullPage from '../components/ui/FullPage'
import FooterSide from '../components/layout/Footer/FooterSide'

const Tutorial = () => {
	const tutContent = {
		title: 'Tutorial: Intro to React',
		subtitle: 'This tutorial doesn’t assume any existing React knowledge.',
		list: [
			{
				title: 'Setup for the Tutorial',
				hash: 'setup',
				info:
					'There are two ways to complete this tutorial: you can either write the code in your browser, or you can set up a local development environment on your computer.'
			},
			{
				title: 'Overview',
				hash: 'overview',
				info: 'Now that you’re set up, let’s get an overview of React!'
			},
			{
				title: 'Completing the Game',
				hash: 'completing-the-game',
				info:
					'We now have the basic building blocks for our tic-tac-toe game. To have a complete game, we now need to alternate placing “X”s and “O”s on the board, and we need a way to determine a winner.'
			},
			{
				title: 'Adding Time Travel',
				hash: 'adding-time-travel',
				info:
					'As a final exercise, let’s make it possible to “go back in time” to the previous moves in the game'
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
			<FullPage title="tut stuff" content={tutContent} links={commLinks} />
			<FooterSide />
		</div>
	)
}

export default Tutorial
