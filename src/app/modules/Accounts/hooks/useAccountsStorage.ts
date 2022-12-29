import useLocalStorage from '../../../hooks/useLocalStorage';

export default function useAccountsStorage() {
  const [accountsStorage, setAccountsStorage] = useLocalStorage('accounts', []);

  return {
    accountsStorage,
    setAccountsStorage,
  };
}

// return {
//     status,
//     error,
//     getApplications,
//     addApplication,
//     deleteApplication,
//   };
