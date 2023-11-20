import { redirect } from 'next/navigation'
import Image from 'next/image'

export default function App() {
  redirect('/Home')
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      not use, set to go /Home
    </main>
  )
}
