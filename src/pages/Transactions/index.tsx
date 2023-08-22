import { useContext } from "react";
import { Header } from "../../components/Header";
import { Summary } from "../../components/Summary";
import { SearchForm } from "./components/SearchForm";
import { PriceHighlight, TransacitonsTable, TransactionsContainer } from "./styles";
import { TransactionsContext } from "../../contexts/TransactionContext";


    
export function Transactions() {
    const { transactions } = useContext(TransactionsContext);

    // useEffect(()=> {
    //     fetch('http://localhost:3000/transactions')
    //         .then(response => {response.text()
    //         .then(data => {
    //             console.log(data)
    //         })
    //     })
    
    // }, [])

    return (
        <div>
            <Header />
            <Summary />

            <TransactionsContainer>
                <SearchForm />

                <TransacitonsTable>
                    <tbody>
                        {transactions.map(transaction => {
                            return (
                                    <tr key={transaction.id}>
                                        <td width="50%">{transaction.description}</td>
                                        <td>
                                            <PriceHighlight variant={transaction.type}>
                                                {transaction.price}
                                            </PriceHighlight>
                                        </td>
                                        <td>{transaction.category}</td>
                                        <td>
                                            {transaction.createdAt}
                                        </td>
                                    </tr>
                            )
                        })}
                    </tbody>
                </TransacitonsTable>
            </TransactionsContainer>
        </div>
    )
}