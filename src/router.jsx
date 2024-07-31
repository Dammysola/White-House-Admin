import { createBrowserRouter } from "react-router-dom";
import MainLayout from "./mainLayout/MainLayout";
import CreateNew_Account from "./pages/newAccount/company_Information/CreateNew_Account";
import Business_Details from "./pages/newAccount/businessDetails_EntryType/Business_Details";
import Business_Transaction from "./pages/newAccount/businessDetails_EntryType/Business_Transaction";
import Director_Details from "./pages/newAccount/director_LoginDetails/Director_Details";
import Congratulation from "./pages/newAccount/congratulation_message/Congratulation";
import MainLayout_Two from "./mainLayout2/MainLayout_Two"
import PopupContext from "./PopupContext ";
import SignIn from "./pages/signUp/SignIn"
import Transaction from "./pages/WhiteHouse/transaction/Transaction";
import PlaceBet from "./pages/WhiteHouse/placeBet/PlaceBet";
import WhiteHouse_Dashboard from "./pages/WhiteHouse/dashboard/WhiteHouse_Dashboard";
import Dice from "./pages/WhiteHouse/games/Dice"
import CustomerCare from "./pages/WhiteHouse/staff/CustomerCare";
import All_Staff from "./pages/WhiteHouse/staff/all_staff/All_Staff";
import Logged_sessions from "./pages/WhiteHouse/logged_session/Logged_sessions";
import Conversation from "./pages/WhiteHouse/conversation/Conversation";
import All_Users from "./pages/WhiteHouse/all_UsersDetails/all_users/All_Users";
import Personal_Info from "./pages/WhiteHouse/all_UsersDetails/personal_info/Personal_Info";
import Users_placedbets from "./pages/WhiteHouse/all_UsersDetails/user_placebets/Users_placedbets";
import Complain_Details from "./pages/WhiteHouse/all_UsersDetails/complain_details/Complain_Details";
import Staff_Details from "./pages/WhiteHouse/staff/staff_details/Staff_Details";
import Total_Players from "./pages/WhiteHouse/total_players/Total_Players";
import Total_BetPlaced from "./pages/WhiteHouse/placeBet/totalBet/Total_BetPlaced"
import Winner_loser from "./pages/WhiteHouse/placeBet/winner/Winner_loser"
import Countries from "./pages/WhiteHouse/placeBet/countries/Countries"
import Department from "./pages/WhiteHouse/staff/department/Department";
import User_Friends from "./pages/WhiteHouse/all_UsersDetails/user_friends/User_Friends";
import First_page from "./pages/WhiteHouse/first_page/First_page";
import Chat_History from "./pages/WhiteHouse/chat_history/Chat_History";
import Revenue from "./pages/WhiteHouse/revenue/Revenue";
import Alphabet_mainLayout from "./mainLayout3/Alphabet_mainLayout";
// import All_Accounts from "./pages/alphaBet/accounts/All_Accounts"
import Dashboard from "./pages/alphaBet/dashboard/Dashboard"
import WhiteHouse_PopupContext from "./WhiteHouse_PopupContext";
import Reports from "./pages/WhiteHouse/reports/Reports";
import Customer_Support from "./pages/WhiteHouse/staff/department/customer_Support/Customer_Support";





const router = createBrowserRouter([
    {
        path: "/",
        element: <MainLayout />,
        children: [
            {
                index: true,
                element: <First_page />
            },
            {
                // index:true,
                path: "/newAccount",
                element: <CreateNew_Account />
            },
            {
                path: "/businessDetails",
                element: <Business_Details />
            },
            {
                path: "/businessTransaction",
                element: <Business_Transaction />
            },
            {
                path: "/directorDetails",
                element: <Director_Details />
            },
            {
                path: "/success",
                element: <Congratulation />
            },
            {
                path: "/signIn",
                element: <SignIn />
            }
        ]

    },
    {
        path: "/",
        element: <WhiteHouse_PopupContext><MainLayout_Two/></WhiteHouse_PopupContext>,
        children: [
            // {
            //     path: "/dashboard",
            //     element: <Dashboard/>
            // },
            {
                path: "/whiteHouseDashboard",
                element: <WhiteHouse_Dashboard />
            },
            {
                path: "/dice",
                element: <Dice />
            },
            {
                path: "/customerCare",
                element: <CustomerCare />
            },
            {
                path: "/allStaffs",
                element: <All_Staff />
            },
            {
                path: "/transactions",
                element: <Transaction />
            },
            {
                path: "/loggedsession",
                element: <Logged_sessions />
            },
            {
                path: "/conversation",
                element: <Conversation />
            },
            {
                path: "/placebet",
                element: <PlaceBet />
            },
            {
                path: "/allusers",
                element: <All_Users />
            },
            {
                path: "/userDetails",
                element: <Personal_Info />
            },
            {
                path: "/userplacedbet",
                element: <Users_placedbets />
            },
            {
                path: "/complainDetails",
                element: <Complain_Details />
            },
            {
                path: "/staffDetails",
                element: <Staff_Details />
            },
            {
                path: "/totalPlayers",
                element: <Total_Players />
            },
            {
                path: "/totalBetPlaced",
                element: <Total_BetPlaced />
            },
            {
                path: "/winners",
                element: <Winner_loser />
            },
            {
                path: "/countries",
                element: <Countries />
            },
            {
                path: "/department",
                element: <Department />
            },
            {
                path: "/userFriends",
                element: <User_Friends />
            },
            {
                path: "/chatHistory",
                element: <Chat_History />
            },
            {
                path: "/revenue",
                element: <Revenue />
            },
            {
                path: "/reports",
                element: <Reports/>
            },
            {
                path: "/customer_support",
                element: <Customer_Support/>
            }

        ]

    },
    {
        path: "/",
        element: <Alphabet_mainLayout />,
        children: [
            {
                path: "/allAccounts",
                element: <Dashboard/>
            }
        ]
    }
])
export default router