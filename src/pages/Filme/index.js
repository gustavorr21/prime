import { useEffect, useState } from 'react';
import {useParams,useNavigate } from 'react-router-dom'
import api from '../../services/api'
import Loading from '../Loading/loading';
import './filme-info.css';
import { toast } from 'react-toastify';

function Filme(){

    const [filme , setFilme] = useState([])
    const [loading , setLoading] = useState(true)
    const {id} = useParams();
    const navigate = useNavigate();

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
            }).catch(()=>{
                navigate('/', {replace:true})
                return;
            })
        }

        loadFilme();
    },[navigate, id])


    function salvarFilme(){
        const minhaLista = localStorage.getItem('@primeflix')

        let filmesSalvos = JSON.parse(minhaLista) || []

        const hasFilme = filmesSalvos.some((filmesalvo)=> filmesalvo.id === filme.id)

        if(hasFilme) {
            toast.warn('Este filme ja esta na sua lista')
            return;
        }

        filmesSalvos.push(filme)
        localStorage.setItem('@primeflix',JSON.stringify(filmesSalvos));
        toast.success('Filme salvo com sucesso')
    }

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
            <button onClick={salvarFilme}>Salvar</button>
            <button>
            <a target="blank" rel="external" href={`https://youtube.com/results?search_query=${filme.title}`}>
                Trailer
            </a>
            </button>
        </div>
        </div>
    )
}

export default Filme