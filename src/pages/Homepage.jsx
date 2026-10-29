import {products} from "../data/product"

function Homepage() {
    return(
    <>
    <div className="w-full min-h-screen bg-hite pt-24 px-4 md:px-8">
<h2 className="text-xl font-bold mb-4">Our Products</h2>
<div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
{products.map((item) => (<div key={item.id} className="bg-white border rounded-lg overflow-hidden shadow-sm hover:shadow-md"><img src ={item.image} alt={item.name} className="w-full h-48 md:h-60 lg-h-64 object-contain bg-gray-50 p-2"/>
<div className="p-3">
    <h3 className="text-sm font-medium truncate">{item.name}</h3>
    <p className="text-sm font-bold mt-1">{item.price.toLocalString()}</p>
</div>
</div>
))}


</div>
    </div>
    </>
    )
    }
    
    export default Homepage;