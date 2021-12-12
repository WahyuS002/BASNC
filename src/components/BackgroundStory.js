import React from 'react'

function BackgroundStory(props) {
    return (
        <div className="px-12 md:px-20" id="background_story">
            <div className="flex flex-col md:flex-row items-center justify-between">
                <div className="w-full md:w-1/5">
                    <h2 className="text-3xl md:text-5xl font-bold leading-tight text-center md:text-left">Background Story</h2>
                </div>
                <div className="w-full md:w-3/5 mt-4 md:mt-0">
                    <p className="text-gray-400 text-justify">
                        Years ago Apes roamed the world. they always took pleasure in seeing the world, making their life interesting. But everything changed and getting bored. they couldn’t explore
                        anymore. they couldn’t go out and see the trees. The sky. The world. Because their life was ending. But, they managed to continue their story by becoming and evolving into
                        Bored Ape Skull Not Club. their life continued with a new appearance. to join the metaverse.
                    </p>
                </div>
            </div>
        </div>
    )
}

export default BackgroundStory
