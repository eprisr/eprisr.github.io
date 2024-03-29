import LeftSidebar from './LeftSidebar'
import RightSidebar from './RightSidebar'
import styled from 'styled-components'

const Sidebars = () => {
	return (
		<Wrapper>
			<LeftSidebar />
			<RightSidebar />
		</Wrapper>
	)
}

export default Sidebars

const Wrapper = styled.div `
	display: none;

	@media (min-width: 768px) {
		display: block;
	}
`