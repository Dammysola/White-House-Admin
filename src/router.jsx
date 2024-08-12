import { createBrowserRouter } from "react-router-dom";
import MainLayout from "./mainLayout/MainLayout";
import CreateNew_Account from "./pages/newAccount/company_Information/CreateNew_Account";
import Business_Details from "./pages/newAccount/businessDetails_EntryType/Business_Details";
import Business_Transaction from "./pages/newAccount/businessDetails_EntryType/Business_Transaction";
import Director_Details from "./pages/newAccount/director_LoginDetails/Director_Details";
import Congratulation from "./pages/newAccount/congratulation_message/Congratulation";
import MainLayout_Two from "./mainLayout2/MainLayout_Two"
// import PopupContext from "./PopupContext ";
import SignIn from "./pages/signUp/SignIn"
import Transaction from "./pages/WhiteHouse/admin/transaction/Transaction";
import PlaceBet from "./pages/WhiteHouse/admin/placeBet/PlaceBet";
import WhiteHouse_Dashboard from "./pages/WhiteHouse/admin/dashboard/WhiteHouse_Dashboard";
import Dice from "./pages/WhiteHouse/admin/games/Dice"
// import CustomerCare from "./pages/WhiteHouse/staff/CustomerCare";
import All_Staff from "./pages/WhiteHouse/admin/staff/all_staff/All_Staff";
import Logged_sessions from "./pages/WhiteHouse/admin/logged_session/Logged_sessions";
import Conversation from "./pages/WhiteHouse/admin/conversation/Conversation";
import All_Users from "./pages/WhiteHouse/admin/all_UsersDetails/all_users/All_Users";
import Personal_Info from "./pages/WhiteHouse/admin/all_UsersDetails/personal_info/Personal_Info";
import Users_placedbets from "./pages/WhiteHouse/admin/all_UsersDetails/user_placebets/Users_placedbets";
import Complain_Details from "./pages/WhiteHouse/admin/all_UsersDetails/complain_details/Complain_Details";
import Staff_Details from "./pages/WhiteHouse/admin/staff/staff_details/Staff_Details";
import Total_Players from "./pages/WhiteHouse/admin/total_players/Total_Players";
import Total_BetPlaced from "./pages/WhiteHouse/admin/placeBet/totalBet/Total_BetPlaced"
import Winner_loser from "./pages/WhiteHouse/admin/placeBet/winner/Winner_loser"
import Countries from "./pages/WhiteHouse/admin/placeBet/countries/Countries"
import Department from "./pages/WhiteHouse/admin/staff/department/Department";
import User_Friends from "./pages/WhiteHouse/admin/all_UsersDetails/user_friends/User_Friends";
import First_page from "./pages/WhiteHouse/first_page/First_page";
import Chat_History from "./pages/WhiteHouse/admin/chat_history/Chat_History";
import Revenue from "./pages/WhiteHouse/admin/revenue/Revenue";
import Alphabet_mainLayout from "./mainLayout3/Alphabet_mainLayout";
import Dashboard from "./pages/alphaBet/dashboard/Dashboard"
import WhiteHouse_PopupContext from "./WhiteHouse_PopupContext";
import Queries from "./pages/WhiteHouse/admin/queries/Queries";
import Customer_Support from "./pages/WhiteHouse/admin/staff/customer_Support/Customer_Support";
import Top_Agents from "./pages/WhiteHouse/admin/staff/top_agents/Top_Agents";
import Total_Top_Agents from "./pages/WhiteHouse/admin/staff/top_agents/total_Top_Agents/Total_Top_Agents";
import AddNew_Agent from "./pages/WhiteHouse/admin/staff/addNew_Agent/AddNew_Agent";
import CustomerCare_Dashboard from "./pages/WhiteHouse/customerCare/customerCare_Dashboard/CustomerCare_Dashboard";





const router = createBrowserRouter([
    {
        path: "/",
        element: <MainLayout />,
        children: [
            // {
            //     index: true,
            //     element: <First_page/>
            // },
            {
                index:true,
                // path: "/newAccount",
                element: <CustomerCare_Dashboard/>
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
                element: <Customer_Support/>
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
                path: "/Queries",
                element: <Queries/>
            },
            {
                path: "/customer_support",
                element: <Customer_Support/>
            },
            {
                path: "/topAgent",
                element: <Top_Agents/>
            },
            {
                path: "/TotalTopAgents",
                element: <Total_Top_Agents/>
            },
            {
                path: "/addNewAgent",
                element: <AddNew_Agent/>
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