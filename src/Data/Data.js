
import {
  UilEstate,
  UilClipboardAlt,
  UilComment,
  UilPackage,
  UilChart,
  UilSignOutAlt,
  UilQuestionCircle ,
  UilSearch ,
} from "@iconscout/react-unicons";

import { UilUsdSquare, UilMoneyWithdrawal } from "@iconscout/react-unicons";

import img1 from "../imgs/img1.png";
import img2 from "../imgs/img2.png";
import img3 from "../imgs/img3.png";

export const SidebarData = [
  {
    icon: UilEstate,
    heading: "Dashboard",
  },
  {
    icon: UilClipboardAlt,
    heading: "Orders",
  },
  {
    icon: UilSearch ,
    heading: 'Brand Search'
  },
 
  {
    icon: UilPackage,
    heading: 'Projects'
  },
  {
    icon: UilComment,
    heading: "Chat",
  },
 
  {
    icon: UilQuestionCircle ,
    heading: 'Help Desk'
  },
  {
    icon: UilChart,
    heading: 'Analytics'
  },
  {
    icon: UilSignOutAlt,
    heading: 'Logout'
  },
];
export const cardsData = [
  {
    title: "Orders",
    color: {
      backGround: "linear-gradient(180deg, #bb67ff 0%, #c484f3 100%)",
      boxShadow: "0px 10px 20px 0px #e0c6f5",
    },
    barValue: 63,
    value: "1,69",
    png: UilUsdSquare,
    series: [
      {
        name: "Orders",
        data: [11, 5, 3, 9, 21, 16, 19],
      },
    ],
  },
  {
    title: "Revenue",
    color: {
      backGround: "linear-gradient(180deg, #FF919D 0%, #FC929D 100%)",
      boxShadow: "0px 10px 20px 0px #FDC0C7",
    },
    barValue: 80,
    value: "$16,192",
    png: UilMoneyWithdrawal,
    series: [
      {
        name: "Revenue",
        data: [10, 100, 50, 70, 80, 30, 40],
      },
    ],
  },
  {
    title: "Expenses",
    color: {
      backGround:
        "linear-gradient(rgb(248, 212, 154) -146.42%, rgb(255 202 113) -46.42%)",
      boxShadow: "0px 10px 20px 0px #F9D59B",
    },
    barValue: 62,
    value: "$2,168",
    png: UilClipboardAlt,
    series: [
      {
        name: "Expenses",
        data: [10, 25, 15, 30, 12, 15, 20],
      },
    ],
  },
];


export const UpdatesData = [
  {
    img: img1,
    name: "XYZ Electronics",
    noti: "has received a new order for a laptop model.",
    time: "45 seconds ago",
  },
  {
    img: img2,
    name: "ABC Gadgets",
    noti: "is processing a delivery for a smartphone order.",
    time: "10 minutes ago",
  },
  {
    img: img3,
    name: "Brand Solutions Inc.",
    noti: "requires assistance with a recent purchase query.",
    time: "4 hours ago",
  },
  
  
];
