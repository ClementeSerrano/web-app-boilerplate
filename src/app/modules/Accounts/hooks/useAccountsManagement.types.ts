import { ValueOf } from '../../../../types/general.types';
import { Account, AccountMetadata } from '../accounts.types';

export type AddAccountFunc = (account: Account) => void;

export type DeleteAccountFunc = (
  address: ValueOf<Pick<AccountMetadata, 'address'>>,
) => void;

export type UpdateAccountMetadataFunc = (
  address: ValueOf<Pick<AccountMetadata, 'address'>>,
  data: UpdateAccountMetadataFuncData,
) => void;

export type UpdateAccountMetadataFuncData = Partial<
  Pick<AccountMetadata, 'name'>
>;

export type GetAccountFunc = (
  address: ValueOf<Pick<AccountMetadata, 'address'>>,
) => Account | undefined;
