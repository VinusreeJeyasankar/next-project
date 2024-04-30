"use client"
import { useState } from 'react';
import Link from 'next/link';
import "../../assets/home.css";
import Sidebar from '../sideBar';
import { useRouter } from 'next/navigation';

function HomePage() {
    const router = useRouter();
    const [showSidebar, setShowSidebar] = useState(false);
    const [selectedMenuItem, setSelectedMenuItem] = useState(null);

    const handleMenuItemClick = (route) => {
        setSelectedMenuItem(route);
        setShowSidebar(false);
    };

    return (
        <div className="flex">
            <Sidebar show={showSidebar} setter={setShowSidebar} onItemClick={handleMenuItemClick} className="sidebar"/>
            <div className="content">
                <h1>Welcome to Next.js!</h1>
                <Link href="/home/posts">First Post</Link>
                {/* Render content based on selectedMenuItem */}
                {selectedMenuItem && (
                    <div className="selected-content">
                        <h2>Selected Menu Item: {selectedMenuItem}</h2>
                        {/* Load content specific to selectedMenuItem */}
                        {/* You can use conditional rendering or switch case to load different content */}
                        {router.pathname === '/' && <p>Home content goes here</p>}
                        {router.pathname === '/t-shirts' && <p>T-Shirts content goes here</p>}
                        {router.pathname === '/hats' && <p>Hats content goes here</p>}
                        {router.pathname === '/about' && <p>About Us content goes here</p>}
                        {router.pathname === '/contact' && <p>Contact content goes here</p>}
                    </div>
                )}
            </div>
        </div>
    );
}

export default HomePage;

