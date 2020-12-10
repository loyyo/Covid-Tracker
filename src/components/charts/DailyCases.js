import React from 'react';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import CountUp from 'react-countup';

const DailyCases = ({ data }) => {
	if (data.todayCases === undefined) {
		return 'Loading...';
	} else {
		return (
			<div className='today-cases'>
				<Card className='today-cases-card' variant='elevation'>
					<CardContent>
						<Typography>Dzisiaj</Typography>
						<Typography component={'span'} className='cases'>
							<div className='text'>Przypadków:</div>
							<CountUp
								className='count-up'
								start={1337}
								end={data.todayCases}
								duration={3}
								separator=','
							/>
						</Typography>
						<Typography component={'span'} className='cases'>
							<div className='text'> Zgonów:</div>
							<CountUp
								className='count-up'
								start={1337}
								end={data.todayDeaths}
								duration={3}
								separator=','
							/>
						</Typography>
						<Typography component={'span'} className='cases'>
							<div className='text'>Wyzdrowiałych:</div>
							<CountUp
								className='count-up'
								start={1337}
								end={data.todayRecovered}
								duration={3}
								separator=','
							/>
						</Typography>
					</CardContent>
				</Card>
			</div>
		);
	}
};

export default DailyCases;
