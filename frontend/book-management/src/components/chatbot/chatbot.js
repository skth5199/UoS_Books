import {useState} from 'react'
import Para from '../paragrapgh/para'
function Chatboot(props) {
    const[chatBot , setChatBot]=useState(false);
    return (
       <>
              {/* chatbot and chat button */}
      <div className="fixed w-1/4 right-0 bottom-0 pb-4 pr-1">
      {/* <i class="fa fa-commenting fa-2x" aria-hidden="true" className="cursor-pointer"></i> */}
            <div className="flex justify-end">
           <button className="bg-gray-900 hidden lg:block xl:block 2xl:block hover:text-blue-500 border border-transparent hover:border-blue-500 rounded text-white text-sm pr-2 pl-2 pt-1 pb-1 focus:outline-none" onClick={()=>{setChatBot(true)}}>
               Chat with seller
            </button>
             <div className="text-3xl block lg:hidden xl:hidden 2xl:hidden" onClick={()=>{setChatBot(true)}}><p><i class="fa fa-comments" aria-hidden="true"></i> </p></div>
            </div>
          </div>
          <div className="fixed w-4/5 lg:w-1/4 xl:w-1/4 2xl:w-1/4 right-0 z-50 bottom-0 pb-4 pr-1">
      {/* <i class="fa fa-commenting fa-2x" aria-hidden="true" className="cursor-pointer"></i> */}
          {chatBot ? 
           <div className="bg-white w-full  rounded  shadow-2xl">
                <div className="flex justify-between items-center bg-blue-500 pt-3 pb-3 pr-2 pl-2 rounded-t border border-white">
                 <div className="font-semibold text-white text-xl"><Para text="Seller Name"/></div>
                 <div className="font-semibold text-white text-xl cursor-pointer hover:text-black" onClick={()=>{setChatBot(false)}}><Para text="&times;"/></div>
                </div>
                <div className="chat-text-area pr-2 pl-2 shadow-inner overflow-y-scroll">
                    messeges will be display here
                </div>
                <div className="border-t-2 border-blue-500 pt-4 pb-4 pr-2 pl-2 ">
                    <div className="w-full flex items-center bg-gray-200 rounded-full">
                    <div className="w-11/12">
                    <input type="text"
                     placeholder="Type Here..."
                     className="w-full bg-gray-200 rounded-full pt-2 pb-2 pl-3 focus:outline-none"
                    />
                    </div>
                    <div><i class="fa fa-paper-plane hover:text-blue-600 cursor-pointer" aria-hidden="true"></i></div>
                </div>
                </div>
            </div>
            :""}
          </div>
      {/* chatbot and chat button end*/}
      </>
    );
  }
  
  export default Chatboot;
  