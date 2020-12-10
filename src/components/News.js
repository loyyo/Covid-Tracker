import React, { useState, useEffect } from 'react';
import Header from './layout/Header';
import Footer from './layout/Footer';
import { TwitterTimelineEmbed } from 'react-twitter-embed';
import Banner from './Banner';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import CardHeader from '@material-ui/core/CardHeader';
import Accordion from '@material-ui/core/Accordion';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

const NewsAPI = require('newsapi');
const newsapi = new NewsAPI(process.env.REACT_APP_NEWS_API, {
	corsProxyUrl: 'https://cors-anywhere.herokuapp.com/',
});

const useStyless = makeStyles((theme) => ({
	root: {
		width: '100%',
	},
	heading: {
		fontSize: theme.typography.pxToRem(15),
		fontWeight: theme.typography.fontWeightRegular,
	},
}));

const useStyles = makeStyles({
	root: {
		minWidth: '100%',
		minHeight: '35vh',
		maxHeight: '35vh',
	},
	media: {
		height: '10vh',
	},
});

const News = () => {
	const [news, setNews] = useState({});

	useEffect(() => {
		newsapi.v2
			.topHeadlines({
				q: 'koronawirus',
				category: 'health',
				country: 'pl',
			})
			.then((response) => {
				setNews(response);
				console.log(response);
			});
	}, []);

	const classes = useStyles();
	const classess = useStyless();

	const options = {
		minWidth: '50vw',
		height: '65vh',
	};

	return (
		<>
			<Header />
			<div className='banner-div'>
				<Banner text='Aktualne wiadomości o Covid-19' />
			</div>
			<div className='news'>
				<div className='twitter-timeline-accordion'>
					<Accordion>
						<AccordionSummary
							expandIcon={<ExpandMoreIcon />}
							aria-controls='panel1a-content'
							id='panel1a-header'
						>
							<Typography className={classess.heading}>Ministerstwo Zdrowia</Typography>
						</AccordionSummary>
						<AccordionDetails>
							<div className='twitter-timeline'>
								<TwitterTimelineEmbed
									noScrollbar
									noFooter
									sourceType='profile'
									screenName='MZ_GOV_PL'
									options={options}
								/>
							</div>
						</AccordionDetails>
					</Accordion>
				</div>

				<div className='twitter-timeline-accordion'>
					<Accordion>
						<AccordionSummary
							expandIcon={<ExpandMoreIcon />}
							aria-controls='panel2a-content'
							id='panel2a-header'
						>
							<Typography className={classess.heading}>Centrum e-Zdrowia</Typography>
						</AccordionSummary>
						<AccordionDetails>
							<div className='twitter-timeline'>
								<TwitterTimelineEmbed
									noScrollbar
									noFooter
									sourceType='profile'
									screenName='CentrumeZdrowia'
									options={options}
								/>
							</div>
						</AccordionDetails>
					</Accordion>
				</div>

				<div className='twitter-timeline-accordion'>
					<Accordion>
						<AccordionSummary
							expandIcon={<ExpandMoreIcon />}
							aria-controls='panel2a-content'
							id='panel2a-header'
						>
							<Typography className={classess.heading}>Kancelaria Premiera</Typography>
						</AccordionSummary>
						<AccordionDetails>
							<div className='twitter-timeline'>
								<TwitterTimelineEmbed
									noFooter
									noScrollbar
									sourceType='profile'
									screenName='PremierRP'
									options={options}
								/>
							</div>
						</AccordionDetails>
					</Accordion>
				</div>
			</div>
			{news.articles !== undefined && (
				<div className='wszystkie-niusy'>
					{news.articles.map((e, key) => {
						return (
							<div className='niusy'>
								<Card key={key} className={classes.root}>
									<CardActionArea>
										<CardHeader subheader={e.source.name} />
										<div onClick={() => (window.location = `${e.url}`)}>
											<CardMedia className={classes.media} image={e.urlToImage} title={e.title} />
											<CardContent>
												<Typography
													className={classes.content}
													gutterBottom
													variant='p'
													component='h5'
												>
													{e.title}
												</Typography>
											</CardContent>
										</div>
									</CardActionArea>
								</Card>
							</div>
						);
					})}
				</div>
			)}
			<Footer />
		</>
	);
};

export default News;
