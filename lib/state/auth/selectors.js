import { get } from 'lodash';

import {
	Authorized,
	Authorizing,
} from './constants';

export const authIsPending = state =>
	Authorizing === get( state, 'auth' );

export const isAuthorized = state =>
	Authorized === get( state, 'auth' );
