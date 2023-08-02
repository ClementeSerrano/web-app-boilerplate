import { WaitingListRegisterMutationOptions } from '../../api/useWaitingListRegisterMutation';

export type WaitingListFormProps = Pick<
  WaitingListRegisterMutationOptions,
  'onCompleted' | 'onError'
>;

export type WaitingListFormValues = {
  email: '';
  firstname?: '';
  lastname?: '';
  preferredInvestmentAmount?: number;
};
