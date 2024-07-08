import { createBrowserRouter } from "react-router-dom";
import MainLayout from "./mainLayout/MainLayout";
import CreateNew_Account from "./pages/newAccount/company_Information/CreateNew_Account";
import Business_Details from "./pages/newAccount/businessDetails_EntryType/Business_Details";
import Business_Transaction from "./pages/newAccount/businessDetails_EntryType/Business_Transaction";
import Director_Details from "./pages/newAccount/director_LoginDetails/Director_Details";
import Congratulation from "./pages/newAccount/congratulation_message/Congratulation";
import All_Accounts from "./pages/accounts/All_Accounts";
import MainLayout_Two from "./mainLayout2/MainLayout_Two"
import PopupContext from "./PopupContext ";
import SignIn from "./pages/signUp/SignIn"
import Products from "./pages/products/Products";
import Dashboard from "./pages/dashboard/Dashboard";
import Transaction from "./pages/transaction/Transaction";
import Payment from "./pages/payments/Payment";
import Bulk_Payment from "./pages/payments/bulk_Payment/Bulk_Payment";
import PlaceBet from "./pages/WhiteHouse/placeBet/PlaceBet";
import WhiteHouse_Dashboard from "./pages/WhiteHouse/dashboard/WhiteHouse_Dashboard";
import Dice from "./pages/WhiteHouse/games/Dice"
import CustomerCare from "./pages/WhiteHouse/staff/CustomerCare";
import All_Staff from "./pages/WhiteHouse/staff/all_staff/All_Staff";




const router = createBrowserRouter([
    {
        path: "/",
        element: <MainLayout/>,
        children: [
            {
                index:true,
                element: <CreateNew_Account/>
            },
            {
                path: "/businessDetails",
                element: <Business_Details/>
            },
            {
                path: "/businessTransaction",
                element: <Business_Transaction/>
            },
            {
                path: "/directorDetails",
                element: <Director_Details/>
            },
            {
                path: "/success",
                element: <Congratulation/>
            },
            {
                path: "/signIn",
                element: <SignIn/>
            }
        ]

    },
    {
        path: "/",
        element: <PopupContext><MainLayout_Two/></PopupContext> ,
        children: [
            {
                path: "/dashboard",
                element: <Dashboard/>
            },
            {
                path: "/whiteHouseDashboard",
                element: <WhiteHouse_Dashboard/>
            },
            {
                path: "/dice",
                element: <Dice/>
            },
            {
                path: "/customerCare",
                element: <CustomerCare/>
            },
            {
                path: "/allStaffs",
                element: <All_Staff/>
            },
            {
                path: "/transactions",
                element:  <Transaction/>
            },
            {
                path: "/payment",
                element: <Payment/>
            },
            {
                path: "/bulkPayment",
                element: <Bulk_Payment/>
            },
            {
                path: "/placebet",
                element: <PlaceBet/>
            }
            
        ]

    }
])
export default router