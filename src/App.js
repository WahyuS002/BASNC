import Navbar from './components/Navbar'
import Index from './view/Index'

function App() {
    return (
        <div className="bg-black min-h-screen text-white font-open-sans">
            <div className="py-2 md:py-16">
                <Navbar />
                <Index />
            </div>
        </div>
    )
}

export default App
