import React from 'react'
import { Outlet } from 'react-router'
import Header from './Header'
import Card from './Card'
import Navbar from './Navbar'

export default function Layout() {
    return (
        <div>
            <Header />
            <Navbar />
            <Card>
                <Outlet />
            </Card>

        </div>
    )
}