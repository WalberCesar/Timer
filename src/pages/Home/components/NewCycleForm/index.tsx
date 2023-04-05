import { FormContainer, MinutesAmountInput, TaskInput } from './styles'

import { useCycle } from '../../../../Context/useCycle'
import { useFormContext } from 'react-hook-form'

export function NewCycleForm() {
  const { activeCycle } = useCycle()
  const { register } = useFormContext()

  return (
    <FormContainer>
      <label htmlFor="task">Vou trabalhar em</label>
      <TaskInput
        placeholder="Dê um nome para seu projeto"
        id="task"
        list="task-suggestions"
        disabled={!!activeCycle}
        {...register('task')}
      />

      <datalist id="task-suggestions">
        <option>Projeto 1</option>
        <option>Projeto 2</option>
        <option>Projeto 3</option>
        <option>Projeto 4</option>
      </datalist>

      <label htmlFor="minutesAmount">Durante</label>
      <MinutesAmountInput
        type="number"
        id="minutesAmount"
        placeholder="00"
        step={5}
        min={1}
        max={60}
        disabled={!!activeCycle}
        {...register('minutesAmount', { valueAsNumber: true })}
      />

      <span>minutos.</span>
    </FormContainer>
  )
}
