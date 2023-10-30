import "./NameTextBox.css"

export default function NameTextBox({names, ids, pairs}) {
    if(names && pairs == "") {

        return(
            <ul className="name_holder">
        {names.map((one_name, i) => {
            return <li key={ids[i]}>{one_name}</li>
        })}
    </ul>
        )
    } else{
        return(
            <ul className="pair_holder">
                {pairs.map((one_pair, i) =>{
                    return <li key={i}><span className="name">{one_pair[0]}</span> is with <span className="name">{one_pair[1]}</span></li>
                })}
            </ul>
        )
    }
}