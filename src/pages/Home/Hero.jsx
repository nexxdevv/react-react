import React from 'react'
import styled from 'styled-components'

const StyledHero = styled.div`
	background: #1e2127;
	background-color: #6b0f1a;
	background-image: linear-gradient(315deg, #53d1f9 0%, #1e2127 74%);
	color: #fff;
	@media screen and (min-width: 768px) {
		height: 300px;
	}
	@media screen and (min-width: 1280px) {
		height: 420px;
	}
	h1 {
		color: #53d1f9;
		font-weight: bold;
	}
	button {
		height: 45px;
		@media screen and (min-width: 1280px) {
			height: 55px;
		}
	}
	#btnBlue {
		background: #53d1f9;
		color: #333;
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
		<StyledHero className="flex flex-col items-center justify-center pt-10 md:pt-16 pb-6 md:pb-16 mt-12">
			<h1 className="mb-4 xl:mb-6 text-3xl md:text-5xl xl:text-6xl">React</h1>
			<p className="font-extralight tracking-wide leading-5  mb-8 xl:mb-16 md:text-2xl xl:text-3xl">
				A JavaScript library for <br className="md:hidden" /> building user interfaces
			</p>
			<div className="flex items-center space-x-3">
				<button
					id="btnBlue"
					className="px-5 font-medium   rounded hover:opacity-90 transition duration-200 xl:text-xl"
				>
					Get Started
				</button>
				<button
					id="otherBtn"
					className="px-5  font-medium flex items-center space-x-2 rounded border border-white transition duration-200 hover:shadow xl:text-xl"
				>
					<p>Take the Tutorial</p>
					<div>
						<i class="fa fa-chevron-right" aria-hidden="true" />
					</div>
				</button>
			</div>
		</StyledHero>
	)
}

export default Hero
