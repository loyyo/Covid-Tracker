import React from 'react';
import { Line } from 'react-chartjs-2';

const DataChartCountry = ({ dailyData }) => {
	if (Object.entries(dailyData).length === 271) {
		return 'Loading...';
	}
	if (Object.entries(dailyData).length === 1) {
		return 'Loading...';
	}
	var date = Object.keys(dailyData.timeline.cases);
	var confirmedCases = Object.values(dailyData.timeline.cases);
	var confirmedDeaths = Object.values(dailyData.timeline.deaths);
	var confirmedRecovered = Object.values(dailyData.timeline.recovered);

	return (
		<div className='data-chart-all'>
			<Line
				data={{
					labels: date,
					datasets: [
						{
							data: confirmedCases,
							label: 'Infected',
							borderColor: 'blue',
							fill: true,
						},
						{
							data: confirmedDeaths,
							label: 'Deaths',
							borderColor: 'red',
							fill: true,
						},
						{
							data: confirmedRecovered,
							label: 'Recovered',
							borderColor: 'green',
							fill: true,
						},
					],
				}}
			/>
		</div>
	);
};

export default DataChartCountry;
