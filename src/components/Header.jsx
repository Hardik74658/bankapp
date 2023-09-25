import React from 'react'
import { Link } from 'react-router-dom'

export const Header = () => {

    const style = {
        backgroundColor: "orangered"
    }

    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-dark" style={style} >
                <Link className="navbar-brand" to="/">BankApp</Link>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav">
                        <li className="nav-item active">
                            <Link className="nav-link" to="/showTransactions">Show Transactions <span className="sr-only">(current)</span></Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/withdraw">Withdraw</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/deposit">Deposit</Link>
                        </li>
                    </ul>
                </div>
            </nav>
        </div>
    )
}
