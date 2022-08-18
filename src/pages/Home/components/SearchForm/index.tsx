import { useForm } from 'react-hook-form'
import { useData } from '../../../../contexts/DataContext'
import { SearchFormContainer } from './styles'

type Inputs = {
  query: string
}

export function SearchForm() {
  const { loadIssues, issues } = useData()
  const { register, handleSubmit } = useForm<Inputs>()

  const totalIssues = issues.length

  function onSubmit(data: Inputs) {
    loadIssues(data.query)
  }

  return (
    <SearchFormContainer onSubmit={handleSubmit(onSubmit)}>
      <header>
        <h2>Publicações</h2>
        <span>{totalIssues} publicações</span>
      </header>
      <input placeholder="Buscar conteúdo" {...register('query')} />
    </SearchFormContainer>
  )
}
