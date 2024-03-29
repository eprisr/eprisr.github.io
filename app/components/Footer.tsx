import styled from 'styled-components'

const Footer = () => {
	const copyrightYear = new Date().getFullYear();

	return (
		<FooterCont>
			<Bar>
				<Copyright>
					<p>
						&copy; 
						<span
						>{copyrightYear} </span>
						Seven Times Design <br />
						Made with React <br />
						All Rights Reserved.
					</p>
				</Copyright>
			</Bar>
    </FooterCont>
  )
}

export default Footer


const FooterCont = styled.footer``

const Bar = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;
	width: 100vw;
	font-size: 10px;
	position: fixed;
	bottom: 0px;
	left: 0;
	color: #ccdbe5;
	min-height: 56px;
	padding: 0 16px;

	@media (min-width: 0px) and (orientation: landscape) {
		min-height: 48px;
	}
	
	@media screen and (max-width: 768px) {
		background: #202945;
	}
	
	@media (min-width: 600px) {
		padding: 0 24px;
		min-height: 64px;
	}
`

const Copyright = styled.div``