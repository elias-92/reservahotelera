import styled from '@emotion/styled';
import {Button, Typography} from '@mui/material';
import backgroundImg from '../assets/img/banner.jpg';
import {Link} from 'react-router-dom';

const Banner = () => {
	return (
		<StyledRoot>
			<StyledInfo>
				<Typography variant="h2">Plan your getaway...</Typography>
				<Link to="/search">
					<Button variant="contained">Check our rooms</Button>
				</Link>
			</StyledInfo>
		</StyledRoot>
	);
};

const StyledRoot = styled.div`
	position: relative;
	height: 50vh;
	margin-bottom: 2rem;
	background-image: url(${backgroundImg});
	background-position: center;
	background-size: cover;
	min-width: 333px;
`;
const StyledInfo = styled.div`
	width: 290px;
	padding: 1rem;
	background-color: #000;
	color: #fff;
	& button {
		margin-top: 1rem;
		background-color: #ff671f66;
		color: #fff;
		font-size: 1.2rem;
		text-transform: inherit;
		font-weight: bold;
	}
	& button:hover {
		background-color: #fff;
		color: rgba(255, 103, 31);
	}
`;
export default Banner;
