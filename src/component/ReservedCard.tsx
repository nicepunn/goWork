'use client'

import Image from "next/image"
import { useState } from "react";
import { GoWorkModal, TriggerButton } from "./GoWorkModal";
import { Dayjs } from "dayjs";

interface ReservedProps {
    bookingId?: string,
    bookingDate?: Dayjs,
    numOfRooms?: number,
    allNumOfRoom: Array<number>,

    //for goWork below
    _id: string,
    name: string,
    operatingHours: string,
    address: string,
    province: string,
    postalcode: string,
    tel: string,
    picture: string,
    __v: number,
    id: string
}


export default function ReservedCard(props: ReservedProps) {

    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    return (
        <div>
            <TriggerButton onClick={handleOpen} className='w-[80vw] h-[200px] bg-white flex flex-row rounded-2xl text-center items-center'>
                <div className="w-[25%] h-[200px] bg-A6A6A6 z-10 rounded-l-2xl overflow-hidden relative">
                    <Image src={props.picture}
                    alt='Reserved goWork Picture'
                    fill={true}
                    className='object-cover rounded-t-2xl'/>
                </div>

                <div className="w-[70%] h-[200px] bg-white z-10 overflow-hidden relative">
                    
                </div>

                <button className="w-[5%] h-[200px] bg-FF8989 hover:bg-FFB5B5 z-10 rounded-r-2xl overflow-hidden relative flex flex-row place-content-center py-[90px]"
                onClick={(e =>{e.stopPropagation()})}>
                    <Image src='/deleteIcon.png' alt="delete" width={20} height={20}/>
                </button>
            </TriggerButton>

            <GoWorkModal handleClose={handleClose} open={open}
            _id={props._id} name={props.name}
            operatingHours={props.operatingHours} address={props.address}
            province={props.province} postalcode={props.postalcode} tel={props.tel}
            picture={props.picture} __v={props.__v} id={props.id} modalType={"Edit"}
            bookingDate={props.bookingDate ? props.bookingDate : null}
            bookingId={props.bookingId ? props.bookingId : null} numOfRooms={props.numOfRooms ? props.numOfRooms : null}
            allNumOfRoom={props.allNumOfRoom}/>
        </div>
        

        
    )
}