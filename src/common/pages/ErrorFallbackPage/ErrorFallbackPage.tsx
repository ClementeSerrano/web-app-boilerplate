import { useRouteError } from 'react-router-dom';

import FallbackScreen from '../../components/FallbackPage/FallbackPage';

export default function ErrorFallbackPage() {
  const error: any = useRouteError();

  return (
    <FallbackScreen
      type="error"
      title="Ooops!"
      description={`Sorry, an unexpected error has occured: ${
        error.statusText || error.message
      }`}
    />
  );
}
