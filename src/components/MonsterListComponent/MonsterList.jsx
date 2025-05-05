import { useState,useEffect } from "react";
import {Link} from 'react-router-dom'
import './MonsterList.css'

export default function MonstersList(){
    const [monsters,setMonsters]=useState([]);
    const [error, setError] = useState(null);
    useEffect(()=>{
        const fetchData=async()=>{
            try{
                const response=await fetch(`https://api.sampleapis.com/monstersanctuary/monsters`);
                if(!response.ok)
                    throw new Error('Failed to fetch data');
                const data=await response.json();
                setMonsters(data);
            }
            catch(err){
                setError(err.message);
            }
        };
        fetchData();
    },[]);
    return (
        <div className="list">
            <h1>Monsters Sanctuary</h1>
            <div className="grid">
                {
                    monsters.map(x=>(
                        <Link to={`/monsters/${x.id}`} key={x.id} className="card">
                            <img src={x.image.split('.png')[0] + '.png'} alt={x.name} />
                            <h2>{x.name}</h2>
                            <div className="elements">
                                {
                                    x.elements.map((y,index)=>(
                                        <img 
                                            key={index} 
                                            src={y.image.split('.png')[0] + '.png'} 
                                            alt={y.type} 
                                            title={y.type} 
                                        />
                                    ))
                                }
                            </div>
                            <button className="learn-more-btn">Learn More</button>
                        </Link>
                    ))
                }
            </div>
        </div>
    );
}