import React, { useEffect } from 'react'
import { Transaction } from './Transaction'

export const ShowTransaction = (props) => {
    // console.log(props)

    useEffect(() => {
        props.setTransactions(props.transactions)
    }, [])

    // const transactions = props.transactions
    return (
        <div>
            <h1>Transaction</h1>
            <table className="table table-dark">
                <thead>
                    <tr>
                        <th>Id</th>
                        <th>Name</th>
                        <th>Amount</th>
                    </tr>
                </thead>
                <tbody>{
                    props.transactions?.map((transaction) => {
                        return (
                            <tr>
                                <td>{transaction.id}</td>
                                <td>{transaction.name}</td>
                                <td>{transaction.amount}</td>
                            </tr>
                        )
                    })
                }
                </tbody>
            </table>

        </div>
    )
}
