import styled from 'styled-components'
export const Container = styled.header`
  padding: 0 123px;
  width: 100%;
  height: 116px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 64px;

  border-bottom: 1px solid ${({ theme }) => theme.COLORS.GRAY_500};

  > h2 {
    font-size: 24px;
    color: ${({ theme }) => theme.COLORS.PINK};
  }

  grid-area: header;
`
export const Profile = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  gap: 10px;

  > div {
    width: 125px;
    display: flex;
    flex-direction: column;
    align-items: flex-end;

    strong {
      font-size: 14px;
      line-height: 18px;
    }
  }

  > img {
    height: 64px;
    width: 64px;
    border-radius: 50%;
  }
`
export const Logout = styled.button`
  background: none;
  border: none;
  width: fit-content;
  color: ${({ theme }) => theme.COLORS.GRAY_300};

  font-size: 14px;
`