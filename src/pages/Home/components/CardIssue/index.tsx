import ReactMarkdown from 'react-markdown'
import remarkGfm from 'remark-gfm'
import { Issue } from '../../../../contexts/DataContext'
import { dateFormatter } from '../../../../utils/dateFormatter'
import { CardContainer } from './styles'

interface CardIssueProps {
  issue: Issue
}

export function CardIssue({ issue }: CardIssueProps) {
  const abstract = issue.body.substring(0, 100) + ' ...'

  return (
    <CardContainer to={`/issues/${issue.number}`}>
      <header>
        <h1>{issue.title}</h1>
        <span>{dateFormatter(issue.created_at)}</span>
      </header>
      <ReactMarkdown skipHtml={true} remarkPlugins={[remarkGfm]}>
        {abstract}
      </ReactMarkdown>
    </CardContainer>
  )
}
