import { NoteAppBar } from "./NoteAppBar";


export const NoteScreen = () => {
    return (
        <div className='notes__main-content'>

            <NoteAppBar />

            <div className='notes__content'>

                <input
                    type='text'
                    placeholder='Some awesome title'
                    className='notes__title-input'
                    autoComplete='off'
                />

                <textarea 
                    placeholder='Whats happened Today'
                    className='notes__textarea'
                >

                </textarea>

                <div className='notes__image'>
                    <img 
                        src='https://p4.wallpaperbetter.com/wallpaper/135/692/935/sci-fi-astronaut-jellyfish-space-hd-wallpaper-preview.jpg'
                        alt='astronaut-space'
                    />

                </div>
            </div>
        </div>
    );
};
