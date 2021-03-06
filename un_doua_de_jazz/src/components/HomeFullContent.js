

import { NavLink } from 'react-router-dom';
import {donneesNb, donneesSize} from '../data/data.js'

import "./HomeFullContent.css"



function Case(number){
    const data=donneesNb(number);

    if(data.duo===true){
        return(
            <div class="deuxParties">

                <NavLink to={"/home/concert/"+data.id}>
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

                <NavLink to={"/home/concert/"+data.id}>
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

function Table(){

    var children=[];
    for(let i=1;i<=donneesSize();i++){
        children.push(Case(i));
    }
    var retour=(
        <div id="gridProg">
            {children}
        </div>);
        return retour
        
    
}

function HomeFullContent() {
return (
    <div id="homeContent">
        <p id="prog">Programmation 2022</p>
        {Table()}
    </div>
    );
}

export default HomeFullContent;