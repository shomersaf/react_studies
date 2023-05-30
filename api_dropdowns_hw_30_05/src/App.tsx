import { BrowserRouter } from "react-router-dom"
import Expenses from "./components/pages/expenses"
import { Link,Routes,Route } from "react-router-dom"
import { Button } from 'primereact/button';
import Login from "./components/pages/login";
import Register from "./components/pages/register";
import Users from "./components/pages/users";
import Logout from "./components/pages/logout";
import NotFound from "./components/pages/not-found";

interface IRoute {
    path: string,
    component: ()=>JSX.Element,
    label:string,
    severity: any,
    icon: string,
    isVisible:boolean,
}


const routes: Array<IRoute> = [
    {
        path: "/login",
        component: Login,
        label:"Log in",
        severity: "secondary",
        icon: "pi pi-sign-in",
        isVisible:true,
    },
    {
        path: "/register",
        component: Register,
        label:"Register",
        severity: "secondary",
        icon: "pi pi-user",
        isVisible:true,
    },
    {
        path: "/users",
        component: Users,
        label:"Users",
        severity: "secondary",
        icon: "pi pi-user",
        isVisible:true,
    },
    {
        path: "/expenses",
        component: Expenses,
        label:"Expenses",
        severity: "secondary",
        icon: "pi pi-user",
        isVisible:true,
    },
    {
        path: "/logout",
        component: Logout,
        label:"Log out",
        severity: "secondary",
        icon: "pi pi-sign-out",
        isVisible:true,
    },
    {
        path: "*",
        component: NotFound,
        label:"Not Found",
        severity: "secondary",
        icon: "pi pi-sign-out",
        isVisible:false,
    },
]

export default function App(){
    return(
        <div className="wrapper">
            <BrowserRouter>
<AppLinks routes={routes}/>
        </BrowserRouter>
        </div>
        
        
    )
}
function AppLinks(props:{routes:Array<IRoute>}){
    return(
        <>
             <div className="navDiv">
            {props.routes.filter((r)=>r.isVisible).map((route:IRoute)=>{
                return  <Link to={route.path}><Button label={route.label} severity={route.severity} icon={route.icon} /></Link>
            })}
            </div>
        <Routes>
            {props.routes.map((route:IRoute)=>{
                return <Route path={route.path} Component={route.component} />
            })}
        </Routes></>
    )
}






