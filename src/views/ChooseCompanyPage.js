import React, { useState } from 'react';
import Accordion from 'react-bootstrap/Accordion'
import Card from 'react-bootstrap/Card'
import img_assistance from '../assets/assistance.png';
import img_union from '../assets/union.png';
import img_slavia from '../assets/slavia.png';
import img_uniqa from '../assets/uniqa.png';
import img_fifth from '../assets/fifth.png';
import icon_success from '../assets/green-success-icon.svg';
import icon_failed from '../assets/red-failed-icon.svg'
import Button from 'react-bootstrap/Button'
import Modal from 'react-bootstrap/Modal';

const ChooseCompanyPage = () => {

	const [isShowModal, setShowModal] = useState(false);

	const showModal = () => {
		setShowModal(true);
	}

	console.log("ChooseCompanyPage");

	return (
		<main className='travel-detail'>
			<div className='item-center header-part'>
				<h3 className='title'>Cestovní pojištění online</h3>
			</div>
			<div className='tab-part'>
				<div className='items'>
					<div className='left-color-fill'>
					</div>
					<a className='item-detail checked'>
						1.Údaje o cestě
					</a>
					<a className='item-detail checked'>
						2.Výběr pojištovny
					</a>
					<a className='item-detail'>
						3.Osobní údaje
					</a>
					<a className='item-detail'>
						4.Shrnutí
					</a>
					<a className='item-detail'>
						5.Platba
					</a>
					<div className=''>
					</div>
				</div>
			</div>
			<div className='tab-part-mobile'>
				<div className='items'>
					<a className='item-detail checked'>
						1.Údaje o cestě
					</a>
					<a className='item-detail checked'>
						2.Výběr pojištovny
					</a>
					<a className='item-detail'>
						3.Osobní údaje
					</a>
					<a className='item-detail'>
						4.Shrnutí
					</a>
					<a className='item-detail'>
						5.Platba
					</a>
				</div>
			</div>
			<div className='detail-main form-body'>
				<div className='title item-center'>
					<span>2.</span>
					<h3>Výběr pojištovny</h3>
				</div>
				<div className='choose-company'>
					<div>
						<div className='setting-field'>
							<Accordion defaultActiveKey="0">
								<div className='setting-item'>
									<Accordion.Toggle as={Card.Header} className='toggle-btn-group' variant="link" eventKey="0">
										<div className='item-header'>
											<h3>Údaje o cestě</h3>
											<i className='fas fa-chevron-down'></i>
										</div>
									</Accordion.Toggle>
									<Accordion.Collapse eventKey="0">
										<div className='m-b-3'>
											<div className='form-group'>
												<h3 className='m-b-3'>
													Kam cestujete<span>*</span>
												</h3>
												<input className='input-text w-100 p-11' type='text' placeholder='Kam cestujete' />
											</div>
											<div className='item-center'>
												<div className='form-group w-50 m-r-5'>
													<h3 className='m-b-3'>
														Odjezd<span>*</span>
													</h3>
													<input className='input-text w-100 p-11 small' placeholder='Odjezd' type='date' />
												</div>
												<div className='form-group w-50'>
													<h3 className='m-b-3'>
														Návrat<span>*</span>
													</h3>
													<input className='input-text w-100 p-11 small' placeholder='Návrat' type='date' />
												</div>
											</div>
											<div className='trip-type-box'>
												<h3 className='m-b-3'>
													Typ cesty<span>*</span>
												</h3>
												<div className=''>
													<input type='radio' id='tourist' name='trip_type' className='input-radio' />
													<label htmlFor='tourist'>
														Turistická
													</label>
												</div>
												<div className=''>
													<input type='radio' id='manual-work' name='trip_type' className='input-radio' />
													<label htmlFor='manual-work'>
														Pracovní (manuální práce)
													</label>
												</div>
												<div className=''>
													<input type='radio' id='administrative-work' name='trip_type' className='input-radio' />
													<label htmlFor='administrative-work'>
														Pracovní (administrativní práce)
													</label>
												</div>
											</div>
											<div className='trip-type-box'>
												<h3 className='m-b-3'>
													Sport<span>*</span>
												</h3>
												<div className=''>
													<input type='radio' id='recreational' name='sport_type' className='input-radio' />
													<label htmlFor='recreational'>
														Rekreační
													</label>
												</div>
												<div className=''>
													<input type='radio' id='risky' name='sport_type' className='input-radio' />
													<label htmlFor='risky'>
														Rizikový
													</label>
												</div>
												<div className=''>
													<input type='radio' id='extreme' name='sport_type' className='input-radio' />
													<label htmlFor='extreme'>
														Extrémní
													</label>
												</div>
											</div>
										</div>
									</Accordion.Collapse>
								</div>
								<div className='setting-item'>
									<Accordion.Toggle as={Card.Header} className='toggle-btn-group' variant="link" eventKey="1">
										<div className='item-header'>
											<h3>Pojištěné osoby</h3>
											<i className='fas fa-chevron-down'></i>
										</div>
									</Accordion.Toggle>
									<Accordion.Collapse eventKey="1">
										<h3>Pojištěné osoby</h3>
									</Accordion.Collapse>
								</div>
								<div className='setting-item'>
									<Accordion.Toggle as={Card.Header} className='toggle-btn-group' variant="link" eventKey="2">
										<div className='item-header'>
											<h3>Rozsah pojištění</h3>
											<i className='fas fa-chevron-down'></i>
										</div>
									</Accordion.Toggle>
									<Accordion.Collapse eventKey="2">
										<h3>Rozsah pojištění</h3>
									</Accordion.Collapse>
								</div>

							</Accordion>
						</div>
					</div>
					<div className='status-part'>
						<div className='row company-contain'>
							<div className='w-15'>
							</div>
							<div className='w-15 content-center'>
								<div className='img-contain'>
									<img src={img_assistance}></img>
								</div>
								<div className='price'>89 Kč</div>
								<Button variant="warning" className='btn-yellow-round'>Vybrat</Button>
								<a onClick={() => showModal()} className='vice'>Vice</a>
							</div>
							<div className='w-15 content-center'>
								<div className='img-contain'>
									<img src={img_union}></img>
								</div>
								<div className='price'>120 Kč</div>
								<Button variant="warning" className='btn-yellow-round'>Vybrat</Button>
								<a className='vice'>Vice</a>
							</div>
							<div className='w-15 content-center'>
								<div className='img-contain'>
									<img src={img_slavia}></img>
								</div>
								<div className='price'>240 Kč</div>
								<Button variant="warning" className='btn-yellow-round'>Vybrat</Button>
								<a className='vice'>Vice</a>
							</div>
							<div className='w-15 content-center'>
								<div className='img-contain'>
									<img src={img_uniqa}></img>
								</div>
								<div className='price'>310 Kč</div>
								<Button variant="warning" className='btn-yellow-round'>Vybrat</Button>
								<a className='vice'>Vice</a>
							</div>
							<div className='w-15 content-center'>
								<div className='img-contain'>
									<img src={img_fifth}></img>
								</div>
								<div className='price'>390 Kč</div>
								<Button variant="warning" className='btn-yellow-round'>Vybrat</Button>
								<a className='vice'>Vice</a>
							</div>
						</div>
						<div className='row table-contain'>
							<table>
								<thead className='row'>
									<tr className='flex w-100'>
										<td className='w-15'>Název</td>
										<td className='w-15'>Komfort</td>
										<td className='w-15'>Dominant</td>
										<td className='w-15'>Střední</td>
										<td className='w-15'>Vyšší</td>
										<td className='w-15'>Vyšší</td>
									</tr>
								</thead>
								<tbody>
									<tr className='row'>
										<td className='w-15'>
											Covid-19 pojištění
										</td>
										<td className='w-15'>
											<img src={icon_success}></img>
										</td>
										<td className='w-15'>
											<img src={icon_success}></img>
										</td>
										<td className='w-15'>
											<img src={icon_success}></img>
										</td>
										<td className='w-15'>
											<img src={icon_success}></img>
										</td>
										<td className='w-15'>
											<img src={icon_success}></img>
										</td>
									</tr>
									<tr className='row'>
										<td className='w-15'>
											Autoasistence
										</td>
										<td className='w-15'>
											lze pojistit
										</td>
										<td className='w-15'>
											<img src={icon_failed}></img>
										</td>
										<td className='w-15'>
											lze pojistit
										</td>
										<td className='w-15'>
											lze pojistit
										</td>
										<td className='w-15'>
											<img src={icon_failed}></img>
										</td>
									</tr>
									<tr className='row'>
										<td className='w-15'>
											Léčebné výlohy
										</td>
										<td className='w-15'>
											5.000.000
										</td>
										<td className='w-15'>
											5.000.000
										</td>
										<td className='w-15'>
											5.000.000
										</td>
										<td className='w-15'>
											5.000.000
										</td>
										<td className='w-15'>
											5.000.000
										</td>
									</tr>
									<tr className='row'>
										<td className='w-15'>
											Asistenční služby
										</td>
										<td className='w-15'>
											<img src={icon_success}></img>
										</td>
										<td className='w-15'>
											<img src={icon_success}></img>
										</td>
										<td className='w-15'>
											<img src={icon_success}></img>
										</td>
										<td className='w-15'>
											<img src={icon_success}></img>
										</td>
										<td className='w-15'>
											<img src={icon_success}></img>
										</td>
									</tr>
									<tr className='row'>
										<td className='w-15'>
											Úrazové pojištění
										</td>
										<td className='w-15'>
											500.000
										</td>
										<td className='w-15'>
											300.000
										</td>
										<td className='w-15'>
											300.000
										</td>
										<td className='w-15'>
											200.000
										</td>
										<td className='w-15'>
											250.000
										</td>
									</tr>
									<tr className='row'>
										<td className='w-15'>
											Pojištění zavazadel
										</td>
										<td className='w-15'>
											20.000
										</td>
										<td className='w-15'>
											25.000
										</td>
										<td className='w-15'>
											25.000
										</td>
										<td className='w-15'>
											<img src={icon_failed}></img>
										</td>
										<td className='w-15'>
											10.000
										</td>
									</tr>
									<tr className='row'>
										<td className='w-15'>
											Pojištění odpovědnosti
										</td>
										<td className='w-15'>
											4.000.000
										</td>
										<td className='w-15'>
											3.000.000
										</td>
										<td className='w-15'>
											5.000.000
										</td>
										<td className='w-15'>
											2.000.000
										</td>
										<td className='w-15'>
											4.000.000
										</td>
									</tr>
									<tr className='row'>
										<td className='w-15'>
											Rekreační sporty
										</td>
										<td className='w-15'>
											<img src={icon_success}></img>
										</td>
										<td className='w-15'>
											<img src={icon_success}></img>
										</td>
										<td className='w-15'>
											<img src={icon_success}></img>
										</td>
										<td className='w-15'>
											<img src={icon_failed}></img>
										</td>
										<td className='w-15'>
											<img src={icon_success}></img>
										</td>
									</tr>
									<tr className='row'>
										<td className='w-15'>
											Zimní sporty
										</td>
										<td className='w-15'>
											<img src={icon_success}></img>
										</td>
										<td className='w-15'>
											<img src={icon_failed}></img>
										</td>
										<td className='w-15'>
											<img src={icon_success}></img>
										</td>
										<td className='w-15'>
											<img src={icon_success}></img>
										</td>
										<td className='w-15'>
											<img src={icon_success}></img>
										</td>
									</tr>
									<tr className='row'>
										<td className='w-15'>
											Rizikové sporty
										</td>
										<td className='w-15'>
											<img src={icon_failed}></img>
										</td>
										<td className='w-15'>
											<img src={icon_failed}></img>
										</td>
										<td className='w-15'>
											<img src={icon_failed}></img>
										</td>
										<td className='w-15'>
											<img src={icon_failed}></img>
										</td>
										<td className='w-15'>
											<img src={icon_success}></img>
										</td>
									</tr>
									<tr className='row'>
										<td className='w-15'>
											Rizikové sporty
										</td>
										<td className='w-15'>
											<img src={icon_failed}></img>
										</td>
										<td className='w-15'>
											<img src={icon_failed}></img>
										</td>
										<td className='w-15'>
											<img src={icon_success}></img>
										</td>
										<td className='w-15'>
											<img src={icon_failed}></img>
										</td>
										<td className='w-15'>
											<img src={icon_success}></img>
										</td>
									</tr>
								</tbody>
							</table>
						</div>
					</div>
				</div>
			</div>
			<Modal 
				show={isShowModal} onHide={() => setShowModal(false)}
				dialogClassName="choose-company-modal"
				centered
			>
				<div className='header'>Cestovní pojištění Assistance</div>

				<div className='paragraph-header'>Cestovní pojištění Assistance</div>
				<div className='content'>
					Jednorázové cestovní pojištění - nejběžnější typ pojištění pro cestu do zahraničí, která může trvat od 1 dne až do 1 roku. 
				</div>
				<div className='content'>
					Roční cestovní pojištění s opakovanými výjezdy - pokud jezdíte za hranice často, doporučujeme právě tuto variantu. Pojištění si tak sjednáte jednorázově a jste bez starostí před jednotlivými cestami. Je platné pro neomezený početvý jezdů (každý v rozmezí od 1 do 90ti dnů).
				</div>

				<div className='paragraph-header'>Platnost?</div>
				<div className='content'>už 4 hodiny po zadání platby pojistného na účet Top-Pojištění.cz.</div>

				<div className='paragraph-header'>Nabízené varianty:</div>
				<div className='content'><span>Reference</span> – Krátké výlety do sousedních zemích (např. návštěva rodiny, výlet za nákupy apod.). Limity 2,5 milionu Kč na léčebné výlohy, odpovědnost za škodu není v ceně. V ceně pojištění nejsou další důležitá rizika jako je například pojištění odpovědnosti. </div>
				<div className='content'><span>Komfort</span> – Klidná nenáročná dovolená po Evropě. Limity 5 milionů Kč na léčebné výlohy, 4 miliony Kč na způsobené škody na zdraví. Limity 5 milionů Kč na léčebné výlohy, odpovědnost za škodu není v ceně. V ceně i pojištění zavazadel, právní asistence, odpovědnost za škodu na majetku. </div>
				<div className='content'><span>Excelent</span> – Hoďte starosti za hlavu a užívejte si naplno bez ohledu kam cestujete. Excelent je ta správná volba pro jistotu a klid na cestách. Nejvyšší limity: 500 milionů Kč na léčebné výlohy vč. nákladů na repatriaci či zásahu horské služby, 25 milionů Kč na způsobené škody na zdraví. V ceně navíc i pojištění zavazadel, právní asistence, odpovědnost za škodu na majetku, či pojištění cesty letadlem. A k tomu chráníme i vaše domácí mazlíčky.</div>

				<table>
					<tbody>
						<tr className="row">
							<td className="w-25 strong">Předmět pojištění</td>
							<td className="w-75 strong">Limit pojistného plnění</td>
						</tr>
						<tr className="row">
							<td className="w-25 strong">
								Pojistný program
							</td>
							<td className="w-25 strong">
								Reference
							</td>
							<td className="w-25 strong">
								Komfort
							</td>
							<td className="w-25 strong">
								Excelent
							</td>
						</tr>
						<tr className="row">
							<td className="w-100 strong">
								Pojištění léčebných výloh (PLV)
							</td>
						</tr>
						<tr className="row">
							<td className="w-25">
								Celkový limit
							</td>
							<td className="w-25">
								2.500.000 Kč
							</td>
							<td className="w-25">
								5.000.000 Kč
							</td>
							<td className="w-25">
								500.000.000 Kč
							</td>
						</tr>
						<tr className="row">
							<td className="w-25">Repatriace a transporty</td>
							<td className="w-75">Reálné náklady do limitu PLV</td>
						</tr>
						<tr className="row">
							<td className="w-25">
								Zuby
							</td>
							<td className="w-25">
								6.000 Kč
							</td>
							<td className="w-25">
								11.000 Kč
							</td>
							<td className="w-25">
								13.000 Kč
							</td>
						</tr>
						<tr className="row">
							<td className="w-25">Návštěva rodinného příslušníka</td>
							<td className="w-75">Reálné náklady do limitu PLV</td>
						</tr>
						<tr className="row">
							<td className="w-25">
								Ubytování doprovázející osoby	
							</td>
							<td className="w-25">
								100 EUR / noc; max. 10 nocí
							</td>
							<td className="w-25">
								150 EUR / noc; max. 10 nocí
							</td>
							<td className="w-25">
								100 EUR / noc; max. 10 noc
							</td>
						</tr>
						<tr className="row">
							<td className="w-25">
								Limit na ošetření zubů
							</td>
							<td className="w-25">
								6.000 Kč
							</td>
							<td className="w-25">
								6.000 Kč
							</td>
							<td className="w-25">
								6.000 Kč
							</td>
						</tr>
						<tr className="row">
							<td className="w-25">Doprava doprovázející osoby</td>
							<td className="w-75">Reálné náklady do limitu PLV</td>
						</tr>
					</tbody>
				</table>
				<div className='paragraph-header'>Pojištění lze sjednat</div>
				<div className='content'>
				pro cesty do 365 dnů <br/>
				pro cesty jak po Evropě, tak po celém světě včetně USA a Kanady <br/>
				pro cesty turistické i pracovní (administrativní i manuální činnosti) <br/>
				při provozování rekreačních, zimních, rizikových sportů <br/>
				při účasti na organizovaných soutěžích <br/>
				pojištění storna <br/>
				i pro cesty do ČR <br/>
				</div>
			</Modal>
		</main>
	);
};

export default ChooseCompanyPage;
