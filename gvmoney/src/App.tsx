import { useState } from 'react';
import { Dashboard } from './components/Dashboard';
import { Header } from './components/Header';
import { GlobalStyle } from './styles/global';
import { NewTransactionModal } from './components/NewTransactionModal';

export function App() {
   const [isNewTransactionModalOpen, SetIsNewTransactionModalOpen] =
      useState(false);

   function handleOpenNewTransactionModal() {
      SetIsNewTransactionModalOpen(true);
   }

   function handleCloseNewTransactionModal() {
      SetIsNewTransactionModalOpen(false);
   }

   return (
      <>
         <Header onOpenNewTransactionModal={handleOpenNewTransactionModal} />
         <Dashboard />

         <NewTransactionModal
            isOpen={isNewTransactionModalOpen}
            onRequestClose={handleCloseNewTransactionModal}
         ></NewTransactionModal>
         <GlobalStyle />
      </>
   );
}
