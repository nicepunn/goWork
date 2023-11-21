import { Dayjs } from "dayjs";

export interface BookingItem {
	bookingId: string | null;
    bookingDate: Dayjs | null;
    numOfRooms: number | null;
    allNumOfRoom: Array<number>;

    //for goWork below
    _id: string;
    name: string;
    operatingHours: string;
    address: string;
    province: string;
    postalcode: string;
    tel: string;
    picture: string;
    __v: number;
    id: string;
}
