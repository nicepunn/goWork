'use client'

import ReservedCard from "@/component/ReservedCard";
import getAllReserved from "@/libs/getAllReserved";
import { useAppSelector } from "@/redux/store";
import dayjs, { Dayjs } from "dayjs";
import { useEffect, useState } from "react";

const dayRaw1: Dayjs = dayjs();
const dayRaw2: Dayjs = dayjs();
const dayRaw3: Dayjs = dayjs();

// const ReservationsRaw = {
//   "success": true,
//   "count": 3,
//   "pagination": {},
//   "data": [
//     {
//       "bookingId": "ABC123",
//       "bookingDate": dayRaw1,
//       "numOfRooms": 2,

//       "_id": "123456789",
//       "name": "GoWork Space",
//       "operatingHours": "9:00 AM - 6:00 PM",
//       "address": "123 Main Street",
//       "province": "Example Province",
//       "postalcode": "A1B 2C3",
//       "tel": "+1 (555) 123-4567",
//       "picture": "https://drive.google.com/uc?id=1JinSybZyq4eMEJTUVewuh9X87DYznuc3",
//       "__v": 1,
//       "id": "987654321"
//     },
//     {
//       "bookingId": "DEF456",
//       "bookingDate": dayRaw2,
//       "numOfRooms": 1,

//       "_id": "234567890",
//       "name": "CoWork Hub",
//       "operatingHours": "8:00 AM - 7:00 PM",
//       "address": "456 Business Blvd",
//       "province": "Sample State",
//       "postalcode": "X1Y 3Z9",
//       "tel": "+1 (555) 987-6543",
//       "picture": "https://drive.google.com/uc?id=1Otx0rTEVbXahcxcXZTvoM9QnlRJmubOP",
//       "__v": 2,
//       "id": "876543210"
//     },
//     {
//       "bookingId": "GHI789",
//       "bookingDate": dayRaw3,
//       "numOfRooms": 3,

//       "_id": "345678901",
//       "name": "FlexOffice Solutions",
//       "operatingHours": "10:00 AM - 5:00 PM",
//       "address": "789 Flex Lane",
//       "province": "Demo County",
//       "postalcode": "M4N 5PQ",
//       "tel": "+1 (555) 321-8765",
//       "picture": "https://drive.google.com/uc?id=1JinSybZyq4eMEJTUVewuh9X87DYznuc3",
//       "__v": 3,
//       "id": "109876543"
//     }
//   ]
// }



export default function Reservations() {

  // const [allReservedResponse, setAllReservedResponse] = useState(null);

  // useEffect(() => {
  //   const fetchData = async () => {
  //     const allReserved = await getAllReserved()
  //     setAllReservedResponse(allReserved)
  //     console.log(allReserved)
  //   }
  //   fetchData()
  // }, [])

  const bookingItems = useAppSelector(state => state.bookSlice.bookItems)

    return (
      <main className='w-[100%] flex flex-col items-center space-y-4 mt-[3vh]'>
        {
          bookingItems.length === 0? <></>
          :
            bookingItems.map((reservedItem: Object)=>(
                <ReservedCard bookingId={reservedItem.bookingId} bookingDate={reservedItem.bookingDate}
              numOfRooms={reservedItem.numOfRooms} _id={reservedItem._id} name={reservedItem.name}
              operatingHours={reservedItem.operatingHours} address={reservedItem.address}
              province={reservedItem.province} postalcode={reservedItem.postalcode} tel={reservedItem.tel}
              picture={reservedItem.picture} __v={reservedItem.__v} id={reservedItem.id} 
              allNumOfRoom={[1, 2, 3]}/>
            ))
        }
      </main>
    )
  }