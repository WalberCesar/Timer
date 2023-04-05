import { HandPalm, Play } from 'phosphor-react'
import { InterruptCountdownButton, StartCountdownButton } from './styles'
import { useCycle } from '../../../../Context/useCycle'

interface CountdownButtonProps {
  isSubmitDisabled: boolean
}

export function CountdownButton({ isSubmitDisabled }: CountdownButtonProps) {
  const { activeCycle, InterruptCycle } = useCycle()

  function handleInterruptCycle() {
    InterruptCycle()
  }

  return (
    <>
      {!activeCycle ? (
        <StartCountdownButton disabled={isSubmitDisabled} type="submit">
          <Play />
          Começar
        </StartCountdownButton>
      ) : (
        <InterruptCountdownButton onClick={handleInterruptCycle}>
          <HandPalm />
          Interromper
        </InterruptCountdownButton>
      )}
    </>
  )
}
