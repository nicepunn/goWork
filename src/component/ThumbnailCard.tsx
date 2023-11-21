'use client'

import Image from "next/image"
import { useState } from "react";
import { GoWorkModal, TriggerButton } from "./GoWorkModal";
import { Dayjs } from "dayjs";

interface GoWorkProps {

    bookingId?: string,
    bookingDate?: Dayjs,
    numOfRooms?: number,
    allNumOfRoom: Array<number>,

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

export default function ThumbnailCard(props: GoWorkProps) {

    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    return (
        <div className='w-[300px] h-[350px] bg-white flex-col text-center items-center rounded-2xl my-10 mx-5'>
            <div className="w-[300px] h-[300px] z-10 rounded-t-2xl overflow-hidden relative">
                <Image src={props.picture}
                alt='goWork Picture'
                fill={true}
                className='object-cover rounded-t-2xl'/>
            </div>

            <TriggerButton onClick={handleOpen} className="w-[300px] h-[50px] bg-1975FF hover:bg-6FA9FF text-white font-semibold z-10 rounded-b-2xl flex flex-row place-content-center py-3">
                    {props.name} <Image src='/whiteArrow.png' alt="arrow" width={20} height={20} className="ml-1 mt-px"/>
            </TriggerButton>
            
            <GoWorkModal handleClose={handleClose} open={open}
            _id={props._id} name={props.name} 
            operatingHours={props.operatingHours} address={props.address} 
            province={props.province} postalcode={props.postalcode} tel={props.tel} 
            picture={props.picture} __v={props.__v} id={props.id}
            bookingDate={props.bookingDate ? props.bookingDate : null}
            bookingId={props.bookingId ? props.bookingId : null} numOfRooms={props.numOfRooms ? props.numOfRooms : null}
            allNumOfRoom={props.allNumOfRoom}/>
        </div>
    )
}