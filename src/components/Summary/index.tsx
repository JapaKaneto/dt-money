import { ArrowCircleDown, ArrowCircleUp, CurrencyDollar } from "phosphor-react";
import { SummaryCard, SummaryContainer } from "./styles";
import { useContext } from "react";
import { TransactionsContext } from "../../contexts/TransactionContext";

export function Summary() {
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

    console.log(transactions)
    
    return (
        <SummaryContainer>
            <SummaryCard>
                <header>
                    <span>Entradas</span>
                    <ArrowCircleUp size={32} color="#00B37E" />

                </header>
                <strong>
                    {summary.income}
                </strong>
            </SummaryCard>
            <SummaryCard>
                <header>
                    <span>Saídas</span>
                    <ArrowCircleDown size={32} color="#f76a68" />

                </header>
                <strong>
                    {summary.outecome}
                </strong>
            </SummaryCard>
            <SummaryCard variant={'green'}>
                <header>
                    <span>Total</span>
                    <CurrencyDollar size={32} color="#ffffff" />
                </header>
                <strong>
                    {summary.total}
                </strong>
            </SummaryCard >

        </SummaryContainer>
    )
}