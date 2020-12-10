import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Accordion from '@material-ui/core/Accordion';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import styled from 'styled-components';

const Accordionn = styled(Accordion)`
	padding: 1rem 0;
	border-top: 0.5px solid gray;
	border-left: 0;
	background-color: rgb(231, 231, 231);
`;

const useStyles = makeStyles((theme) => ({
	root: {
		width: '100%',
	},
	heading: {
		fontSize: theme.typography.pxToRem(21),
		fontWeight: 'bold',
		flexBasis: '80%',
		flexShrink: 0,
	},
	secondaryHeading: {
		fontSize: theme.typography.pxToRem(15),
		color: theme.palette.text.secondary,
	},
}));

const TrueOrFalse = () => {
	const [expanded, setExpanded] = useState(false);

	const classes = useStyles();

	const handleChange = (panel) => (event, isExpanded) => {
		setExpanded(isExpanded ? panel : false);
	};

	return (
		<div className='true-or-false'>
			<div className={classes.root}>
				<Accordionn expanded={expanded === 'panel1'} onChange={handleChange('panel1')}>
					<AccordionSummary
						expandIcon={<ExpandMoreIcon />}
						aria-controls='panel1bh-content'
						id='panel1bh-header'
					>
						<Typography className={classes.heading}>
							Koronawirus to nowy rodzaj zagrożenia, naukowcy nic o nim nie wiedzą
						</Typography>
					</AccordionSummary>
					<AccordionDetails className='true-or-false-details'>
						<Typography className='true-or-false-false'>FAŁSZ</Typography>
						<Typography className='true-or-false-text'>
							Naukowcy znają 7 różnych koronawirusów. Średnio raz na dekadę pojawia się nowy
							koronawirus u ludzi. Wywołuje on rozmaite choroby układu oddechowego.
						</Typography>
					</AccordionDetails>
				</Accordionn>

				<Accordionn expanded={expanded === 'panel2'} onChange={handleChange('panel2')}>
					<AccordionSummary
						expandIcon={<ExpandMoreIcon />}
						aria-controls='panel2bh-content'
						id='panel2bh-header'
					>
						<Typography className={classes.heading}>
							Nie ma lekarstwa na koronawirus SARS-CoV-2
						</Typography>
					</AccordionSummary>
					<AccordionDetails className='true-or-false-details'>
						<Typography className='true-or-false-true'>PRAWDA</Typography>
						<Typography className='true-or-false-text'>
							Na razie nie ma szczepionki przeciwko koronawirusowi SARS-CoV-2. Niedostępne są też
							leki hamujące namnażanie się tego wirusa. Lekarze stosują dotychczas znane leki, które
							pomagają zwalczyć objawy choroby wirusowej (leczenie objawowe).
						</Typography>
					</AccordionDetails>
				</Accordionn>
				<Accordionn expanded={expanded === 'panel3'} onChange={handleChange('panel3')}>
					<AccordionSummary
						expandIcon={<ExpandMoreIcon />}
						aria-controls='panel3bh-content'
						id='panel3bh-header'
					>
						<Typography className={classes.heading}>
							Koronawirus jest bardziej zaraźliwy niż dotychczas znane nam wirusy
						</Typography>
					</AccordionSummary>
					<AccordionDetails className='true-or-false-details'>
						<Typography className='true-or-false-false'>FAŁSZ</Typography>
						<Typography className='true-or-false-text'>
							Koronawirus SARS-CoV-2 jest bardzo zakaźny, ale daleko mu do zakaźności wirusów od
							dawna znanych ludzkości, takich jak wirus odry czy ospy wietrznej.
						</Typography>
					</AccordionDetails>
				</Accordionn>
				<Accordionn expanded={expanded === 'panel4'} onChange={handleChange('panel4')}>
					<AccordionSummary
						expandIcon={<ExpandMoreIcon />}
						aria-controls='panel4bh-content'
						id='panel4bh-header'
					>
						<Typography className={classes.heading}>
							Przebieg wywołanej przez koronawirusa choroby COVID-19 jest bardzo niebezpieczny i
							kończy się często śmiercią pacjenta
						</Typography>
					</AccordionSummary>
					<AccordionDetails className='true-or-false-details'>
						<Typography className='true-or-false-false'>FAŁSZ</Typography>
						<Typography className='true-or-false-text'>
							U 80% chorych, przebieg choroby jest łagodny, ciężkie powikłania występują u osób
							starszych, z obniżoną odpornością i chorobami przewlekłymi.
						</Typography>
					</AccordionDetails>
				</Accordionn>
				<Accordionn expanded={expanded === 'panel5'} onChange={handleChange('panel5')}>
					<AccordionSummary
						expandIcon={<ExpandMoreIcon />}
						aria-controls='panel5bh-content'
						id='panel5bh-header'
					>
						<Typography className={classes.heading}>
							COVID-19 powoduje więcej zgonów, niż grypa sezonowa
						</Typography>
					</AccordionSummary>
					<AccordionDetails className='true-or-false-details'>
						<Typography className='true-or-false-true'>PRAWDA</Typography>
						<Typography className='true-or-false-text'>
							Około 3,4 procent potwierdzonych przypadków COVID-19 było śmiertelnych, podczas gdy w
							przypadku grypy jest to poniżej 1 procent. Jednocześnie COVID-19 nie przenosi się tak
							szeroko jak grypa.
						</Typography>
					</AccordionDetails>
				</Accordionn>
				<Accordionn expanded={expanded === 'panel6'} onChange={handleChange('panel6')}>
					<AccordionSummary
						expandIcon={<ExpandMoreIcon />}
						aria-controls='panel6bh-content'
						id='panel1bh-header'
					>
						<Typography className={classes.heading}>
							Koronawirus przenosi się drogą kropelkową, tak jak wirus grypy
						</Typography>
					</AccordionSummary>
					<AccordionDetails className='true-or-false-details'>
						<Typography className='true-or-false-true'>PRAWDA</Typography>
						<Typography className='true-or-false-text'>
							Nosiciel wirusa zakaża podczas kaszlu, kichania, mówienia. Jeśli jednak dotkniesz
							czegoś, co miało kontakt ze śliną osoby zakażonej, a potem dotkniesz twarzy – okolic
							nosa, oczu, uszu i ust, możesz się zakazić.
						</Typography>
					</AccordionDetails>
				</Accordionn>
				<Accordionn expanded={expanded === 'panel7'} onChange={handleChange('panel7')}>
					<AccordionSummary
						expandIcon={<ExpandMoreIcon />}
						aria-controls='panel7bh-content'
						id='panel7bh-header'
					>
						<Typography className={classes.heading}>
							Koronawirus może się przenieść na rzeczach np. paczkach z Chin
						</Typography>
					</AccordionSummary>
					<AccordionDetails className='true-or-false-details'>
						<Typography className='true-or-false-false'>FAŁSZ</Typography>
						<Typography className='true-or-false-text'>
							Zanim zostaną dostarczone do Polski, wirus zginie. Czas jego utrzymywania się na
							powierzchni zależy od wilgotności i temperatury powietrza, wirus zginie, nim dotrze do
							Polski.
						</Typography>
					</AccordionDetails>
				</Accordionn>
				<Accordionn expanded={expanded === 'panel8'} onChange={handleChange('panel8')}>
					<AccordionSummary
						expandIcon={<ExpandMoreIcon />}
						aria-controls='panel8bh-content'
						id='panel8bh-header'
					>
						<Typography className={classes.heading}>
							Koronawirus przenosi się na pieniądzach, telefonach, klamkach, przyciskach w windzie
						</Typography>
					</AccordionSummary>
					<AccordionDetails className='true-or-false-details'>
						<Typography className='true-or-false-true'>PRAWDA</Typography>
						<Typography className='true-or-false-text'>
							Wirus SARS-CoV-2 może zachować swoją zdolność do zakażania przez pewien czas również
							poza organizmem człowieka. Dlatego dezynfekcja powierzchni ma znaczenie we wszystkich
							tych miejscach, które są dotykane przez wiele osób. Oczywiście w większość sytuacji
							życiowych nie jest możliwe każdorazowo dezynfekowanie powierzchni po kolejnych osobach
							(klamki, przyciski w windzie), a niektóre przedmioty nie nadają się do łatwej
							dezynfekcji (np. banknoty). Dlatego zawsze należy pamiętać o częstym myciu rąk.
						</Typography>
					</AccordionDetails>
				</Accordionn>
				<Accordionn expanded={expanded === 'panel9'} onChange={handleChange('panel9')}>
					<AccordionSummary
						expandIcon={<ExpandMoreIcon />}
						aria-controls='panel9bh-content'
						id='panel9bh-header'
					>
						<Typography className={classes.heading}>
							Psy i koty mogą przenosić koronawirusa
						</Typography>
					</AccordionSummary>
					<AccordionDetails className='true-or-false-details'>
						<Typography className='true-or-false-false'>FAŁSZ</Typography>
						<Typography className='true-or-false-text'>
							Nie ma dowodów na to, że zwierzęta domowe i gospodarskie przenoszą koronawirusa, ani
							na to, że mogą się nim zakazić i zachorować.
						</Typography>
					</AccordionDetails>
				</Accordionn>
				<Accordionn expanded={expanded === 'panel10'} onChange={handleChange('panel10')}>
					<AccordionSummary
						expandIcon={<ExpandMoreIcon />}
						aria-controls='panel10bh-content'
						id='panel10bh-header'
					>
						<Typography className={classes.heading}>
							Nie wiadomo, jak dużo czasu mija od zakażenia się koronawirusem do zachorowania. Jeśli
							więc ktoś był w kraju wysokiego ryzyka w grudniu, może zakażać
						</Typography>
					</AccordionSummary>
					<AccordionDetails className='true-or-false-details'>
						<Typography className='true-or-false-false'>FAŁSZ</Typography>
						<Typography className='true-or-false-text'>
							Objawy choroby pojawiają się między drugim a czternastym dniem od zakażenia.
							Przeciętny okres wylęgania COVID-19 wynosi 5-6 dni.
						</Typography>
					</AccordionDetails>
				</Accordionn>
				<Accordionn expanded={expanded === 'panel11'} onChange={handleChange('panel11')}>
					<AccordionSummary
						expandIcon={<ExpandMoreIcon />}
						aria-controls='panel11bh-content'
						id='panel11bh-header'
					>
						<Typography className={classes.heading}>
							Objawy zakażenia się mogą być podobne do grypy: gorączka, kaszel i katar
						</Typography>
					</AccordionSummary>
					<AccordionDetails className='true-or-false-details'>
						<Typography className='true-or-false-true'>PRAWDA</Typography>
						<Typography className='true-or-false-text'>
							Najczęściej występującymi objawami choroby COVID-19, wywołanej przez koronawirus
							SARS-CoV-2, są gorączka oraz męczący kaszel. Czasem pojawiają się też bóle mięśniowe,
							a w szczególności u dzieci biegunka lub wysypka. Objawami, które mogą bardzo wyraźnie
							wskazywać na zakażenie SARS-CoV-2, jest utrata węchu i/lub smaku, w szczególności
							jeśli nie masz zatkanego nosa.
						</Typography>
						<Typography className='true-or-false-text'>
							Pojawienie się uczucia duszności oraz problemów z oddychaniem są bezwzględnym
							wskazaniem do uzyskania pomocy medycznej.
						</Typography>
					</AccordionDetails>
				</Accordionn>
				<Accordionn expanded={expanded === 'panel12'} onChange={handleChange('panel12')}>
					<AccordionSummary
						expandIcon={<ExpandMoreIcon />}
						aria-controls='panel12bh-content'
						id='panel12bh-header'
					>
						<Typography className={classes.heading}>
							Żeby się nie zakazić, trzeba brać preparaty na wzmocnienie odporności, jeść czosnek i
							cebulę lub zażywać dużo witaminy{' '}
						</Typography>
					</AccordionSummary>
					<AccordionDetails className='true-or-false-details'>
						<Typography className='true-or-false-false'>FAŁSZ</Typography>
						<Typography className='true-or-false-text'>
							Preparaty witaminowe, mieszanki minerałów i witamin, wyciągi roślinne i zwierzęce i
							inne preparaty reklamowane jako „wzmacniacze odporności” nie mają wpływu na to, jak
							nasz system odpornościowy zareaguje w kontakcie z koronawirusem. Badania naukowe nie
							potwierdziły skuteczności tych preparatów w walce z koronawirusem. Ważny jest
							natomiast ogólny stan naszego organizmu, który zależy od higienicznego i zdrowego
							trybu życia.
						</Typography>
					</AccordionDetails>
				</Accordionn>
				<Accordionn expanded={expanded === 'panel13'} onChange={handleChange('panel13')}>
					<AccordionSummary
						expandIcon={<ExpandMoreIcon />}
						aria-controls='panel13bh-content'
						id='panel13bh-header'
					>
						<Typography className={classes.heading}>
							Spryskiwanie ciała wódką, płynami zawierającymi chlor, smarowanie się olejem palmowym
							pomaga
						</Typography>
					</AccordionSummary>
					<AccordionDetails className='true-or-false-details'>
						<Typography className='true-or-false-false'>FAŁSZ</Typography>
						<Typography className='true-or-false-text'>
							Żadna z tych substancji nie działa na koronawirusa, a może prowadzić do niepożądanej
							reakcji skórnej.
						</Typography>
					</AccordionDetails>
				</Accordionn>
				<Accordionn expanded={expanded === 'panel14'} onChange={handleChange('panel14')}>
					<AccordionSummary
						expandIcon={<ExpandMoreIcon />}
						aria-controls='panel14bh-content'
						id='panel14bh-header'
					>
						<Typography className={classes.heading}>Alkohol chroni przed wirusem</Typography>
					</AccordionSummary>
					<AccordionDetails className='true-or-false-details'>
						<Typography className='true-or-false-false'>FAŁSZ</Typography>
						<Typography className='true-or-false-text'>
							Picie alkoholu nie chroni przez wirusem. Alkohol obniża odporność organizmu.
							Wysokoprocentowy alkohol jest natomiast dobrym środkiem dezynfekującym
						</Typography>
					</AccordionDetails>
				</Accordionn>
				<Accordionn expanded={expanded === 'panel15'} onChange={handleChange('panel15')}>
					<AccordionSummary
						expandIcon={<ExpandMoreIcon />}
						aria-controls='panel15bh-content'
						id='panel15bh-header'
					>
						<Typography className={classes.heading}>
							Mycie rąk całkowicie uchroni przed wirusem
						</Typography>
					</AccordionSummary>
					<AccordionDetails className='true-or-false-details'>
						<Typography className='true-or-false-false'>FAŁSZ</Typography>
						<Typography className='true-or-false-text'>
							Mycie rąk nie zagwarantuje nam, że nie zachorujemy. Ale jest jednym z zalecanych
							sposobów ochrony przed potencjalnym kontaktem z koronawirusem. Uwaga, ręce należy myć
							prawidłowo, dokładnie, wodą z mydłem. Na stronie Ministerstwa Zdrowia i Głównego
							Inspektoratu Sanitarnego znajdziesz instrukcję, jak to robić.
						</Typography>
					</AccordionDetails>
				</Accordionn>
				<Accordionn expanded={expanded === 'panel16'} onChange={handleChange('panel16')}>
					<AccordionSummary
						expandIcon={<ExpandMoreIcon />}
						aria-controls='panel16bh-content'
						id='panel16bh-header'
					>
						<Typography className={classes.heading}>
							Wiadomo, jakich zasad należy przestrzegać, by zminimalizować ryzyko zakażenia się
						</Typography>
					</AccordionSummary>
					<AccordionDetails className='true-or-false-details'>
						<Typography className='true-or-false-true'>PRAWDA</Typography>
						<Typography className='true-or-false-text'>
							<ul>
								Zasady są proste i dostępne na stronie Ministerstwa Zdrowia oraz GIS. Należy:
								<li>
									często myć dłonie wodą z mydłem lub dezynfekować je środkiem na bazie alkoholu,
								</li>
								<li>zachować bezpieczną odległość od rozmówcy (2 metry),</li>
								<li>unikać dużych skupisk ludzi,</li>
								<li>dbać o higienę miejsc, w których przygotowuje się posiłki,</li>
								<li>
									nie dzielić się jedzeniem np. chipsami z jednej paczki, nie pić bezpośrednio z tej
									samej butelki.
								</li>
							</ul>
						</Typography>
					</AccordionDetails>
				</Accordionn>
				<Accordionn expanded={expanded === 'panel17'} onChange={handleChange('panel17')}>
					<AccordionSummary
						expandIcon={<ExpandMoreIcon />}
						aria-controls='panel17bh-content'
						id='panel17bh-header'
					>
						<Typography className={classes.heading}>
							Koronawirus jest niebezpieczny tylko dla osób starszych
						</Typography>
					</AccordionSummary>
					<AccordionDetails className='true-or-false-details'>
						<Typography className='true-or-false-false'>FAŁSZ</Typography>
						<Typography className='true-or-false-text'>
							Zachorowania na COVID-19 obserwuje się we wszystkich grupach wiekowych. Ale
							najbardziej narażone na rozwinięcie ciężkiej postaci choroby i zgon są osoby starsze,
							z obniżoną odpornością, której towarzyszą inne choroby, w szczególności przewlekłe.
						</Typography>
					</AccordionDetails>
				</Accordionn>
				<Accordionn expanded={expanded === 'panel18'} onChange={handleChange('panel18')}>
					<AccordionSummary
						expandIcon={<ExpandMoreIcon />}
						aria-controls='panel18bh-content'
						id='panel18bh-header'
					>
						<Typography className={classes.heading}>
							Jeśli byłeś w krajach wysokiego ryzyka w ciągu ostatnich 14 dni i zaobserwujesz u
							siebie kaszel, wysoką gorączkę, kłopoty z oddychaniem, powinieneś zgłosić się do
							przychodni lub na SOR
						</Typography>
					</AccordionSummary>
					<AccordionDetails className='true-or-false-details'>
						<Typography className='true-or-false-false'>FAŁSZ</Typography>
						<Typography className='true-or-false-text'>
							Jeśli podejrzewasz zakażenie koronawirusem i pójdziesz do przychodni lub na SOR,
							będziesz zakażał innych. Zamiast tego bezzwłocznie, telefonicznie powiadom Twojego
							lekarza podstawowej opieki zdrowotnej.
						</Typography>
					</AccordionDetails>
				</Accordionn>
				<Accordionn expanded={expanded === 'panel19'} onChange={handleChange('panel19')}>
					<AccordionSummary
						expandIcon={<ExpandMoreIcon />}
						aria-controls='panel19bh-content'
						id='panel19bh-header'
					>
						<Typography className={classes.heading}>
							Urządzenia do pomiaru temperatury mogą potwierdzić zakażenie koronawirusem SARS-CoV-2
						</Typography>
					</AccordionSummary>
					<AccordionDetails className='true-or-false-details'>
						<Typography className='true-or-false-false'>FAŁSZ</Typography>
						<Typography className='true-or-false-text'>
							Urządzenia pomiarowe są w stanie wykryć, że u kogoś pojawiła się gorączka, ale nie są
							w stanie zidentyfikować jej przyczyny.
						</Typography>
					</AccordionDetails>
				</Accordionn>
				<Accordionn expanded={expanded === 'panel20'} onChange={handleChange('panel20')}>
					<AccordionSummary
						expandIcon={<ExpandMoreIcon />}
						aria-controls='panel20bh-content'
						id='panel20bh-header'
					>
						<Typography className={classes.heading}>Dzieci przechodzą COVID-19 łagodnie</Typography>
					</AccordionSummary>
					<AccordionDetails className='true-or-false-details'>
						<Typography className='true-or-false-true'>PRAWDA</Typography>
						<Typography className='true-or-false-text'>
							Zazwyczaj choroba przebiega u dzieci łagodnie. Nie znaczy to jednak, że nie zakażają
							się wirusem, nie chorują, ani że nie mogą zakazić innych osób. Cięższą postacią
							choroby zagrożone są osoby z obniżoną odpornością lub towarzyszącymi chorobami
							przewlekłymi.
						</Typography>
					</AccordionDetails>
				</Accordionn>
				<Accordionn expanded={expanded === 'panel21'} onChange={handleChange('panel21')}>
					<AccordionSummary
						expandIcon={<ExpandMoreIcon />}
						aria-controls='panel21bh-content'
						id='panel21bh-header'
					>
						<Typography className={classes.heading}>
							Osoba, która nie ma objawów choroby, nie zakaża
						</Typography>
					</AccordionSummary>
					<AccordionDetails className='true-or-false-details'>
						<Typography className='true-or-false-false'>FAŁSZ</Typography>
						<Typography className='true-or-false-text'>
							Osoby zakażone bezobjawowo również mogą zakażać. Dlatego tak ważne jest noszenie
							maseczki, utrzymywanie dystansu i mycie rąk.
						</Typography>
					</AccordionDetails>
				</Accordionn>
				<Accordionn expanded={expanded === 'panel22'} onChange={handleChange('panel22')}>
					<AccordionSummary
						expandIcon={<ExpandMoreIcon />}
						aria-controls='panel22bh-content'
						id='panel22bh-header'
					>
						<Typography className={classes.heading}>
							Kiedy zrobi się ciepło, problem z koronawirusem się skończy
						</Typography>
					</AccordionSummary>
					<AccordionDetails className='true-or-false-details'>
						<Typography className='true-or-false-false'>FAŁSZ</Typography>
						<Typography className='true-or-false-text'>
							Chociaż naukowcy zakładają, że wirus SARS-CoV-2 może podobnie do wirusa grypy
							wykazywać sezonowość, to brak jest wystarczającej liczby dowodów naukowych na wpływ
							temperatury i innych czynników środowiskowych na koronawirusa.
						</Typography>
					</AccordionDetails>
				</Accordionn>
				<Accordionn expanded={expanded === 'panel23'} onChange={handleChange('panel23')}>
					<AccordionSummary
						expandIcon={<ExpandMoreIcon />}
						aria-controls='panel23bh-content'
						id='panel23bh-header'
					>
						<Typography className={classes.heading}>
							Witamina D nie zapobiega zakażeniu koronawirusem
						</Typography>
					</AccordionSummary>
					<AccordionDetails className='true-or-false-details'>
						<Typography className='true-or-false-true'>PRAWDA</Typography>
						<Typography className='true-or-false-text'>
							Żadna witamina, w tym także D, w żadnych ilościach nie zwalcza koronawirusa.
							Nadużywanie witamin i suplementów diety (bez konsultacji z lekarzem lub farmaceutą),
							zwłaszcza takich jak witamina D, czyli rozpuszczalnych w tłuszczach, może organizmowi
							zaszkodzić.
						</Typography>
					</AccordionDetails>
				</Accordionn>
				<Accordionn expanded={expanded === 'panel24'} onChange={handleChange('panel24')}>
					<AccordionSummary
						expandIcon={<ExpandMoreIcon />}
						aria-controls='panel24bh-content'
						id='panel24bh-header'
					>
						<Typography className={classes.heading}>Chinina pomaga na objawy COVID-19</Typography>
					</AccordionSummary>
					<AccordionDetails className='true-or-false-details'>
						<Typography className='true-or-false-false'>FAŁSZ</Typography>
						<Typography className='true-or-false-text'>
							Chinina jest lekiem na malarię, który wykazuje również słabe działanie
							przeciwgorączkowe i przeciwbólowe, ale ma też skutki uboczne i stosowana w
							niewłaściwych dawkach może być bardzo szkodliwa. Nie „załatwiaj” sobie leków na
							receptę, zażywaj tylko to, co przepisze Ci lekarz.
						</Typography>
					</AccordionDetails>
				</Accordionn>
				<Accordionn expanded={expanded === 'panel25'} onChange={handleChange('panel25')}>
					<AccordionSummary
						expandIcon={<ExpandMoreIcon />}
						aria-controls='panel25bh-content'
						id='panel25bh-header'
					>
						<Typography className={classes.heading}>
							Kup rodzinie przenośny koncentrator tlenu na wypadek zachorowania na COVID-19
						</Typography>
					</AccordionSummary>
					<AccordionDetails className='true-or-false-details'>
						<Typography className='true-or-false-false'>FAŁSZ</Typography>
						<Typography className='true-or-false-text'>
							Leczenie ciężkich postaci choroby COVID-19 odbywa się w szpitalu przy użyciu
							profesjonalnego sprzętu, pod opieką lekarza.
						</Typography>
					</AccordionDetails>
				</Accordionn>
				<Accordionn expanded={expanded === 'panel26'} onChange={handleChange('panel26')}>
					<AccordionSummary
						expandIcon={<ExpandMoreIcon />}
						aria-controls='panel26bh-content'
						id='panel26bh-header'
					>
						<Typography className={classes.heading}>
							Ssij tabletki z cynkiem, dzięki temu wirus nie będzie namnażał się w gardle i nosie
						</Typography>
					</AccordionSummary>
					<AccordionDetails className='true-or-false-details'>
						<Typography className='true-or-false-false'>FAŁSZ</Typography>
						<Typography className='true-or-false-text'>
							Nie przyjmuj żadnych suplementów diety bez badań i konsultacji z lekarzem, gdyż ich
							nieprawidłowe przyjmowanie może być szkodliwe dla zdrowia. Nie wykazano
							przeciwwirusowego działania suplementów zawierających cynk.
						</Typography>
					</AccordionDetails>
				</Accordionn>
				<Accordionn expanded={expanded === 'panel27'} onChange={handleChange('panel27')}>
					<AccordionSummary
						expandIcon={<ExpandMoreIcon />}
						aria-controls='panel27bh-content'
						id='panel27bh-header'
					>
						<Typography className={classes.heading}>
							Myj ręce zwykłym mydłem w kostce, działa lepiej niż mydła w płynie i żele do mycia
						</Typography>
					</AccordionSummary>
					<AccordionDetails className='true-or-false-details'>
						<Typography className='true-or-false-false'>FAŁSZ</Typography>
						<Typography className='true-or-false-text'>
							Prawidłowe i częste mycie rąk, niezależnie od rodzaju stosowanego mydła, jest
							podstawowym środkiem higieny.
						</Typography>
					</AccordionDetails>
				</Accordionn>
				<Accordionn expanded={expanded === 'panel28'} onChange={handleChange('panel28')}>
					<AccordionSummary
						expandIcon={<ExpandMoreIcon />}
						aria-controls='panel28bh-content'
						id='panel28bh-header'
					>
						<Typography className={classes.heading}>
							Musisz zgolić brodę, by chronić się przed koronawirusem
						</Typography>
					</AccordionSummary>
					<AccordionDetails className='true-or-false-details'>
						<Typography className='true-or-false-false'>FAŁSZ</Typography>
						<Typography className='true-or-false-text'>
							Broda nie wpływa na to, czy się zakazisz. Ale zachowaj higienę osobistą.
						</Typography>
					</AccordionDetails>
				</Accordionn>
				<Accordionn expanded={expanded === 'panel29'} onChange={handleChange('panel29')}>
					<AccordionSummary
						expandIcon={<ExpandMoreIcon />}
						aria-controls='panel29bh-content'
						id='panel29bh-header'
					>
						<Typography className={classes.heading}>
							Osoba, która zachorowała na COVID-19 i wyzdrowiała, może ponownie zachorować
						</Typography>
					</AccordionSummary>
					<AccordionDetails className='true-or-false-details'>
						<Typography className='true-or-false-false'>FAŁSZ</Typography>
						<Typography className='true-or-false-text'>
							Przebycie zakażenia powoduje wytworzenie w organizmie przeciwciał ochronnych IgG.
							Naturalny, powolny spadek ich poziomu może prowadzić do stopniowej utraty odporności.
							Jednak nie musi do tego prowadzić. Aby to stwierdzić, trzeba by potwierdzić
							występowanie u ozdrowieńców odporności komórkowej, która zapewnia długotrwałą,
							wieloletnią ochronę przed ponownym zakażeniem (tzw. pamięć immunologiczna).
						</Typography>
						<Typography className='true-or-false-text'>
							Istnieją sporadyczne doniesienia o ponownych zachorowaniach u osób, które wcześniej
							przechorowały COVID-19. Kwestie trwałości odporności uzyskanej po przechorowaniu są
							nadal przedmiotem badań. Obecne wytyczne amerykańskiej agencji CDC są oparte na
							obserwacjach, że efektywna odporność powinna się utrzymywać nie krócej niż 3 miesiące
							od przebycia zakażenia.
						</Typography>
						<Typography className='true-or-false-text'>
							Dlatego zasady bezpieczeństwa epidemiologicznego takie jak noszenie maseczki,
							utrzymywanie dystansu i mycie rąk dotyczy ozdrowieńców, w takim samym stopniu jak
							osób, które nie chorowały.
						</Typography>
					</AccordionDetails>
				</Accordionn>
				<Accordionn expanded={expanded === 'panel30'} onChange={handleChange('panel30')}>
					<AccordionSummary
						expandIcon={<ExpandMoreIcon />}
						aria-controls='panel30bh-content'
						id='panel30bh-header'
					>
						<Typography className={classes.heading}>
							Mężczyźni ciężej chorują na COVID-19
						</Typography>
					</AccordionSummary>
					<AccordionDetails className='true-or-false-details'>
						<Typography className='true-or-false-true'>PRAWDA</Typography>
						<Typography className='true-or-false-text'>
							Ciężki przebieg zachorowania może wystąpić niezależnie od płci. Natomiast dane
							wskazują, że statystycznie wśród osób ciężko chorych jest więcej mężczyzn, co
							oczywiście nie ma wpływu na indywidualne ryzyko ciężkości przebiegu choroby u danej
							osoby. Zależy ono od wielu czynników, w tym od wieku oraz stanu zdrowia (obecność
							choroby przewlekłe).
						</Typography>
					</AccordionDetails>
				</Accordionn>
				<Accordionn expanded={expanded === 'panel31'} onChange={handleChange('panel31')}>
					<AccordionSummary
						expandIcon={<ExpandMoreIcon />}
						aria-controls='panel31bh-content'
						id='panel31bh-header'
					>
						<Typography className={classes.heading}>
							Przez własny telefon można się zakazić koronawirusem
						</Typography>
					</AccordionSummary>
					<AccordionDetails className='true-or-false-details'>
						<Typography className='true-or-false-true'>PRAWDA</Typography>
						<Typography className='true-or-false-text'>
							Telefon komórkowy jest jednym z najczęściej dotykanych przedmiotów w ciągu dnia.
							Dotykamy telefonu brudnymi rękoma, pozostawiając na jego powierzchni chorobotwórcze
							drobnoustroje. Dlatego regularnie dezynfekuj swój telefon, np. przecierając ściereczką
							z płynem dezynfekującym po każdym powrocie do domu, i nie korzystaj z niego podczas
							jedzenia.
						</Typography>
					</AccordionDetails>
				</Accordionn>
				<Accordionn expanded={expanded === 'panel32'} onChange={handleChange('panel32')}>
					<AccordionSummary
						expandIcon={<ExpandMoreIcon />}
						aria-controls='panel32bh-content'
						id='panel32bh-header'
					>
						<Typography className={classes.heading}>Picie wody z kranu jest bezpieczne</Typography>
					</AccordionSummary>
					<AccordionDetails className='true-or-false-details'>
						<Typography className='true-or-false-true'>PRAWDA</Typography>
						<Typography className='true-or-false-text'>
							Koronawirus nie przenosi się drogą pokarmową, a woda w kranach jest bezpieczna.
						</Typography>
					</AccordionDetails>
				</Accordionn>
				<Accordionn expanded={expanded === 'panel33'} onChange={handleChange('panel33')}>
					<AccordionSummary
						expandIcon={<ExpandMoreIcon />}
						aria-controls='panel33bh-content'
						id='panel33bh-header'
					>
						<Typography className={classes.heading}>
							Koronawirus nie zakaża drogą pokarmową, dlatego jedzenie jest bezpieczne
						</Typography>
					</AccordionSummary>
					<AccordionDetails className='true-or-false-details'>
						<Typography className='true-or-false-true'>PRAWDA</Typography>
						<Typography className='true-or-false-text'>
							Obecnie brak dowodów naukowych na zakażenie koronawirusem drogą pokarmową. Ale
							pamiętaj o zachowaniu zasad higieny. Obowiązują Cię te same zasady, które należy
							przestrzegać po to, aby nie zarazić się bakteriami.
						</Typography>
					</AccordionDetails>
				</Accordionn>
				<Accordionn expanded={expanded === 'panel34'} onChange={handleChange('panel34')}>
					<AccordionSummary
						expandIcon={<ExpandMoreIcon />}
						aria-controls='panel34bh-content'
						id='panel34bh-header'
					>
						<Typography className={classes.heading}>
							Koronawirusem możesz zakazić się w publicznej toalecie
						</Typography>
					</AccordionSummary>
					<AccordionDetails className='true-or-false-details'>
						<Typography className='true-or-false-false'>FAŁSZ</Typography>
						<Typography className='true-or-false-text'>
							Obecnie brak dowodów naukowych na potencjalne zakażenie koronawirusem poprzez
							korzystanie z tej samej toalety (np. przez siadanie na desce sedesowej). Natomiast
							publiczna toaleta jest miejscem, które odwiedza dużo osób, więc nie tylko z uwagi na
							koronawirusa należy myć ręce po skorzystaniu z niej. W miarę możliwości staraj się nie
							otwierać drzwi dłonią.
						</Typography>
					</AccordionDetails>
				</Accordionn>
				<Accordionn expanded={expanded === 'panel35'} onChange={handleChange('panel35')}>
					<AccordionSummary
						expandIcon={<ExpandMoreIcon />}
						aria-controls='panel35bh-content'
						id='panel35bh-header'
					>
						<Typography className={classes.heading}>
							Używając monet i papierowych pieniędzy, można zarazić się koronawirusem
						</Typography>
					</AccordionSummary>
					<AccordionDetails className='true-or-false-details'>
						<Typography className='true-or-false-true'>PRAWDA</Typography>
						<Typography className='true-or-false-text'>
							Pieniądze przechodzą z rąk do rąk. WHO zaleca zrezygnowanie z gotówki i płacenie
							bezdotykowo, za pomocą karty.
						</Typography>
					</AccordionDetails>
				</Accordionn>
				<Accordionn expanded={expanded === 'panel36'} onChange={handleChange('panel36')}>
					<AccordionSummary
						expandIcon={<ExpandMoreIcon />}
						aria-controls='panel36bh-content'
						id='panel36bh-header'
					>
						<Typography className={classes.heading}>
							Jeśli chcesz sprawdzić, czy nie masz koronawirusa, wykonaj ten test: weź głęboki
							oddech i wstrzymaj powietrze na dłużej niż 10 sekund. Jeśli uda ci się to zrobić bez
							kaszlu, bez dyskomfortu, duszności lub ucisku itp., oznacza, że jesteś zdrowy
						</Typography>
					</AccordionSummary>
					<AccordionDetails className='true-or-false-details'>
						<Typography className='true-or-false-false'>FAŁSZ</Typography>
						<Typography className='true-or-false-text'>
							To nieprawdziwa informacja, taki „test” niczego nie wykrywa. Celem diagnostyki w
							kierunku koronawirusa stosuje się zaawansowane technologiczne testy przeprowadzane w
							wyspecjalizowanych laboratoriach.
						</Typography>
					</AccordionDetails>
				</Accordionn>
				<Accordionn expanded={expanded === 'panel37'} onChange={handleChange('panel37')}>
					<AccordionSummary
						expandIcon={<ExpandMoreIcon />}
						aria-controls='panel37bh-content'
						id='panel37bh-header'
					>
						<Typography className={classes.heading}>
							Utrzymywanie wilgotności w gardle, picie co kwadrans ciepłej wody zapobiega zakażeniu
						</Typography>
					</AccordionSummary>
					<AccordionDetails className='true-or-false-details'>
						<Typography className='true-or-false-false'>FAŁSZ</Typography>
						<Typography className='true-or-false-text'>
							Picie wody w odpowiedniej ilości (ok. 2 l dziennie) jest zdrowe, a błona śluzowa nosa
							i gardła lepiej funkcjonuje, jak jest nawilżona, więc warto utrzymywać odpowiednią
							wilgotność w pomieszczeniach i je wietrzyć. Ale ani jedno, ani drugie nie chroni przed
							zakażeniem koronawirusem.
						</Typography>
					</AccordionDetails>
				</Accordionn>
				<Accordionn expanded={expanded === 'panel38'} onChange={handleChange('panel38')}>
					<AccordionSummary
						expandIcon={<ExpandMoreIcon />}
						aria-controls='panel38bh-content'
						id='panel38bh-header'
					>
						<Typography className={classes.heading}>
							Należy dezynfekować buty, żeby się nie zakazić
						</Typography>
					</AccordionSummary>
					<AccordionDetails className='true-or-false-details'>
						<Typography className='true-or-false-false'>FAŁSZ</Typography>
						<Typography className='true-or-false-text'>
							Nie ma takiej potrzeby. Brak dowodów naukowych na zakażenie koronawirusem poprzez
							kontakt z odzieżą. Należy zachować podstawowe zasady higieny.
						</Typography>
					</AccordionDetails>
				</Accordionn>
				<Accordionn expanded={expanded === 'panel39'} onChange={handleChange('panel39')}>
					<AccordionSummary
						expandIcon={<ExpandMoreIcon />}
						aria-controls='panel39bh-content'
						id='panel39bh-header'
					>
						<Typography className={classes.heading}>
							Im wyżej mieszkamy, tym bardziej jesteśmy poza zasięgiem koronawirusa
						</Typography>
					</AccordionSummary>
					<AccordionDetails className='true-or-false-details'>
						<Typography className='true-or-false-false'>FAŁSZ</Typography>
						<Typography className='true-or-false-text'>
							Wirus nie unosi się w powietrzu, przenosi się ze śliną zakażonego na 2 m, kiedy ktoś
							kicha czy mówi. Wietrzenie mieszkania jest bezpieczne, a nawet zalecane.
						</Typography>
					</AccordionDetails>
				</Accordionn>
				<Accordionn expanded={expanded === 'panel40'} onChange={handleChange('panel40')}>
					<AccordionSummary
						expandIcon={<ExpandMoreIcon />}
						aria-controls='panel40bh-content'
						id='panel40bh-header'
					>
						<Typography className={classes.heading}>
							Sauna pomoże zabezpieczyć się przed koronawirusem, ponieważ ginie on w wysokiej
							temperaturze
						</Typography>
					</AccordionSummary>
					<AccordionDetails className='true-or-false-details'>
						<Typography className='true-or-false-false'>FAŁSZ</Typography>
						<Typography className='true-or-false-text'>
							Sauna nie zwalczy koronawirusa, a jeśli korzysta z niej osoba zakażona, to istnieje
							ryzyko zakażenia pozostałych osób korzystających z sauny. Zaleca się ograniczenie
							przebywania razem z innymi ludźmi w małych pomieszczeniach, ciepłych i wilgotnych,
							trudno dezynfekowanych.
						</Typography>
					</AccordionDetails>
				</Accordionn>
				<Accordionn expanded={expanded === 'panel41'} onChange={handleChange('panel41')}>
					<AccordionSummary
						expandIcon={<ExpandMoreIcon />}
						aria-controls='panel41bh-content'
						id='panel41bh-header'
					>
						<Typography className={classes.heading}>
							Koronawirus nie przenosi się przez klimatyzację
						</Typography>
					</AccordionSummary>
					<AccordionDetails className='true-or-false-details'>
						<Typography className='true-or-false-true'>PRAWDA</Typography>
						<Typography className='true-or-false-text'>
							Koronawirusa przenosi się drogą kropelkową na relatywnie bliskie odległości (1-2 m),
							nie przenosi się natomiast pomiędzy pomieszczeniami poprzez systemy klimatyzacyjne.
						</Typography>
					</AccordionDetails>
				</Accordionn>
				<Accordionn expanded={expanded === 'panel42'} onChange={handleChange('panel42')}>
					<AccordionSummary
						expandIcon={<ExpandMoreIcon />}
						aria-controls='panel42bh-content'
						id='panel42bh-header'
					>
						<Typography className={classes.heading}>
							Koronawirus ginie w niskiej temperaturze
						</Typography>
					</AccordionSummary>
					<AccordionDetails className='true-or-false-details'>
						<Typography className='true-or-false-false'>FAŁSZ</Typography>
						<Typography className='true-or-false-text'>
							Obecnie brak dostatecznych dowodów naukowych opisujących wpływ temperatury na
							transmisję koronawirusa. Zgodnie z dostępnym stanem wiedzy nie ma powodu sądzić, że
							zimna pogoda może zabić koronawirusa lub inne choroby. Najskuteczniejszym sposobem
							ochrony przed koronawirusem jest częste mycie rąk wodą i mydłem oraz korzystanie
							środków do dezynfekcji rąk na bazie alkoholu. Należy także unikać bliskiego kontaktu z
							każdym, kto kaszle i kicha.
						</Typography>
					</AccordionDetails>
				</Accordionn>
				<Accordionn expanded={expanded === 'panel43'} onChange={handleChange('panel43')}>
					<AccordionSummary
						expandIcon={<ExpandMoreIcon />}
						aria-controls='panel43bh-content'
						id='panel43bh-header'
					>
						<Typography className={classes.heading}>
							Lampa dezynfekująca na promienie UV może zabić nowego koronawirusa
						</Typography>
					</AccordionSummary>
					<AccordionDetails className='true-or-false-details'>
						<Typography className='true-or-false-false'>FAŁSZ</Typography>
						<Typography className='true-or-false-text'>
							Bakteriobójcze oraz wirusobójcze cechy promieniowania UV są czasami stosowane jako
							dodatkowa metoda dezynfekcji pomieszczeń szpitalnych obok podstawowej metody, jaką
							jest dezynfekcja chemiczna z wykorzystaniem środków m.in. na bazie alkoholi.
							Promieniowanie UV niesie jednak ze sobą liczne zagrożenia i jego ewentualne
							zastosowanie najlepiej pozostawić fachowcom, jacy są np. w szpitalach. Urządzenia UV
							są wykorzystywane wyłącznie do dezynfekcji pomieszczeń, w których nie przebywają w
							danej chwili ludzie. Nie mogą być używane do sterylizacji rąk lub innych obszarów
							skóry, ponieważ promieniowanie UV zwiększa ryzyko zachorowania na raka skóry. Jest
							również szkodliwe dla oczu.
						</Typography>
						<Typography className='true-or-false-text'>
							Ozonowanie również nie jest efektywną metodą dezynfekcji przy realnie występujących
							zagrożeniach dla zdrowia. Natomiast urządzenia na gorącą parę są typowymi urządzeniami
							myjącymi służącymi do usuwania trwałych i znacznych zanieczyszczeń.
						</Typography>
						<Typography className='true-or-false-text'>
							Pomimo oferowania na różnych portalach aukcyjnych różnych środków i urządzeń
							„specjalnie dedykowanych zwalczaniu koronawirusa” w domu lub pracy należy korzystać z
							powszechnie dostępnych, atestowanych środków dezynfekcyjnych, a przede wszystkim
							zachować podstawowe zasady DDM (dystans, dezynfekcja, maseczka).
						</Typography>
					</AccordionDetails>
				</Accordionn>
				<Accordionn expanded={expanded === 'panel44'} onChange={handleChange('panel44')}>
					<AccordionSummary
						expandIcon={<ExpandMoreIcon />}
						aria-controls='panel44bh-content'
						id='panel44bh-header'
					>
						<Typography className={classes.heading}>
							Rodzina może bez obawy korzystać z tej samej kostki mydła
						</Typography>
					</AccordionSummary>
					<AccordionDetails className='true-or-false-details'>
						<Typography className='true-or-false-true'>PRAWDA</Typography>
						<Typography className='true-or-false-text'>
							Koronawirus jest podatny na rozpuszczalniki lipidów, co oznacza, że dokładne mycie rąk
							wodą ze zwykłym mydłem lub detergentem przez 30 sekund, jest kluczowe, by ograniczyć
							rozprzestrzeniania się koronawirusa. Rodzaj mydła nie ma znaczenia, a samo mydło jest
							bezpieczne.
						</Typography>
					</AccordionDetails>
				</Accordionn>
				<Accordionn expanded={expanded === 'panel45'} onChange={handleChange('panel45')}>
					<AccordionSummary
						expandIcon={<ExpandMoreIcon />}
						aria-controls='panel45bh-content'
						id='panel45bh-header'
					>
						<Typography className={classes.heading}>
							Suszarki do rąk skutecznie zabijają nowego koronawirusa
						</Typography>
					</AccordionSummary>
					<AccordionDetails className='true-or-false-details'>
						<Typography className='true-or-false-false'>FAŁSZ</Typography>
						<Typography className='true-or-false-text'>
							Nie. Suszarki do rąk nie są skuteczne w zwalczaniu koronawirusa. Aby uchronić się
							przed koronawirusem, należy często myć ręce wodą i mydłem lub dezynfekować je płynem
							na bazie alkoholu. Po umyciu rąk należy je dokładnie osuszyć, najlepiej używając
							ręczników papierowych.
						</Typography>
					</AccordionDetails>
				</Accordionn>
				<Accordionn expanded={expanded === 'panel46'} onChange={handleChange('panel46')}>
					<AccordionSummary
						expandIcon={<ExpandMoreIcon />}
						aria-controls='panel46bh-content'
						id='panel46bh-header'
					>
						<Typography className={classes.heading}>Gołębie nie zakażają koronawirusem</Typography>
					</AccordionSummary>
					<AccordionDetails className='true-or-false-details'>
						<Typography className='true-or-false-true'>PRAWDA</Typography>
						<Typography className='true-or-false-text'>
							Zwierzęta nie zakażają koronawirusem ani ptaki, ani insekty, ani zwierzęta domowe czy
							gospodarskie.
						</Typography>
					</AccordionDetails>
				</Accordionn>
				<Accordionn expanded={expanded === 'panel47'} onChange={handleChange('panel47')}>
					<AccordionSummary
						expandIcon={<ExpandMoreIcon />}
						aria-controls='panel47bh-content'
						id='panel47bh-header'
					>
						<Typography className={classes.heading}>
							Urządzenia do ozonowania są przydatne w walce z koronawirusem
						</Typography>
					</AccordionSummary>
					<AccordionDetails className='true-or-false-details'>
						<Typography className='true-or-false-false'>FAŁSZ</Typography>
						<Typography className='true-or-false-text'>
							Brak dowodów naukowych na skuteczność urządzeń do ozonowania w walce z koronawirusem.
							Należy korzystać z naukowo zweryfikowanych metod, a przede wszystkim zachować zasady
							higieny.
						</Typography>
					</AccordionDetails>
				</Accordionn>
				<Accordionn expanded={expanded === 'panel48'} onChange={handleChange('panel48')}>
					<AccordionSummary
						expandIcon={<ExpandMoreIcon />}
						aria-controls='panel48bh-content'
						id='panel48bh-header'
					>
						<Typography className={classes.heading}>
							To, że bierzesz ibuprofen, nie spowoduje, że w przypadku CIVID-19 będziesz ciężej
							chorować
						</Typography>
					</AccordionSummary>
					<AccordionDetails className='true-or-false-details'>
						<Typography className='true-or-false-true'>PRAWDA</Typography>
						<Typography className='true-or-false-text'>
							Europejska Agencja ds. Leków informuje, że nie ma stwierdzonego związku pomiędzy
							wcześniejszym braniem ibuprofenu a pogorszeniem przebiegu choroby COVID-19.
						</Typography>
					</AccordionDetails>
				</Accordionn>
				<Accordionn expanded={expanded === 'panel49'} onChange={handleChange('panel49')}>
					<AccordionSummary
						expandIcon={<ExpandMoreIcon />}
						aria-controls='panel49bh-content'
						id='panel49bh-header'
					>
						<Typography className={classes.heading}>
							W wynikach morfologii widać obecność koronawirusa
						</Typography>
					</AccordionSummary>
					<AccordionDetails className='true-or-false-details'>
						<Typography className='true-or-false-false'>FAŁSZ</Typography>
						<Typography className='true-or-false-text'>
							Wyniki morfologii pomagają ustalić ogólny stan zdrowia, ale nie potwierdzą zakażenia
							koronawirusem. Tylko specjalne testy laboratoryjne mogą potwierdzić zakażenie
							koronawirusem.
						</Typography>
					</AccordionDetails>
				</Accordionn>
				<Accordionn expanded={expanded === 'panel50'} onChange={handleChange('panel50')}>
					<AccordionSummary
						expandIcon={<ExpandMoreIcon />}
						aria-controls='panel50bh-content'
						id='panel50bh-header'
					>
						<Typography className={classes.heading}>
							Na prześwietleniu płuc widać, że pacjent ma koronawirusa
						</Typography>
					</AccordionSummary>
					<AccordionDetails className='true-or-false-details'>
						<Typography className='true-or-false-true'>PRAWDA</Typography>
						<Typography className='true-or-false-text'>
							Obraz radiologiczny płuc może wskazywać charakterystyczne zmiany w płucach, które
							świadczą o rozwoju COVID-19. Ale obecnie, tylko specjalne testy laboratoryjne mogą
							potwierdzić zakażenie koronawirusem.
						</Typography>
					</AccordionDetails>
				</Accordionn>
				<Accordionn expanded={expanded === 'panel51'} onChange={handleChange('panel51')}>
					<AccordionSummary
						expandIcon={<ExpandMoreIcon />}
						aria-controls='panel51bh-content'
						id='panel51bh-header'
					>
						<Typography className={classes.heading}>
							Dezynfekcja gorącą parą skutecznie niszczy koronawirusa
						</Typography>
					</AccordionSummary>
					<AccordionDetails className='true-or-false-details'>
						<Typography className='true-or-false-false'>FAŁSZ</Typography>
						<Typography className='true-or-false-text'>
							Obecnie brak danych naukowych wskazujących na skuteczność tej metody w dezynfekcji
							powierzchni, na których może znajdować się koronawirus.
						</Typography>
					</AccordionDetails>
				</Accordionn>
				<Accordionn expanded={expanded === 'panel52'} onChange={handleChange('panel52')}>
					<AccordionSummary
						expandIcon={<ExpandMoreIcon />}
						aria-controls='panel52bh-content'
						id='panel52bh-header'
					>
						<Typography className={classes.heading}>
							Można zarazić się koronawirusem poprzez kontakt z krwią osoby zarażonej
						</Typography>
					</AccordionSummary>
					<AccordionDetails className='true-or-false-details'>
						<Typography className='true-or-false-false'>FAŁSZ</Typography>
						<Typography className='true-or-false-text'>
							Obecnie brak dowodów naukowych wskazujących na zakażenie koronawirusem drogą
							krwiopochodną.
						</Typography>
					</AccordionDetails>
				</Accordionn>
			</div>
		</div>
	);
};

export default TrueOrFalse;
