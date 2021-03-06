

import chris from '../media/chris-potter.png';
import tigran from '../media/tigran-hamasaya.png';
import anomalie from '../media/anomalie.jpg';
import bertaut from '../media/bertaut.jpg';
import dooz from '../media/dooz.png';
import foehn from '../media/foehn.jpg';
import garcia from '../media/garcia.jpg';
import glasper from '../media/glasper.jpg';
import glyk from '../media/glyk.jpeg';
import yellowstraps from '../media/yellowstraps.jpg';
import henry from '../media/cory.jpg';

import villeurbanne from '../media/logo-villeurbanne.png'
import lyon from '../media/logo-lyon.jpg'
import rhinojazz from '../media/logo-rhinojazz.jpg'
import va from '../media/logo-va.png'
import insa from '../media/logo-insa.png'
import helloasso from '../media/logo-helloasso.png'
import crous from '../media/logo-crous.jpg'
import cfc22 from '../media/logo-cfc22.png'
import alumni from '../media/logo-alumni.jpg'
import grandlyon from '../media/logo-grandlyon.png'
import jsmusique from '../media/logo-jsmusique.jpg'

const partenaires=[
    {
        name : "villeurbanne",
        img1: villeurbanne,
        link: ""
    },{
        name : "lyon",
        img1: lyon,
        link: ""
    },{
        name : "rhinojazz",
        img1: rhinojazz,
        link: ""
    },{
        name : "va",
        img1: va,
        link: ""
    },{
        name : "insa",
        img1: insa,
        link: ""
    },{
        name : "helloasso",
        img1: helloasso,
        link: ""
    },{
        name : "crous",
        img1: crous,
        link: ""
    },{
        name : "cfc22",
        img1: cfc22,
        link: ""
    },{
        name : "alumni",
        img1: alumni,
        link: ""
    },{
        name : "grandlyon",
        img1: grandlyon,
        link: ""
    },{
        name : "jsmusique",
        img1: jsmusique,
        link: ""
    },
]
/*const data=[
{
    nb : 1, //numéro de repérage pour affichage
    id: 'blast', //adresse url pour affichage
    name: "Blast", //nom affiché
    quote : '"Un Doua de Jazz revient en force cette année avec un premier concert de Blast à l’Espace Tonkin pour démarrer le festival en beauté !"',
    //premier texte
    desc : 'Pierre Horckmans, Guillaume Bertrand et Anne Quilluer, formant un trio aventureux entremêlant jazz, pop et musique électronique sauront vous faire voyager dans un monde fictif, par leurs inspirations venant de la bande dessinée et du théâtre. S’alliant avec le dessinateur Benjamin Flao, ce concert dessiné fera vibrer tous vos sens, chaque musique inspirant le dessinateur sur scène pour créer des oeuvres inédites en direct, et chaque dessin inspirant la musique.',
    //deuxième texte
    img1 : glyk, //image header
    img2 : glyk, //image milieu de texte
    day : '7', 
    month : 'oct.',
    year : '2022',
    hour : '20h00 - 22h00', //la date précise du concert
    place : 'Espace Tonkin', //l'endroit du concert
    nomTarif1 : 'Tarif plein', //tous les tarifs (3 maximum pour l'instant)
    tarif1 : 18,
    nomTarif2 : 'Tarif réduit chômeurs/étudiants',
    tarif2 : 12,
    nomTarif3 : 'Abonnement Espace Tonkin',
    tarif3 : 10,
    billeterie : 'https://www.helloasso.com/associations/centre-leo-lagrange-villeurbanne/evenements/blast?_gl=1%2agg0xrs%2a_ga%2aMTYzNDE1NjAyNi4xNjI0MzAwMDIz%2a_ga_TKC826G3G2%2aMTYzMTg4ODM3My41LjEuMTYzMTg4OTkzOC4w',
    //adresse de la billetterie de ce concert
    duo : false, //TRUE si c'est un concert en 2 parties, false sinon (sert à l'affichage)   
},
    {nb:3,
        id: 'ishkero-eji', 
    quote : 'Quoi de mieux pour commencer sa semaine que le 3ème concert de la 28ème édition de votre festival favori ? Cette fois-ci, Un Doua de Jazz vous emmène à la Rotonde pour un concert jazz dans une ambiance décontractée.',
    desc : 'ISHKERO :\nIshkero est un jeune groupe parisien mêlant jazz moderne, rock et musique Gnawa, au groove puissant et moderne, apparaissant comme l’un des groupes montant des plus captivants de la scène française jazz. Alors laissez-vous séduire par ces jeunes artistes à l’avenir fort prometteur lors de cette soirée à la Rontonde le 11 octobre prochain.\nENSEMBLE JAZZ INSA :\nRetrouvez en première partie un concert de l’Ensemble Jazz de l’INSA Lyon. Explorant les classiques mais aussi les dernières tendances jazz, cet ensemble saura vous mettre en jambe pour le concert d’Ishkero, au coeur du campus de la Doua.',
    img1 : glyk,
    img2 : glyk,
    day : '11',
    month : 'oct.',
    year : '2022',
    hour : '20h00 - 22h00',
    place : 'Theatre Astree',
    nomTarif1 : 'Tarif VA',
    nomTarif1 : 'Tarif plein',
    tarif1 : 18,
    nomTarif2 : 'Tarif réduit chômeurs/étudiants',
    tarif2 : 12,
    nomTarif3 : 'Abonnement Espace Tonkin',
    tarif3 : 10,
    billeterie : 'https://www.',
    tarif1 : 4,
    nomTarif2 : 'Tarif étudiants',
    tarif2 : 5,
    nomTarif3 : 'Tarif plein',
    tarif3 : 8,
    billeterie : 'https://www.helloasso.com/associations/un-doua-de-jazz/evenements/la-rotonde-ishkero-ensemble-jazz-insa',
    duo:true,
    name: 'EJI - ISHKERO',
    nom1: 'ISHKERO',
    nom2: 'EJI'
    },
    {nb:2,
        id: 'mcr', 
        name: 'Gérard Maimone',
    quote : 'Pour le deuxième concert du festival, Un Doua de Jazz vous emmène au Théâtre Astrée pour un concert qui saura satisfaire toutes vos envies jazz.',
    desc : 'Lors de ce concert, nous retrouverons Gérard Maimone et son groupe (Trio MCR) pour une carte blanche. Gérard Maimone a une expérience des plus intrigantes dans le domaine musical : additionnant expériences d’écritures de musiques à images et explorant différents styles. Du rock au tango, des musiques à l’esthétique orientale au jazz, il a su se démarquer parmi les autres en marquant sa musique de sa signature personnelle. Alors laissez-vous imprégner de ses mélodies lors de ce concert le 8 octobre prochain.',
    img1 : glyk,
    img2 : glyk,
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

]*/

const data=[]

const dataAnc=[
    {nb : 11,
        id: 'potter', 
        name: "Chris Potter",
       img1 : chris,
    
    year: '2003',
    edition : '10',
    duo : false,    
    },
    
    {nb : 10,
        id: 'tigran', 
        name: "Tigran Hamasyan",
    img1 : tigran,
    year: '2009',
    edition : '16',
    duo : false,    
    },
    {nb : 9,
        id: 'glasper', 
        name: "Robert Glasper",
    img1 : glasper,
    year: '2014',
    edition : '21',
    duo : false,    
    },
    {nb : 8,
        id: 'henry', 
        name: "Cory Henry",
    img1 : henry,
    year: '2015',
    edition : '22',
    duo : false,    
    },
    {nb : 7,
        id: 'foehn', 
        name: "Foehn Trio",
    img1 : foehn,
    year: '2016',
    edition : '23',
    duo : false,    
    },
    {nb : 6,
        id: 'glyk', 
        name: "Kinga Glyk",
    img1 : glyk,
    year: '2018',
    edition : '25',
    duo : false,    
    },
    {nb : 5,
        id: 'anomalie', 
        name: "Anomalie",
    img1 : anomalie,
    year: '2018',
    edition : '25',
    duo : false,    
    },
    {nb : 4,
        id: 'dooz', 
        name: "Dooz Kawa",
    img1 : dooz,
    year: '2018',
    edition : '25',
    duo : false,    
    },
    {nb : 3,
        id: 'garcia', 
        name: "Nubya Garcia",
    img1 : garcia,
    year: '2019',
    edition : '26',
    duo : false,    
    },
    {nb : 2,
        id: 'yellowstraps', 
        name: "Yellowstraps",
    img1 : yellowstraps,
    year: '2019',
    edition : '26',
    duo : false,    
    },
    {nb : 1,
        id: 'bertaut', 
        name: "Camille Bertaut",
    img1 : bertaut,
    year: '2021',
    edition : '28',
    duo : false,    
    },
    
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

function partenaire(string){
    return partenaires.find(el => el.name===string);
    
}

function partenaireNb(number){
    return partenaires[number];
}

function partenairesSize(){
    return partenaires.length;
}

function donneesSize(){
    return data.length;
}

function donneesAnciennesSize(){
    return dataAnc.length;
}

export {partenaireNb, partenairesSize, partenaire, donnees, donneesNb, donneesAnciennes, donneesAnciennesNb, donneesSize, donneesAnciennesSize};

