import { useState } from "react";

interface FormProps {
    bookingId?: string,
    bookingDate?: string,
    numOfRooms?: string
}

export default function GoWorkForm(props: FormProps) {

    const [date, setDate] = useState(props.bookingDate);
    const [RoomNum, setRoomNum] = useState(props.numOfRooms);

    return (
        <div>
            <div className="text-md text-left text-gray-600">
				Date
			</div>
			<input type="text" className="bg-white w-[50%] h-[2em] rounded-md px-2 py-1 shadow-sm"
				placeholder="Date"
				value={props.bookingDate}
				onChange={(value)=>{setDate(value.target.value);}}/>
			<div className="text-md text-left text-gray-600">
				Room NO.
			</div>
			<input type="text" className="bg-white w-[50%] h-[2em] rounded-md px-2 py-1 shadow-sm"
				placeholder="Room NO."
				value={props.numOfRooms}
				onChange={(value)=>{setRoomNum(value.target.value);}}/>
        </div>
    )
}