import { faGithub } from '@fortawesome/free-brands-svg-icons'
import {
  faArrowUpRightFromSquare,
  faBuilding,
  faUserGroup,
} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import { Label } from '../../components/Label'
import { Loading } from '../../components/Loading'
import { useData } from '../../contexts/DataContext'
import { CardIssue } from './components/CardIssue'
import { SearchForm } from './components/SearchForm'
import {
  CardsList,
  Container,
  ProfileContent,
  ProfileImg,
  ProfileWrapper,
} from './styles'

export function Home() {
  const { user, issues, isLoading } = useData()

  return isLoading ? (
    <Loading />
  ) : (
    <Container>
      <ProfileWrapper>
        <ProfileImg src={user.avatar_url} alt="" />
        <ProfileContent>
          <header>
            <span>{user.name}</span>
            <a href={user.html_url} target="_blank" rel="noreferrer noopener">
              Github
              <FontAwesomeIcon
                icon={faArrowUpRightFromSquare}
                style={{ marginLeft: 8 }}
              />
            </a>
          </header>
          <p>{user.bio}</p>
          <footer>
            <Label text={user.login} icon={faGithub} />
            <Label text={user.location} icon={faBuilding} />
            <Label text={user.followers} icon={faUserGroup} />
          </footer>
        </ProfileContent>
      </ProfileWrapper>
      <SearchForm />
      <CardsList>
        {issues.length === 0
          ? 'Nenhuma publicação encontrada'
          : issues.map((issue) => (
              <CardIssue key={issue.number} issue={issue} />
            ))}
      </CardsList>
    </Container>
  )
}
