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
// import Acc_Transaction from './'




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
                path: "/allAccounts",
                element: <All_Accounts/>
            },
            {
                path: "/accountTransactions",
                // element: <Acc_Transaction/>
            },
            {
                path: "/products",
                element: <Products/>
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
            }
        ]

    }
])
export default router