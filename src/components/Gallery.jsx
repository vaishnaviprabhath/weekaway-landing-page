import React from 'react'

const Gallery =() => {
    return (
        <div id='gallery' className='max-w-[1140px] m-auto w-full px-4 py-16'>
            <h2 className = 'text-center text-gray-700 p-4'>Gallery</h2>
            <div className='grid sm:grid-cols-5 gap-4'>
                <div className='sm:col-span-3 col-span-2 row-span-2'>  
                     <img className='w-full h-full object-cover' src="https://images.unsplash.com/photo-1620127682229-33388276e540?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTh8fHZhY2F0aW9ufGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=1364&q=80" alt="/"></img>
            </div>
            <div>
                <img className='w-full h-full object-cover'src="https://images.unsplash.com/photo-1615039666131-964929ad0f1e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MzR8fHZhY2F0aW9ufGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=1364&q=80" alt="/"></img>
            </div>
            <div>
                <img className='w-full h-full object-cover' src="https://images.unsplash.com/photo-1603286416101-9f344b4cda2b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTQwfHx2YWNhdGlvbnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=1364&q=80" alt="/"></img>
            </div>
            <div>
                <img className='w-full h-full object-cover' src="https://images.unsplash.com/photo-1598428948870-37eee8c5d751?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTkxfHx2YWNhdGlvbnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=1364&q=80" alt="/"></img>
            </div>
            <div>
                <img className='w-full h-full object-cover'src="https://images.unsplash.com/photo-1616594529046-d7b47847a021?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjgxfHx2YWNhdGlvbnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=1364&q=80" alt="/"></img>
            </div>
        </div>
      </div>  
    )
}

export default Gallery