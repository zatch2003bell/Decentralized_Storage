import { NavLink } from "react-router-dom"
function Header (){
    let address = false;
    return (
        <>
                <header className="sticky shadow-lg  top-0   z-50 ">
                    <nav className="px-7  lg:px-7 py-2.5">
                        <div className="flex flex-wrap items-center justify-between  max-w-screen-xl mx-auto ">
                        <img
                                src="https://i.pinimg.com/736x/58/30/82/583082fa59243490abd162421ae0290d.jpg"
                                className="mr-3 h-20 "
                                alt="Logo"
                            /> 
                        

                            <div className=" px-10 flex flex-wrap font-dance items-center flex-row lg:flex lg:order-1 lg:w-auto">
                                <ul className="  text-xl lg:space-x-10 lg:flex-row w-full flex flex-col justify-between mt-3 items-center">
                                <li className="border-5 px-2 py-2 rounded-t-lg
                                        hover:text-white hover:bg-slate-700 hover:shadow-2xl  transform hover:translate-y-3 duration-500">
                                        <NavLink to="/">
                                                Home
                                        </NavLink>
                                    </li>
                                    <li className="border-5 px-2 py-2 rounded-t-lg
                                        hover:text-white hover:bg-slate-700 hover:shadow-2xl  transform hover:translate-y-3 duration-500">
                                        <NavLink to="/Stegnography">
                                            Steganograpghy
                                        </NavLink>
                                    </li>
                                    <li className="border-5 px-2 py-2 rounded-t-lg
                                        hover:text-white hover:bg-slate-700 hover:shadow-2xl  transform hover:translate-y-3 duration-500">
                                        <NavLink to="/Blockchain">
                                            Blockchain
                                        </NavLink>
                                    </li>
                                    <li className="border-5 px-2 py-2 rounded-t-lg
                                        hover:text-white hover:bg-slate-700 hover:shadow-2xl  transform hover:translate-y-3 duration-500">
                                        <NavLink to="/Retrival">
                                            Retrival
                                        </NavLink>
                                    </li>
                                    <li className="border-5 px-2 py-2 rounded-t-lg
                                        hover:text-white hover:bg-slate-700 hover:shadow-2xl  transform hover:translate-y-3 duration-500">
                                        <NavLink to="/Detail">
                                                Detail
                                        </NavLink>
                                    </li>
                                    <li className="border-5 px-2 py-2 rounded-t-lg
                                        hover:text-white hover:bg-slate-700 hover:shadow-2xl  transform hover:translate-y-3 duration-500">
                                        <NavLink to="/About">
                                            About
                                        </NavLink>
                                    </li>
                                    
                                    
                                </ul>
                                
                            </div>
                            <div className=" font-agu   flex items-center lg:order-2 space-x-2">
                                        {address ? 
                                        <button className="px-3 py-2  border-2 border-slate-700
                                        hover:text-white hover:bg-slate-700 hover:shadow-2xl  transform hover:translate-y-3 duration-500">CONNECTED</button> :
                                        <button className="px-3 py-2  border-2 border-slate-700
                                        hover:text-white hover:bg-slate-700 hover:shadow-2xl  transform hover:translate-y-3 duration-500">Connect Wallet</button>}
                                </div>
                    </div>
                    </nav>
                    
                </header>
        </>
    )
}

export default Header