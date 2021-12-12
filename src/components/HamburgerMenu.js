import { Menu, Transition } from '@headlessui/react'
import { Fragment } from 'react'

export default function HamburgerMenu() {
    return (
        <div className="block md:hidden text-right">
            <Menu as="div" className="relative inline-block text-left">
                <div>
                    <Menu.Button className="inline-flex justify-center w-full px-4 py-2 text-sm font-medium text-white bg-gray-500 rounded-md bg-opacity-20 hover:bg-opacity-30 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                            <path d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM9 15a1 1 0 011-1h6a1 1 0 110 2h-6a1 1 0 01-1-1z" />
                        </svg>
                    </Menu.Button>
                </div>
                <Transition
                    as={Fragment}
                    enter="transition ease-out duration-100"
                    enterFrom="transform opacity-0 scale-95"
                    enterTo="transform opacity-100 scale-100"
                    leave="transition ease-in duration-75"
                    leaveFrom="transform opacity-100 scale-100"
                    leaveTo="transform opacity-0 scale-95"
                >
                    <Menu.Items className="absolute right-0 w-56 mt-2 origin-top-right bg-white divide-y divide-gray-100 rounded-md shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                        <div className="px-1 py-1 ">
                            <Menu.Item>
                                <a href="#home" className="font-medium text-gray-900 group flex rounded-md items-center w-full px-2 py-2 text-sm">
                                    Home
                                </a>
                            </Menu.Item>
                            <Menu.Item>
                                <a href="#background_story" className="font-medium text-gray-900 group flex rounded-md items-center w-full px-2 py-2 text-sm">
                                    Background Story
                                </a>
                            </Menu.Item>
                            <Menu.Item>
                                <a href="#roadmap" className="font-medium text-gray-900 group flex rounded-md items-center w-full px-2 py-2 text-sm">
                                    Roadmap
                                </a>
                            </Menu.Item>
                        </div>
                        <div className="p-3">
                            <Menu.Item>
                                <a
                                    href="https://opensea.io/collection/boredapeskullnotclub"
                                    target="_blank"
                                    rel="noreferrer"
                                    className="font-medium text-white group flex rounded-md items-center w-full p-2 text-base bg-indigo-600 hover:bg-indigo-800 justify-center"
                                >
                                    Buy on Opensea
                                </a>
                            </Menu.Item>
                        </div>
                    </Menu.Items>
                </Transition>
            </Menu>
        </div>
    )
}
