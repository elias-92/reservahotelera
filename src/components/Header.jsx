import {useState, useEffect} from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import logo from '../assets/img/logo.png';
import styled from '@emotion/styled';
import {Avatar, Drawer, InputBase, List, ListItem} from '@mui/material';
import {Link as LinkRoute} from 'react-router-dom';

const Header = () => {
	const [mobile, setMobile] = useState(false);
	const [drawerOpen, setDrawerOpen] = useState(false);

	useEffect(() => {
		const responsive = () =>
			window.innerWidth < 900 ? setMobile(true) : setMobile(false);
		responsive();
		window.addEventListener('resize', () => responsive());
	}, []);

	const displayMobile = () => {
		const handleDrawerClose = () => {
			setDrawerOpen(false);
		};
		const handleDrawerOpen = () => {
			setDrawerOpen(true);
		};

		const headerData = ['My account', 'Previous account', 'Log out'];
		const getDrawerChoises = () => {
			return headerData.map((data) => {
				return (
					<List>
						<ListItem>{data}</ListItem>
					</List>
				);
			});
		};

		return (
			<StyledToolbar>
				<IconButton
					size="large"
					edge="start"
					aria-label="menu"
					aria-haspopup="true"
					sx={{mr: 2}}
					onClick={handleDrawerOpen}
				>
					<MenuIcon color="#333" />
				</IconButton>
				<Drawer
					{...{
						anchor: 'left',
						open: drawerOpen,
						onClose: handleDrawerClose,
					}}
				>
					<div>{getDrawerChoises()}</div>
				</Drawer>
				<LinkRoute to="/">
					<StyledImgMobile src={logo} alt="logo" />
				</LinkRoute>
				<StyledSignIn>
					<TypographyMobile>Sign In</TypographyMobile>
					<StyledAvatarMobile />
				</StyledSignIn>
			</StyledToolbar>
		);
	};

	const displayDesktop = () => {
		return (
			<StyledToolbar>
				<LinkRoute to="/">
					<StyledImg src={logo} alt="logo" />
				</LinkRoute>
				<StyledDiv>
					<StyledInputBase placeholder="Search here..." fullWidth />
					<SearchIcon />
				</StyledDiv>
				<StyledSignIn>
					<Typography>Sign In</Typography>
					<StyledAvatar />
				</StyledSignIn>
			</StyledToolbar>
		);
	};

	return (
		<StyledAppBar>{mobile ? displayMobile() : displayDesktop()}</StyledAppBar>
	);
};

// Styles
const StyledAppBar = styled(AppBar)`
	position: sticky;
	top: 0;
	background-color: #fff;
	z-index: 1000;
	min-width: 333px;
`;
const StyledImg = styled.img`
	height: 30px;
	margin: 2px 5px;
	object-fit: contain;
`;
const StyledImgMobile = styled.img`
	width: 100px;
`;
const StyledToolbar = styled(Toolbar)`
	display: flex;
	justify-content: space-between;
	align-items: center;
`;
const StyledInputBase = styled(InputBase)`
	font-size: 1.2rem;
	padding: 0.5rem;
`;
const StyledDiv = styled.div`
	display: flex;
	align-items: center;
	border: 1px solid lightgray;
	border-radius: 5rem;
	padding: 0 1.2rem;
	margin: 0.5rem;
`;
const StyledSignIn = styled.div`
	display: flex;
	align-items: center;
	margin-left: 0.5rem;
	color: #333;
`;
const StyledAvatar = styled(Avatar)`
	margin-left: 0.5rem;
`;
const StyledAvatarMobile = styled(Avatar)`
	margin: 0 0.5rem;
	width: 30px;
	height: 30px;
`;
const TypographyMobile = styled(Typography)`
	display: none;
`;

export default Header;
