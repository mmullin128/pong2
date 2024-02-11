

export default function Lobby({ id, teams={"Good Guys": {}, "Bad Guys": {}} }) {


    let components = [];
    for (let team in teams) {
        components.push(
            <div id={team}>

            </div>
        )
    }
    return (
        <div 
            className={`lobby`} 
            id={id}
        >
            
            {components}
        
        </div>
    );
}