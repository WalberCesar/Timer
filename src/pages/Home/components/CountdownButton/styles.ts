import styled from 'styled-components'

export const BaseCountdownButton = styled.button`
  width: 100%;
  border: 0;
  padding: 1rem;
  border-radius: 8px;

  display: flex;
  align-items: center;
  justify-content: center;

  gap: 0.5rem;
  font-weight: bold;

  cursor: pointer;

  color: ${({ theme }) => theme['gray-100']};

  transition: background 0.2s;
`

export const StartCountdownButton = styled(BaseCountdownButton)`
  background: ${({ theme }) => theme['green-500']};
  &:hover:not(:disabled) {
    background: ${({ theme }) => theme['green-700']};
  }

  &:disabled {
    opacity: 0.7;
    cursor: not-allowed;
  }
`
export const InterruptCountdownButton = styled(BaseCountdownButton)`
  background: ${({ theme }) => theme['red-500']};
  &:hover {
    background: ${({ theme }) => theme['red-700']};
  }
`
