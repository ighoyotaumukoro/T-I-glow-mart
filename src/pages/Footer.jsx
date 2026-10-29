function Footer(){
    return(
        <div className="bg-black text-white lg:grid-cols-2 grid-cols-1 p-4 mt-20">
            <div className="ml-3">
<p className="font-bold">SIGN UP FOR DISCOUNTS & UPDATES</p>
<input type="text" placeholder="Enter your email address" className="bg-gray-700 rounded px-3 text-white"/>

<p className="w-30 h-8 bg-red-700 text-white btn mt-5 rounded text-center text-sm justify-center">Subscribe</p>
</div>
        </div>
    )
}
export default Footer;