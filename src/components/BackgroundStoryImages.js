import React from 'react'
import Images from '../assets/BackgroundStoryImages'

function BackgroundStoryImages(props) {
    return (
        <div className="w-full py-16 px-12 md:px-20">
            <div className="grid md:grid-cols-4 gap-6">
                <div>
                    <img className="rounded-2xl" src={Images.Image1} alt="" />
                    <p className="text-center mt-8 font-bold text-2xl tracking-wide">Ghost Rider</p>
                </div>
                <div>
                    <img className="rounded-2xl" src={Images.Image2} alt="" />
                    <p className="text-center mt-8 font-bold text-2xl tracking-wide">Knight</p>
                </div>
                <div>
                    <img className="rounded-2xl" src={Images.Image3} alt="" />
                    <p className="text-center mt-8 font-bold text-2xl tracking-wide">Venom</p>
                </div>
                <div>
                    <img className="rounded-2xl" src={Images.Image4} alt="" />
                    <p className="text-center mt-8 font-bold text-2xl tracking-wide">Sheikh</p>
                </div>
            </div>
        </div>
    )
}

export default BackgroundStoryImages
