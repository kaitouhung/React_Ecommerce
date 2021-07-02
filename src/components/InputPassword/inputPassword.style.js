import styled from 'styled-components'

export const FormControl = styled.div`
  overflow: hidden;
  border: 1px solid rgba(0, 0, 0, 0.14);
  box-shadow: inset 0 2px 0 rgb(0 0 0 /2%);
  border-color: ${({ focus }) => (focus ? 'rgba(0,0,0,0.54)' : '')};
  border-radius: 2px;
  display: flex;
  height: 4rem;
  input {
    outline: none;
    border: 0;
    padding: 1.2rem;
    flex-grow: 1;
  }
  button {
    padding: 0 1.5rem;
    flex-shrink: 0;
    background: transparent;
    outline: none;
    border: none;
    display: flex;
    justify-items: center;
    align-items: center;
    svg {
      width: 2em;
    }
  }
`
