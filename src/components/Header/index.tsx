import { HeaderContainer, HeaderContent, NewTransactionButton } from './styles'
import * as Dialog from '@radix-ui/react-dialog'

import logoImg from '../../assets/logo.svg'
import { NewTransactionsModal } from '../NewTransactionsModal'

export function Header() {
  return (
    <HeaderContainer>
      <HeaderContent>
        <img src={logoImg} alt="" />
        <Dialog.Root>
          {/* O asChild está avisando para HTML que não precisa criar um button e sim utilizar o Button filho */}
          <Dialog.Trigger asChild>
            <NewTransactionButton>Nova Transição</NewTransactionButton>
          </Dialog.Trigger>

          <NewTransactionsModal />
        </Dialog.Root>
      </HeaderContent>
    </HeaderContainer>
  )
}
