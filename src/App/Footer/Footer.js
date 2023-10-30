import { Component } from "react";
import './Footer.css'

// Designs a baisc footer with copyright and my name
export default class Footer extends Component {
    render() {
        return (
            <footer>
                <p>&copy; 2023</p>
                <p>Josh Herring</p>
            </footer>
        )
    }
}