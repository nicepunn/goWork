// // now dont use


// import { useState } from "react";
// import { DatePicker, LocalizationProvider } from "@mui/x-date-pickers";
// import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs'
// import { Dayjs } from "dayjs";
// import { Select, MenuItem } from '@mui/material'

// interface FormProps {
//     bookingId: string | null,
//     bookingDate: Dayjs | null,
//     numOfRooms: number | null,
//     allNumOfRoom: Array<number>
// }

// export default function GoWorkForm(props: FormProps) {


//     const [date, setDate] = useState<Dayjs | null>(props.bookingDate);
//     const [RoomNum, setRoomNum] = useState<number | null>(props.numOfRooms);

//     return (
//         <div>
//             <div className="text-md text-left text-gray-600">
// 				Date
// 			</div>
// 			<LocalizationProvider dateAdapter={AdapterDayjs}>
//                 <DatePicker className="bg-white w-[100%] mb-2"
//                 value={date}
//                 onChange = {(value)=>{setDate(value);}}/>
//             </LocalizationProvider>
// 			<div className="text-md text-left text-gray-600">
// 				Room NO.
// 			</div>
// 			{/* <input type="text" className="bg-white w-[100%] h-[2em] rounded-md px-2 py-1 shadow-sm"
// 				placeholder="Room NO."
// 				value={props.numOfRooms}
// 				onChange={(value)=>{setRoomNum(value.target.value);}}/> */}
//             <Select variant="standard" name="NumOfRoom" id="NumOfRoom"
//             value={RoomNum} className="h-[2em] w-[100%]"
//             onChange={(e)=>{setRoomNum(e.target.value? parseInt(e.target.value.toString()): null);}}>
//                 {
// 					props.allNumOfRoom.map((numOfRoomItem)=>(
// 						<MenuItem key={numOfRoomItem} value={numOfRoomItem}>
// 							{numOfRoomItem}
// 						</MenuItem>
// 					))
// 				}
//             </Select>
//         </div>
//     )
// }