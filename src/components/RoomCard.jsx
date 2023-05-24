import {Typography} from '@mui/material';
import styled from '@emotion/styled';

const RoomCard = ({data}) => {
	return (
		<Root>
			<ImgWrapper>
				<ImgMedia src={data.src} alt={data.title} />
			</ImgWrapper>
			<Typography variant="h5" color="textPrimary">
				{data.title}
			</Typography>
			<Typography variant="h6" color="textSecondary">
				{data.description}
			</Typography>
		</Root>
	);
};

// Styles

const Root = styled.div`
	& > h6 {
		@media (max-width: 400px) {
			word-wrap: break-word;
		}
	}
`;
const ImgWrapper = styled.figure`
	overflow: hidden;
	border-radius: 10px;
	margin-bottom: 10px;
`;
const ImgMedia = styled.img`
	min-width: 100%;
	object-fit: cover;
	transform: scale(1.1);
	transition: 0.4s ease-in-out;
	-webkit-transform: scale(1.1);
	-webkit-transition: all.4 ease-in-out;
	&:hover {
		transform: scale(1);
		-webkit-transform: scale(1);
	}
`;
export default RoomCard;
