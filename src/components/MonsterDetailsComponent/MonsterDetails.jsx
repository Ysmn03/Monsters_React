import {useEffect,useState} from 'react'
import {useParams} from 'react-router-dom'
import { Link } from 'react-router-dom';
import './MonsterDetails.css'

export default function MonsterDetails(){
    const {id}=useParams();
    const [monster,setMonster]=useState(null);
    const[error,setError]=useState(null);
    useEffect(()=>{
        const fetchData=async()=>{
            try{
                const response=await fetch(
                    `https://api.sampleapis.com/monstersanctuary/monsters/${Number(id)}`
                );
                if(!response.ok)
                    throw new Error('Monster Not Found');
                const data=await response.json();
                console.log('API data:', data);
                setMonster(data);
            }
            catch(err){
                setError(err.message);
            }
        }
        fetchData();
    },[id]);
    return(
    <div className="details">
      <Link to="/" className="back-button">
        ← Back to List
      </Link>
      <div className="header">
        <h1>{monster?.name}</h1>
        <div className='elements'>
            {
                monster?.elements?.map((x,index)=>(
                    <img key={index} src={x.image.split('.png')[0] + '.png'} alt={x.type} title={x.type} />
                ))
            }
        </div>
      </div>
      
      <div className="content">
        <img src={monster?.image.split('.png')[0] + '.png'} alt={monster?.name} />
        
        <div className="stats">
          <h2>Stats</h2>
          <div className="stat-row">
            <span>Health:</span>
            <span>{monster?.stats.health || 'N/A'}</span>
          </div>
          <div className="stat-row">
            <span>Strength:</span>
            <span>{monster?.stats.strength || 'N/A'}</span>
          </div>
          <div className="stat-row">
            <span>Magic:</span>
            <span>{monster?.stats.magic || 'N/A'}</span>
          </div>
          <div className="stat-row">
            <span>Defence:</span>
            <span>{monster?.stats.defence || 'N/A'}</span>
          </div>
          <div className="stat-row">
            <span>Potion:</span>
            <span>{monster?.stats.potion || 'N/A'}</span>
          </div>
          <div className='weakness'>
            <h2>Weakness</h2>
            {
                monster?.weakness?.map((x,index)=>(
                    <img key={index} src={x.image.split('.png')[0] + '.png'} alt={x.type} title={x.type} />
                ))
            }
          </div>
          <div className='resistence'>
            <h2>Resistence</h2>
            {
                monster?.resistence?.map((x,index)=>(
                    <img key={index} src={x.image.split('.png')[0] + '.png'} alt={x.type} title={x.type} />
                ))
            }
          </div>

        </div>
      </div>
    </div>
    )
}
