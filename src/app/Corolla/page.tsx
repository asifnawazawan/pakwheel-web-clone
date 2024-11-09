import Link from "next/link"
export default function hondaCivic(){
    return(
        <div>
            <div>
        <h2 className="text-4xl flex justify-evenly font-bold text-center ">Honda Corolla 2024 price in Pakistan Image, Specs & Reviews

        </h2>
        </div>
            <img className="flex justify-between items-center" src="Corolla.jpg" alt="" />
            <h1 className="justify-center items-center ">Toyota Corolla is available in 1 engine option(s) i.e. Petrol. The Toyota Corolla is capable of generating a horsepower of 84 - 138 HP and a torque of 121 - 173 Nm with a top speed of 180 - 240 KM/H. Toyota Corolla is available in 2 transmission option(s) i.e Manual & Automatic. The Corolla car has a fuel average of 8 - 14 KM/L with a fuel tank capacity of 55L. With the dimensions of 4620 mm in length, 1775 mm in width, and 1460 mm in height ,the Corolla has a seating capacity of 5 persons..
            </h1>
            
            <h3 className="text-center text-2xl font-medium text-green-600">PKR 60,00,000</h3>

    
             <button className="flex justify-center text-3xl font-semibold text-center py-2 px-1 rounded-md bg-blue-600 text-white"><Link href="/thankyou">Check Out</Link></button>
        
        </div>
    )
};