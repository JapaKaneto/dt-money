import { useContext } from "react";
import { TransactionsContext } from "../contexts/TransactionContext";

export function useSummary() {
        const { transactions } = useContext(TransactionsContext);

        // {income: 0 , outecome:, total:0} => Vou precisar colocar esse valores no reduce.
        // Por causa disso iremos utilizar o reduce.

        const summary = transactions.reduce(
            (acc, transaction ) => {
                if (transaction.type == 'income'){
                    acc.income += transaction.price;
                    acc.total += transaction.price;
                } else {
                    acc.outecome += transaction.price;
                    acc.total -= transaction.price
                }
                return acc;
            },
            {
                income: 0 , 
                outecome: 0,
                total:0
            }
        )

        return summary;
  
}