import { cn } from '@/lib/utils'
import React from 'react'

export const Demo = () => {
    return (


        <div className="size-80 rounded-md bg-white relative overflow-hidden p-8 flex flex-col gap-4
        
        ">

            <div className="flex items-center gap-2">
                <input type="checkbox" />
                <p className='text-xs'>Studied motion</p>
            </div>
            <div className="flex items-center gap-2">
                <input type="checkbox" />
                <p className='text-xs'>Studied Tailwind</p>
            </div>

            <div className="flex items-center gap-2">
                <input type="checkbox" />
                <p className='text-xs'>Studied Nothing</p>
            </div>


        </div>


    )
}
