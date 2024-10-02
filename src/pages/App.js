import { useState } from "react";
import Input from "../components/Input";
import ItemRepo from "../components/ItemRepo";
import { Container } from "./styles";

import { api } from '../services/api'


function App() {

  const [currentRepo, setCurrentRepo] = useState('')
  const [repos, setRepos] = useState([])

  const handleSearchRepo = async () => {
    const response = await api.get(`repos/${currentRepo}`).catch(error => console.log(error))

    if(response){
      const {data} = response
      const isExist = repos.find(repo => repo.id === data.id)

      if(!isExist){
        setRepos(prev => [...prev, data])
        setCurrentRepo('')
        return
      } else {
        alert('Repositório já listado')
      }
    } else {
      alert('Repositório não encontrado')
    }
  }

  const handleDeleteRepo = (repoId) => {
    let newList = repos.filter(repo => repo.id !== repoId)
    setRepos(newList)
  }

  return (
    <Container>
      <img src="https://cdn-icons-png.flaticon.com/512/25/25231.png" width={72} height={72} alt="github logo"/>
      <Input onClick={handleSearchRepo} value={currentRepo} onChange={(e) => setCurrentRepo(e.target.value)}/>
      {repos.map((repo, index) => <ItemRepo repo={repo} key={index} getRepoId={handleDeleteRepo}/>)}
    </Container>
  );
}

export default App;
