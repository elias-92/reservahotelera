import {Button, CssBaseline, Grid} from '@mui/material';
import styled from '@emotion/styled';
import Banner from './Banner';
import DataPicker from './DataPicker';
import RoomCard from './RoomCard';
import {useState} from 'react';
import {mockData} from '../mockData';

const Home = () => {
	const [showDate, setShowDate] = useState(false);
	return (
		<>
			<CssBaseline />
			<Root>
				<Dates>
					<BtnShowDate
						onClick={() => {
							setShowDate(!showDate);
						}}
					>
						{showDate ? 'Hide' : 'Search Dates'}
					</BtnShowDate>
					{showDate && <DataPicker />}
				</Dates>
				<Banner />
				<RoomsContainer container spacing={3}>
					{mockData.map((data) => (
						<Grid item key={data.id} xs={12} sm={6} md={4} lg={3}>
							<RoomCard data={data} />
						</Grid>
					))}
				</RoomsContainer>
			</Root>
		</>
	);
};

// Styles

const Root = styled.div`
	display: flex;
	flex-direction: column;
	margin: 1rem;
`;
const Dates = styled.div`
	display: flex;
	flex-direction: column;
`;
const BtnShowDate = styled(Button)`
	width: 50%;
	min-width: 330px;
	margin: 10px auto;
	color: #000;
	background-color: #ff510066;
	border-radius: 50px;
	font-weight: 500;
	&:hover {
		background-color: #ff671f66;
		color: #fff;
	}
`;
const RoomsContainer = styled(Grid)``;

export default Home;
