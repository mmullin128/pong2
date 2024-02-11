

export default function Alert({ id, isRendered, components }) {
    return (
        <div 
            className={`alert ${ isRendered ? "rendered" : "hidden"}`} 
            id={id}
        >
            
            {components}
        
        </div>
    );
}