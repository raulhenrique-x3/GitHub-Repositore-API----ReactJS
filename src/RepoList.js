import React, { useEffect, useState } from "react";


function RepoList(){

    const [repositories, setRepositories] = useState([])

    useEffect(()=>{
        fetch('https://api.github.com/users/raulhenrique-x3/repos')
        .then((response => response.json()))
        .then((data => {
        setRepositories(data)
        }))
    }, [])

    return(
        <section className='sectOne'>
        <ul>
            {repositories.map(repo =>{
            return (
                <div className='teste'>
                <li key={repo.full_name}>
                    <h2>Nome do repositório:</h2>
                </li><p>{repo.full_name}</p>

                <li>
                    <h3>Data de criação:</h3>
                </li><p>{repo.created_at}</p>

                <li>
                    <h3>URL:</h3>
                </li><p>{repo.url}</p>

                <li>
                    <h3>Descrição:</h3>
                </li><p>{repo.description}</p>
                <br/>
                <hr/>
                </div>
            
            )
            })}
        </ul>
        </section>
    )
}

export default RepoList