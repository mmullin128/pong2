

export default function BackButton({id, onClick=[]}) {

    return (
        <button 
            id={id} 
            className='back-btn' 
            onClick={() => {
                for (let fn of onClick) {
                    fn();
                }
            }}
        >
            back
            
        </button>
    );
}