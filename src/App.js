import BackgroundStory from './components/BackgroundStory'
import BackgroundStoryImages from './components/BackgroundStoryImages'
import Main from './components/Main'
import Navbar from './components/Navbar'
import Roadmap from './components/Roadmap'

function App() {
    return (
        <div className="bg-black min-h-screen text-white font-open-sans">
            <div className="py-2 md:py-16">
                <Navbar />
                <div className="mt-20 md:mt-36">
                    <Main />
                </div>
                <div className="mt-12 md:mt-36 flex items-center justify-between space-x-8">
                    <BackgroundStory />
                </div>
                <div className="mt-12 md:mt-24 bg-neutral-900">
                    <BackgroundStoryImages />
                </div>
                <div className="mt-12 md:mt-36">
                    <Roadmap />
                </div>
            </div>
        </div>
    )
}

export default App
