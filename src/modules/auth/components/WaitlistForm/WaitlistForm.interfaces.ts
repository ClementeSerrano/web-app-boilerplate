import { ApolloError } from '@apollo/client';

export type WaitlistFormProps = {
  onCompleted?: () => void;
  onError?: (error: ApolloError) => void;
};

export type WaitlistFormValues = {
  email: string;
  firstname?: string;
  lastname?: string;
  companyName?: string;
};
