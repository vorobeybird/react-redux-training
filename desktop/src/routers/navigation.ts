import { URLS } from '../constants/apiRouter'

type SideLinkType = {
  title: string
  id: string
  url: string
  permission: Array<string>
}

const HOME: SideLinkType = {
  title: 'Home',
  id: 'home',
  url: URLS.Home_Route,
  permission: ['ALL'],
}

const COUNTER: SideLinkType = {
  title: 'Counter',
  id: 'counter',
  url: URLS.Counter_Route,
  permission: ['ALL'],
}

const INPUT: SideLinkType = {
  title: 'Input',
  id: 'input',
  url: URLS.Input_Route,
  permission: ['ALL'],
}

const USERS: SideLinkType = {
  title: 'Users',
  id: 'users',
  url: URLS.Users_Route,
  permission: ['ALL'],
}

export const ASIDE_ROUTES = [
  HOME,
  COUNTER,
  INPUT,
  USERS,
]
