

export const JournalEntry = () => {
    return (
        <div className='journal__entry pointer'>

            <div 
                className='journal__entry-picture'
                style={{
                    backgroundSize:'cover',
                    backgroundImage:'url(https://p4.wallpaperbetter.com/wallpaper/902/251/707/space-the-suit-costume-weightlessness-wallpaper-preview.jpg)'
                }}
            >

            </div>

            <div className='journal__entry-body'>
                <p className='journal__entry-title'>
                    Un Nuevo Día
                </p>

                <p className='journal__entry-content'>
                    asdjkhasdjkhaskjdhaksjdhjkasdhajksdhaskjdajkshdjkasdjkasdjkahdkjsakhjdakjdh
                </p>
            </div>

            <div className='journal__entry-date-box'>
                <span>Monday</span>
                <h4>28</h4>
            </div>

        </div>
    );
};
