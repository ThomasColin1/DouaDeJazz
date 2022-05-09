
import Header from "./Header.js"
import disc from "../media/headerDiscComp.jpg";

import {donneesNb, donneesAnciennesNb} from '../data/data.js';
import "./Artistes.css"
import { NavLink } from 'react-router-dom';

function ArtistesActuels(number){
    const data=donneesNb(number);

    if(data.duo===true){
        return(
            <div class="deuxParties">

                <NavLink to={"/artistes/concert/"+data.id} style={{ textDecoration: 'none' }}>
                    <div class="img">
                        <img src={data.img1} alt={data.nom1}/>
                        <div class="vl"/>
                        <img src={data.img2} alt={data.nom2}/>
                        <p class="date"><span>{data.day}</span><br/>{data.month}</p>

                        <p class="name"><span class="partie">Partie 1 - </span>{data.nom1}</p>
                        <p class="name"><span class="partie">Partie 2 - </span>{data.nom2}</p>
                    </div>
                    
                </NavLink>
            </div>
        );
    }else{
        return(
        <div class="unePartie">

                <NavLink to={"/artistes/concert/"+data.id} style={{ textDecoration: 'none' }}>
                    <div class="img">
                        <img src={data.img1} alt={data.name}/>
                        <p class="date"><span>{data.day}</span><br/>{data.month}</p>

                        <p class="name">{data.name}</p>
                    </div>
                    
                </NavLink>
            </div>
        );
    }
}

function ArtistesAnciens(number){
    const data=donneesAnciennesNb(number);

    if(data.duo===true){
        return(
            <div class="deuxParties">
                    <div class="img">
                        <img src={data.img1} alt={data.nom1}/>

                        <p class="name">{data.nom1}</p>
                        <p class="year">{data.year}</p>
                    </div>
            </div>
        );
    }else{
        return(
        <div class="unePartie">
                    <div class="img">
                        <img src={data.img1} alt={data.name}/>
                        
                        <p class="name">{data.name}</p>
                        <p class="year">{data.year}</p>
                    </div>
            </div>
        );
    }
}

function Artistes() {
return (
    <div id="artistes">
    
    <div id="headerArtistes">
        <img src={disc} alt="logo disque UnDouaDeJazz" id="imgDisc"/>
        <p>NOS <span>ARTISTES</span></p>
    </div>

    <Header />
    <hr/>
    <h1>Nos Artistes 2022
    </h1>
    <div id="artistesActGrid" >
            {ArtistesActuels(1)}
            {ArtistesActuels(2)}
            {ArtistesActuels(3)}
            {ArtistesActuels(1)}
            {ArtistesActuels(2)}
            {ArtistesActuels(3)}

    </div>
    <hr class="inter"/>
    <h1>Memories
    </h1>
    <div id="artistesGrid" >
            {ArtistesAnciens(1)}
            {ArtistesAnciens(2)}
            {ArtistesAnciens(3)}
            {ArtistesAnciens(4)}
            {ArtistesAnciens(5)}
            {ArtistesAnciens(6)}

    </div>
    <hr/>
    </div>
);
}

export default Artistes;