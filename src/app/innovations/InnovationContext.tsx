// "use client"
// import React, { createContext, useContext, ReactNode, useEffect, useState } from "react";
// import { StaticImageData } from "next/image";
// import newOne from "../../assets/newTwo.png"
// import axios from "axios";

// // Define your data structure here
// interface Innovations {
//   date: string,
//   title: string, 
//   content: string,
//   image: StaticImageData,
//   category: string
// }

// const publicationContext = createContext<Innovations[] | null>(null);

// export const PublicationProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
//   const [data, setData] = useState<Innovations[] | null>(null);
  
//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         const response = await axios.get("http://194.163.167.131:8060/projects/all", {
//           headers: {
//             authorization: "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJyb2xlcyI6W3siY3JlYXRlZEF0IjoiMjAyMy0wOS0wM1QxOTozMjozNS4zOTlaIiwidXBkYXRlZEF0IjoiMjAyMy0wOS0wM1QyMTozMzowMC40ODlaIiwiaWQiOjEsInJvbGVfbmFtZSI6IlNUVURFTlQifV0sImlkIjoxLCJuYXRpb25hbF9pZCI6IjgyNzQwOTcyMDM4MzcyMTMwMyIsImlhdCI6MTY5NDU5Nzc1MCwiZXhwIjoxNjk0NjAwNzUwfQ.WmvKs9n4C1l2SldYjjZ71-kccGiH2HL2kAvxl9K6FmI"
//           }
//         });

//         if(response.data){
//           setData(response.data)
//         }
//         else{
//           setData([
//             {
//                 image: newOne,
//                 title:"Robotics on a roll here in Rwanda Coding Academy",
//                 content:"Obstacle Avoiding/Following robot cars assembled and programmed by students of Rwanda Coding Academy",
//                 date:"Sunday 24th September, 2020",
//                 category:"fundraisation"
//             },
//             {
//                 image: newOne,
//                 title:"Club for \"Artificial Intelligence, Robotics, IoT\" by instructor Gabriel Baziramwabo",
//                 content:"A visit from the World Bank at RCA, showcasing the nurtured talents at the school.",
//                 date:"Sunday 24th September, 2020",
//                 category:"fundraisation"
//             },
//         ]);
//         }

//       } catch (error) {
//         console.error("Error fetching data:", error);
//       }
//     };

//     fetchData();
//   }, []);

//   return (
//     <publicationContext.Provider value={data}>
//       {children}
//     </publicationContext.Provider>
//   );
// };

// export const useInnovationsData = (): Innovations| null => {
//   const innovations = useContext(publicationContext);
//   return innovations;
// };
