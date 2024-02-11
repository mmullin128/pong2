

export default function MenuButton({id, buttonText, onClick=[]}) {

    return (
        <button 
            id={id} 
            className='menu-btn' 
            onClick={() => {
                for (let fn of onClick) {
                    fn();
                }
            }}
        >
            
            {buttonText}
            
        </button>
    );
}