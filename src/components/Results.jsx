import {Paper, Typography} from '@mui/material';
import styled from '@emotion/styled';

const Results = ({src, title, description, price, stock}) => {
	return (
		<StyledPaper>
			<StyledImg>
				<img src={src} alt={title} />
			</StyledImg>
			<StyledInfoImg>
				<Typography variant="h6" fontWeight="600">
					{title}
				</Typography>
				<Typography variant="subtitle">{description}</Typography>
				<Typography fontWeight="600">Price per night: ${price}</Typography>
				<Typography fontWeight="600">Stock: {stock}</Typography>
			</StyledInfoImg>
		</StyledPaper>
	);
};
const StyledPaper = styled(Paper)`
	display: flex;
	flex-direction: column;
	align-items: center;
	@media (min-width: 600px) {
		height: 553px;
		margin: 10px;
	}
`;
const StyledImg = styled.div`
	margin-top: 10px;
	width: 90%;
	& img {
		width: 100%;
		height: auto;
		border-radius: 10px;
	}
`;
const StyledInfoImg = styled.div`
	display: flex;
	flex-direction: column;
	gap: 10px;
	padding: 10px 21px;
`;
export default Results;
