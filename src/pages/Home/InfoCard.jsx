import React from 'react'
import styled from 'styled-components'

const StyledContainer = styled.div`
	width: 100%;
	display: flex;
	flex-wrap: nowrap;
	overflow-x: auto;
	padding: 40px 0;
	background: #fff;
	@media screen and (min-width: 768px) {
		display: grid;
		grid-template-columns: repeat(3, 1fr);
		padding: 48px;
		gap: 2rem;
	}
	@media screen and (min-width: 1280px) {
		max-width: 1250px;
		margin: 0 auto;
		padding: 40px 0;
	}

	#card {
		max-width: 80%;
		flex: 0 0 auto;
		@media screen and (min-width: 728px) {
			max-width: 100%;
		}
		h2 {
			color: rgb(109, 109, 109);
			font-size: 20px;
			font-weight: 300;
		}
	}
`

const InfoCard = () => {
	const cards = [
		{
			title: 'Declarative',
			first:
				'React makes it painless to create interactive UIs. Design simple views for each state in your application, and React will efficiently update and render just the right components when your data changes.',
			second: 'Declarative views make your code more predictable and easier to debug.'
		},
		{
			title: 'Component-Based',
			first:
				'Build encapsulated components that manage their own state, then compose them to make complex UIs.',
			second:
				'Since component logic is written in JavaScript instead of templates, you can easily pass rich data through your app and keep state out of the DOM.'
		},
		{
			title: 'Learn Once, Write Anywhere',
			first:
				'We don’t make assumptions about the rest of your technology stack, so you can develop new features in React without rewriting existing code.',
			second:
				'React can also render on the server using Node and power mobile apps using React Native.'
		}
	]
	return (
		<StyledContainer>
			{cards.map((card) => (
				<div id="card" className="border p-5 m-5 md:mx-0  rounded-lg shadow">
					<h2 className="mb-5">{card.title}</h2>
					<p className="mb-5">{card.first}</p>
					<p>{card.second}</p>
				</div>
			))}
		</StyledContainer>
	)
}

export default InfoCard
