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
            }
        ]

    },
    {
        path: "/",
        element: <PopupContext><MainLayout_Two/></PopupContext> ,
        children: [
            {
                path: "/allAccounts",
                element: <All_Accounts/>
            },
            {
                path: "/accountTransactions",
                // element: <Acc_Transaction/>
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
            }
        ]

    }
])
export default router