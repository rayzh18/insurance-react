import React, { useEffect, useState } from 'react';
import { 
    set_countries, 
    set_detail
} from '../redux/actions';

import wrenchIcon from '../assets/wrench-icon.svg';
import calculatorIcon from '../assets/calculator-icon.svg';
import coinsIcon from '../assets/coins-icon.svg';
import hospitalizationIcon from '../assets/hospitalization-icon.svg';
import truckIcon from '../assets/truck-icon.svg';
import hearthIcon from '../assets/hearth-icon.svg';
import luggageIcon from '../assets/luggage-icon.svg';
import carIcon from '../assets/car-icon.svg';
import pawIcon from '../assets/paw-icon.svg';
import { useHistory } from "react-router-dom";
import Select from 'react-select';
import { connect } from 'react-redux';

const LandingPage = ({
    countries,
    set_countries,
    set_detail
}) => {

	const [countries_data, setCountriesData] = useState([]);
	const [selected_country, setCountry] = useState(null);
    const [travel_from, setTravelFrom] = useState('');
    const [travel_to, setTravelTo] = useState('');
    const [travel_type, setTravelType] = useState('');

    let history = useHistory();

	const options = [
		{ value: 'chocolate', label: 'Chocolate' },
		{ value: 'strawberry', label: 'Strawberry' },
		{ value: 'vanilla', label: 'Vanilla' },
	];

	const customSelectorStyles = {
		indicatorsContainer: (provided, state) => ({
			...provided, height: '50px'
		}),
	}

	const temp_countries_data = [
        {
            "id": 96,
            "inputValue": "Abcházie"
        },
        {
            "id": 97,
            "inputValue": "Afghánistán"
        },
        {
            "id": 52,
            "inputValue": "Albánie"
        },
        {
            "id": 151,
            "inputValue": "Alžírsko"
        },
        {
            "id": 53,
            "inputValue": "Andorra"
        },
        {
            "id": 152,
            "inputValue": "Angola"
        },
        {
            "id": 17,
            "inputValue": "Antigua a Barbuda"
        },
        {
            "id": 40,
            "inputValue": "Argentina"
        },
        {
            "id": 98,
            "inputValue": "Arménie"
        },
        {
            "id": 1,
            "inputValue": "Austrálie"
        },
        {
            "id": 99,
            "inputValue": "Ázerbájdžán"
        },
        {
            "id": 18,
            "inputValue": "Bahamy"
        },
        {
            "id": 100,
            "inputValue": "Bahrajn"
        },
        {
            "id": 101,
            "inputValue": "Bangladéš"
        },
        {
            "id": 19,
            "inputValue": "Barbados"
        },
        {
            "id": 54,
            "inputValue": "Belgie"
        },
        {
            "id": 20,
            "inputValue": "Belize"
        },
        {
            "id": 55,
            "inputValue": "Bělorusko"
        },
        {
            "id": 153,
            "inputValue": "Benin"
        },
        {
            "id": 102,
            "inputValue": "Bhútán"
        },
        {
            "id": 41,
            "inputValue": "Bolívie"
        },
        {
            "id": 56,
            "inputValue": "Bosna a Hercegovina"
        },
        {
            "id": 154,
            "inputValue": "Botswana"
        },
        {
            "id": 42,
            "inputValue": "Brazílie"
        },
        {
            "id": 103,
            "inputValue": "Brunej"
        },
        {
            "id": 57,
            "inputValue": "Bulharsko"
        },
        {
            "id": 156,
            "inputValue": "Burkina Faso"
        },
        {
            "id": 155,
            "inputValue": "Burundi"
        },
        {
            "id": 2,
            "inputValue": "Cookovy ostrovy"
        },
        {
            "id": 157,
            "inputValue": "Čad"
        },
        {
            "id": 58,
            "inputValue": "Černá Hora"
        },
        {
            "id": 59,
            "inputValue": "Česko"
        },
        {
            "id": 104,
            "inputValue": "Čína"
        },
        {
            "id": 60,
            "inputValue": "Dánsko"
        },
        {
            "id": 158,
            "inputValue": "Demokratická republika Kongo"
        },
        {
            "id": 21,
            "inputValue": "Dominika"
        },
        {
            "id": 22,
            "inputValue": "Dominikánská republika"
        },
        {
            "id": 159,
            "inputValue": "Džibutsko"
        },
        {
            "id": 160,
            "inputValue": "Egypt"
        },
        {
            "id": 43,
            "inputValue": "Ekvádor"
        },
        {
            "id": 161,
            "inputValue": "Eritrea"
        },
        {
            "id": 61,
            "inputValue": "Estonsko"
        },
        {
            "id": 162,
            "inputValue": "Etiopie"
        },
        {
            "id": 3,
            "inputValue": "Fidži"
        },
        {
            "id": 105,
            "inputValue": "Filipíny"
        },
        {
            "id": 62,
            "inputValue": "Finsko"
        },
        {
            "id": 63,
            "inputValue": "Francie"
        },
        {
            "id": 163,
            "inputValue": "Gabon"
        },
        {
            "id": 164,
            "inputValue": "Gambie"
        },
        {
            "id": 165,
            "inputValue": "Ghana"
        },
        {
            "id": 23,
            "inputValue": "Grenada"
        },
        {
            "id": 106,
            "inputValue": "Gruzie"
        },
        {
            "id": 24,
            "inputValue": "Guatemala"
        },
        {
            "id": 166,
            "inputValue": "Guinea"
        },
        {
            "id": 167,
            "inputValue": "Guinea-Bissau"
        },
        {
            "id": 44,
            "inputValue": "Guyana"
        },
        {
            "id": 25,
            "inputValue": "Haiti"
        },
        {
            "id": 26,
            "inputValue": "Honduras"
        },
        {
            "id": 107,
            "inputValue": "Hong Kong"
        },
        {
            "id": 45,
            "inputValue": "Chile"
        },
        {
            "id": 64,
            "inputValue": "Chorvatsko"
        },
        {
            "id": 108,
            "inputValue": "Indie"
        },
        {
            "id": 109,
            "inputValue": "Indonésie"
        },
        {
            "id": 110,
            "inputValue": "Irák"
        },
        {
            "id": 111,
            "inputValue": "Írán"
        },
        {
            "id": 65,
            "inputValue": "Irsko"
        },
        {
            "id": 66,
            "inputValue": "Island"
        },
        {
            "id": 67,
            "inputValue": "Itálie"
        },
        {
            "id": 112,
            "inputValue": "Izrael"
        },
        {
            "id": 27,
            "inputValue": "Jamajka"
        },
        {
            "id": 113,
            "inputValue": "Japonsko"
        },
        {
            "id": 114,
            "inputValue": "Jemen"
        },
        {
            "id": 168,
            "inputValue": "Jihoafrická republika"
        },
        {
            "id": 115,
            "inputValue": "Jižní Korea"
        },
        {
            "id": 116,
            "inputValue": "Jižní Osetie"
        },
        {
            "id": 169,
            "inputValue": "Jižní Súdán"
        },
        {
            "id": 117,
            "inputValue": "Jordánsko"
        },
        {
            "id": 118,
            "inputValue": "Kambodža"
        },
        {
            "id": 170,
            "inputValue": "Kamerun"
        },
        {
            "id": 28,
            "inputValue": "Kanada"
        },
        {
            "id": 171,
            "inputValue": "Kapverdy"
        },
        {
            "id": 119,
            "inputValue": "Katar"
        },
        {
            "id": 120,
            "inputValue": "Kazachstán"
        },
        {
            "id": 172,
            "inputValue": "Keňa"
        },
        {
            "id": 4,
            "inputValue": "Kiribati"
        },
        {
            "id": 46,
            "inputValue": "Kolumbie"
        },
        {
            "id": 173,
            "inputValue": "Komory"
        },
        {
            "id": 174,
            "inputValue": "Konžská republika"
        },
        {
            "id": 68,
            "inputValue": "Kosovo"
        },
        {
            "id": 29,
            "inputValue": "Kostarika"
        },
        {
            "id": 30,
            "inputValue": "Kuba"
        },
        {
            "id": 121,
            "inputValue": "Kuvajt"
        },
        {
            "id": 122,
            "inputValue": "Kypr"
        },
        {
            "id": 123,
            "inputValue": "Kyrgyzstán"
        },
        {
            "id": 124,
            "inputValue": "Laos"
        },
        {
            "id": 175,
            "inputValue": "Lesotho"
        },
        {
            "id": 125,
            "inputValue": "Libanon"
        },
        {
            "id": 176,
            "inputValue": "Libérie"
        },
        {
            "id": 177,
            "inputValue": "Libye"
        },
        {
            "id": 69,
            "inputValue": "Lichtenštejnsko"
        },
        {
            "id": 70,
            "inputValue": "Litva"
        },
        {
            "id": 71,
            "inputValue": "Lotyšsko"
        },
        {
            "id": 72,
            "inputValue": "Lucembursko"
        },
        {
            "id": 178,
            "inputValue": "Madagaskar"
        },
        {
            "id": 73,
            "inputValue": "Maďarsko"
        },
        {
            "id": 126,
            "inputValue": "Malajsie"
        },
        {
            "id": 179,
            "inputValue": "Malawi"
        },
        {
            "id": 127,
            "inputValue": "Maledivy"
        },
        {
            "id": 180,
            "inputValue": "Mali"
        },
        {
            "id": 74,
            "inputValue": "Malta"
        },
        {
            "id": 181,
            "inputValue": "Maroko"
        },
        {
            "id": 5,
            "inputValue": "Marshallovy ostrovy"
        },
        {
            "id": 183,
            "inputValue": "Mauricius"
        },
        {
            "id": 182,
            "inputValue": "Mauritánie"
        },
        {
            "id": 31,
            "inputValue": "Mexiko"
        },
        {
            "id": 6,
            "inputValue": "Mikronésie"
        },
        {
            "id": 75,
            "inputValue": "Moldavsko"
        },
        {
            "id": 76,
            "inputValue": "Monako"
        },
        {
            "id": 128,
            "inputValue": "Mongolsko"
        },
        {
            "id": 184,
            "inputValue": "Mosambik"
        },
        {
            "id": 129,
            "inputValue": "Myanmar"
        },
        {
            "id": 131,
            "inputValue": "Náhorní Karabach"
        },
        {
            "id": 185,
            "inputValue": "Namibie"
        },
        {
            "id": 7,
            "inputValue": "Nauru"
        },
        {
            "id": 77,
            "inputValue": "Německo"
        },
        {
            "id": 130,
            "inputValue": "Nepál"
        },
        {
            "id": 186,
            "inputValue": "Niger"
        },
        {
            "id": 187,
            "inputValue": "Nigérie"
        },
        {
            "id": 32,
            "inputValue": "Nikaragua"
        },
        {
            "id": 8,
            "inputValue": "Niue"
        },
        {
            "id": 78,
            "inputValue": "Nizozemsko"
        },
        {
            "id": 79,
            "inputValue": "Norsko"
        },
        {
            "id": 9,
            "inputValue": "Nový Zéland"
        },
        {
            "id": 132,
            "inputValue": "Omán"
        },
        {
            "id": 133,
            "inputValue": "Pákistán"
        },
        {
            "id": 10,
            "inputValue": "Palau"
        },
        {
            "id": 134,
            "inputValue": "Palestinská autonomie"
        },
        {
            "id": 33,
            "inputValue": "Panama"
        },
        {
            "id": 11,
            "inputValue": "Papua Nová Guinea"
        },
        {
            "id": 47,
            "inputValue": "Paraguay"
        },
        {
            "id": 48,
            "inputValue": "Peru"
        },
        {
            "id": 188,
            "inputValue": "Pobřeží slonoviny"
        },
        {
            "id": 80,
            "inputValue": "Podněstersko"
        },
        {
            "id": 81,
            "inputValue": "Polsko"
        },
        {
            "id": 82,
            "inputValue": "Portugalsko"
        },
        {
            "id": 83,
            "inputValue": "Rakousko"
        },
        {
            "id": 189,
            "inputValue": "Rovníková Guinea"
        },
        {
            "id": 84,
            "inputValue": "Rumunsko"
        },
        {
            "id": 135,
            "inputValue": "Rusko"
        },
        {
            "id": 190,
            "inputValue": "Rwanda"
        },
        {
            "id": 85,
            "inputValue": "Řecko"
        },
        {
            "id": 191,
            "inputValue": "Saharská arabská demokratická republika"
        },
        {
            "id": 34,
            "inputValue": "Salvador"
        },
        {
            "id": 12,
            "inputValue": "Samoa"
        },
        {
            "id": 86,
            "inputValue": "San Marino"
        },
        {
            "id": 136,
            "inputValue": "Saúdská Arábie"
        },
        {
            "id": 192,
            "inputValue": "Senegal"
        },
        {
            "id": 137,
            "inputValue": "Severní Korea"
        },
        {
            "id": 138,
            "inputValue": "Severní Kypr"
        },
        {
            "id": 87,
            "inputValue": "Severní Makedonie"
        },
        {
            "id": 193,
            "inputValue": "Seychely"
        },
        {
            "id": 194,
            "inputValue": "Sierra Leone"
        },
        {
            "id": 139,
            "inputValue": "Singapur"
        },
        {
            "id": 88,
            "inputValue": "Slovensko"
        },
        {
            "id": 89,
            "inputValue": "Slovinsko"
        },
        {
            "id": 195,
            "inputValue": "Somaliland"
        },
        {
            "id": 196,
            "inputValue": "Somálsko"
        },
        {
            "id": 140,
            "inputValue": "Spojené arabské emiráty"
        },
        {
            "id": 90,
            "inputValue": "Spojené království"
        },
        {
            "id": 35,
            "inputValue": "Spojené státy americké"
        },
        {
            "id": 141,
            "inputValue": "Srí Lanka"
        },
        {
            "id": 197,
            "inputValue": "Středoafrická republika"
        },
        {
            "id": 198,
            "inputValue": "Súdán"
        },
        {
            "id": 49,
            "inputValue": "Surinam"
        },
        {
            "id": 36,
            "inputValue": "Svatá Lucie"
        },
        {
            "id": 37,
            "inputValue": "Svatý Kryštof a Nevis"
        },
        {
            "id": 199,
            "inputValue": "Svatý Tomáš a Princův ostrov"
        },
        {
            "id": 38,
            "inputValue": "Svatý Vincenc a Grenadiny"
        },
        {
            "id": 200,
            "inputValue": "Svazijsko"
        },
        {
            "id": 142,
            "inputValue": "Sýrie"
        },
        {
            "id": 13,
            "inputValue": "Šalomounovy ostrovy"
        },
        {
            "id": 91,
            "inputValue": "Španělsko"
        },
        {
            "id": 92,
            "inputValue": "Švédsko"
        },
        {
            "id": 93,
            "inputValue": "Švýcarsko"
        },
        {
            "id": 143,
            "inputValue": "Tádžikistán"
        },
        {
            "id": 201,
            "inputValue": "Tanzanie"
        },
        {
            "id": 144,
            "inputValue": "Thajsko"
        },
        {
            "id": 145,
            "inputValue": "Tchaj-wan"
        },
        {
            "id": 202,
            "inputValue": "Togo"
        },
        {
            "id": 14,
            "inputValue": "Tonga"
        },
        {
            "id": 39,
            "inputValue": "Trinidad a Tobago"
        },
        {
            "id": 203,
            "inputValue": "Tunisko"
        },
        {
            "id": 146,
            "inputValue": "Turecko"
        },
        {
            "id": 147,
            "inputValue": "Turkmenistán"
        },
        {
            "id": 15,
            "inputValue": "Tuvalu"
        },
        {
            "id": 204,
            "inputValue": "Uganda"
        },
        {
            "id": 94,
            "inputValue": "Ukrajina"
        },
        {
            "id": 50,
            "inputValue": "Uruguay"
        },
        {
            "id": 148,
            "inputValue": "Uzbekistán"
        },
        {
            "id": 16,
            "inputValue": "Vanuatu"
        },
        {
            "id": 95,
            "inputValue": "Vatikán"
        },
        {
            "id": 51,
            "inputValue": "Venezuela"
        },
        {
            "id": 149,
            "inputValue": "Vietnam"
        },
        {
            "id": 150,
            "inputValue": "Východní Timor"
        },
        {
            "id": 205,
            "inputValue": "Zambie"
        },
        {
            "id": 206,
            "inputValue": "Zimbabwe"
        }
    ];

    const goToDetail = (event) => {
        event.preventDefault();
        set_detail({
            country: selected_country,
            from: travel_from,
            to: travel_to,
            type: travel_type
        });
        history.push('/travel_detail');
    }

	useEffect(() => {
        set_countries(temp_countries_data.map((item) => ({ value: item.id, label: item.inputValue })));
	}, []);


	return (
		<main className='landing'>
			<section className='landing-main-section'>
				<div className='container landing-layout'>
					<div className='landing-left'>
						<h1>Cestovní pojištění</h1>
						<p className='landing-text'>
							Jednoduše a srozumitelně vám zajistíme cestovní pojištění
							s vlastnostmi, které jinde nedostanete
						</p>
						<ul>
							<li>Výběr z nabídky velkých a osvědčených pojišťoven</li>
							<li>
								Jednoduché a rychlé pojištění vaší cesty (soukromé i firemní)
							</li>
							<li>
								Rychlý a jednoduchý proces řešení případné pojistné události
							</li>
							<li>Možné připojištění vozidla, zvířecích miláčků</li>
						</ul>

						<div className='landing-main-section-icons'>
							<div className='landing-main-icon-wrapper'>
								<div className='landing-main-icon'>
									<img src={carIcon} alt='' />
								</div>
								<p className='info1'>
									Pojištění extrémního sportu jízdy po dálnici D1 (v ceně)
								</p>
							</div>

							<div className='landing-main-icon-wrapper'>
								<div className='landing-main-icon'>
									<img src={wrenchIcon} alt='' />
								</div>
								<p className='info2'>Asistenční služba Ve dne, v noci™</p>
							</div>
						</div>
					</div>

					<form className='landing-right'>
						<div className='form-header'>
							<h2>Zjistit cenu cestovního pojištění</h2>
						</div>
						<div className='form-body'>
							<div className='form-group'>
								<h3 className='m-b-3'>
									Kam cestujete<span>*</span>
								</h3>
								<Select
									options={countries}
                                    noOptionsMessage={() => (<div>Žádné možnosti</div>)}
									placeholder="Kam cestujete"
									styles={customSelectorStyles}
									onChange={(option) => {setCountry(option)}}
								/>
							</div>
							<div className='item-center'>
								<div className='form-group w-50 m-r-5'>
									<h3 className='m-b-3'>
										Odjezd<span>*</span>
									</h3>
									<input 
                                        className='input-text w-100 p-11' 
                                        value={travel_from} 
                                        onChange={(e) => setTravelFrom(e.target.value)} 
                                        placeholder='Odjezd' 
                                        type='date' 
                                    />
								</div>
								<div className='form-group w-50'>
									<h3 className='m-b-3'>
										Návrat<span>*</span>
									</h3>
									<input 
                                        className='input-text w-100 p-11' 
                                        value={travel_to} 
                                        onChange={(e) => setTravelTo(e.target.value)} 
                                        placeholder='Návrat' 
                                        type='date' 
                                    />
								</div>
							</div>
							<div className='trip-type-box'>
								<h3 className='m-b-5'>
									Typ cesty<span>*</span>
								</h3>
								<div className='form-group'>
									<input 
                                        type='radio' 
                                        checked={travel_type === 'tourist'} 
                                        value='tourist' 
                                        id='tourist'
                                        name='trip_type' 
                                        className='input-radio' 
                                        onChange={e => setTravelType(e.target.value)}
                                    />
									<label htmlFor='tourist'>
										Turistická
									</label>
								</div>
								<div className='form-group'>
									<input 
                                        type='radio' 
                                        checked={travel_type === 'manual-work'} 
                                        value='manual-work' 
                                        id='manual-work' 
                                        name='trip_type' 
                                        className='input-radio' 
                                        onChange={e => setTravelType(e.target.value)}
                                    />
									<label htmlFor='manual-work'>
										Pracovní (manuální práce)
									</label>
								</div>
								<div className='form-group'>
									<input 
                                        type='radio' 
                                        checked={travel_type === 'administrative-work'} 
                                        value='administrative-work' 
                                        id='administrative-work' 
                                        name='trip_type' 
                                        className='input-radio' 
                                        onChange={e => setTravelType(e.target.value)}
                                    />
									<label htmlFor='administrative-work'>
										Pracovní (administrativní práce)
									</label>
								</div>
							</div>
							<button className='calculate-fuse' onClick={(e) => goToDetail(e)}>
								Spočítat pojistku <img src={calculatorIcon} alt='' />
							</button>
						</div>
					</form>
				</div>
			</section>

			<section className='landing-icon-section container'>
				<h3>Před čím vás ochráníme</h3>
				<h2>Co kryje cestovní pojištění od nás?</h2>
				<div className='landing-icons-row-4'>
					<div className='landing-icon-wrapper'>
						<div className='landing-icon'>
							<img src={coinsIcon} alt='' />
						</div>
						<p>Náklady na ošetření</p>
					</div>
					<div className='landing-icon-wrapper'>
						<div className='landing-icon'>
							<img src={hospitalizationIcon} alt='' />
						</div>
						<p>Hospitalizaci a léky</p>
					</div>
					<div className='landing-icon-wrapper'>
						<div className='landing-icon'>
							<img src={truckIcon} alt='' />
						</div>
						<p>Nezbytné převozy a repatriaci</p>
					</div>
					<div className='landing-icon-wrapper'>
						<div className='landing-icon'>
							<img src={hearthIcon} alt='' />
						</div>
						<p>Odpovědnost za zdraví a majetek</p>
					</div>
				</div>
				<div className='landing-icons-row-3'>
					<div className='landing-icon-wrapper'>
						<div className='landing-icon'>
							<img src={luggageIcon} alt='' />
						</div>
						<p>Zavazadla a osobní věci (volitelně)</p>
					</div>
					<div className='landing-icon-wrapper'>
						<div className='landing-icon'>
							<img src={carIcon} alt='' />
						</div>
						<p>Vozidlo – technická asistence (volitelně)</p>
					</div>
					<div className='landing-icon-wrapper'>
						<div className='landing-icon'>
							<img src={pawIcon} alt='' />
						</div>
						<p>Zvířecí miláčky (volitelně)</p>
					</div>
				</div>
			</section>
		</main>
	);
};


const mapStateToProps = ({
    country,
}) => {
    const countries = country.countries;
    return { countries };
  };


export default connect( 
    mapStateToProps, 
    { 
        set_countries,
        set_detail
    }
)(LandingPage);