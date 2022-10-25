import { Link } from 'react-router-dom'
import styled from 'styled-components'

export const CardContainer = styled(Link)`
  height: auto;
  padding: 32px;
  background-color: ${({ theme }) => theme.colors.post};
  border-radius: 10px;
  border: 2px solid transparent;
  cursor: pointer;
  text-decoration: none;
  color: ${({ theme }) => theme.colors.text};
  white-space: pre-wrap;
  overflow: hidden;

  :hover {
    border-color: ${({ theme }) => theme.colors.label};
  }

  header {
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    gap: 16px;
    margin-bottom: 20px;

    h1 {
      font-weight: 700;
      font-size: 1.25rem;
      color: ${({ theme }) => theme.colors.title};
      max-width: 230px;
    }

    span {
      font-size: 0.875rem;
      color: ${({ theme }) => theme.colors.span};
    }
  }
`
