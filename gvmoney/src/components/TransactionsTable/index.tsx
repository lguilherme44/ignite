import { Container } from './styles';
import { api } from '../../services/api';
import { useEffect } from 'react';

export function TransactionsTable() {
   useEffect(() => {
      api.get('/transactions').then((response) => {
         console.log(response.data);
      });
   }, []);

   return (
      <Container>
         <table>
            <thead>
               <tr>
                  <th>Titulo</th>
                  <th>Valor</th>
                  <th>Categoria</th>
                  <th>Data</th>
               </tr>
            </thead>
            <tbody>
               <tr>
                  <td className="deposit">Desenvolvimento de websites</td>
                  <td>R$150,00</td>
                  <td>Freelancers</td>
                  <td>10/05/2021</td>
               </tr>
               <tr>
                  <td className="withdraw">Alguel</td>
                  <td>- R$480,00</td>
                  <td>Casa</td>
                  <td>15/05/2021</td>
               </tr>
            </tbody>
         </table>
      </Container>
   );
}
