import {useState} from 'react';
import 'react-date-range/dist/styles.css';
import 'react-date-range/dist/theme/default.css';
import {DateRange} from 'react-date-range';
import styled from '@emotion/styled';
import {Button, InputBase, Typography} from '@mui/material';
import {People} from '@mui/icons-material';
import {useNavigate} from 'react-router-dom';

const DataPicker = () => {
	const [state, setState] = useState([
		{
			startDate: new Date(),
			endDate: null,
			key: 'selection',
		},
	]);
	const history = useNavigate();
	return (
		<>
			<StyledRoot>
				<DateRange
					editableDateInputs={true}
					onChange={(item) => setState([item.selection])}
					moveRangeOnFirstSelection={false}
					ranges={state}
				/>
				<InputSection>
					<Typography variant="h5">Number of guests</Typography>
					<StyledPeople>
						<StyledInputBase placeholder="2pax" />
						<People />
					</StyledPeople>
					<Button onClick={() => history('/search')}>Search Rooms</Button>
				</InputSection>
			</StyledRoot>
		</>
	);
};

//Styles
const StyledRoot = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	min-width: 300px;
	margin: 10px;
	z-index: 50;
`;
const InputSection = styled.div`
	display: flex;
	flex-direction: column;
	background-color: #fff;
	& > h5 {
		text-align: center;
	}
	& button {
		color: #000;
		background-color: #ff510066;
		border-radius: 50px;
		font-weight: 500;
	}
	& button:hover {
		background-color: #ff671f66;
		color: #fff;
	}
`;
const StyledPeople = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
`;
const StyledInputBase = styled(InputBase)`
	width: 65px;
	border: 1px solid #ccc;
	margin: 5px;
	font-size: 1.2rem;
	padding: 0 5px;
`;

export default DataPicker;
