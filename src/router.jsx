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
import Total_BetPlaced from "./pages/WhiteHouse/admin/totalBet/Total_BetPlaced"
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
import CustomerCare_Queries from "./pages/WhiteHouse/customerCare/customerCare_Queries/CustomerCare_Queries";
import Sports from "./pages/WhiteHouse/admin/games/sports/Sports";
import Foot_Soldiers from "./pages/WhiteHouse/admin/foot_soldiers/Foot_Soldiers";
import All_FootSoldiers from "./pages/WhiteHouse/admin/foot_soldiers/all_footSoldiers/All_FootSoldiers";
import Soldier_Transaction from "./pages/WhiteHouse/admin/foot_soldiers/footSoldier_transaction/Soldier_Transaction";
import Pending_Request from "./pages/WhiteHouse/admin/foot_soldiers/pending_requests/Pending_Request";
import Amount_Paid from "./pages/WhiteHouse/admin/foot_soldiers/amount_paid/Amount_Paid";
import All_Transaction from "./pages/WhiteHouse/admin/foot_soldiers/all_transactions/All_Transaction";
import Dice_BetPlaced from "./pages/WhiteHouse/admin/games/Dice_BetPlaced";
import Users_From_Soldiers from "./pages/WhiteHouse/admin/foot_soldiers/users_from_soldiers/Users_From_Soldiers"
import Trash from "./pages/WhiteHouse/admin/foot_soldiers/trash/Trash"
import Game_History from "./pages/WhiteHouse/admin/games/game_history/Game_History";
// import CustomerCare_SignIn from "./pages/WhiteHouse/CustomerCare/signIn/customerCare_signIn/CustomerCare_SignIn";
import Query_Review from "./pages/WhiteHouse/customerCare/customerCare_Queries/query_review/Query_Review";
import Performance from "./pages/WhiteHouse/customerCare/performance/Performance";
import Online_Players from "./pages/WhiteHouse/admin/placeBet/totalOnline_players/Online_Players";
import Performance_Details from "./pages/WhiteHouse/customerCare/performance/performance_details/Performance_Details";
import CC_All_Users from "./pages/WhiteHouse/customerCare/customerCare_all_Users/CC_All_Users";
import CustomerCare_SignIn from "./pages/WhiteHouse/customerCare/signIn/customerCare_Admin_signIn/CustomerCare_AdminSignIn";
import Admin_SignIn from "./pages/WhiteHouse/admin/signIn/admin_signIn/Admin_SignIn";
import Onboarded_users from "./pages/WhiteHouse/admin/foot_soldiers/recent_onboarded_users/Onboarded_users";
import Incoming_Queries from "./pages/WhiteHouse/customerCare/customerCare_Queries/incoming_queries/Incoming_Queries";
import CC_SignIn from "./pages/WhiteHouse/customerCare/cc_signIn/CC_SignIn";
import Unsettled_Details from "./pages/WhiteHouse/admin/transaction/unsettled_details/Unsettled_Details";
import FootSoldiers_countries from "./pages/WhiteHouse/admin/foot_soldiers/countries/FootSoldiers_countries";
import Message_Queries from "./pages/WhiteHouse/customerCare/customerCare_Queries/queries_categories/Message_Queries";
import InProgress_Queries from "./pages/WhiteHouse/customerCare/customerCare_Queries/general_Queries/InProgress_Queries";
import Mail_Queries from "./pages/WhiteHouse/customerCare/customerCare_Queries/queries_categories/Mail_Queries";
import Escalated_Queries from "./pages/WhiteHouse/customerCare/customerCare_Queries/general_Queries/Escalated_Queries";
import Closed_Queries from "./pages/WhiteHouse/customerCare/customerCare_Queries/general_Queries/Closed_Queries";
import InApp_Calls from "./pages/WhiteHouse/customerCare/customerCare_Queries/queries_categories/calls_queries/InApp_Calls";



const router = createBrowserRouter([

    
    {
        path: "/",
        element: <WhiteHouse_PopupContext><MainLayout /></WhiteHouse_PopupContext> ,
        children: [

            {
                index: true,
                element: <CustomerCare_Dashboard />
            },
            {
                path: "/customerCare_queries",
                element: <CustomerCare_Queries />
            },
            {
                path: "/QueryReview",
                element: <Query_Review />
            },
            {
                path: "/performance",
                element: <Performance />
            },
            {
                path: "/performanceDetails",
                element: <Performance_Details />
            },


            //         {
            //             path: "/businessTransaction",
            //             element: <Business_Transaction />
            //         },
            //         {
            //             path: "/directorDetails",
            //             element: <Director_Details />
            //         },
            //         {
            //             path: "/success",
            //             element: <Congratulation />
            //         },
            //         {
            //             path: "/signIn",
            //             element: <SignIn />
            //         }



            {
                path: "/signIn",
                element: <CC_SignIn/>
            },
            {
                path: "/incomingQueries",
                element: <Incoming_Queries/>
            },
            {
                path: "/allUsers_cc",
                element: <CC_All_Users/>
            },
             {
                path: "/message_queries",
                element: <Message_Queries/>
            },
            {
                path: "/mailQueries",
                element: <Mail_Queries/>
            },
            {
                path: "/callQueries",
                element: <InApp_Calls/>
            },
             {
                path: "/resolvedQueries",
                element: <InProgress_Queries/>
            },
            {
                path: "/escalatedQueries",
                element: <Escalated_Queries/>
            },
            {
                path: "/closedQueries",
                element: <Closed_Queries/>
            }
        ]

    },
    {
        path: "/",
        element: <WhiteHouse_PopupContext><MainLayout_Two /></WhiteHouse_PopupContext>,
        children: [

            {
                path: "/admin_signIn",
                element: <Admin_SignIn/>
            },

            {
                // index: true,
                path: "/whiteHouseDashboard",
                element: <WhiteHouse_Dashboard />
            },
            {
                path: "/dice",
                element: <Dice />
            },
            {
                path: "/sports",
                element: <Sports />
            },
            {
                path: "/diceBetPlaced",
                element: <Dice_BetPlaced />
            },
            {
                path: "/gameHistory",
                element: <Game_History />
            },
            {
                path: "/customerCare",
                element: <Customer_Support />
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
                path: "/conversations",
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
                path: "/unsettledBet",
                element: <Unsettled_Details/>
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
                path: "/totalBetPlaced/:indexParams",
                element: <Total_BetPlaced />
            },
            {
                path: "/totalOnlinePlayers",
                element: <Online_Players />
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
                element: <Queries />
            },
            {
                path: "/customer_support",
                element: <Customer_Support />
            },
            {
                path: "/topAgent",
                element: <Top_Agents />
            },
            {
                path: "/TotalTopAgents",
                element: <Total_Top_Agents />
            },
            {
                path: "/addNewAgent",
                element: <AddNew_Agent />
            },
            {
                path: "/footSoldiers",
                element: <Foot_Soldiers />
            },
            {
                path: "/allFootSoldiers",
                element: <All_FootSoldiers />
            },
            {
                path: "/soldiersTransaction",
                element: <Soldier_Transaction />
            },
            {
                path: "/pendingRequests",
                element: <Pending_Request />
            },
            {
                path: "/amountPaid",
                element: <Amount_Paid />
            },
            {
                path: "/recentOnboarderUsers",
                element: <Onboarded_users/>
            },
            {
                path: "/AllTransaction",
                element: <All_Transaction />
            },
             {
                path: "/footSoldiersCountries",
                element: <FootSoldiers_countries />
            },
            {
                path: "/usersFromSoldiers",
                element: <Users_From_Soldiers />
            },
            {
                path: "/trash",
                element: <Trash />
            }



        ]

    },
    {
        path: "/",
        element: <Alphabet_mainLayout />,
        children: [
            {
                path: "/allAccounts",
                element: <Dashboard />
            }
        ]
    }
])
export default router