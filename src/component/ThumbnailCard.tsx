import Image from "next/image"

export default function ThumbnailCard() {

    function openModal() {
        return (
            <div>

            </div>
        )
    }

    return (
        <div className='w-[300px] h-[350px] bg-white flex-col text-center items-center rounded-2xl overflow-hidden'>
            <div className="w-[300px] h-[300px] z-10 rounded-t-2xl ">

            </div>

            <div className="w-[300px] h-[50px] bg-6FA9FF hover:bg-1975FF text-white font-semibold z-10 rounded-b-2xl align-middle "
            // onClick={(e) => {e.stopPropagation(); openModal()}}
            >
                open modal
            </div>
        </div>
    )
}