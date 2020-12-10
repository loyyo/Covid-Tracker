import React, { useState } from 'react';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import ButtonBase from '@material-ui/core/ButtonBase';
import { makeStyles } from '@material-ui/core/styles';
import Footer from './layout/Footer';
import Header from './layout/Header';
import TrueOrFalse from './TrueOrFalse';
import Banner from './Banner';

const useStyles = makeStyles({
	dontworry: {
		backgroundColor: 'rgba(255, 255, 89, 0.9)',
	},
	warning: {
		backgroundColor: 'rgba(253, 186, 60, 0.9)',
	},
	dangerous: {
		backgroundColor: 'rgba(255, 59, 59, 0.8)',
	},
	notClicked: {
		backgroundColor: '#ffffff',
	},
});

const Symptoms = () => {
	// Common symptoms
	const [fever, setFever] = useState(false);
	const [cough, setCough] = useState(false);
	const [tiredness, setTiredness] = useState(false); // fatigue
	const [tasteOrSmell, setTasteOrSmell] = useState(false);

	// Other symptoms
	const [muscleOrBodyAchesOrHeadache, setMuscleOrBodyAchesOrHeadache] = useState(false);
	const [soreThroat, setSoreThroat] = useState(false);
	const [congestionOrRunnyNose, setCongestionOrRunnyNose] = useState(false);
	const [nauseaOrVomiting, setNauseaOrVomiting] = useState(false);
	const [diarrhea, setDiarrhea] = useState(false);
	const [conjunctivitis, setConjunctivitis] = useState(false);

	// IMMEDIATELY EMERGENCY
	const [awake, setAwake] = useState(false);
	const [chestPain, setChestPain] = useState(false);
	const [breathing, setBreathing] = useState(false);
	const [confusion, setConfusion] = useState(false); // delirium
	const [blueFaceOrLips, setBlueFaceOrLips] = useState(false);

	var symptoms = {
		fever: 2,
		cough: 2,
		tiredness: 2,
		tasteOrSmell: 2,
		muscleOrBodyAchesOrHeadache: 1,
		soreThroat: 1,
		congestionOrRunnyNose: 1,
		nauseaOrVomiting: 1,
		diarrhea: 1,
		conjunctivitis: 4,
		awake: 4,
		chestPain: 4,
		breathing: 4,
		confusion: 4,
		blueFaceOrLips: 4,
	};

	var symptomsSum = 0;

	const classes = useStyles();

	symptomsSum =
		Number(fever) * symptoms.fever +
		Number(cough) * symptoms.fever +
		Number(tiredness) * symptoms.tiredness +
		Number(tasteOrSmell) * symptoms.tasteOrSmell +
		Number(muscleOrBodyAchesOrHeadache) * symptoms.muscleOrBodyAchesOrHeadache +
		Number(soreThroat) * symptoms.soreThroat +
		Number(congestionOrRunnyNose) * symptoms.congestionOrRunnyNose +
		Number(nauseaOrVomiting) * symptoms.nauseaOrVomiting +
		Number(diarrhea) * symptoms.diarrhea +
		Number(conjunctivitis) * symptoms.conjunctivitis +
		Number(awake) * symptoms.awake +
		Number(chestPain) * symptoms.chestPain +
		Number(breathing) * symptoms.breathing +
		Number(confusion) * symptoms.confusion +
		Number(blueFaceOrLips) * symptoms.blueFaceOrLips;

	return (
		<div className='symptoms'>
			<Header />
			<div className='banner-div'>
				<Banner text='Aktualne informacje o Covid-19' />
			</div>
			<h1>Podejrzewasz, że masz koronawirusa?</h1>
			<p>Podaj występujące u Ciebe objawy a my pomożemy ci podjać dalszą decyzje: </p>
			<div className='common'>
				<div className='less-common'>
					<div className='sympton-btn'>
						<ButtonBase
							onClick={() => setMuscleOrBodyAchesOrHeadache(!muscleOrBodyAchesOrHeadache)}
						>
							<Card
								className={muscleOrBodyAchesOrHeadache ? classes.dontworry : classes.notClicked}
								variant='elevation'
							>
								<CardContent>
									<Typography color='textPrimary'>Bóle mięśni / Ból głowy</Typography>
									<Typography color='textSecondary'></Typography>
								</CardContent>
							</Card>
						</ButtonBase>
					</div>
					<div className='sympton-btn'>
						<ButtonBase onClick={() => setSoreThroat(!soreThroat)}>
							<Card
								className={soreThroat ? classes.dontworry : classes.notClicked}
								variant='elevation'
							>
								<CardContent>
									<Typography color='textPrimary'>Ból gardła</Typography>
									<Typography color='textSecondary'></Typography>
								</CardContent>
							</Card>
						</ButtonBase>
					</div>
					<div className='sympton-btn'>
						<ButtonBase onClick={() => setCongestionOrRunnyNose(!congestionOrRunnyNose)}>
							<Card
								className={congestionOrRunnyNose ? classes.dontworry : classes.notClicked}
								variant='elevation'
							>
								<CardContent>
									<Typography color='textPrimary'>Katar</Typography>
									<Typography color='textSecondary'></Typography>
								</CardContent>
							</Card>
						</ButtonBase>
					</div>
					<div className='sympton-btn'>
						<ButtonBase onClick={() => setNauseaOrVomiting(!nauseaOrVomiting)}>
							<Card
								className={nauseaOrVomiting ? classes.dontworry : classes.notClicked}
								variant='elevation'
							>
								<CardContent>
									<Typography color='textPrimary'>Wymioty</Typography>
									<Typography color='textSecondary'></Typography>
								</CardContent>
							</Card>
						</ButtonBase>
					</div>
					<div className='sympton-btn'>
						<ButtonBase onClick={() => setDiarrhea(!diarrhea)}>
							<Card
								className={diarrhea ? classes.dontworry : classes.notClicked}
								variant='elevation'
							>
								<CardContent>
									<Typography color='textPrimary'>Biegunka</Typography>
								</CardContent>
							</Card>
						</ButtonBase>
					</div>
				</div>
				<div className='much-common'>
					<div className='sympton-btn'>
						<ButtonBase onClick={() => setFever(!fever)}>
							<Card className={fever ? classes.warning : classes.notClicked} variant='elevation'>
								<CardContent>
									<Typography color='textPrimary'>Gorączka</Typography>
								</CardContent>
							</Card>
						</ButtonBase>
					</div>
					<div className='sympton-btn'>
						<ButtonBase onClick={() => setCough(!cough)}>
							<Card className={cough ? classes.warning : classes.notClicked} variant='elevation'>
								<CardContent>
									<Typography color='textPrimary'>Ciągły kaszel</Typography>
								</CardContent>
							</Card>
						</ButtonBase>
					</div>
					<div className='sympton-btn'>
						<ButtonBase onClick={() => setTasteOrSmell(!tasteOrSmell)}>
							<Card
								className={tasteOrSmell ? classes.warning : classes.notClicked}
								variant='elevation'
							>
								<CardContent>
									<Typography color='textPrimary'>Utrata smaku lub zapachu</Typography>
								</CardContent>
							</Card>
						</ButtonBase>
					</div>
					<div className='sympton-btn'>
						<ButtonBase onClick={() => setTiredness(!tiredness)}>
							<Card
								className={tiredness ? classes.warning : classes.notClicked}
								variant='elevation'
							>
								<CardContent>
									<Typography color='textPrimary'>Zmęczenie</Typography>
									<Typography color='textSecondary'></Typography>
								</CardContent>
							</Card>
						</ButtonBase>
					</div>
				</div>
				<div className='emergency'>
					<div className='sympton-btn'>
						<ButtonBase onClick={() => setAwake(!awake)}>
							<Card className={awake ? classes.dangerous : classes.notClicked} variant='elevation'>
								<CardContent>
									<Typography color='textPrimary'>Problemy z koncentracją</Typography>
								</CardContent>
							</Card>
						</ButtonBase>
					</div>
					<div className='sympton-btn'>
						<ButtonBase onClick={() => setChestPain(!chestPain)}>
							<Card
								className={chestPain ? classes.dangerous : classes.notClicked}
								variant='elevation'
							>
								<CardContent>
									<Typography color='textPrimary'>Ścisk w klatce piersiowej</Typography>
								</CardContent>
							</Card>
						</ButtonBase>
					</div>
					<div className='sympton-btn'>
						<ButtonBase onClick={() => setBreathing(!breathing)}>
							<Card
								className={breathing ? classes.dangerous : classes.notClicked}
								variant='elevation'
							>
								<CardContent>
									<Typography color='textPrimary'>Problemy z oddychaniem</Typography>
								</CardContent>
							</Card>
						</ButtonBase>
					</div>
					<div className='sympton-btn'>
						<ButtonBase onClick={() => setConfusion(!confusion)}>
							<Card
								className={confusion ? classes.dangerous : classes.notClicked}
								variant='elevation'
							>
								<CardContent>
									<Typography color='textPrimary'>Dezorientacja / Zawroty głowy</Typography>
								</CardContent>
							</Card>
						</ButtonBase>
					</div>

					<div className='sympton-btn'>
						<ButtonBase onClick={() => setBlueFaceOrLips(!blueFaceOrLips)}>
							<Card
								className={blueFaceOrLips ? classes.dangerous : classes.notClicked}
								variant='elevation'
							>
								<CardContent>
									<Typography color='textPrimary'>Sine usta lub twarz</Typography>
								</CardContent>
							</Card>
						</ButtonBase>
					</div>
				</div>
			</div>

			{symptomsSum > 0 && symptomsSum < 3 && (
				<div className='face'>
					<div className='green-face'>
						<div className='face-img'>
							<img src='green.png' alt='green-face' />
						</div>
						<div className='face-info'>Jesteś zdrowy</div>
					</div>
				</div>
			)}

			{symptomsSum >= 3 && symptomsSum < 5 && (
				<div className='face'>
					<div className='yellow-face'>
						<div className='face-img'>
							<img src='yellow.png' alt='yellow-face' />
						</div>
						<div className='face-info'>Podane objawy nie wskazują na obecność koronawirusa</div>
					</div>
				</div>
			)}

			{symptomsSum >= 5 && symptomsSum < 7 && (
				<div className='face'>
					<div className='orange-face'>
						<div className='face-img'>
							<img src='orange2.png' alt='orange-face' />
						</div>
						<div className='face-info'>
							Rozważ kontakt z Twoim lekarzem podstawowej opieki zdrowotnej za popocą teleprady.
						</div>
					</div>
				</div>
			)}

			{symptomsSum >= 7 && (
				<div className='face'>
					<div className='red-face'>
						<div className='face-img'>
							<img src='red2.png' alt='red-face' />
						</div>
						<div className='face-info'>
							Skontaktuj się z Twoim lekarzem podstawowej opieki zdrowotnej za pośrednictwem
							teleporady. Lekarz może zlecić Ci test na koronawirusa.
						</div>
					</div>
				</div>
			)}

			<hr />
			<div className='about-covid'>
				<h1 className='covid-question'>Koronawirus - co o nim wiemy</h1>
				<strong>
					<p>
						Czy koronawirus, wywołujący chorobę COVID-19, jest groźniejszy od znanego nam wirusa
						grypy? Czy potrafimy opanować epidemię znanymi nam sposobami? Prawda i fałsz o
						koronawirusie
					</p>
				</strong>
				<p>
					W mediach społecznościowych trafiamy na mnóstwo fałszywych informacji, publikowanych z
					niewiedzy lub dla zabawy straszenia innych. W końcu nie jesteśmy pewni, czy, zachowując
					znane nam w przypadku np. grypy środki ostrożności, możemy zminimalizować ryzyko
					zagrożenia. Na naszych lękach żerują sprzedawcy cudownych środków lub po prostu maseczek
					ochronnych.
				</p>
				<p>
					Żeby zapobiegać nieuzasadnionej panice Światowa Organizacja Zdrowia (WHO) stworzyła listę
					najczęstszych mitów, pomyłek i wątpliwości dotyczących nowego koronawirusa i wywołanej
					przez niego epidemii.
				</p>
			</div>
			<hr />
			<h3 className='true-or-false-question'>Prawda czy fałsz?</h3>
			<p className='true-or-false-p'>Kliknij w wybrane zdanie i sprawdź, czy jest prawdziwe.</p>
			<TrueOrFalse />
			<Footer />
		</div>
	);
};

export default Symptoms;
