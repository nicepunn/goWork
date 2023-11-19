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
        <div className='w-[80vw] h-[200px] bg-white flex flex-row rounded-2xl text-center items-center'>
            <div className="w-[25%] h-[200px] bg-A6A6A6 z-10 rounded-l-2xl overflow-hidden relative">
                <Image src={props.goWorkPic}
                alt='Reserved goWork Picture'
                fill={true}
                className='object-cover rounded-t-2xl'/>
            </div>

            <div className="w-[70%] h-[200px] bg-white z-10 overflow-hidden relative">
                
            </div>

            <button className="w-[5%] h-[200px] bg-FF8989 hover:bg-FFB5B5 z-10 rounded-r-2xl overflow-hidden relative flex flex-row place-content-center py-[90px]">
                <Image src='/deleteIcon.png' alt="delete" width={20} height={20}/>
            </button>
        </div>

        
    )
}