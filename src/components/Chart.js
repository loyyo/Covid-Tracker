import React, { useState, useEffect } from 'react';
import AllCases from './charts/AllCases';
import DailyCases from './charts/DailyCases';
import DataChartAll from './charts/DataChartAll';
import DataPieDaily from './charts/DataPieDaily';
import DataChartCountry from './charts/DataChartCountry';

import Button from '@material-ui/core/Button';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import InputAdornment from '@material-ui/core/InputAdornment';
import Divider from '@material-ui/core/Divider';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import SearchIcon from '@material-ui/icons/Search';
import PublicIcon from '@material-ui/icons/Public';
import MyLocationIcon from '@material-ui/icons/MyLocation';
import ButtonBase from '@material-ui/core/ButtonBase';
import Footer from './layout/Footer';
import Header from './layout/Header';
import Banner from './Banner';
const api = {
	covid: process.env.REACT_APP_COVID_API,
	city: process.env.REACT_APP_CITY_API,
};

const useStyles = makeStyles((theme) => ({
	button: {
		margin: theme.spacing(1),
	},
}));

const Chart = () => {
	const [globalData, setGlobalData] = useState({});
	const [countryData, setCountryData] = useState({});
	const [allCountriesData, setAllCountriesData] = useState([]);
	const [globalHistoricalData, setGlobalHistoricalData] = useState({});
	const [countryHistoricalData, setCountryHistoricalData] = useState({});
	const [checkedCountry, setCheckedCountry] = useState('');
	const [search, setSearch] = useState('');
	const [isGlobal, setIsGlobal] = useState(true);
	const [isAll, setIsAll] = useState(true);

	useEffect(() => {
		const getCountryData = () => {
			fetch(
				`${api.covid}countries/${checkedCountry}?yesterday=true&twoDaysAgo=true&strict=true&allowNull=0`,
				{
					method: 'GET',
					headers: {
						accept: 'application/json',
					},
				}
			)
				.then((res) => res.json())
				.then((result) => setCountryData(result));
		};

		const getCountryHistoricalData = () => {
			fetch(`${api.covid}historical/${checkedCountry}?lastdays=all`, {
				method: 'GET',
				headers: {
					accept: 'application/json',
				},
			})
				.then((res) => res.json())
				.then((result) => setCountryHistoricalData(result));
		};

		getCountryHistoricalData();
		getCountryData();
	}, [checkedCountry]);

	useEffect(() => {
		const getGlobalData = () => {
			fetch(`${api.covid}all?yesterday=true&twoDaysAgo=true&allowNull=0`, {
				method: 'GET',
				headers: {
					accept: 'application/json',
				},
			})
				.then((res) => res.json())
				.then((result) => setGlobalData(result));
		};

		const getAllCountriesData = () => {
			fetch(`${api.covid}countries?yesterday=false&twoDaysAgo=false&allowNull=0`, {
				method: 'GET',
				headers: {
					accept: 'application/json',
				},
			})
				.then((res) => res.json())
				.then((result) => setAllCountriesData(result));
		};

		const getGlobalHistoricalData = () => {
			fetch(`${api.covid}historical/all?lastdays=all`, {
				method: 'GET',
				headers: {
					accept: 'application/json',
				},
			})
				.then((res) => res.json())
				.then((result) => setGlobalHistoricalData(result));
		};

		getGlobalData();
		getAllCountriesData();
		getGlobalHistoricalData();
	}, []);

	const classes = useStyles();

	const updatedSearch = (e) => {
		setSearch(e.target.value.toLowerCase().substr(0, 100));
	};

	var filteredCountries = allCountriesData.filter((e) => {
		return e.country.toLowerCase().indexOf(search) !== -1;
	});

	const getLocation = () => {
		var options = {
			enableHighAccuracy: true,
			timeout: 5000,
			maximumAge: 0,
		};

		function getCity(coordinates) {
			var lat = coordinates[0];
			var lng = coordinates[1];

			fetch(
				`https://us1.locationiq.com/v1/reverse.php?key=${api.city}&lat=${lat}&lon=${lng}&format=json&accept-language=en`
			)
				.then((res) => res.json())
				.then((result) => {
					var town = result.address.country.toString().toLowerCase();
					setIsGlobal(false);
					setCheckedCountry(town);
					setSearch(town);
				});
		}

		function success(pos) {
			var crd = pos.coords;
			var lat = crd.latitude.toString();
			var lng = crd.longitude.toString();
			var coordinates = [lat, lng];
			getCity(coordinates);
			return;
		}

		function error(err) {
			console.warn(`ERROR(${err.code}): ${err.message}`);
		}

		navigator.geolocation.getCurrentPosition(success, error, options);
	};

	return (
		<>
			<Header />
			<div className='banner-div'>
				<Banner text='Aktualne dane o Covid-19' />
			</div>
			<div className='chart'>
				<div className='countries-select'>
					<div className='countries-buttons'>
						<Button
							variant='contained'
							color='primary'
							className={classes.button}
							startIcon={<PublicIcon />}
							onClick={() => setIsGlobal(true)}
						>
							Global
						</Button>
						<Button
							variant='contained'
							color='secondary'
							className={classes.button}
							startIcon={<MyLocationIcon />}
							onClick={getLocation}
						>
							Your Location
						</Button>
					</div>
					<div className='sb-country'>
						<TextField
							label='Search'
							type='search'
							variant='outlined'
							className='search-bar-country'
							InputProps={{
								startAdornment: (
									<InputAdornment position='start'>
										<SearchIcon />
									</InputAdornment>
								),
							}}
							value={search}
							onChange={updatedSearch}
						/>
					</div>
					<List className='countries-list'>
						{filteredCountries.map((e, index) => {
							return (
								<ListItem
									button
									divider
									key={index}
									className='row container country-card'
									onClick={() => {
										setCheckedCountry(e.country);
										setIsGlobal(false);
										// Object.entries(countryHistoricalData).length !== 1 &&
										// Object.entries(countryHistoricalData).length !== 271
										// 	? setIsAll(true)
										// 	: setIsAll(false);
										// console.log(countryHistoricalData);
									}}
								>
									<img src={e.countryInfo.flag} className='country-flag' alt={e.country} />
									<Divider orientation='vertical' flexItem />
									<div className='country-name'>{e.country}</div>
								</ListItem>
							);
						})}
					</List>
				</div>
				{Object.entries(globalData).length !== 0 && (
					<>
						{isGlobal && (
							<div className='data'>
								<div className='row global-data-card'>
									<ButtonBase onClick={() => setIsAll(true)}>
										<AllCases data={globalData} />
									</ButtonBase>
									<ButtonBase onClick={() => setIsAll(false)}>
										<DailyCases data={globalData} />
									</ButtonBase>
								</div>
								<div className='global-visualization'>
									{isAll && <DataChartAll dailyData={globalHistoricalData} />}
									{!isAll && <DataPieDaily dailyData={globalData} />}
								</div>
							</div>
						)}
					</>
				)}
				{Object.entries(countryData).length !== 0 && (
					<>
						{!isGlobal && (
							<div className='data'>
								<div className='country-data-card'>
									<ButtonBase
										onClick={() =>
											Object.entries(countryHistoricalData).length !== 1 &&
											Object.entries(countryHistoricalData).length !== 271
												? setIsAll(true)
												: setIsAll(false)
										}
									>
										<AllCases data={countryData} />
									</ButtonBase>
									<ButtonBase onClick={() => setIsAll(false)}>
										<DailyCases data={countryData} />
									</ButtonBase>
								</div>
								<div className='country-visualization'>
									{isAll && <DataChartCountry dailyData={countryHistoricalData} />}
									{!isAll && <DataPieDaily dailyData={countryData} />}
								</div>
							</div>
						)}
					</>
				)}
			</div>
			<Footer />
		</>
	);
};

export default Chart;
