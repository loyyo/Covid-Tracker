import React from 'react';
import { Line } from 'react-chartjs-2';

const DataChartAll = ({ dailyData }) => {
	if (Object.entries(dailyData).length === 0) {
		return 'Loading...';
	} else {
		var date = Object.keys(dailyData.cases);
		var confirmedCases = Object.values(dailyData.cases);
		var confirmedDeaths = Object.values(dailyData.deaths);
		var confirmedRecovered = Object.values(dailyData.recovered);

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
	}
};

export default DataChartAll;
