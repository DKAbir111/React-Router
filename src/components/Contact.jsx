// Contact.js
export default function Contact() {
    return (
        <div className="max-w-7xl mx-auto px-4 py-12">
            <h2 className="text-4xl font-bold text-green-600 text-center">Get in Touch</h2>
            <form className="mt-8 max-w-xl mx-auto bg-white p-6 rounded-lg shadow-md">
                <div className="mb-4">
                    <label className="block mb-2" htmlFor="name">Name</label>
                    <input className="w-full p-2 border border-gray-300 rounded" type="text" id="name" required />
                </div>
                <div className="mb-4">
                    <label className="block mb-2" htmlFor="email">Email</label>
                    <input className="w-full p-2 border border-gray-300 rounded" type="email" id="email" required />
                </div>
                <div className="mb-4">
                    <label className="block mb-2" htmlFor="message">Message</label>
                    <textarea className="w-full p-2 border border-gray-300 rounded" id="message" rows="4" required></textarea>
                </div>
                <button type="submit" className="w-full px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition">
                    Send Message
                </button>
            </form>
        </div>
    );
}
