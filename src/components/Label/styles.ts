import styled from 'styled-components'

export const LabelContainer = styled.div`
  display: flex;
  align-items: center;
  color: ${({ theme }) => theme.colors.label};

  span {
    margin-left: 8px;
    color: ${({ theme }) => theme.colors.subtitle};
  }
`
