import React from 'react'

function Sidebar() {
    return (
        <div className='bg-[#ffffff] w-full flex flex-col justify-center items-start'>
            <div className='flex justify-start items-center gap-3'>
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"><path fill="#1677FF" fill-rule="evenodd" d="M12 24c6.627 0 12-5.373 12-12S18.627 0 12 0 0 5.373 0 12s5.373 12 12 12Zm3.744-18.41c.182-.647-.446-1.03-1.02-.621l-8.008 5.705c-.622.443-.524 1.326.147 1.326h2.109v-.016h4.11l-3.35 1.181-1.476 5.245c-.182.647.446 1.03 1.02.621l8.008-5.705c.622-.443.524-1.326-.147-1.326H13.94l1.805-6.41Z" clip-rule="evenodd"></path></svg>
                <h5>Globex Corporation</h5>
            </div>
            <div>
                <h1>sidebar</h1>
            </div>
        </div>
    )
}

export default Sidebar