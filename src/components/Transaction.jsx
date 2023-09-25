import React, { useState } from 'react'
import { Withdraw } from './Withdraw'
import { Deposit } from './Deposit'
import { ShowTransaction } from './ShowTransaction'
import { Routes, Route } from 'react-router-dom'
import { PageNotFound } from './PageNotFound'
import { Bank } from './Bank'
import { ToastContainer, toast } from 'react-toastify'
import "react-toastify/dist/ReactToastify.css";

export const Transaction = () => {

    const withdraw = (data) => {

        console.log(data)
        transactions.map((transaction) => {
            if (transaction.id === parseInt(data.id)) {
                transaction.amount -= parseFloat(data.amount)
                if (transaction.amount < 0) {
                    transaction.amount += parseFloat(data.amount)
                    toast.error('Not Enough Money Available', {
                        position: "top-right",
                        autoClose: 3000,
                        hideProgressBar: false,
                        closeOnClick: true,
                        pauseOnHover: true,
                        draggable: true,
                        progress: undefined,
                        theme: "light",
                    });
                }
                else {
                    toast.success('Transaction Successfull', {
                        position: "top-right",
                        autoClose: 3000,
                        hideProgressBar: false,
                        closeOnClick: true,
                        pauseOnHover: true,
                        draggable: true,
                        progress: undefined,
                        theme: "dark",
                    });
                }
            }
        })
        setTransactions(transactions);
    }

    var validations = {

    }


    const deposit = (data) => {
        transactions.map((transaction) => {
            if (transaction.id === parseInt(data.id)) {
                transaction.amount += parseFloat(data.amount);
            }
        })
        setTransactions(transactions)
        toast.success('Transaction Successfull', {
            position: "top-right",
            autoClose: 3000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "dark",
        });
    }

    const [transactions, setTransactions] = useState([
        {
            id: 1,
            name: "abc",
            amount: 10000,
        },
        {
            id: 2,
            name: "def",
            amount: 20000,
        },
        {
            id: 3,
            name: "ghi",
            amount: 30000,
        },
        {
            id: 4,
            name: "jkl",
            amount: 40000,
        },

    ])

    return (
        <div>
            <Routes>
                <Route path="/" element={<Bank />}></Route>
                <Route path="/*" element={<PageNotFound />}></Route>
                <Route path="/showTransactions" element={<ShowTransaction transactions={transactions} setTransactions={setTransactions} />
                }></Route>
                <Route path="/----" element={<Transaction />}></Route>
                <Route path="/withdraw" element={<Withdraw transactions={transactions} setTransactions={setTransactions} withdraw={withdraw} />
                }></Route>
                <Route path="/deposit" element={<Deposit transactions={transactions} setTransactions={setTransactions} deposit={deposit} />
                }></Route>
            </Routes>
        </div>
    )
}
