import './App.scss';
import React, { useState } from 'react';
import World from './components/World';
import { Route, Switch } from 'react-router-dom';
import Symptoms from './components/Symptoms';
import Chart from './components/Chart';
import Sources from './components/Sources';
import { Link } from 'react-router-dom';
import { stack as Menu } from 'react-burger-menu';
import PublicIcon from '@material-ui/icons/Public';
import HelpIcon from '@material-ui/icons/Help';
import InsertChartIcon from '@material-ui/icons/InsertChart';
import News from './components/News';
import AnnouncementIcon from '@material-ui/icons/Announcement';
import DescriptionIcon from '@material-ui/icons/Description';

function App() {
	const [isOpen, setOpen] = useState(false);

	return (
		<div className='App'>
			<Menu pageWrapId={'page-wrap'} outerContainerId={'outer-container'} isOpen={isOpen} right>
				<Link onClick={() => setOpen({ hidden: true })} className='menu-item' to='/'>
					<InsertChartIcon className='menu-icon' />
					Dane
				</Link>
				<Link onClick={() => setOpen({ hidden: true })} className='menu-item' to='/objawy'>
					<HelpIcon className='menu-icon' />
					Informacje
				</Link>
				<Link onClick={() => setOpen({ hidden: true })} className='menu-item' to='/ziemia'>
					<PublicIcon className='menu-icon' />
					Ziemia
				</Link>
				<Link onClick={() => setOpen({ hidden: true })} className='menu-item' to='/wiadomosci'>
					<AnnouncementIcon className='menu-icon' />
					Wiadomości
				</Link>
				<Link onClick={() => setOpen({ hidden: true })} className='menu-item' to='/zrodla'>
					<DescriptionIcon className='menu-icon' />
					Źródła
				</Link>
			</Menu>
			{/* <div id='page-wrap' className=''> */}
			<Switch>
				<Route exact path='/' component={Chart} />
				<Route exact path='/ziemia' component={World} />
				<Route exact path='/objawy' component={Symptoms} />
				<Route exact path='/wiadomosci' component={News} />
				<Route exact path='/zrodla' component={Sources} />
				<Route component={Error} />
			</Switch>
			{/* </div> */}
		</div>
	);
}

export default App;
