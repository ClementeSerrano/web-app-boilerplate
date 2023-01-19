import { useTheme } from 'styled-components';

import Grid from '../../../../../../components/Grid/Grid';
import Typography from '../../../../../../components/Typography/Typography';
import CheckIcon from '../../../../../../icons/CheckIcon';
import useCurrentAccount from '../../../../hooks/useCurrentAccount';

import { AccountCardContainer, AccountCardAvatar } from './AccountCard.styles';
import { AccountCardProps } from './AccountCard.types';

export default function AccountCard({ account }: AccountCardProps) {
  const [currentAccount] = useCurrentAccount();

  const theme = useTheme();

  return (
    <AccountCardContainer
      key={account.metadata.address}
      direction="row"
      align="center"
      justify="space-between"
    >
      <Grid direction="row" align="center">
        <AccountCardAvatar
          alt={account.metadata.name || `Account ${account.metadata.address}`}
          withInitials
          size="md"
          style={{ marginRight: theme.spacing.xs }}
        />

        <Grid>
          <Typography
            as="h1"
            variant="button"
            style={{ marginBottom: theme.spacing.xxxs }}
          >
            {account.metadata.name}
          </Typography>

          <Typography variant="paragraph1" color="level3">
            {account.metadata.address}
          </Typography>
        </Grid>
      </Grid>

      {currentAccount?.metadata.address === account.metadata.address && (
        <CheckIcon
          format="fill"
          height={24}
          color={theme.palette.secondary.main}
        />
      )}
    </AccountCardContainer>
  );
}
