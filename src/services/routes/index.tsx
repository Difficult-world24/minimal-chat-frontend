import Home from "../../components/Home";
import Login from "../../components/Login";
import Register from "../../components/Register";
import Search from "../../components/Search/Search";

export const AppRouteSlugs = {
  login: "/login",
  register: "/register",
  settings: "/setting",
  search: '/search',
  home: "/",
};


export const GuestRoutes = [
  {
    path: AppRouteSlugs.login,
    component: <Login />
  },
  {
    path: AppRouteSlugs.register,
    component: <Register />
  },
]

export const AppRoutes = [
  {
    path: AppRouteSlugs.home,
    component: <Home />
  },
  {
    path: AppRouteSlugs.search,
    component: <Search />
  },
  {
    path: AppRouteSlugs.settings,
    component: <>Settings</>
  }
]