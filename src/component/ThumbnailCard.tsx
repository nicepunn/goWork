'use client'

import { Box, Modal, Typography } from "@mui/material";
import Image from "next/image"
import { useState } from "react";
import style from "styled-jsx/style";


interface GoWorkProps {
    _id: string,
    name: string,
    operatingHours: string,
    address: string,
    province: string,
    postelcode: string,
    tel: string,
    picture: string,
    __v: string,
    id: string
  }


// export default function ThumbnailCard({id, imgUrl, details}: {id: string, imgUrl: string, details: string}) {

export default function ThumbnailCard(props: GoWorkProps) {

    const [isOpen, setOpen] = useState<boolean>(false);


    // function openModal() {
    //     return (
    //         <div>

    //         </div>
    //     )
    // }

    return (
        <div className='w-[300px] h-[350px] bg-white flex-col text-center items-center rounded-2xl my-10 mx-5'>
            <div className="w-[300px] h-[300px] z-10 rounded-t-2xl overflow-hidden relative">
                <Image src={props.picture}
                alt='goWork Picture'
                fill={true}
                className='object-cover rounded-t-2xl'/>
            </div>

            <button className="w-[300px] h-[50px] bg-1975FF hover:bg-6FA9FF text-white font-semibold z-10 rounded-b-2xl flex flex-row place-content-center py-3"
            // onClick={(e) => {e.stopPropagation(); openModal()}}
            onClick={()=>{setOpen(true)}}
            >
                    {props.name} <Image src='/whiteArrow.png' alt="arrow" width={20} height={20} className="ml-1"/>
            </button>

            <Modal
                open={isOpen}
                onClose={()=>{setOpen(false)}}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={style}>
                    <Typography id="modal-modal-title" variant="h6" component="h2">
                        Text in a modal
                    </Typography>
                    <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                        Duis mollis, est non commodo luctus, nisi erat porttitor ligula.
                    </Typography>
                </Box>
            </Modal>
        </div>
    )
}