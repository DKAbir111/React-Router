import { Link } from 'react-router-dom';
import { HiMiniBars3 } from 'react-icons/hi2';
import { RxCross2 } from 'react-icons/rx';
import { useState } from 'react';

const Navbar = () => {
    const [active, setActive] = useState(true);
    const handleClick = () => {
        setActive(!active);
    };

    return (
        <nav className="bg-gray-800 shadow-md">
            <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
                <h1 className="text-2xl font-bold text-white">FitZone</h1>

                <span className='md:hidden text-2xl text-white z-10' onClick={handleClick}>
                    {active ? <HiMiniBars3 /> : <RxCross2 className='font-extrabold' />}
                </span>

                <ul className={`md:static md:flex md:space-x-6 absolute right-3 bg-gray-800 md:bg-transparent px-7 py-2 rounded-md md:shadow-none duration-700 ${active ? '-top-60' : 'top-12'}`}>
                    <li>
                        <Link className="text-white hover:text-green-400 transition" to="/">Home</Link>
                    </li>
                    <li>
                        <Link className="text-white hover:text-green-400 transition" to="/classes">Classes</Link>
                    </li>
                    <li>
                        <Link className="text-white hover:text-green-400 transition" to="/trainers">Trainers</Link>
                    </li>
                    <li>
                        <Link className="text-white hover:text-green-400 transition" to="/testimonials">Testimonials</Link>
                    </li>
                    <li>
                        <Link className="text-white hover:text-green-400 transition" to="/contact">Contact</Link>
                    </li>
                </ul>
            </div>
        </nav>
    );
};

export default Navbar;
