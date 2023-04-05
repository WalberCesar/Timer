import { HistoryContainer, HistoryList, Status } from './styles'
import { formatDistanceToNow } from 'date-fns'
import ptBR from 'date-fns/locale/pt-BR'
import { Cycle } from '../../Context/types'

export function History() {
  const data = localStorage.getItem('@ignite-timer:cycles_history')
  const responseCycle = data && JSON.parse(data)

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
            {responseCycle &&
              responseCycle.map((cycle: Cycle) => {
                const distanceTaskStartTimeToNow = formatDistanceToNow(
                  new Date(cycle.startDate),
                  {
                    addSuffix: true,
                    locale: ptBR,
                  },
                )

                return (
                  <tr key={cycle.id}>
                    <td>{cycle.task}</td>
                    <td>
                      {cycle.minutesAmount > 1
                        ? `${cycle.minutesAmount} minutos`
                        : `${cycle.minutesAmount} minuto`}
                    </td>
                    <td>{distanceTaskStartTimeToNow}</td>
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
