import Image from 'next/image'

export default function Home() {
  return (
<div className= 'bg-zinc-950  h-screen flex flex-col items-stretch'>
      <div className= 'bg-gray-500 mx-5 my-2  basis-1/2 flex flex-col md:flex-row'>
        <div className= 'md:bg-slate-100 bg-black mx-2 my-2 basis-1/2'></div>
        <div className= 'bg-slate-100 md:bg-slate-800 mx-20 my-2 basis-1/2'></div>

              
      </div>

      <div className= 'bg-teal-600  mx-2 my-2 basis-1/4'></div>
      <div className= 'bg-red-800  mx-2 my-2 basis-1/4'></div>
        
</div>
  )
}
