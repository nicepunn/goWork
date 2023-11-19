import ReservedCard from "@/component/ReservedCard";

export default function Reservations() {
    return (
      <main className='w-[100%] flex flex-col items-center space-y-4 mt-[3vh]'>
        <ReservedCard/>
        <ReservedCard/>
        <ReservedCard/>
      </main>
    )
  }