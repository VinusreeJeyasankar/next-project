"use client"
import React, { useState } from 'react';
import Link from 'next/link';
import "../assets/sideBar.css";
import { useRouter } from 'next/navigation';
import { SlHome } from 'react-icons/sl';
import { BsInfoSquare, BsEnvelopeAt } from 'react-icons/bs';
import { FaTshirt, FaRedhat } from 'react-icons/fa';

export default function Sidebar() {
    const router = useRouter();
    const [showSidebar, setShowSidebar] = useState(true); // Set default to true to display sidebar

    const toggleSidebar = () => {
        setShowSidebar(!showSidebar);
    };

    return (
        <div className={`sidebar ${showSidebar ? 'show' : ''}`}>
            <div className="sidebar-toggler" onClick={toggleSidebar}>
                {/* Sidebar Toggler */}
                <div className="toggler-icon">
                    <span></span>
                    <span></span>
                    <span></span>
                </div>
            </div>
            <div className="sidebar-content">
                <Link href="/" className="logo">
                    Dashboard
                </Link>
                <MenuItem name="Home" route="/home" icon={<SlHome />} />
                <MenuItem name="T-Shirts" route="/t-shirts" icon={<FaTshirt />} />
                <MenuItem name="Hats" route="/hats" icon={<FaRedhat />} />
                <MenuItem name="About Us" route="/about" icon={<BsInfoSquare />} />
                <MenuItem name="Contact" route="/contact" icon={<BsEnvelopeAt />} />
            </div>
        </div>
    );
}

const MenuItem = ({ name, route, icon }) => {
    const router = useRouter();
    const isActive = router.pathname === route;

    return (
        <Link href={route} className={`menu-item ${isActive ? 'active' : ''}`}>
            <span className="icon">{icon}</span>
            <span className="text">{name}</span>
        </Link>
    );
};
