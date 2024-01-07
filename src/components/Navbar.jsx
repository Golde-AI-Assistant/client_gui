import { Flex, TextInput } from "@tremor/react"
import { SearchIcon } from "@heroicons/react/outline"

const Navbar = () => {
    var auth = true;
    return (
        <div id="top"
            className="relative w-full sm:flex justify-between item-center p-2"
        >
            <h1 className="font-bold text-gray-300"> Dashboard </h1>
            <Flex justifyContent="end">
                <div className="py-2 me-3">
                    <TextInput icon={SearchIcon} placeholder="Search" />
                </div>
                {!auth ? (
                    <div className="flex">
                        <a href="/client-gui/auth">
                            <button className="bg-indigo-500 hover:bg-indigo-700 text-white font-bold py-2 px-4 rounded me-3">
                                Sign In
                            </button>
                        </a>
                        <a href="/client-gui/auth">
                            <button className="bg-indigo-500 hover:bg-indigo-700 text-white font-bold py-2 px-4 rounded">
                                Sign Up
                            </button>
                        </a>
                    </div>
                ) : (
                    <div className="flex">
                        <a href="/client-gui/auth">
                            <button className="bg-indigo-500 hover:bg-indigo-700 text-white font-bold py-2 px-4 rounded">
                                Sign Out
                            </button>
                        </a>
                    </div>
                )}

            </Flex>
        </div>
    )
}

export default Navbar;