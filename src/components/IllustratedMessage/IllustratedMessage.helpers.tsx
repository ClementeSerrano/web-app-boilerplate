import UsersIllustration from '../../lib/assets/illustrations/UsersIllustration';
import CreditCardIllustration from '../../lib/assets/illustrations/CreditCardIllustration';
import DocumentsIllustration from '../../lib/assets/illustrations/DocumentsIllustration';
import DoneCheckIllustration from '../../lib/assets/illustrations/DoneCheckIllustration';
import EmptyCartIllustration from '../../lib/assets/illustrations/EmptyCartIllustration';
import EmptyInboxIllustration from '../../lib/assets/illustrations/EmptyInboxIllustration';
import ErrorIllustration from '../../lib/assets/illustrations/ErrorIllustration';
import ImagesIllustration from '../../lib/assets/illustrations/ImagesIllustration';
import LocationIllustration from '../../lib/assets/illustrations/LocationIllustration';
import MessagesIllustration from '../../lib/assets/illustrations/MessagesIllustration';
import NoConnectionIllustration from '../../lib/assets/illustrations/NoConnectionIllustration';
import NoSearchResultsIllustration from '../../lib/assets/illustrations/NoSearchResultsIllustration';
import NoTasksIllustration from '../../lib/assets/illustrations/NoTasksIllustration';

import {
  IllustratedMessageOptions,
  IllustrationVariant,
} from './IllustratedMessage.types';

export function renderIllustration(
  variant: IllustrationVariant,
  options?: IllustratedMessageOptions,
) {
  switch (variant) {
    case 'creditCard':
      return <CreditCardIllustration {...options} />;

    case 'documents':
      return <DocumentsIllustration {...options} />;

    case 'doneCheck':
      return <DoneCheckIllustration {...options} />;

    case 'emptyCart':
      return <EmptyCartIllustration {...options} />;

    case 'emptyInbox':
      return <EmptyInboxIllustration {...options} />;

    case 'error':
      return <ErrorIllustration {...options} />;

    case 'images':
      return <ImagesIllustration {...options} />;

    case 'location':
      return <LocationIllustration {...options} />;

    case 'messages':
      return <MessagesIllustration {...options} />;

    case 'noConnection':
      return <NoConnectionIllustration {...options} />;

    case 'noSearchResults':
      return <NoSearchResultsIllustration {...options} />;

    case 'noTasks':
      return <NoTasksIllustration {...options} />;

    case 'users':
      return <UsersIllustration {...options} />;

    default:
      return null;
  }
}
