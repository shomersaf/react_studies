import { BrowserRouter } from "react-router-dom"
import React ,{ lazy, Suspense} from "react"
import { Link,Routes,Route } from "react-router-dom"
import { Button } from 'primereact/button';
import ImageCp from "./components/ui/imageComponent";
import "primereact/resources/themes/saga-blue/theme.css";
import "primereact/resources/primereact.min.css";
import "primeicons/primeicons.css";

//import { color } from "chart.js/helpers";

interface IRoute {
    path: string,
    component: React.LazyExoticComponent<() => JSX.Element>
    label:string,
    severity: any,
    icon: string,
    isVisible:boolean,
}
const SystemPreferencesLazy = lazy(() => import('./components/SystemPreferences'));
const LoginLazy = lazy(() => import('./components/pages/login'));
const RegisterLazy = lazy(() => import('./components/pages/register'));
const UsersLazy = lazy(() => import('./components/pages/users'));
const LogoutLazy = lazy(() => import('./components/pages/logout'));
const ExpensesLazy = lazy(() => import('./components/pages/expenses'));
const NotFoundLazy = lazy(() => import('./components/pages/not-found'));

const routes: Array<IRoute> = [
    {
        path: "/sp",
        component: SystemPreferencesLazy,
        label:"SystemPreferences",
        severity: "secondary",
        icon: "pi pi-sign-in",
        isVisible:true,
    },
    {
        path: "/login",
        component: LoginLazy,
        label:"Log in",
        severity: "secondary",
        icon: "pi pi-sign-in",
        isVisible:true,
    },
    {
        path: "/register",
        component: RegisterLazy,
        label:"Register",
        severity: "secondary",
        icon: "pi pi-user",
        isVisible:true,
    },
    {
        path: "/users",
        component: UsersLazy,
        label:"Users",
        severity: "secondary",
        icon: "pi pi-user",
        isVisible:true,
    },
    {
        path: "/expenses",
        component: ExpensesLazy,
        label:"Expenses",
        severity: "secondary",
        icon: "pi pi-user",
        isVisible:true,
    },
    {
        path: "/logout",
        component: LogoutLazy,
        label:"Log out",
        severity: "secondary",
        icon: "pi pi-sign-out",
        isVisible:true,
    },
    {
        path: "*",
        component: NotFoundLazy,
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
      

        <Suspense fallback={<span>Loading...</span>}>
            
            <h1 style={{ backgroundColor: "black", width: "100%", minHeight: "50px", textAlign: "center"}}>HW 03/06 Lazy Loading, WithLoading, useImageLoading</h1>
            <ImageCp imageUrl="https://www.t8nmagazine.com/wp-content/uploads/2017/07/Financial-Literacy.jpg"/>
        <div className="navDiv">
            {props.routes.filter((r)=>r.isVisible).map((route:IRoute)=>{
                return  <Link to={route.path} key={route.label} ><Button label={route.label} severity={route.severity} icon={route.icon} /></Link>
            })}
            </div>
        <Routes>
            {props.routes.map((route:IRoute)=>{
                return <Route path={route.path} Component={route.component} key={route.label} />
            })}
        </Routes></Suspense>
        
        
    )
}






