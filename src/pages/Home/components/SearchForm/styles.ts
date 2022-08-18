import styled from 'styled-components'

export const SearchFormContainer = styled.form`
  margin-top: 72px;

  header {
    display: flex;
    justify-content: space-between;

    h2 {
      font-size: 1.125rem;
      font-weight: 700;
      color: ${({ theme }) => theme.colors.subtitle};
    }

    span {
      font-size: 0.875rem;
      color: ${({ theme }) => theme.colors.span};
    }
  }

  input {
    width: 100%;
    padding: 12px 16px;
    background-color: ${({ theme }) => theme.colors.input};
    color: ${({ theme }) => theme.colors.text};
    border: 1px solid ${({ theme }) => theme.colors.border};
    border-radius: 8px;
    margin-top: 12px;

    &::placeholder {
      color: ${({ theme }) => theme.colors.label};
    }
  }
`
