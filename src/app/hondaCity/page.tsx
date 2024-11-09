import Link from "next/link"
export default function hondaCivic(){
    return(
        <div>
            <div>
        <h2 className="text-4xl flex justify-evenly font-bold text-center ">Honda City 2024 price in Pakistan Image, Specs & Reviews

        </h2>
        </div>
            <img className="flex justify-between items-center" src="CIVICS.jpg" alt="" />
            <h1 className="justify-center items-center ">The price of Honda City 2024 in Pakistan ranges from PKR 4,649,000 for the base variant 1.2L M/T to PKR 5,849,000 for the top of the line 1.5L ASPIRE CVT variant. These prices of Honda City in Pakistan are ex-factory.
            </h1>
            
            <h3 className="text-center text-2xl font-medium text-green-600">PKR 50,00,000</h3>

    
             <button className="flex justify-center text-3xl font-semibold text-center py-2 px-1 rounded-md bg-blue-600 text-white"><Link href="/thankyou">Check Out</Link></button>
        
        </div>
    )
};