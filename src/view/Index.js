import React, { useEffect } from 'react'
import Aos from 'aos'
import 'aos/dist/aos.css'

import BackgroundStory from '../components/BackgroundStory'
import BackgroundStoryImages from '../components/BackgroundStoryImages'
import Main from '../components/Main'
import Roadmap from '../components/Roadmap'

function Index() {
    useEffect(() => {
        Aos.init({ duration: 600 })
    }, [])

    return (
        <div>
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
    )
}

export default Index
