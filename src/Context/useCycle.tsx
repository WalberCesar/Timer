import { useContext } from 'react'
import { CycleContext } from './CycleContext'

export function useCycle() {
  const context = useContext(CycleContext)
  return context
}
