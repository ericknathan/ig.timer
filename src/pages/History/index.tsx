import { formatDistanceToNow } from 'date-fns';
import ptBR from 'date-fns/locale/pt-BR';

import { useCycles } from '../../contexts/CyclesContext';
import { HistoryContainer, HistoryList, Status } from './styles';

export function History() {
  const { cycleList } = useCycles();

  return (
    <HistoryContainer>
      <h1>Meu histórico</h1>

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
            {cycleList.map((cycle) => (
              <tr key={cycle.id}>
                <td>{cycle.task}</td>
                <td>{cycle.minutesAmount} minutos</td>
                <td>
                  {formatDistanceToNow(new Date(cycle.startDate), {
                    addSuffix: true,
                    locale: ptBR,
                  })}
                </td>
                <td>
                  {cycle.finishedDate && (
                    <Status status="completed">Concluído</Status>
                  )}
                  {cycle.interruptedDate && (
                    <Status status="interrupted">Interrompido</Status>
                  )}
                  {!cycle.finishedDate && !cycle.interruptedDate && (
                    <Status status="pending">Em andamento</Status>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </HistoryList>
    </HistoryContainer>
  );
}
