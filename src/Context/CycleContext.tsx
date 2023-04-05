/* eslint-disable no-undef */
import { createContext, useState } from 'react'
import { Cycle, CycleContentProps, CycleContextProviderProps } from './types'

export const CycleContext = createContext({} as CycleContentProps)

export function CycleContextProvider({ children }: CycleContextProviderProps) {
  const [cycles, setCycles] = useState<Cycle[]>([])
  const [activeCycleId, setActiveCycleId] = useState<string | null>(null)
  const [amountSecondsPassed, setAmountSecondsPassed] = useState(0)
  const activeCycle = cycles.find((cycle) => cycle.id === activeCycleId)

  function CreateNewCycle(minutesAmount: number, task: string) {
    const id = String(new Date().getTime())

    const newCycle: Cycle = {
      id,
      minutesAmount,
      task,
      startDate: new Date(),
    }

    setActiveCycleId(id)

    setCycles((state) => [...state, newCycle])
    setAmountSecondsPassed(0)
  }

  function InterruptCycle() {
    setCycles((state) =>
      state.map((cycle) => {
        if (cycle.id === activeCycleId) {
          return { ...cycle, interruptDate: new Date() }
        } else {
          return cycle
        }
      }),
    )

    setActiveCycleId(null)
  }

  return (
    <CycleContext.Provider
      value={{
        cycles,
        setActiveCycleId,
        setAmountSecondsPassed,
        activeCycle,
        activeCycleId,
        setCycles,
        InterruptCycle,
        CreateNewCycle,
        amountSecondsPassed,
      }}
    >
      {children}
    </CycleContext.Provider>
  )
}
