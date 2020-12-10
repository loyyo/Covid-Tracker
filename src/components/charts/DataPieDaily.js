import React from 'react';
import { Pie } from 'react-chartjs-2';

const DataPieDaily = ({ dailyData }) => {
	if (Object.entries(dailyData).length === 0) {
		return 'Loading...';
	} else {
		return (
			<div className='data-pie-daily'>
				<Pie
					data={{
						datasets: [
							{
								data: [dailyData.todayCases, dailyData.todayDeaths, dailyData.todayRecovered],
								backgroundColor: ['blue', 'red', 'green'],
								borderWidth: '0.1',
							},
						],
						labels: ['Cases', 'Deaths', 'Recovered'],
					}}
				/>
			</div>
		);
	}
};

export default DataPieDaily;
