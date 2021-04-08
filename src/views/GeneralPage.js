import React, { useState, useEffect } from 'react';
import { connect } from  'react-redux'
import rightArrowIcon from '../assets/right-arrow.svg';
import Modal from 'react-bootstrap/Modal';

const GeneralPage = () => {

	return (
		<main className='travel-detail general-page'>
			<div className='row contain'>
				<div className='col-md-6'>
					<h3 className='header-title'>
						Cookies
					</h3>
					<div className='content'>
						Webová stránka www.top-pojisteni.cz používá cookies, díky kterým je používání stránek snadnější. Soubory cookies jsou požívány k poskytování služeb, personalizaci reklam a analýze návštěvnosti. Pokud nechcete cookies používat, lze jejich ukládání odmítnout úpravou nastavení svého webového prohlížeče. Při zablokování cookies ve Vašem prohlížeči se však může stát, že nebudete moci využít některé funkce webu nebo se některé části webu nezobrazí korektně
					</div>
					<div className='paragraph-header'>
						Co to jsou soubory cookie?
					</div>
					<div className='content'>
						Pod pojmem ,,cookie“ si můžete představit malé množství dat, které se uloží do vašeho počítače, tabletu nebo telefonu při návštěvě webové stránky. Tato datová komunikace probíhá mezi serverem právě navštěvované stránky a webovým prohlížečem. Data se v zařízení uloží a při každé následující návštěvě stejné webové stránky odešle informace o této návštěvě našemu serveru. 	
					</div>
					<div className='content'>
						Soubor cookie umožňuje našemu serveru rozpoznat, zda jste na našich stránkách poprvé nebo již poněkolikáté, a o jaký obsah webu máte zájem. Díky souboru cookie si například náš formulář pamatuje data, která vyplníte při kalkulaci pojištění.
					</div>
					<div className='paragraph-header'>
						Proč používáme cookies?
					</div>
					<div className='content'>
						V dnešní době pokročilých technologií a složitých webových stránek to už ani jinak nejde. Hlavním smyslem souboru cookies je Vám zpříjemnit a usnadnit používání našich webových stránek. Data z cookies rovněž používáme k analýze návštěvnosti, jenž nám pomáhá zlepšit strukturu a obsah webových stránek.
					</div>
					<div className='item-header'>
						Relační ,,dočasné“
					</div>
					<div className='content'>
						V dnešní době pokročilých technologií a složitých webových stránek to už ani jinak nejde. Hlavním smyslem souboru cookies je Vám zpříjemnit a usnadnit používání našich webových stránek. Data z cookies rovněž používáme k analýze návštěvnosti, jenž nám pomáhá zlepšit strukturu a obsah webových stránek.	
					</div>
					<div className='item-header'>
						Permanentní ,,trvalé“
					</div>
					<div className='content'>
						Trvalé cookies se ukládají ve Vašem zařízení a mohou obsahovat anonymní identifikátor Vašeho prohlížeče. Zůstávají ve vašem zařízení po dobu zadanou v parametrech, dokud nedojde k jejich expiraci. Jedná se například o dobu 30 dní, nebo dokud je ručně nesmažete. Trvalé cookies Vás neidentifikují jako jednotlivce jelikož jsou anonymní a veškerá data se používají pro sledování statistiky užívání webových stránek. Tento typ cookies se využívá výhradně pro měření a reklamu. Měřící cookies dokáží identifikovat opakovanou návštěvu a procházené stránky v případě zachování stejného prohlížeče a stejného zařízení. Naopak reklamní cookies umožňují zobrazovat uživatelům webu cílenou reklamu. Případné další cookies mohou být využity ke správnému fungování přihlášení do uživatelského účtu na našem webu nebo v kalkulátoru pojištění, který si pamatuje zadané údaje a nemusíte je znovu vyplňovat při další návštěvě. Toto vše nám pomáhá neustále zlepšovat poskytované služby a udržet webové stránky uživatelsky přívětivé k maximální spokojenosti našich zákazníků.
					</div>
				</div>
				<div className='col-md-6'></div>
			</div>
		</main>
	);
};

export default GeneralPage;
