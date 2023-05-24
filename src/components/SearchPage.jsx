import styled from '@emotion/styled';
import {chips, mockData} from '../mockData';
import {Chip, Grid, Slider, Typography} from '@mui/material';
import {HighlightOffTwoTone} from '@mui/icons-material';
import Results from './Results';
import {useState} from 'react';
import {useSelector} from 'react-redux';
import {selectStart} from '../features/startSlice';
import {selectEnd} from '../features/endSlice';

const SearchPage = () => {
	const start = useSelector(selectStart);
	const end = useSelector(selectEnd);
	const [value, setValue] = useState(500);
	const handleChange = (e, newValue) => {
		setValue(newValue);
	};
	return (
		<Root>
			<StyledTitle variant="h5">Avaliable Rooms</StyledTitle>
			<Chips>
				{chips.map((chip) => {
					const icon = <HighlightOffTwoTone />;
					return <StyledChip label={chip.label} key={chip.id} icon={icon} />;
				})}
			</Chips>
			<SelectorPrice>
				<Typography variant="h6" fontWeight="600" gutterBottom>
					Filter by price
				</Typography>
				<PriceSlider
					value={value}
					onChange={handleChange}
					valueLabelDisplay="auto"
					aria-labelledby="continuous-slider"
					min={200}
					max={500}
				/>
			</SelectorPrice>
			<Grid container spacing={3}>
				{mockData
					.filter((data) => data.cat === 'room')
					.filter((data) => data.price <= value)
					.filter(
						(data) =>
							end < data.notAvailableStart || start > data.notAvailableEnd
					)
					.map(({src, title, description, price, stock, id}) => (
						<Grid item key={id} xs={12} sm={6} md={4} lg={3}>
							<Results
								key={id}
								src={src}
								title={title}
								description={description}
								price={price}
								stock={stock}
							/>
						</Grid>
					))}
			</Grid>
		</Root>
	);
};

const Root = styled.div``;
const StyledTitle = styled(Typography)`
	display: flex;
	justify-content: center;
	margin-top: 10px;
`;
const Chips = styled.div`
	margin: 0 auto;
	padding: 1rem;
	@media (min-width: 1024px) {
		display: flex;
		justify-content: center;
	}
`;
const StyledChip = styled(Chip)`
	margin: 5px;
`;
const SelectorPrice = styled.div`
	width: 330px;
	margin: 10px auto;
`;
const PriceSlider = styled(Slider)({
	color: '#52af77',
	height: 8,
	'& .MuiSlider-track': {
		border: 'none',
	},
	'& .MuiSlider-thumb': {
		height: 24,
		width: 24,
		backgroundColor: '#fff',
		border: '2px solid currentColor',
		'&:focus, &:hover, &.Mui-active, &.Mui-focusVisible': {
			boxShadow: 'inherit',
		},
		'&:before': {
			display: 'none',
		},
	},
	'& .MuiSlider-valueLabel': {
		lineHeight: 1.2,
		fontSize: 12,
		background: 'unset',
		padding: 0,
		width: 32,
		height: 32,
		borderRadius: '50% 50% 50% 0',
		backgroundColor: '#52af77',
		transformOrigin: 'bottom left',
		transform: 'translate(50%, -100%) rotate(-45deg) scale(0)',
		'&:before': {display: 'none'},
		'&.MuiSlider-valueLabelOpen': {
			transform: 'translate(50%, -100%) rotate(-45deg) scale(1)',
		},
		'& > *': {
			transform: 'rotate(45deg)',
		},
	},
});

export default SearchPage;
