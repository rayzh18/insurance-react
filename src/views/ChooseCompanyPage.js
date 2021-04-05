import React from 'react';
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

const ChooseCompanyPage = () => {

	return (
		<main className='travel-detail'>
			<div className='item-center header-part'>
				<h3 className='title'>Cestovní pojištění online</h3>
			</div>
			<div className='tab-part'>
				<div className='items'>
					<div className='left-color-fill'>
					</div>
					<a href='/travel_detail' className='item-detail checked'>
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
					<a href='/travel_detail' className='item-detail checked'>
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
													<label for='tourist'>
														Turistická
													</label>
												</div>
												<div className=''>
													<input type='radio' id='manual-work' name='trip_type' className='input-radio' />
													<label for='manual-work'>
														Pracovní (manuální práce)
													</label>
												</div>
												<div className=''>
													<input type='radio' id='administrative-work' name='trip_type' className='input-radio' />
													<label for='administrative-work'>
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
													<label for='recreational'>
														Rekreační
													</label>
												</div>
												<div className=''>
													<input type='radio' id='risky' name='sport_type' className='input-radio' />
													<label for='risky'>
														Rizikový
													</label>
												</div>
												<div className=''>
													<input type='radio' id='extreme' name='sport_type' className='input-radio' />
													<label for='extreme'>
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
								<a className='vice'>Vice</a>
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
								<th className='row'>
									<td className='w-15'>Název</td>
									<td className='w-15'>Komfort</td>
									<td className='w-15'>Dominant</td>
									<td className='w-15'>Střední</td>
									<td className='w-15'>Vyšší</td>
									<td className='w-15'>Vyšší</td>
								</th>
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
		</main>
	);
};

export default ChooseCompanyPage;
