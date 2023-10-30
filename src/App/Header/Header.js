import { Component } from "react";
import "./Header.css"
import logo from  "../../images/pair-up.png"

// A basic header with a logo and an h1
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