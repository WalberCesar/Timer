import { useCycle } from '../../Context/useCycle'
import { HistoryContainer, HistoryList, Status } from './styles'
import { differenceInMinutes } from 'date-fns'

export function History() {
  const { cycles, amountSecondsPassed } = useCycle()

  return (
    <HistoryContainer>
      <h1>Historico</h1>

      <HistoryList>
        <table>
          <thead>
            <tr>
              <th>Tarefa</th>
              <th>Duração</th>
              <th>Início</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Tarefa</td>
              <td>20 minutos</td>
              <td>Há 2 meses</td>
              <td>
                <Status statusColor="green">Concluido</Status>
              </td>
            </tr>

            {cycles.map((cycle) => {
              const taskTime = cycle.finishDate
                ? differenceInMinutes(cycle.finishDate!, cycle.startDate)
                : cycle.interruptDate
                ? differenceInMinutes(cycle.interruptDate!, cycle.startDate)
                : amountSecondsPassed - cycle.minutesAmount

              return (
                <tr key={cycle.id}>
                  <td>{cycle.task}</td>
                  <td>
                    {taskTime > 1
                      ? `${taskTime} minutos`
                      : `${taskTime} minuto`}
                  </td>
                  <td>Há 2 meses</td>
                  <td>
                    {cycle.finishDate ? (
                      <Status statusColor="green">Concluido</Status>
                    ) : cycle.interruptDate ? (
                      <Status statusColor="red">interrompido</Status>
                    ) : (
                      <Status statusColor="yellow">Em andamento</Status>
                    )}
                  </td>
                </tr>
              )
            })}
          </tbody>
        </table>
      </HistoryList>
    </HistoryContainer>
  )
}
