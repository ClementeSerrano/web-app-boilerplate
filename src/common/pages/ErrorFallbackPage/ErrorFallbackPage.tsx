import { useRouteError } from 'react-router-dom';

import FallbackComponent from '../../components/FallbackPage/FallbackComponent';

export default function ErrorFallbackPage() {
  const error: any = useRouteError();

  return (
    <FallbackComponent
      type="error"
      title="Ooops!"
      description={`Sorry, an unexpected error has occured: ${
        error.statusText || error.message
      }`}
    />
  );
}
