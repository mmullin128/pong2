

export default function BackButton({id, goto}) {

    return (
        <button id={id} className='back-btn' onClick={() => {
            goto();
        }}>back</button>
    );
}