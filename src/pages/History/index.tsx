import { HistoryContainer, HistoryList, Status } from './styles';

export function History() {
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
            <tr>
              <td>Conserto de débitos técnicos</td>
              <td>25 minutos</td>
              <td>Há cerca de 2 meses</td>
              <td>
                <Status status="pending">Em andamento</Status>
              </td>
            </tr>
            <tr>
              <td>Ajustar o meu Design System</td>
              <td>25 minutos</td>
              <td>Há cerca de 1 mês</td>
              <td>
                <Status status="interrupted">Interrompido</Status>
              </td>
            </tr>
            <tr>
              <td>Conserto de débitos técnicos</td>
              <td>25 minutos</td>
              <td>Há cerca de 20 dias</td>
              <td>
                <Status status="pending">Em andamento</Status>
              </td>
            </tr>
            <tr>
              <td>Ajustar o meu Design System</td>
              <td>25 minutos</td>
              <td>Há cerca de 3 dias</td>
              <td>
                <Status status="completed">Concluído</Status>
              </td>
            </tr>
          </tbody>
        </table>
      </HistoryList>
    </HistoryContainer>
  );
}
