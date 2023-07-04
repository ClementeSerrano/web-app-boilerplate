import { WaitingListRegisterMutationOptions } from '../../api/useWaitingListRegisterMutation';

export type WaitingListFormProps = Pick<
  WaitingListRegisterMutationOptions,
  'onCompleted' | 'onError'
>;
