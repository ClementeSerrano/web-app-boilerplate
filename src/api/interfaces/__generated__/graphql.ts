/* eslint-disable */
import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string; }
  String: { input: string; output: string; }
  Boolean: { input: boolean; output: boolean; }
  Int: { input: number; output: number; }
  Float: { input: number; output: number; }
  /** A date-time string at UTC, such as 2019-12-03T09:54:33Z, compliant with the date-time format. */
  DateTime: { input: any; output: any; }
};

export enum ActivityChatType {
  Bars = 'bars',
  Culture = 'culture',
  Parks = 'parks',
  Restaurants = 'restaurants',
  Shopping = 'shopping',
  SurpriseMe = 'surpriseMe'
}

/** auth */
export type Auth = {
  __typename?: 'Auth';
  accessToken: Scalars['String']['output'];
};

/** Auth profile */
export type AuthProfile = {
  __typename?: 'AuthProfile';
  _id: Scalars['ID']['output'];
  authType: AuthType;
  avatar?: Maybe<Scalars['String']['output']>;
  createdAt: Scalars['DateTime']['output'];
  email?: Maybe<Scalars['String']['output']>;
  firstname?: Maybe<Scalars['String']['output']>;
  lastname?: Maybe<Scalars['String']['output']>;
  oauthId?: Maybe<Scalars['ID']['output']>;
  preferences?: Maybe<Array<Scalars['String']['output']>>;
  preferredInvestmentAmount?: Maybe<Scalars['Int']['output']>;
  updatedAt: Scalars['DateTime']['output'];
  userId: Scalars['String']['output'];
  username: Scalars['String']['output'];
};

export enum AuthType {
  Anonymous = 'anonymous',
  Native = 'native',
  Oauth2 = 'oauth2'
}

/** Conversation object type. */
export type Conversation = {
  __typename?: 'Conversation';
  _id: Scalars['ID']['output'];
  createdAt: Scalars['DateTime']['output'];
  messages: Array<Message>;
  updatedAt: Scalars['DateTime']['output'];
  user: User;
};

export enum ConversationUserRole {
  Assistant = 'assistant',
  System = 'system',
  User = 'user'
}

export type LocationInput = {
  altitude?: InputMaybe<Scalars['Float']['input']>;
  latitude: Scalars['Float']['input'];
  longitude: Scalars['Float']['input'];
};

/** Message object type. */
export type Message = {
  __typename?: 'Message';
  _id: Scalars['ID']['output'];
  content: Scalars['String']['output'];
  createdAt: Scalars['DateTime']['output'];
  metadata?: Maybe<MessageMetadata>;
  role: ConversationUserRole;
  updatedAt: Scalars['DateTime']['output'];
};

/** Message metadata object type. */
export type MessageMetadata = {
  __typename?: 'MessageMetadata';
  places?: Maybe<Array<Place>>;
};

export type Mutation = {
  __typename?: 'Mutation';
  activityChat: Conversation;
  anonymousRegister: Auth;
  chat: Conversation;
  createUser: User;
  oauthRegister: Auth;
  waitingListRegister: Auth;
};


export type MutationActivityChatArgs = {
  activityType: ActivityChatType;
  conversationId?: InputMaybe<Scalars['String']['input']>;
  location?: InputMaybe<LocationInput>;
  userId: Scalars['String']['input'];
};


export type MutationChatArgs = {
  conversationId?: InputMaybe<Scalars['String']['input']>;
  location?: InputMaybe<LocationInput>;
  prompt: Scalars['String']['input'];
  userId: Scalars['String']['input'];
};


export type MutationCreateUserArgs = {
  firstname?: InputMaybe<Scalars['String']['input']>;
  lastname?: InputMaybe<Scalars['String']['input']>;
  password?: InputMaybe<Scalars['String']['input']>;
  preferredInvestmentAmount?: InputMaybe<Scalars['Int']['input']>;
  username: Scalars['String']['input'];
};


export type MutationWaitingListRegisterArgs = {
  email: Scalars['String']['input'];
  firstname?: InputMaybe<Scalars['String']['input']>;
  lastname?: InputMaybe<Scalars['String']['input']>;
  preferredInvestmentAmount?: InputMaybe<Scalars['Int']['input']>;
};

/** Place object type. */
export type Place = {
  __typename?: 'Place';
  mapsUrl?: Maybe<Scalars['String']['output']>;
  name: Scalars['String']['output'];
};

export type Query = {
  __typename?: 'Query';
  conversation: Conversation;
  conversations: Array<Conversation>;
  profile: AuthProfile;
  user: User;
  users: Array<User>;
};


export type QueryConversationArgs = {
  _id: Scalars['String']['input'];
};


export type QueryConversationsArgs = {
  title?: InputMaybe<Scalars['String']['input']>;
  userId?: InputMaybe<Scalars['String']['input']>;
};


export type QueryUserArgs = {
  firstname?: InputMaybe<Scalars['String']['input']>;
  lastname?: InputMaybe<Scalars['String']['input']>;
  username?: InputMaybe<Scalars['String']['input']>;
};

/** User object type. */
export type User = {
  __typename?: 'User';
  _id: Scalars['ID']['output'];
  authType: AuthType;
  avatar?: Maybe<Scalars['String']['output']>;
  createdAt: Scalars['DateTime']['output'];
  email?: Maybe<Scalars['String']['output']>;
  firstname?: Maybe<Scalars['String']['output']>;
  lastname?: Maybe<Scalars['String']['output']>;
  oauthId?: Maybe<Scalars['ID']['output']>;
  preferences?: Maybe<Array<Scalars['String']['output']>>;
  preferredInvestmentAmount?: Maybe<Scalars['Int']['output']>;
  updatedAt: Scalars['DateTime']['output'];
  username: Scalars['String']['output'];
};

export type WaitingListRegisterMutationVariables = Exact<{
  email: Scalars['String']['input'];
  firstname?: InputMaybe<Scalars['String']['input']>;
  lastname?: InputMaybe<Scalars['String']['input']>;
  preferredInvestmentAmount?: InputMaybe<Scalars['Int']['input']>;
}>;


export type WaitingListRegisterMutation = { __typename?: 'Mutation', waitingListRegister: { __typename?: 'Auth', accessToken: string } };


export const WaitingListRegisterDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"WaitingListRegister"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"email"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"firstname"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"lastname"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"preferredInvestmentAmount"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"waitingListRegister"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"email"},"value":{"kind":"Variable","name":{"kind":"Name","value":"email"}}},{"kind":"Argument","name":{"kind":"Name","value":"firstname"},"value":{"kind":"Variable","name":{"kind":"Name","value":"firstname"}}},{"kind":"Argument","name":{"kind":"Name","value":"lastname"},"value":{"kind":"Variable","name":{"kind":"Name","value":"lastname"}}},{"kind":"Argument","name":{"kind":"Name","value":"preferredInvestmentAmount"},"value":{"kind":"Variable","name":{"kind":"Name","value":"preferredInvestmentAmount"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"accessToken"}}]}}]}}]} as unknown as DocumentNode<WaitingListRegisterMutation, WaitingListRegisterMutationVariables>;