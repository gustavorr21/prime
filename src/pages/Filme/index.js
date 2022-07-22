import { useEffect, useState } from 'react';
import {useParams} from 'react-router-dom'
import api from '../../services/api'
import Loading from '../Loading/loading';
import './filme-info.css';

function Filme(){

    const [filme , setFilme] = useState([])
    const [loading , setLoading] = useState(true)
    const {id} = useParams();

    useEffect(() => {
        async function loadFilme(){
            await api.get(`/movie/${id}`,{
                params: {
                    api_key: "d27827bbd45a5e389b27fa5b90624883",
                    language: "pt-BR",
                }
            }).then((response) => {
                setFilme(response.data);
                setLoading(false);
            })
        }

        loadFilme();
    },[id])

    if(loading){
        return (
            <div>
            <Loading title="Aguarde o Filme ser carregado"/>
        </div>
        )
    }


    return(
        <div className="filme-info">
            <h1>{filme.title}</h1>
            <img src={`http://image.tmdb.org/t/p/original/${filme.backdrop_path}`} alt={filme.title}/>

            <h3>Sinopse</h3>
            <span>{filme.overview}</span>

            <strong>Avaliação: {filme.vote_average} / 10</strong>
                <div className="area-buttons">
            <button>Salvar</button>
            <button>
            <a href="#">
                Trailer
            </a>
            </button>
        </div>
        </div>
    )
}

export default Filme