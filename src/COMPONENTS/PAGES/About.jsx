import { useState } from "react"
import Dropzone from "../PARTS/Dropzone";

function About(){
    // const [file,setFile]=useState(null);
    

    
    return(
        <>
            <div>
                <div className="px-10 py-20 font-mono">
                    ABOUT TEAM COME HERE
                </div>
                <div className=" px-10 py-10">
                   <div className="px-10 py-4">DROPBOX IS HERE</div>
                   <div className="outline-dashed ml-20 mr-20 py-10 w-auto mt-5 px-10">
                    <Dropzone/>
                   </div>
                </div>
            </div>
        </>
    )
}
export default About