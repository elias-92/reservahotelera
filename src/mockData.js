import playaCapricho from './assets/img/imgHotel1.jpg';
import bestNegresco from './assets/img/imgHotel2.jpg';
import elPuerto from './assets/img/imgHotel3.jpg';
import barcelo from './assets/img/imgHotel4.jpg';
import bestSabinal from './assets/img/imgHotel5.jpg';
import marconi from './assets/img/imgHotel6.jpg';
import monicaIsabelBeach from './assets/img/imgHotel7.jpg';
import tauritoPrincess from './assets/img/imgHotel8.jpg';

export const mockData = [
	{
		id: 1,
		src: playaCapricho,
		title: 'Hotel playa capricho',
		description:
			'Less than five minutes walk from Playa Serena and Roquetas de Mar Beach.',
	},
	{
		id: 2,
		src: bestNegresco,
		title: 'Hotel Best Negresco',
		description:
			'The accommodation is located on the seafront and next to the Playa Larga beach, which is accessed through a pleasant promenade.',
	},
	{
		id: 3,
		src: elPuerto,
		title: 'Hotel El Puerto by Pierre and Vacances',
		description:
			'The hotel is located in the center of Fuengirola, on the beachfront. A few minutes from the city center, where there are numerous stores, businesses and entertainment venues.',
		cat: 'room',
		price: 250,
		stock: 12,
		notAvailableStart: new Date(2023, 5, 18).getTime(),
		notAvailableEnd: new Date(2023, 5, 18).getTime(),
	},
	{
		id: 4,
		src: barcelo,
		title: 'Hotel Barceló Punta Umbría Mar',
		description:
			'This hotel is located in the Spanish province of Huelva, in front of a beautiful beach on the Atlantic Ocean.',
	},
	{
		id: 5,
		src: bestSabinal,
		title: 'Hotel Best Sabinal',
		description:
			'It is located on the beachfront in Roquetas de Mar, 25 km from the city of Almeria.',
		cat: 'room',
		price: 350,
		stock: 8,
		notAvailableStart: new Date(2023, 5, 18).getTime(),
		notAvailableEnd: new Date(2023, 5, 18).getTime(),
	},
	{
		id: 6,
		src: marconi,
		title: 'Hotel Marconi, Benidorm - Playa Poniente',
		description:
			'With a stay at Hotel Marconi, you will be centrally located in Benidorm, on the beach, minutes from Elche Park and close to Mal Pas Beach.',
		cat: 'room',
		price: 500,
		stock: 10,
		notAvailableStart: new Date(2023, 5, 18).getTime(),
		notAvailableEnd: new Date(2023, 5, 18).getTime(),
	},
	{
		id: 7,
		src: monicaIsabelBeach,
		title: 'Hotel Monica Isabel Beach Club',
		description:
			'This complex is centrally located. A variety of stores, bars, pubs, restaurants and nightclubs can be found within 1 km distance.',
	},
	{
		id: 8,
		src: tauritoPrincess,
		title: 'Hotel Taurito Princess',
		description:
			'The Taurito Princess is located in the valley of Taurito, on the island of Gran Canaria, 25 meters from the beach.',
		cat: 'room',
		price: 450,
		stock: 7,
		notAvailableStart: new Date(2023, 5, 21).getTime(),
		notAvailableEnd: new Date(2023, 5, 26).getTime(),
	},
];

export const chips = [
	{
		key: 0,
		label: 'Cancelation flexibility',
	},
	{
		key: 1,
		label: 'Standards rooms',
	},
	{
		key: 2,
		label: 'Excecutive rooms',
	},
	{
		key: 3,
		label: 'Access to lounge',
	},
	{
		key: 4,
		label: 'More filters',
	},
];
