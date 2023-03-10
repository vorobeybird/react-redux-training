import HomePageContainer from '../containers/HomePageContainer/HomePageContainer'
import Users from '../containers/UsersPageContainer/UsersPageContainer'
import Counter from '../components/Counter/Counter'
import ControlInput from '../components/ControlInput/ControlInput'
import NotFound from '../pages/NotFound/NotFound'
import User from '../pages/UserPage/UserPage'
import { URLS } from '../constants/apiRouter'

type RouteType = {
  path: string
  id: string
  component: any
  isAuth: boolean
}

const HOME_PAGE: RouteType = {
  path: URLS.Home_Route,
  id: URLS.Home_Route,
  component: HomePageContainer,
  isAuth: false,
}

const COUNTER_PAGE: RouteType = {
  path: URLS.Counter_Route,
  id: URLS.Counter_Route,
  component: Counter,
  isAuth: false,
}

const INPUT_PAGE: RouteType = {
  path: URLS.Input_Route,
  id: URLS.Input_Route,
  component: ControlInput,
  isAuth: false,
}

const USERS_PAGE: RouteType = {
  path: URLS.Users_Route,
  id: URLS.Users_Route,
  component: Users,
  isAuth: false,
}

const USER_PAGE: RouteType = {
  path: URLS.User_Route,
  id: URLS.User_Route,
  component: User,
  isAuth: false,
}

const NOT_FOUND_PAGE: RouteType = {
  path: URLS.Page_Not_Found_Route,
  id: URLS.Page_Not_Found_Route,
  component: NotFound,
  isAuth: false,
}

export const ALL_ROUTES = [
  HOME_PAGE,
  COUNTER_PAGE,
  INPUT_PAGE,
  USERS_PAGE,
  USER_PAGE,
  NOT_FOUND_PAGE,
]
