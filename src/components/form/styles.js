import { styled } from 'styled-components';

const StyledTotalContainer = styled.div`
	display: flex;
	padding: 10%;
	gap: 150px;
	align-items: center;
	background-color: #ff7979;
	background-image: url(public/images/bg-intro-desktop.png);
	height: 100vh;

	@media (max-width: 750px) {
		display: flex;
		flex-direction: column;
		width: 750px;
		padding: 5%;
		margin-left: auto;
		margin-right: auto;
		margin-inline: auto;
		height: 120vh;
	}
`;

const StyledContainerOfContainer = styled.div``;
const StyledTitle = styled.p`
	color: #fff;
	font-family: Poppins;
	font-size: 50px;
	font-style: normal;
	font-weight: 700;
	line-height: 55px; /* 110% */
	letter-spacing: -0.521px;
	margin-bottom: 40px;
`;

const StyledBanner = styled.p`
	border-radius: 10px;
	background: #5e54a4;
	box-shadow: 0px 8px 0px 0px rgba(0, 0, 0, 0.15);
	color: #fff;
	font-family: Poppins;
	font-size: 15px;
	font-style: normal;
	font-weight: 400;
	padding-top: 15px;
	letter-spacing: 0.268px;
	height: 56px;
	text-align: center;
`;

const StyledDescription = styled.p`
	color: #fff;
	font-family: Poppins;
	font-size: 16px;
	font-style: normal;
	font-weight: 500;
	line-height: 26px; /* 162.5% */
`;

const StyledForm = styled.form`
	width: 540px;
	height: 474px;
	padding: 40px;
	background-color: white;
	text-align: center;
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	border-radius: 5px;
	margin-top: 20px;
`;

const StyledContainer = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	color: red;
`;

const StyledInput = styled.input`
	border-radius: 5px;
	border: 1px solid #5e54a4;
	background: #fff;
	width: 100%;
	height: 56px;
	font-size: 20px;
	padding-left: 20px;
`;

const StyledButton = styled.button`
	border-radius: 5px;
	background: #38cc8b;
	box-shadow: 0px -4px 0px 0px rgba(0, 0, 0, 0.09) inset;
	color: #fff;
	font-family: Poppins;
	font-size: 15px;
	font-style: normal;
	font-weight: 600;
	line-height: 26px;
	width: 460px;
	height: 56px;
`;

export {
	StyledInput,
	StyledContainer,
	StyledButton,
	StyledForm,
	StyledContainerOfContainer,
	StyledTotalContainer,
	StyledTitle,
	StyledDescription,
	StyledBanner
};
