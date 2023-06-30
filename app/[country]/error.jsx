"use client"
 // Error components must be Client components

export default function Error({ error, reset }) {


  return (
    <div className="w-screen h-screenFix flex items-center justify-center flex-col gap-4">
      <h2 className="text-[28px] font-bold">Something went wrong!</h2>
      <button onClick={() => reset()} className="error cursor-pointer hover:opacity-80 hover:bg-[#131416] hover:text-white shadow-std transition-all px-4 py-2 rounded-lg">Try again</button>
    </div>
  )
}