import React from 'react'
import styled from 'styled-components'

const StyledHero = styled.div`
	background: #1e2127;
	background-color: #6b0f1a;
	background-image: linear-gradient(315deg, #53d1f9 0%, #1e2127 74%);

	color: #fff;
	h1 {
		color: #53d1f9;
		font-weight: bold;
	}
	#btnBlue {
		background: #53d1f9;
	}
	#otherBtn {
		color: #fff;
		&:hover {
			opacity: .85;
		}
	}
`

const Hero = () => {
	return (
		<StyledHero className="flex flex-col items-center justify-center pt-10 pb-6">
			<h1 className="text-3xl mb-4">React</h1>
			<p className="font-extralight tracking-wide leading-5  mb-8">
				A JavaScript library for <br /> building user interfaces
			</p>
			<div className="flex items-center space-x-2">
				<button id="btnBlue" className="px-5 font-medium py-2 text-gray-100 rounded hover:opacity-90 transition duration-200">
					Get Started
				</button>
				<button
					id="otherBtn"
					className="px-5 py-2 flex items-center space-x-2 rounded border border-white transition duration-200 hover:shadow"
				>
					<p>Take the Tutorial</p>
					<div><i class="fa fa-chevron-right" aria-hidden="true" /></div>
				</button>
			</div>
		</StyledHero>
	)
}

export default Hero
