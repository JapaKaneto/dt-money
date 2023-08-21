import { Header } from "../../components/Header";
import { Summary } from "../../components/Summary";
import { SearchForm } from "./components/SearchForm";
import { TransacitonsTable, TransactionsContainer } from "./styles";

export function Transactions() {
    return (
        <div>
            <Header />
            <Summary />

            <TransactionsContainer>
                <SearchForm />

                <TransacitonsTable>
                    <tbody>
                        <tr>
                            <td width="50%">Desenvolvimento de site</td>
                            <td>R$ 12.000,00</td>
                            <td>Venda</td>
                            <td>13/04/2022</td>
                        </tr>
                        <tr>
                            <td width="50%">Hamburguer</td>
                            <td>-R$ 59,00</td>
                            <td>Alimentação</td>
                            <td>13/04/2022</td>
                        </tr>
                    </tbody>
                </TransacitonsTable>
            </TransactionsContainer>
        </div>
    )
}