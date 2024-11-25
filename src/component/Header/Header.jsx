import react from 'react'

function Header() {

    return (
        <>
            <div>
                <div className='m-5 flex justify-between items-center'>
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"><path fill="#1677FF" fill-rule="evenodd" d="M12 24c6.627 0 12-5.373 12-12S18.627 0 12 0 0 5.373 0 12s5.373 12 12 12Zm3.744-18.41c.182-.647-.446-1.03-1.02-.621l-8.008 5.705c-.622.443-.524 1.326.147 1.326h2.109v-.016h4.11l-3.35 1.181-1.476 5.245c-.182.647.446 1.03 1.02.621l8.008-5.705c.622-.443.524-1.326-.147-1.326H13.94l1.805-6.41Z" clip-rule="evenodd"></path></svg>
                    <div flex justify-end items-center>
                        <div className='rounded-full bg-[#F7F8F9] p-[8px]'>
                            <span role="img" aria-label="bell" class="anticon anticon-bell"><svg viewBox="64 64 896 896" focusable="false" data-icon="bell" width="1em" height="1em" fill="currentColor" aria-hidden="true"><path d="M816 768h-24V428c0-141.1-104.3-257.7-240-277.1V112c0-22.1-17.9-40-40-40s-40 17.9-40 40v38.9c-135.7 19.4-240 136-240 277.1v340h-24c-17.7 0-32 14.3-32 32v32c0 4.4 3.6 8 8 8h216c0 61.8 50.2 112 112 112s112-50.2 112-112h216c4.4 0 8-3.6 8-8v-32c0-17.7-14.3-32-32-32zM512 888c-26.5 0-48-21.5-48-48h96c0 26.5-21.5 48-48 48zM304 768V428c0-55.6 21.6-107.8 60.9-147.1S456.4 220 512 220c55.6 0 107.8 21.6 147.1 60.9S720 372.4 720 428v340H304z"></path></svg></span>
                            <div>
                                <img src="" alt="" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Header
