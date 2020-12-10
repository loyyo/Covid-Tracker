import React from 'react';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import CountUp from 'react-countup';

const AllCases = ({ data }) => {
	if (data.todayCases === undefined) {
		return 'Loading...';
	}
	return (
		<div className='all-cases'>
			<Card className='all-cases-card' variant='elevation'>
				<CardContent>
					<Typography>Wszystkich</Typography>
					<Typography component={'span'} className='cases'>
						<div className='text'>Przypadków:</div>
						<CountUp
							className='count-up'
							start={1337}
							end={data.cases}
							duration={3}
							separator=','
						/>
					</Typography>
					<Typography component={'span'} className='cases'>
						<div className='text'>Zgonów:</div>
						<CountUp
							className='count-up'
							start={1337}
							end={data.deaths}
							duration={3}
							separator=','
						/>
					</Typography>
					<Typography component={'span'} className='cases'>
						<div className='text'>Wyzdrowiałych:</div>
						<CountUp
							className='count-up'
							start={1337}
							end={data.recovered}
							duration={3}
							separator=','
						/>
					</Typography>
				</CardContent>
			</Card>
		</div>
	);
};

export default AllCases;
