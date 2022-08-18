import styled from 'styled-components'

export const Container = styled.div`
  max-width: 864px;
  margin: 0 auto;
  padding: 0 1.5rem;
`

export const PostHeader = styled.header`
  padding: 32px;
  background-color: ${({ theme }) => theme.colors.profile};
  border-radius: 10px;
  margin-top: -88px;
  box-shadow: 0 2px 28px rgba(0, 0, 0, 0.2);

  div {
    display: flex;
    justify-content: space-between;

    button,
    a {
      text-transform: uppercase;
      text-decoration: none;
      font-weight: 700;
      font-size: 0.75rem;
      background-color: transparent;
      border: none;
      color: ${({ theme }) => theme.colors.blue};
      padding: 8px;
      cursor: pointer;

      :hover {
        text-decoration: underline;
      }
    }
  }

  h1 {
    margin-top: 12px;
  }

  footer {
    display: flex;
    gap: 32px;
    margin-top: 12px;

    span {
      color: ${({ theme }) => theme.colors.span};
    }
  }
`

export const PostContent = styled.main`
  padding: 40px 32px;
  white-space: pre-wrap;

  p {
    img {
      width: 100%;
    }

    a {
      text-decoration: none;
      color: ${({ theme }) => theme.colors.blue};

      :hover {
        text-decoration: underline;
      }
    }
  }
`
