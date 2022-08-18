import { faGithub } from '@fortawesome/free-brands-svg-icons'
import {
  faArrowUpRightFromSquare,
  faCalendarDay,
  faChevronLeft,
  faComment,
} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useCallback, useEffect, useState } from 'react'
import ReactMarkdown from 'react-markdown'
import { useNavigate, useParams } from 'react-router-dom'
import remarkGfm from 'remark-gfm'
import { Label } from '../../components/Label'
import { Loading } from '../../components/Loading'
import { Issue as IIssue } from '../../contexts/DataContext'
import { api } from '../../lib/axios'
import { dateFormatter } from '../../utils/dateFormatter'
import { Container, PostContent, PostHeader } from './styles'

export function Issue() {
  const [issue, setIssue] = useState<IIssue>({} as IIssue)
  const [isLoading, setIsLoading] = useState(true)
  const { number } = useParams()
  const navigate = useNavigate()

  const fetchIssue = useCallback(async () => {
    const response = await api.get(
      `repos/bfukumori/github-blog/issues/${number}`,
    )
    const issueData = response.data
    setIssue(issueData)
    setIsLoading(false)
  }, [number])

  useEffect(() => {
    fetchIssue()
  }, [fetchIssue])

  return isLoading ? (
    <Loading />
  ) : (
    <Container>
      <PostHeader>
        <div>
          <button type="button" onClick={() => navigate(-1)}>
            <FontAwesomeIcon icon={faChevronLeft} style={{ marginRight: 8 }} />
            Voltar
          </button>
          <a href={issue.html_url}>
            Ver no Github
            <FontAwesomeIcon
              icon={faArrowUpRightFromSquare}
              style={{ marginLeft: 8 }}
            />
          </a>
        </div>
        <h1>{issue.title}</h1>
        <footer>
          <Label text={issue.user.login} icon={faGithub} />
          <Label text={dateFormatter(issue.created_at)} icon={faCalendarDay} />
          <Label text={issue.comments} icon={faComment} />
        </footer>
      </PostHeader>
      <PostContent>
        <ReactMarkdown remarkPlugins={[remarkGfm]}>{issue.body}</ReactMarkdown>
      </PostContent>
    </Container>
  )
}
