import { partial } from 'lodash';

import { AUTH_SET } from '../action-types';

import {
	Authorized,
	Authorizing,
	NotAuthorized,
} from './constants';

const setAuthStatus = status => ( {
	type: AUTH_SET,
	status,
} );

export const reset = partial( setAuthStatus, NotAuthorized );
export const setPending = partial( setAuthStatus, Authorizing );
export const setAuthorized = partial( setAuthStatus, Authorized );
