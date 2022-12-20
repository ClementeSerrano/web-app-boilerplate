import CreditCardIllustration from '../../illustrations/CreditCardIllustration';
import DocumentsIllustration from '../../illustrations/DocumentsIllustration';
import DoneCheckIllustration from '../../illustrations/DoneCheckIllustration';
import EmptyCartIllustration from '../../illustrations/EmptyCartIllustration';
import EmptyInboxIllustration from '../../illustrations/EmptyInboxIllustration';
import ErrorIllustration from '../../illustrations/ErrorIllustration';
import ImagesIllustration from '../../illustrations/ImagesIllustration';
import LocationIllustration from '../../illustrations/LocationIllustration';
import MessagesIllustration from '../../illustrations/MessagesIllustration';
import NoConnectionIllustration from '../../illustrations/NoConnectionIllustration';
import NoSearchResultsIllustration from '../../illustrations/NoSearchResultsIllustration';
import NoTasksIllustration from '../../illustrations/NoTasksIllustration';
import UsersIllustration from '../../illustrations/UsersIllustration';

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
