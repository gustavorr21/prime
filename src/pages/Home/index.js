
import {useEffect, useState} from 'react'
import { NavLink } from 'react-router-dom';
import api from '../../services/api'
import '../../pages/Home/home.css'

function Home(){

    const [filmes, setFilme] = useState('')

    useEffect(() =>{
        async function loadFilmes(){
            const response = await api.get("movie/now_playing",{
                params: {
                    api_key: "d27827bbd45a5e389b27fa5b90624883",
                    language: "pt-BR",
			  page: 1,
                }
            })


            setFilme(response.data.results.slice(0,10))
        }

        loadFilmes();

    }, [])

    return(
        <div className="container">
          <div className="lista-filmes">
            {filmes.map((filme) => {
              return(
                <article key={filme.id}>
                  <strong>{filme.title}</strong>
                  <img src={`https://image.tmdb.org/t/p/original/${filme.poster_path}`} alt={filme.title} />
                  <NavLink to={`/filme/${filme.id}`}>Acessar</NavLink>
                </article>
              )
            })}
          </div>
        </div>
      )
}

export default Home