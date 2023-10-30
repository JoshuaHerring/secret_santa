import { Component } from "react";
import "./Header.css"
import logo from  "../../images/pair-up.png"

export default class Header extends Component {

    render() {
        return(
            <header>
                <img src={logo} alt="Secret Santa Logo"></img>
                <h1>Pair Generator</h1>
            </header>
        )
    }
}