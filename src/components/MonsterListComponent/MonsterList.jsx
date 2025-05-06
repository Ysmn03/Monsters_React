import { useState,useEffect } from "react";
import {Link} from 'react-router-dom'
import './MonsterList.css' 
import defaultImage from '../../assets/images/myimage.png';

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
    const CleanImage=(url)=>{
        if(url?.startsWith('data'))
            return defaultImage;
        return url?.split('.png')[0] + '.png';
    };
    const [page,setPage]=useState(0);

    return (
        <div className="list">
            <h1>Monsters Sanctuary</h1>
            <div className="grid">
                {
                    monsters.slice(page*8, ((page + 1)*8)).map(x=>(
                        <Link to={`/monsters/${x.id}`} key={x.id} className="card">
                            <img src={CleanImage(x.image)} alt={x.name} />
                            <h2>{x.name}</h2>
                            <div className="elements">
                                {
                                    x.elements.map((y,index)=>(
                                        <img 
                                            key={index} 
                                            src={CleanImage(y.image)} 
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
            <div className="pagination">
                <button onClick={() => setPage(page-1)} disabled={page === 0}>
                    Previous
                </button>
                <span> Page {page + 1} </span>
                <button onClick={() => setPage(page+1)} disabled={(page+1) * 8 >= monsters.length}>
                Next
                </button>
            </div>
        </div>
    );
}