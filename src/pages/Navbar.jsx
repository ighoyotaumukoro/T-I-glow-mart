import {ShoppingCart,User, Search} from "lucide-react"
import {Link} from "react-router-dom"

function Navbar() {
    return (
        <div className="top-0 p-3 bg-gray-300 left-0 w-full flex flex-row justify-between fixed items-center">
            <div className="flex flex-row items-center gap-20">
            <img src="/asset/Logo.png" className="w-20 h-auto" />
     </div>
     <div className="flex flex-row">
       <img src="/asset/nigeria-logo.png" className="w-6 h-4 mr-1 "/>
       <span className="text-black ml-1 pr-2 text-sm">NGN</span>
        <Search className="h-5 w-5 cursor-pointer mx-3"/>
       <Link to="/profile" className="text-black">
       <User className="h-5 w-5 mr-3 cursor-pointer"/>
       </Link>
      
       <ShoppingCart className="w-5 h-5 cursor-pointer"/>
      </div>
      
        </div>
       
    );
};
export default Navbar;