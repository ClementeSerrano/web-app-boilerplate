import { createContext, ReactNode, useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import { useTheme } from 'styled-components';

import Dialog from '../../components/Dialog/Dialog';
import Button from '../../components/Button/Button';

import {
  AlertsContextValues,
  ShowAlertProps,
} from './AlertsContext.interfaces';
import {
  SnackbarMainContainer,
  SnackbarContentContainer,
  SnackbarTitle,
} from './AlertsContext.styles';
import 'react-toastify/dist/ReactToastify.css';
import './AlertsContext.styles.css';
import CheckCircleIcon from '../../assets/icons/CheckCircleIcon';
import CrossCircleIcon from '../../assets/icons/CrossCircleIcon';
import Typography from '../../components/Typography/Typography';

export const AlertsContext = createContext({} as AlertsContextValues);

export function AlertsProvider({ children }: { children: ReactNode }) {
  const [isAlertOpen, setIsAlertOpen] = useState(false);
  const [alertContent, setAlertContent] = useState<string | ReactNode>('');
  const [alertHeader, setAlertHeader] = useState<string | ReactNode>('');
  const [alertDeclineActionCallback, setAlertDeclineActionCallback] = useState<
    (() => void) | undefined
  >(undefined);

  const theme = useTheme();

  const showAlert = ({
    content,
    header,
    declineActionCallback,
  }: ShowAlertProps) => {
    setIsAlertOpen(true);

    setAlertContent(content);

    setAlertHeader(header);

    if (declineActionCallback)
      setAlertDeclineActionCallback(declineActionCallback);
  };

  const showSuccessSnackbar = ({
    title = 'Success',
    message,
  }: {
    title?: string;
    message: string;
  }) => {
    toast(
      () => (
        <SnackbarMainContainer>
          <CheckCircleIcon
            style={{ marginRight: theme.spacing.sm }}
            color={theme.palette.success.main}
            height={24}
          />

          <SnackbarContentContainer>
            <SnackbarTitle variant="paragraph1" color="level1">
              {title}
            </SnackbarTitle>

            <Typography variant="paragraph2" color="level3">
              {message}
            </Typography>
          </SnackbarContentContainer>
        </SnackbarMainContainer>
      ),
      { className: 'success-snackbar' },
    );
  };

  const showErrorSnackbar = ({
    title = 'Oops',
    message,
  }: {
    title?: string;
    message: string;
  }) => {
    toast(
      () => (
        <SnackbarMainContainer>
          <CrossCircleIcon
            style={{ marginRight: theme.spacing.sm }}
            color={theme.palette.error.main}
            height={24}
          />

          <SnackbarContentContainer>
            <SnackbarTitle variant="paragraph1" color="level1">
              {title}
            </SnackbarTitle>

            <Typography variant="paragraph2" color="level3">
              {message}
            </Typography>
          </SnackbarContentContainer>
        </SnackbarMainContainer>
      ),
      { className: 'error-snackbar' },
    );
  };

  return (
    <AlertsContext.Provider
      value={{ showAlert, showSuccessSnackbar, showErrorSnackbar }}
    >
      {children}

      <ToastContainer
        autoClose={3000}
        position={toast.POSITION.BOTTOM_LEFT}
        hideProgressBar
        theme={theme.mode}
      />

      <Dialog show={isAlertOpen}>
        <Dialog.Header>
          <Dialog.Title>{alertHeader}</Dialog.Title>

          <Dialog.Close onClick={() => setIsAlertOpen(false)} />
        </Dialog.Header>

        <Dialog.Body>{alertContent}</Dialog.Body>

        <Dialog.Footer>
          <Button
            variant="primary"
            onClick={() => {
              setIsAlertOpen(false);

              if (alertDeclineActionCallback) alertDeclineActionCallback();
            }}
          >
            Ok
          </Button>
        </Dialog.Footer>
      </Dialog>
    </AlertsContext.Provider>
  );
}
