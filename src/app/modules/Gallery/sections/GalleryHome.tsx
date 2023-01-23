import { useTheme } from 'styled-components';

import Grid from '../../../components/Grid/Grid';
import SectionContainer from '../../../components/SectionContainer/SectionContainer';
import Typography from '../../../components/Typography/Typography';
import ComingSoonForm from '../components/ComingSoonForm/ComingSoonForm';

/**
 * Gallery module home section.
 */
export default function GalleryHome() {
  const theme = useTheme();

  return (
    <SectionContainer>
      <Typography
        as="h1"
        variant="title1"
        style={{ marginBottom: theme.spacing.md, textAlign: 'center' }}
      >
        Coming very soon.
      </Typography>

      <Typography as="h2" variant="title4" style={{ textAlign: 'center' }}>
        Web3 for independent creators.
      </Typography>

      <ComingSoonForm />

      <Grid as="footer" style={{ marginTop: 24 }}>
        <Typography
          as="legend"
          variant="paragraph1"
          color="level3"
          style={{ textAlign: 'center' }}
        >
          Notify me when the platform is launched
        </Typography>
      </Grid>
    </SectionContainer>
  );
}
