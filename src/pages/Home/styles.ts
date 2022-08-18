import styled from 'styled-components'

export const Container = styled.div`
  max-width: 864px;
  margin: 0 auto;
  padding: 0 1.5rem;
`

export const ProfileWrapper = styled.header`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 40px;
  border-radius: 10px;
  background-color: ${({ theme }) => theme.colors.profile};
  margin-top: -88px;
  box-shadow: 0 2px 28px rgba(0, 0, 0, 0.2);
`

export const ProfileImg = styled.img`
  width: 148px;
  height: 148px;
  border-radius: 8px;
`

export const ProfileContent = styled.div`
  margin-left: 32px;
  width: 100%;

  header {
    display: flex;
    justify-content: space-between;

    span {
      font-weight: 700;
      font-size: 1.5rem;
      color: ${({ theme }) => theme.colors.title};
    }

    a {
      text-transform: uppercase;
      text-decoration: none;
      font-weight: 700;
      font-size: 0.75rem;
      color: ${({ theme }) => theme.colors.blue};
      padding: 8px;

      :hover {
        text-decoration: underline;
      }
    }
  }

  p {
    margin-top: 8px;
  }

  footer {
    display: flex;
    flex-wrap: wrap;
    gap: 24px;
    margin-top: 24px;
  }
`

export const CardsList = styled.main`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 32px;
  margin: 48px 0;

  @media (max-width: 640px) {
    grid-template-columns: 1fr;
  }
`
