import { Action, State } from '@ngrx/store';

export function tokenReducer(state: string = '', action: Action) {
  const token =  localStorage.getItem('token') || '';  
  return token;

}