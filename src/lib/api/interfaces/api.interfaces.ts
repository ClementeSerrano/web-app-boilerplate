import { ErrorWithMessage } from '../../interfaces/error.interfaces';

export type ObservableDataState<T = unknown> = {
  data?: T;
  isLoading: boolean;
  isError: boolean;
  error?: ErrorWithMessage;
};

export type ObservableDataOptions<T = unknown> = {
  onCompleted?: (data: T) => void;
  onError?: (error: ErrorWithMessage) => void;
};
