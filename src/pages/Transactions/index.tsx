import { useEffect, useState } from "react";
import { Header } from "../../components/Header";
import { Summary } from "../../components/Summary";
import { SearchForm } from "./components/SearchForm";
import { PriceHighlight, TransacitonsTable, TransactionsContainer } from "./styles";

interface Transaction {
    id: number;
    description: string;
    type: 'income' | 'outcome';
    price: number;
    category: string;
    createdAt: string;
}
    
export function Transactions() {
    const [transaction, setTransaction] = useState<Transaction[]>([]);
    async function loadTransactions() {
        const response = await fetch('http://localhost:3000/transactions')
        const data = await response.json();

        setTransaction(data)
    }

    useEffect(() => {
        loadTransactions()
    }, [])


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
                        {transaction.map(transaction => {
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