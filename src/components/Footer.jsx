import styled from '@emotion/styled';
import {Typography} from '@mui/material';

const Footer = () => {
	return (
		<FooterContainer>
			<Typography variant="subtitle1">
				2023-Copyright by Elias Martinez
			</Typography>
			<Typography variant="subtitle1">Privacy - Terms - Sitemap</Typography>
		</FooterContainer>
	);
};

const FooterContainer = styled.div`
	margin-top: 2rem;
	border-top: 1px solid #ccc;
	text-align: center;
	font-style: italic;
	background-color: whitesmoke;
`;

export default Footer;
