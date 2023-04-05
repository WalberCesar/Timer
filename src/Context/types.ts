/* eslint-disable no-undef */
import { ReactNode } from 'react'

export interface Cycle {
  id: string
  task: string
  minutesAmount: number
  startDate: Date
  interruptDate?: Date
  finishDate?: Date
}

export interface CycleContentProps {
  activeCycle: Cycle | undefined
  activeCycleId: string | null
  setCycles: React.Dispatch<React.SetStateAction<Cycle[]>>
  InterruptCycle(): void
  CreateNewCycle(minutesAmount: number, task: string): void
  setAmountSecondsPassed: React.Dispatch<React.SetStateAction<number>>
  amountSecondsPassed: number
  setActiveCycleId: React.Dispatch<React.SetStateAction<string | null>>
  cycles: Cycle[]
}

export interface CycleContextProviderProps {
  children: ReactNode
}
