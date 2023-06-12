// sidebar import

import axios from "axios";
import {
    dashboardIcon,
    scheduleIcon,
    settingIcon,
    userIcon,
    transactionIcon,
    totalRevenueIcon,
    totalLikesIcon,
    totalUsersIcon,
    totalTransactionIcon,

  } from "../assets/icons";

  export const SidebarLinks =[
    {
        title: "Dashboard",
        icon: dashboardIcon,
        path: "/dashboard",
    },
    {
        title: "Transactions",
        icon: transactionIcon,
        path: "#",
    },
    {
        title: "Schedule",
        icon: scheduleIcon,
        path: "#",
    },
    {
        title: "Users",
        icon: userIcon,
        path: "#",
    },
    {
        title: "Settings",
        icon: settingIcon,
        path: "#",
    },
    
  ]

  export const AboutLinks =[
    {
        title: "Help",
        path: "#",
    },
    {
        title: "Contact us",
        path: "#",
    },
  ]

 export const CardsData =[
    {
        title : "Total Revenues",
        icon: totalRevenueIcon,
        numbers: "$2,129,430",
        backgroundColor: "bg-[#DDEFE0]",
    },
    {
        title : "Total Transactions",
        icon: totalTransactionIcon,
        numbers: "1520",
        backgroundColor: "bg-[#F4ECDD]",
    },
    {
        title : "Total Likes",
        icon: totalLikesIcon,
        numbers: "9721",
        backgroundColor: "bg-[#EFDADA]",
    },
    {
        title : "Total Users",
        icon: totalUsersIcon,
        numbers: "892",
        backgroundColor: "bg-[#DEE0EF]",
    },
  ]

 

  export const PieData= {
  type: 'pie',
  data: {
     labels: ["HTML", "CSS", "JAVASCRIPT", "CHART.JS", "JQUERY", "BOOTSTRP"],
     datasets: [{
        label: "online tutorial subjects",
        data: [20, 40, 13, 35, 20, 38],
        backgroundColor: ['yellow', 'aqua', 'pink', 'lightgreen', 'gold', 'lightblue'],
        hoverOffset: 5
     }],
  },
  options: {
     responsive: false,
  },
};



  export const options={
    plugins:{
      legend: false 
    },
    scales: {
      x:{
        
        grid:{
          display: false
        },
      },
      y:{
        min:2,
        max: 10,
        ticks: {
          stepSize:2,
          callback: (value)=> value + "k"
        },
        
      }
    }
    
  }

