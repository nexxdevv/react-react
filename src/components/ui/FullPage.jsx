import styled from 'styled-components'
import PageContent from './PageContent'
import Sidebar from './Sidebar'

const StyledWrapper = styled.div`
	#innerWrap {
		@media screen and (min-width: 768px) {
			grid-template-columns: 4.7fr 1.7fr;
		}
		@media screen and (min-width: 1280px) {
			
			max-width: 1250px;
			margin: 0 auto;
		}
	}
`

const FullPage = ({ content, title, links }) => {
	return (
		<StyledWrapper>
			<div id="innerWrap" className="md:grid md:gap-1">
				<div className="px-5 md:px-12 xl:px-0 pt-20 md:pt-32">
					<PageContent content={content} />
				</div>
				<div className="hidden md:block">
					<Sidebar title={title} links={links} />
				</div>
			</div>
		</StyledWrapper>
	)
}

export default FullPage
