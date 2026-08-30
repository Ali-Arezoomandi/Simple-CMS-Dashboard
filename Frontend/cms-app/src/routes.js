import Home from "./pages/Home/Home"
import UserList from "./pages/UserList/UserList"
import UserEdit from "./pages/UserEdit/UserEdit"
import NewUser from "./pages/NewUser/NewUser"
import Products from "./pages/Products/Products"
import ProductEdit from "./pages/ProductEdit/ProductEdit"

let routes = [
    {path: '/', element: <Home />},
    {path: '/userList', element: <UserList />},
    {path: '/userList/:userId', element: <UserEdit />},
    {path: '/newUser', element: <NewUser />},
    {path: '/products', element: <Products />},
    {path: '/products/:productId', element: <ProductEdit />},
]

export default routes