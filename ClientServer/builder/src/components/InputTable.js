

export default function InputTable({ id, data=[] }) {
    /* data = [
        {
            "name": "Players",
            "type": "number",
            "default" : "2",
            "min" : "2",
            "max" : "4"
        },
        {
            "name": "Abilities",
            "type": "number",
            "default" : "1",
            "min" : "0",
            "max" : "3"
        },
        {
            "name": "Player Speed",
            "type": "range",
            "default" : "5",
            "min" : "0",
            "max" : "10"
        },
        {
            "name": "Player Size",
            "type": "range",
            "default" : "5",
            "min" : "0",
            "max" : "10"
        },
        {
            "name": "Ball Speed",
            "type": "range",
            "default" : "5",
            "min" : "0",
            "max" : "10"
        },
        {
            "name": "Ball Size",
            "type": "range",
            "default" : "5",
            "min" : "0",
            "max" : "10"
        },
        {
            "name": "Ball Spin",
            "type": "range",
            "default" : "5",
            "min" : "0",
            "max" : "10"
        }
    ]
    */

    let components = [];
    let ID;
    for (let i=0; i<data.length; i++) {
        ID = `input-${ID}-${i}`;
        components.push(
            <div className="table-input">
                
                <label 
                    className="form-label" 
                    for={ID} 
                >
                
                    {data[i].name}
                
                </label>
                
                <input 
                    className="form-input" 
                    type={data[i].type} 
                    id={ID} 
                    name={ID} 
                    value={data[i].default} 
                    min={data[i].min} 
                    max={data[i].max} 
                />

                <br></br>
            
            </div>
        )
    }
    return (
        <div 
            className={`input-table`} 
            id={id}
        >
            {components}
        </div>
    );
}