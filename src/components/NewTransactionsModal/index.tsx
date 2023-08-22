import * as Dialog from '@radix-ui/react-dialog';
import { CloseButton, Content, Overlay, TransactionsType, TransactionsTypeButton } from './styles';
import { ArrowCircleDown, ArrowCircleUp, X } from 'phosphor-react';
import * as z from 'zod';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';

const newTransactionFormSchema = z.object({
    description: z.string(),
    price: z.number(),
    category: z.string(),
    // type: z.enum(['income', 'outcome']),
})

type NewTransactioFormInputs = z.infer<typeof newTransactionFormSchema>;


export function NewTransactionsModal() {
    const { 
        register, 
        handleSubmit, 
        formState: {isSubmitting}
    } = useForm<NewTransactioFormInputs>({
        resolver: zodResolver(newTransactionFormSchema)
    })

    async function handelCreateNewTransaciton(data: NewTransactioFormInputs) {
        await new Promise(resolve => setTimeout(resolve, 2000))
        console.log(data)
    }

    return (
        <Dialog.Portal>
            <Overlay />
            <Content>
                <Dialog.Title>Nova Transição</Dialog.Title>
                <CloseButton> <X size={24}/> </CloseButton>
                <form onSubmit={handleSubmit(handelCreateNewTransaciton)}>
                    <input 
                        type="text"  
                        placeholder='Descrição' 
                        required
                        {...register('description')}
                    />
                    <input 
                        type="number"  
                        placeholder='Preço' 
                        required
                        {...register('price', { valueAsNumber: true})}
                    />
                    <input
                        type="text"  
                        placeholder='Categoria' 
                        required
                        {...register('category')}
                    />

                    <TransactionsType>
                        <TransactionsTypeButton variant='income' value="income">
                            <ArrowCircleUp size={24} />
                            Entrada
                        </TransactionsTypeButton>
                        <TransactionsTypeButton variant='outcome' value='outcome'>
                            <ArrowCircleDown size={24} />
                            Saída
                        </TransactionsTypeButton>
                    </TransactionsType>

                    <button type='submit' disabled={isSubmitting}>
                        Cadastrar
                    </button>

                </form>

            </Content>
        </Dialog.Portal>
    )
}