import { ItemContainer } from "./styles"

export default function ItemRepo({repo, getRepoId}) {

  const handleDelete = () => {
    getRepoId(repo.id)
  }

  return (
    <ItemContainer>
        <div>
          <h3>{repo.name}</h3>
          <span onClick={handleDelete}>🗑️</span>
        </div>
        <p>{repo.full_name}</p>
        <a href={repo.html_url} target="_blank" rel="noreferrer">Ver Repositório</a>
        <hr />
    </ItemContainer>
  )
}