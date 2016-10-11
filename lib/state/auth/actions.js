import { constant } from 'lodash';

import {
	AUTH_RESET,
	AUTH_SET,
	AUTH_SET_PENDING,
} from '../action-types';

export const reset = constant( { type: AUTH_RESET } );
export const setPending = constant( { type: AUTH_SET_PENDING } );
export const setAuthorized = constant( { type: AUTH_SET } );
