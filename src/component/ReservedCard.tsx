import Image from "next/image"

interface ReservedProps {
    bookingId: string,
    bookingDate: string,
    numOfRooms: string,
    goWorkName: string,
    goWorkAddress: string,
    goWorkTel: string,
    goWorkId: string,
    goWorkPic: string
}


export default function ReservedCard(props: ReservedProps) {

    return (
        <div className='w-[80vw] h-[200px] bg-white flex-row text-center items-center rounded-2xl my-10 mx-5'>
            <div className="w-[25%] h-[200px] bg-A6A6A6 z-10 rounded-l-2xl overflow-hidden relative">
                <Image src={props.goWorkPic}
                alt='Reserved goWork Picture'
                fill={true}
                className='object-cover rounded-t-2xl'/>
            </div>
        </div>
    )
}