import UsersIllustration from '../../assets/illustrations/UsersIllustration';
import CreditCardIllustration from '../../assets/illustrations/CreditCardIllustration';
import DocumentsIllustration from '../../assets/illustrations/DocumentsIllustration';
import DoneCheckIllustration from '../../assets/illustrations/DoneCheckIllustration';
import EmptyCartIllustration from '../../assets/illustrations/EmptyCartIllustration';
import EmptyInboxIllustration from '../../assets/illustrations/EmptyInboxIllustration';
import ErrorIllustration from '../../assets/illustrations/ErrorIllustration';
import ImagesIllustration from '../../assets/illustrations/ImagesIllustration';
import LocationIllustration from '../../assets/illustrations/LocationIllustration';
import MessagesIllustration from '../../assets/illustrations/MessagesIllustration';
import NoConnectionIllustration from '../../assets/illustrations/NoConnectionIllustration';
import NoSearchResultsIllustration from '../../assets/illustrations/NoSearchResultsIllustration';
import NoTasksIllustration from '../../assets/illustrations/NoTasksIllustration';

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
