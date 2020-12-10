import React, { useState, useEffect, useMemo } from 'react';
import Globe from 'react-globe.gl';
const d3 = require('d3');

const api = 'https://disease.sh/v3/covid-19/';

const World = () => {
	const [countries, setCountries] = useState({ features: [] });
	const [hoverD, setHoverD] = useState();
	const [allCountriesData, setAllCountriesData] = useState([]);
	const [allData, setAllData] = useState({});

	useEffect(() => {
		fetch(
			'https://vasturiano.github.io/react-globe.gl/example/datasets/ne_110m_admin_0_countries.geojson'
		)
			.then((res) => res.json())
			.then(setCountries);
		const getAllCountriesData = () => {
			fetch(`${api}countries?yesterday=true&twoDaysAgo=true&allowNull=0`, {
				method: 'GET',
				headers: {
					accept: 'application/json',
				},
			})
				.then((res) => res.json())
				.then((result) => setAllCountriesData(result));
		};
		getAllCountriesData();

		const getAllData = () => {
			fetch(`${api}all?yesterday=true&twoDaysAgo=true&allowNull=false`, {
				method: 'GET',
				headers: {
					accept: 'application/json',
				},
			})
				.then((res) => res.json())
				.then((result) => setAllData(result));
		};
		getAllData();
	}, []);

	function getCountry(countryInfo) {
		var extensions = {
			'United States of America': 'USA',
			'United Kingdom': 'UK',
			Libya: 'Libyan Arab Jamahiriya',
			'Democratic Republic of the Congo': 'Congo',
			Syria: 'Syrian Arab Republic',
			'Republic of Serbia': 'Serbia',
			'Bosnia and Herzegovina': 'Bosnia',
			'Republic of the Congo': 'Congo',
			'Ivory Coast': "Côte d'Ivoire",
			Somaliland: 'Somalia',
			'United Republic of Tanzania': 'Tanzania',
			Laos: "Lao People's Democratic Republic",
			'South Korea': 'S. Korea',
			'The Bahamas': 'Bahamas',
			'Falkland Islands': 'Falkland Islands (Malvinas)',
			'East Timor': 'Timor-Leste',
		};

		if (extensions[countryInfo]) countryInfo = extensions[countryInfo];

		var countryData = Object.values(allCountriesData).filter(
			(country) => country.country === countryInfo
		);

		return countryData[0];
	}

	const colorScale = d3.scaleSequentialSqrt(d3.interpolateOrRd);

	const getVal = (feat) => feat.properties.GDP_MD_EST / Math.max(1e5, feat.properties.POP_EST);

	const maxVal = useMemo(() => Math.max(...countries.features.map(getVal)), [countries]);
	colorScale.domain([0, maxVal]);
	return (
		<div className=''>
			<div className='worldInfo'>
				Wszystkie przypadki: <i>{allData.cases}</i>
				<br />
				Dzisiejsze przypadki: <i>{allData.todayCases}</i>
				<br />
				Aktywne: <i>{allData.active}</i>
				<br />
				Zgony: <i>{allData.deaths}</i>
				<br />
				Dzisiejsze zgony: <i>{allData.todayDeaths}</i>
				<br />
				Wyzdrowiali: <i>{allData.recovered}</i>
				<br />
				Wyzdrowiali dzisiaj: <i>{allData.todayRecovered}</i>
				<br />
				Populacja: <i>{allData.population}</i>
				<br />
			</div>

			<Globe
				globeImageUrl='//unpkg.com/three-globe/example/img/earth-night.jpg'
				backgroundImageUrl='//unpkg.com/three-globe/example/img/night-sky.png'
				polygonsData={countries.features.filter((d) => d.properties.ISO_A2 !== 'AQ')}
				polygonAltitude={(d) => (d === hoverD ? 0.12 : 0.06)}
				polygonCapColor={({ properties: d }) =>
					(getCountry(d.ADMIN) ? getCountry(d.ADMIN).cases : 0)
						? colorScale(getCountry(d.ADMIN).cases / getCountry(d.ADMIN).population + 0.015)
						: '#fff'
				} //color (d === hoverD ? 'steelblue' : colorScale(getVal(d)))
				polygonSideColor={() => 'rgba(100, 100, 100, 0.35)'} //bgcolor
				polygonStrokeColor={() => '#111'} //border color
				polygonLabel={({ properties: d }) => `
		
		<div class='countryInfo'>

			<b>${d.ADMIN} ${
					d.ADMIN === 'France' ? '(F)' : d.ISO_A2 === '-99' ? '' : '(' + d.ISO_A2 + ')'
				}:</b> <br /> <!-- extensions to the France -->

			Wszystkie przypadki: <i>${getCountry(d.ADMIN) ? getCountry(d.ADMIN).cases : 0}</i><br />
			Dzisiejsze przypadki: <i>${getCountry(d.ADMIN) ? getCountry(d.ADMIN).todayCases : 0}</i><br />
	    	Aktywne: <i>${getCountry(d.ADMIN) ? getCountry(d.ADMIN).active : 0}</i><br />
			Zgony: <i>${getCountry(d.ADMIN) ? getCountry(d.ADMIN).deaths : 0}</i><br />
			Dzisiejsze zgony: <i>${getCountry(d.ADMIN) ? getCountry(d.ADMIN).todayDeaths : 0}</i><br />
			Wyzdrowiali: <i>${getCountry(d.ADMIN) ? getCountry(d.ADMIN).recovered : 0}</i><br />
			Wyzdrowiali dzisiaj: <i>${getCountry(d.ADMIN) ? getCountry(d.ADMIN).todayRecovered : 0}</i><br />
			Populacja: <i>${getCountry(d.ADMIN) ? getCountry(d.ADMIN).population : 0}</i><br />

		</div>

	  `}
				onPolygonHover={setHoverD}
				polygonsTransitionDuration={300}
			/>
		</div>
	);
};

export default World;
