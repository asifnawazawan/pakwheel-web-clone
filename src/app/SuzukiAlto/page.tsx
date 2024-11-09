import Link from "next/link"
export default function SuzukiAlto(){
    return(
        <div>
            <div>
        <h2 className="text-4xl flex justify-evenly font-bold text-center ">Suzuki ALTO 2024 price in Pakistan Image, Specs & Reviews

        </h2>
        </div>
            <img className="flex justify-between items-center" src="ALTO.png" alt="" />
            <h1 className="justify-center items-center ">Suzuki Alto is available in 1 engine option(s) i.e. Petrol. The Suzuki Alto is capable of generating a horsepower of 39 HP and a torque of 56 Nm with a top speed of 140 KM/H. Suzuki Alto is available in 2 transmission option(s) i.e Manual & Automatic. The Alto car has a fuel average of 18 KM/L with a fuel tank capacity of 27L. With the dimensions of 3395 mm in length, 1475 mm in width, and 1490 mm in height ,the Alto has a seating capacity of 4 persons.
            </h1>
            
            <h3 className="text-center text-2xl font-medium text-green-600">PKR 32,00,000</h3>

    
             <button className="flex justify-center text-3xl font-semibold text-center py-2 px-1 rounded-md bg-blue-600 text-white"><Link href="/thankyou">Check Out</Link></button>
        
        </div>
    )
};