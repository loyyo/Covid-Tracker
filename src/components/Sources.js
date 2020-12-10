import React from 'react';
import Banner from './Banner';
import Header from './layout/Header';
import Footer from './layout/Footer';

const Sources = () => {
	return (
		<div className='sources'>
			<Header />
			<Banner text='Źródła z których korzystaliśmy' />
			<div className='sourcess'>
				<ul className='linki'>
					<li>
						<a href='https://disease.sh/'>Disease.sh API</a>
					</li>
					<li>
						<a href='https://news.google.com/'>Google News</a>
					</li>
					<li>
						<a href='https://twitter.com/PremierRP'>Twitter - Kancelaria Premiera</a>
					</li>
					<li>
						<a href='https://twitter.com/CentrumeZdrowia'>Twitter - Centrum e-Zdrowia</a>
					</li>
					<li>
						<a href='https://twitter.com/MZ_GOV_PL'>Twitter - Ministerstwo Zdrowia</a>
					</li>
					<li>
						<a href='https://pacjent.gov.pl/aktualnosc/koronawirus-co-o-nim-wiemy'>FAQ Covid-19</a>
					</li>
					<li>
						<a href='https://pacjent.gov.pl/aktualnosc/podejrzewasz-ze-masz-koronawirusa'>
							Objawy Koronawirusa
						</a>
					</li>
				</ul>
			</div>
			<Footer />
		</div>
	);
};

export default Sources;
