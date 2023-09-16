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
  /** The `Upload` scalar type represents a file upload. */
  Upload: { input: any; output: any; }
};

/** Auth object type */
export type AuthObjectType = {
  __typename?: 'AuthObjectType';
  accessToken: Scalars['String']['output'];
};

/** Auth profile object type */
export type AuthProfileObjectType = {
  __typename?: 'AuthProfileObjectType';
  _id: Scalars['ID']['output'];
  authType: AuthType;
  avatar?: Maybe<Scalars['String']['output']>;
  companyName?: Maybe<Scalars['String']['output']>;
  createdAt: Scalars['DateTime']['output'];
  email?: Maybe<Scalars['String']['output']>;
  firstname?: Maybe<Scalars['String']['output']>;
  lastname?: Maybe<Scalars['String']['output']>;
  oauthId?: Maybe<Scalars['ID']['output']>;
  preferences?: Maybe<Array<Scalars['String']['output']>>;
  updatedAt: Scalars['DateTime']['output'];
  userId: Scalars['String']['output'];
  username: Scalars['String']['output'];
};

export enum AuthType {
  Anonymous = 'anonymous',
  Native = 'native',
  Oauth2 = 'oauth2',
  WaitingList = 'waitingList'
}

export type Mutation = {
  __typename?: 'Mutation';
  anonymousRegister: AuthObjectType;
  createProject: ProjectObjectType;
  createRiskIndicators: RiskAssessmentObjectType;
  createUser: UserObjectType;
  oauthRegister: AuthObjectType;
  waitingListRegister: AuthObjectType;
};


export type MutationCreateProjectArgs = {
  description?: InputMaybe<Scalars['String']['input']>;
  endDate?: InputMaybe<Scalars['DateTime']['input']>;
  isPublic: Scalars['Boolean']['input'];
  location?: InputMaybe<Scalars['String']['input']>;
  name: Scalars['String']['input'];
  ownerUserId: Scalars['String']['input'];
  pdd: Scalars['String']['input'];
  stage: ProjectStage;
  startDate?: InputMaybe<Scalars['DateTime']['input']>;
};


export type MutationCreateRiskIndicatorsArgs = {
  categoryCode: RiskCategoryCode;
  indicatorsCodes?: InputMaybe<Array<RiskIndicatorCode>>;
  projectId: Scalars['ID']['input'];
};


export type MutationCreateUserArgs = {
  companyName?: InputMaybe<Scalars['String']['input']>;
  firstname?: InputMaybe<Scalars['String']['input']>;
  lastname?: InputMaybe<Scalars['String']['input']>;
  password?: InputMaybe<Scalars['String']['input']>;
  username: Scalars['String']['input'];
};


export type MutationWaitingListRegisterArgs = {
  companyName?: InputMaybe<Scalars['String']['input']>;
  email: Scalars['String']['input'];
  firstname?: InputMaybe<Scalars['String']['input']>;
  lastname?: InputMaybe<Scalars['String']['input']>;
};

/** Project object type. */
export type ProjectObjectType = {
  __typename?: 'ProjectObjectType';
  _id: Scalars['ID']['output'];
  createdAt: Scalars['DateTime']['output'];
  description?: Maybe<Scalars['String']['output']>;
  endDate?: Maybe<Scalars['DateTime']['output']>;
  isPublic: Scalars['Boolean']['output'];
  location?: Maybe<Scalars['String']['output']>;
  name: Scalars['String']['output'];
  ownerUser: UserObjectType;
  pdd: Scalars['String']['output'];
  stage: ProjectStage;
  startDate?: Maybe<Scalars['DateTime']['output']>;
  tags?: Maybe<Array<Scalars['String']['output']>>;
  updatedAt: Scalars['DateTime']['output'];
};

export enum ProjectStage {
  Feasibility = 'feasibility',
  Implementation = 'implementation',
  PreFeasibility = 'preFeasibility',
  Verification = 'verification'
}

export type Query = {
  __typename?: 'Query';
  computeRiskIndicators: Array<RiskIndicatorObjectType>;
  profile: AuthProfileObjectType;
  project: ProjectObjectType;
  projects: Array<ProjectObjectType>;
  riskAssessment: RiskAssessmentObjectType;
  riskAssessments: Array<RiskAssessmentObjectType>;
  user: UserObjectType;
  users: Array<UserObjectType>;
};


export type QueryComputeRiskIndicatorsArgs = {
  categoryCode: RiskCategoryCode;
  indicatorsCodes?: InputMaybe<Array<RiskIndicatorCode>>;
  pddFile?: InputMaybe<Scalars['Upload']['input']>;
  pddText?: InputMaybe<Scalars['String']['input']>;
};


export type QueryProjectArgs = {
  _id: Scalars['ID']['input'];
};


export type QueryProjectsArgs = {
  name?: InputMaybe<Scalars['String']['input']>;
  ownerUserId?: InputMaybe<Scalars['ID']['input']>;
  riskAssessmentId?: InputMaybe<Scalars['ID']['input']>;
};


export type QueryRiskAssessmentArgs = {
  _id: Scalars['String']['input'];
};


export type QueryUserArgs = {
  firstname?: InputMaybe<Scalars['String']['input']>;
  lastname?: InputMaybe<Scalars['String']['input']>;
  username?: InputMaybe<Scalars['String']['input']>;
};

/** RiskAssessment object type. */
export type RiskAssessmentObjectType = {
  __typename?: 'RiskAssessmentObjectType';
  _id?: Maybe<Scalars['ID']['output']>;
  createdAt: Scalars['DateTime']['output'];
  indicators: Array<RiskIndicatorObjectType>;
  project?: Maybe<ProjectObjectType>;
  updatedAt: Scalars['DateTime']['output'];
};

export enum RiskCategoryCode {
  Biodiversity = 'biodiversity',
  Climate = 'climate',
  Commercial = 'commercial',
  Community = 'community',
  CounterParty = 'counterParty',
  Forestry = 'forestry',
  Integrity = 'integrity',
  Jurisdiction = 'jurisdiction',
  Land = 'land'
}

export enum RiskIndicatorCode {
  CommunityBenefitsSustainability = 'communityBenefitsSustainability',
  CommunityEmploymentBenefits = 'communityEmploymentBenefits',
  CommunityInvolvement = 'communityInvolvement',
  CommunityPerception = 'communityPerception',
  CommunitySocialBenefits = 'communitySocialBenefits',
  StakeholderConsultation = 'stakeholderConsultation'
}

/** RiskIndicator object type. */
export type RiskIndicatorObjectType = {
  __typename?: 'RiskIndicatorObjectType';
  _id: Scalars['ID']['output'];
  analysis: Scalars['String']['output'];
  categoryCode: RiskCategoryCode;
  code: RiskIndicatorCode;
  createdAt: Scalars['DateTime']['output'];
  feedback?: Maybe<Scalars['String']['output']>;
  name: Scalars['String']['output'];
  score?: Maybe<Scalars['Int']['output']>;
  updatedAt: Scalars['DateTime']['output'];
};

/** User object type. */
export type UserObjectType = {
  __typename?: 'UserObjectType';
  _id: Scalars['ID']['output'];
  authType: AuthType;
  avatar?: Maybe<Scalars['String']['output']>;
  companyName?: Maybe<Scalars['String']['output']>;
  createdAt: Scalars['DateTime']['output'];
  email?: Maybe<Scalars['String']['output']>;
  firstname?: Maybe<Scalars['String']['output']>;
  lastname?: Maybe<Scalars['String']['output']>;
  oauthId?: Maybe<Scalars['ID']['output']>;
  preferences?: Maybe<Array<Scalars['String']['output']>>;
  updatedAt: Scalars['DateTime']['output'];
  username: Scalars['String']['output'];
};

export type WaitingListRegisterMutationVariables = Exact<{
  email: Scalars['String']['input'];
  firstname?: InputMaybe<Scalars['String']['input']>;
  lastname?: InputMaybe<Scalars['String']['input']>;
  companyName?: InputMaybe<Scalars['String']['input']>;
}>;


export type WaitingListRegisterMutation = { __typename?: 'Mutation', waitingListRegister: { __typename?: 'AuthObjectType', accessToken: string } };


export const WaitingListRegisterDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"WaitingListRegister"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"email"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"firstname"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"lastname"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"companyName"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"waitingListRegister"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"email"},"value":{"kind":"Variable","name":{"kind":"Name","value":"email"}}},{"kind":"Argument","name":{"kind":"Name","value":"firstname"},"value":{"kind":"Variable","name":{"kind":"Name","value":"firstname"}}},{"kind":"Argument","name":{"kind":"Name","value":"lastname"},"value":{"kind":"Variable","name":{"kind":"Name","value":"lastname"}}},{"kind":"Argument","name":{"kind":"Name","value":"companyName"},"value":{"kind":"Variable","name":{"kind":"Name","value":"companyName"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"accessToken"}}]}}]}}]} as unknown as DocumentNode<WaitingListRegisterMutation, WaitingListRegisterMutationVariables>;