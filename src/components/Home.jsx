export default function Home() {
    return (
        <div className="flex flex-col items-center justify-center h-screen bg-gradient-to-r from-green-500 to-blue-600 text-white text-center p-6">
            <h1 className="text-6xl font-extrabold tracking-wide">Elevate Your Fitness Journey</h1>
            <p className="mt-4 text-2xl max-w-lg">
                Join a community that empowers you to achieve your goals. Whether you are a beginner or a pro, we have something for everyone!
            </p>
            <a href="#about" className="mt-6 inline-block px-8 py-4 bg-white text-green-600 rounded-lg shadow-lg hover:bg-green-600 hover:text-white transition duration-300">
                Get Started Today
            </a>
            <div className="mt-10 flex space-x-4">
                <a href="#classes" className="text-lg underline">Our Classes</a>
                <a href="#trainers" className="text-lg underline">Meet Our Trainers</a>
                <a href="#testimonials" className="text-lg underline">Success Stories</a>
            </div>
        </div>
    )
}
