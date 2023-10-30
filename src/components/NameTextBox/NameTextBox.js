import "./NameTextBox.css"

/**
 * Hanldes the html for the textbox depending on weather or not the page is in array view or pair view
 */
export default function NameTextBox({names, ids, pairs}) {
    // If names exists and pairs is empty
    if(names && pairs == "") {
        // return html to display the names array
        return(
            <ul className="name_holder">
        {names.map((one_name, i) => {
            return <li key={ids[i]}>{one_name}</li>
        })}
    </ul>
        )
    } else{
        // else return html to display the pair array
        return(
            <ul className="pair_holder">
                {pairs.map((one_pair, i) =>{
                    return <li key={i}><span className="name">{one_pair[0]}</span> is with <span className="name">{one_pair[1]}</span></li>
                })}
            </ul>
        )
    }
}