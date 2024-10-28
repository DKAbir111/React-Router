// Footer.js
const Footer = () => {
    return (
        <footer className="bg-gray-800 text-white py-6">
            <div className="max-w-7xl mx-auto px-4">
                <div className="flex flex-col md:flex-row justify-between items-center">
                    <div className="text-center md:text-left">
                        <h2 className="text-lg font-bold">FitZone</h2>
                        <p className="mt-1">Your fitness journey starts here!</p>
                    </div>
                    <div className="mt-4 md:mt-0">
                        <ul className="flex space-x-4">
                            <li>
                                <a className="hover:text-green-400 transition" href="#about">About Us</a>
                            </li>
                            <li>
                                <a className="hover:text-green-400 transition" href="#classes">Classes</a>
                            </li>
                            <li>
                                <a className="hover:text-green-400 transition" href="#trainers">Trainers</a>
                            </li>
                            <li>
                                <a className="hover:text-green-400 transition" href="#contact">Contact</a>
                            </li>
                        </ul>
                    </div>
                    <div className="mt-4 md:mt-0 text-center">
                        <p>&copy; {new Date().getFullYear()} FitZone. All rights reserved.</p>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
