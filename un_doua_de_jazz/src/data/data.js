import blast from "../media/blast.jpg";
import blast2 from '../media/blast2.png';
import ishkero from "../media/ishkero.jpeg";
import eji from '../media/eji.jpg';
import mcr1 from '../media/mcr1.jpg';
import mcr2 from '../media/mcr2.jpg'

import chris from '../media/chris-potter.png';
import bojan from '../media/bojan-z.png';
import tigran from '../media/tigran-hamasaya.png';
import mederic from "../media/mederic-colignon.png";
import renaud from "../media/renaud-garcia-fons.png";
import soul from "../media/soul-square.png";

const data=[
    {nb : 1,
        id: 'blast', 
        name: "Blast",
    quote : '"Un Doua de Jazz revient en force cette année avec un premier concert de Blast à l’Espace Tonkin pour démarrer le festival en beauté !"',
    desc : 'Pierre Horckmans, Guillaume Bertrand et Anne Quilluer, formant un trio aventureux entremêlant jazz, pop et musique électronique sauront vous faire voyager dans un monde fictif, par leurs inspirations venant de la bande dessinée et du théâtre. S’alliant avec le dessinateur Benjamin Flao, ce concert dessiné fera vibrer tous vos sens, chaque musique inspirant le dessinateur sur scène pour créer des oeuvres inédites en direct, et chaque dessin inspirant la musique.',
    img1 : blast,
    img2 : blast2,
    day : '7',
    month : 'oct.',
    year : '2022',
    hour : '20h00 - 22h00',
    place : 'Espace Tonkin',
    nomTarif1 : 'Tarif plein',
    tarif1 : 18,
    nomTarif2 : 'Tarif réduit chômeurs/étudiants',
    tarif2 : 12,
    nomTarif3 : 'Abonnement Espace Tonkin',
    tarif3 : 10,
    billeterie : 'https://www.helloasso.com/associations/centre-leo-lagrange-villeurbanne/evenements/blast?_gl=1%2agg0xrs%2a_ga%2aMTYzNDE1NjAyNi4xNjI0MzAwMDIz%2a_ga_TKC826G3G2%2aMTYzMTg4ODM3My41LjEuMTYzMTg4OTkzOC4w',
    duo : false,    
},
    {nb:3,
        id: 'ishkero-eji', 
    quote : 'Quoi de mieux pour commencer sa semaine que le 3ème concert de la 28ème édition de votre festival favori ? Cette fois-ci, Un Doua de Jazz vous emmène à la Rotonde pour un concert jazz dans une ambiance décontractée.',
    desc : 'ISHKERO :\nIshkero est un jeune groupe parisien mêlant jazz moderne, rock et musique Gnawa, au groove puissant et moderne, apparaissant comme l’un des groupes montant des plus captivants de la scène française jazz. Alors laissez-vous séduire par ces jeunes artistes à l’avenir fort prometteur lors de cette soirée à la Rontonde le 11 octobre prochain.\nENSEMBLE JAZZ INSA :\nRetrouvez en première partie un concert de l’Ensemble Jazz de l’INSA Lyon. Explorant les classiques mais aussi les dernières tendances jazz, cet ensemble saura vous mettre en jambe pour le concert d’Ishkero, au coeur du campus de la Doua.',
    img1 : ishkero,
    img2 : eji,
    day : '11',
    month : 'oct.',
    year : '2022',
    hour : '20h00 - 22h00',
    place : 'Theatre Astree',
    nomTarif1 : 'Tarif VA',
    tarif1 : 4,
    nomTarif2 : 'Tarif étudiants',
    tarif2 : 5,
    nomTarif3 : 'Tarif plein',
    tarif3 : 8,
    billeterie : 'https://www.helloasso.com/associations/un-doua-de-jazz/evenements/la-rotonde-ishkero-ensemble-jazz-insa',
    duo:true,
    name: 'EJI - ISHKERO',
    nom1: 'ISHKERO',
    nom2: 'Ensemble Jazz INSA'
    },
    {nb:2,
        id: 'mcr', 
        name: 'Gérard Maimone (Trio MCR)',
    quote : 'Pour le deuxième concert du festival, Un Doua de Jazz vous emmène au Théâtre Astrée pour un concert qui saura satisfaire toutes vos envies jazz.',
    desc : 'Lors de ce concert, nous retrouverons Gérard Maimone et son groupe (Trio MCR) pour une carte blanche. Gérard Maimone a une expérience des plus intrigantes dans le domaine musical : additionnant expériences d’écritures de musiques à images et explorant différents styles. Du rock au tango, des musiques à l’esthétique orientale au jazz, il a su se démarquer parmi les autres en marquant sa musique de sa signature personnelle. Alors laissez-vous imprégner de ses mélodies lors de ce concert le 8 octobre prochain.',
    img1 : mcr1,
    img2 : mcr2,
    day : '8',
    month : 'oct.',
    year:'2022',
    hour : '20h20',
    place : 'Theatre Astree',
    nomTarif1 : 'Tarif Réduit (demandeurs d’emploi, minima sociaux, seniors de plus de 60 ans, personnels de l’Université de Lyon 1, de l’Enssib, personnels de l’UDL, groupes de dix personnes et plus)',
    tarif1 : 6,
    nomTarif2 : 'Tarif étudiants, moins de 18 ans',
    tarif2 : 0,
    nomTarif3 : 'Tarif plein',
    tarif3 : 12,
    billeterie : 'https://www.helloasso.com/associations/un-doua-de-jazz/evenements/la-rotonde-ishkero-ensemble-jazz-insa',
    duo:false
    }

]

const dataAnc=[
    {nb : 1,
        id: 'potter', 
        name: "Chris Potter",
    quote : '"Un Doua de Jazz revient en force cette année avec un premier concert de Blast à l’Espace Tonkin pour démarrer le festival en beauté !"',
    desc : 'Pierre Horckmans, Guillaume Bertrand et Anne Quilluer, formant un trio aventureux entremêlant jazz, pop et musique électronique sauront vous faire voyager dans un monde fictif, par leurs inspirations venant de la bande dessinée et du théâtre. S’alliant avec le dessinateur Benjamin Flao, ce concert dessiné fera vibrer tous vos sens, chaque musique inspirant le dessinateur sur scène pour créer des oeuvres inédites en direct, et chaque dessin inspirant la musique.',
    img1 : chris,
    img2 : blast2,
    day : '7',
    month : 'oct.',
    year: '2004',
    hour : '20h00 - 22h00',
    place : 'Espace Tonkin',
    nomTarif1 : 'Tarif plein',
    tarif1 : 18,
    nomTarif2 : 'Tarif réduit chômeurs/étudiants',
    tarif2 : 12,
    nomTarif3 : 'Abonnement Espace Tonkin',
    tarif3 : 10,
    billeterie : 'https://www.helloasso.com/associations/centre-leo-lagrange-villeurbanne/evenements/blast?_gl=1%2agg0xrs%2a_ga%2aMTYzNDE1NjAyNi4xNjI0MzAwMDIz%2a_ga_TKC826G3G2%2aMTYzMTg4ODM3My41LjEuMTYzMTg4OTkzOC4w',
    duo : false,    
    },
    {nb : 2,
        id: 'bojan', 
        name: "Bojan Z",
    quote : '"Un Doua de Jazz revient en force cette année avec un premier concert de Blast à l’Espace Tonkin pour démarrer le festival en beauté !"',
    desc : 'Pierre Horckmans, Guillaume Bertrand et Anne Quilluer, formant un trio aventureux entremêlant jazz, pop et musique électronique sauront vous faire voyager dans un monde fictif, par leurs inspirations venant de la bande dessinée et du théâtre. S’alliant avec le dessinateur Benjamin Flao, ce concert dessiné fera vibrer tous vos sens, chaque musique inspirant le dessinateur sur scène pour créer des oeuvres inédites en direct, et chaque dessin inspirant la musique.',
    img1 : bojan,
    img2 : blast2,
    day : '7',
    month : 'oct.',
    year:'2009',
    hour : '20h00 - 22h00',
    place : 'Espace Tonkin',
    nomTarif1 : 'Tarif plein',
    tarif1 : 18,
    nomTarif2 : 'Tarif réduit chômeurs/étudiants',
    tarif2 : 12,
    nomTarif3 : 'Abonnement Espace Tonkin',
    tarif3 : 10,
    billeterie : 'https://www.helloasso.com/associations/centre-leo-lagrange-villeurbanne/evenements/blast?_gl=1%2agg0xrs%2a_ga%2aMTYzNDE1NjAyNi4xNjI0MzAwMDIz%2a_ga_TKC826G3G2%2aMTYzMTg4ODM3My41LjEuMTYzMTg4OTkzOC4w',
    duo : false,    
    },
    {nb : 3,
        id: 'tigran', 
        name: "Tigran Hamasyan",
    quote : '"Un Doua de Jazz revient en force cette année avec un premier concert de Blast à l’Espace Tonkin pour démarrer le festival en beauté !"',
    desc : 'Pierre Horckmans, Guillaume Bertrand et Anne Quilluer, formant un trio aventureux entremêlant jazz, pop et musique électronique sauront vous faire voyager dans un monde fictif, par leurs inspirations venant de la bande dessinée et du théâtre. S’alliant avec le dessinateur Benjamin Flao, ce concert dessiné fera vibrer tous vos sens, chaque musique inspirant le dessinateur sur scène pour créer des oeuvres inédites en direct, et chaque dessin inspirant la musique.',
    img1 : tigran,
    img2 : blast2,
    day : '7',
    month : 'oct.',
    year:'2009',
    hour : '20h00 - 22h00',
    place : 'Espace Tonkin',
    nomTarif1 : 'Tarif plein',
    tarif1 : 18,
    nomTarif2 : 'Tarif réduit chômeurs/étudiants',
    tarif2 : 12,
    nomTarif3 : 'Abonnement Espace Tonkin',
    tarif3 : 10,
    billeterie : 'https://www.helloasso.com/associations/centre-leo-lagrange-villeurbanne/evenements/blast?_gl=1%2agg0xrs%2a_ga%2aMTYzNDE1NjAyNi4xNjI0MzAwMDIz%2a_ga_TKC826G3G2%2aMTYzMTg4ODM3My41LjEuMTYzMTg4OTkzOC4w',
    duo : false,    
    },
    {nb : 4,
        id: 'mederic', 
        name: "Mederic Colignon",
    quote : '"Un Doua de Jazz revient en force cette année avec un premier concert de Blast à l’Espace Tonkin pour démarrer le festival en beauté !"',
    desc : 'Pierre Horckmans, Guillaume Bertrand et Anne Quilluer, formant un trio aventureux entremêlant jazz, pop et musique électronique sauront vous faire voyager dans un monde fictif, par leurs inspirations venant de la bande dessinée et du théâtre. S’alliant avec le dessinateur Benjamin Flao, ce concert dessiné fera vibrer tous vos sens, chaque musique inspirant le dessinateur sur scène pour créer des oeuvres inédites en direct, et chaque dessin inspirant la musique.',
    img1 : mederic,
    img2 : blast2,
    day : '7',
    month : 'oct.',
    year:'2010',
    hour : '20h00 - 22h00',
    place : 'Espace Tonkin',
    nomTarif1 : 'Tarif plein',
    tarif1 : 18,
    nomTarif2 : 'Tarif réduit chômeurs/étudiants',
    tarif2 : 12,
    nomTarif3 : 'Abonnement Espace Tonkin',
    tarif3 : 10,
    billeterie : 'https://www.helloasso.com/associations/centre-leo-lagrange-villeurbanne/evenements/blast?_gl=1%2agg0xrs%2a_ga%2aMTYzNDE1NjAyNi4xNjI0MzAwMDIz%2a_ga_TKC826G3G2%2aMTYzMTg4ODM3My41LjEuMTYzMTg4OTkzOC4w',
    duo : false,    
    },
    {nb : 5,
        id: 'renaud', 
        name: "Renaud Garcia-Fons",
    quote : '"Un Doua de Jazz revient en force cette année avec un premier concert de Blast à l’Espace Tonkin pour démarrer le festival en beauté !"',
    desc : 'Pierre Horckmans, Guillaume Bertrand et Anne Quilluer, formant un trio aventureux entremêlant jazz, pop et musique électronique sauront vous faire voyager dans un monde fictif, par leurs inspirations venant de la bande dessinée et du théâtre. S’alliant avec le dessinateur Benjamin Flao, ce concert dessiné fera vibrer tous vos sens, chaque musique inspirant le dessinateur sur scène pour créer des oeuvres inédites en direct, et chaque dessin inspirant la musique.',
    img1 : renaud,
    img2 : blast2,
    day : '7',
    month : 'oct.',
    year:'2009',
    hour : '20h00 - 22h00',
    place : 'Espace Tonkin',
    nomTarif1 : 'Tarif plein',
    tarif1 : 18,
    nomTarif2 : 'Tarif réduit chômeurs/étudiants',
    tarif2 : 12,
    nomTarif3 : 'Abonnement Espace Tonkin',
    tarif3 : 10,
    billeterie : 'https://www.helloasso.com/associations/centre-leo-lagrange-villeurbanne/evenements/blast?_gl=1%2agg0xrs%2a_ga%2aMTYzNDE1NjAyNi4xNjI0MzAwMDIz%2a_ga_TKC826G3G2%2aMTYzMTg4ODM3My41LjEuMTYzMTg4OTkzOC4w',
    duo : false,    
    },
    {nb : 6,
        id: 'soul', 
        name: "Soul Square",
    quote : '"Un Doua de Jazz revient en force cette année avec un premier concert de Blast à l’Espace Tonkin pour démarrer le festival en beauté !"',
    desc : 'Pierre Horckmans, Guillaume Bertrand et Anne Quilluer, formant un trio aventureux entremêlant jazz, pop et musique électronique sauront vous faire voyager dans un monde fictif, par leurs inspirations venant de la bande dessinée et du théâtre. S’alliant avec le dessinateur Benjamin Flao, ce concert dessiné fera vibrer tous vos sens, chaque musique inspirant le dessinateur sur scène pour créer des oeuvres inédites en direct, et chaque dessin inspirant la musique.',
    img1 : soul,
    img2 : blast2,
    day : '7',
    month : 'oct.',
    year:'2016',
    hour : '20h00 - 22h00',
    place : 'Espace Tonkin',
    nomTarif1 : 'Tarif plein',
    tarif1 : 18,
    nomTarif2 : 'Tarif réduit chômeurs/étudiants',
    tarif2 : 12,
    nomTarif3 : 'Abonnement Espace Tonkin',
    tarif3 : 10,
    billeterie : 'https://www.helloasso.com/associations/centre-leo-lagrange-villeurbanne/evenements/blast?_gl=1%2agg0xrs%2a_ga%2aMTYzNDE1NjAyNi4xNjI0MzAwMDIz%2a_ga_TKC826G3G2%2aMTYzMTg4ODM3My41LjEuMTYzMTg4OTkzOC4w',
    duo : false,    
    }
]

function donnees(string){
    return data.find(el => el.id===string);
    
}

function donneesNb(number){
    return data.find(el => el.nb===number);
    
}

function donneesAnciennes(string){
    return dataAnc.find(el => el.id===string);
}

function donneesAnciennesNb(number){
    return dataAnc.find(el => el.nb===number);
}

export {donnees, donneesNb, donneesAnciennes, donneesAnciennesNb};

/*<div id="artistesGrid" >
        <div>
        <img src={chris} alt="Chris Potter"/>
        <p>Chris Potter<br/><span>2004</span></p>
        </div><div>
        <img src={bojan} alt="Bojan Z"/>

        <p>Bojan Z<br/><span>2009</span></p>
        </div><div>
        <img src={tigran} alt="Tigran Hamasyan"/>

        <p>Tigran Hamasyan<br/><span>2009</span></p>
        </div><div>
        <img src={mederic} alt="Mederic Colignon"/>
        <p>Mederic Colignon<br/><span>2010</span></p>
        </div><div>
        <img src={renaud} alt="Renaud Garcia-Fons"/>
        <p>Renaud Garcia-Fons<br/><span>2010</span></p>
        </div><div>
        <img src={soul} alt="Soul Square"/>
        <p>Soul Square<br/><span>2016</span></p>
        </div>

    </div>
    <hr/>
    </div>
    */