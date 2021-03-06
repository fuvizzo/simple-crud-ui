import * as UserActions from './constants';

export interface IUser {
  id: number
  name: string
  username: string
  email: string
  age:number
}

export interface ISort {
  column: string
  direction: 'ascending' | 'descending' | undefined
}

export interface ISearch {
  query:string
}

export interface IUserList {
  users: IUser[]
  sort: ISort
  search:ISearch
  loading: boolean
}

interface GetUsers {
  type: typeof UserActions.GET_USERS
  payload: IUser[]
}

interface CreateUser {
  type: typeof UserActions.CREATE_USER
  payload: IUser
}

interface DeleteUser {
  type: typeof UserActions.DELETE_USER
  meta: {
    id: number
  }
}

interface UpdateUser {
  type: typeof UserActions.UPDATE_USER
  payload: IUser
}

interface SortUserBy {
  type: typeof UserActions.SORT_USER_BY
  column:string
  payload:IUser[]
}

interface GetFilterdUsers {
  type: typeof UserActions.GET_FILTERD_USERS
  payload:IUser[]
}

interface TriggerUserSearch {
  type: typeof UserActions.TRIGGER_USER_SEARCH
  query:string
}

interface ToggleLoader {
  type: typeof UserActions.LOADING
}

export type UserListActionTypes = GetUsers
| CreateUser
| DeleteUser
| UpdateUser
| SortUserBy
| GetFilterdUsers
| TriggerUserSearch
| ToggleLoader;
