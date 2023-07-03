import { ReactNode } from 'react';

export type AlertsContextValues = {
  showAlert: (_: ShowAlertProps) => void;
  showSuccessSnackbar: (_: { title?: string; message: string }) => void;
  showErrorSnackbar: (_: { title?: string; message: string }) => void;
};

export type ShowAlertProps = {
  header: string | ReactNode;
  content: string | ReactNode;
  declineActionCallback?: () => void;
};
