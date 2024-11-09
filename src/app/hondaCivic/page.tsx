import Link from "next/link"
export default function hondacity(){
    return(
        <div>
            <div>
        <h2 className="text-4xl flex justify-evenly font-bold text-center ">Honda Civic 2024 price in Pakistan Image, Specs & Reviews

        </h2>
        </div>
            <img className="flex justify-between items-center" src="CIVICS.jpg" alt="" />
            <h1 className="justify-center items-center ">Honda Civic is available in 1 engine option(s) i.e. Petrol. The Honda Civic is capable of generating a horsepower of 127 - 176 HP and a torque of 180 - 220 Nm with a top speed of 220 KM/H. Honda Civic is available in 1 transmission option(s) i.e Automatic. The Civic car has a fuel average of 11 KM/L with a fuel tank capacity of 47L. With the dimensions of 4687 mm in length, 1802 mm in width, and 1432 mm in height ,the Civic has a seating capacity of 5 persons.
            </h1>
            
            <h3 className="text-center text-2xl font-medium text-green-600">PKR 80,00,000</h3>

    
             <button className="flex justify-center text-3xl font-semibold text-center py-2 px-1 rounded-md bg-blue-600 text-white"><Link href="/thankyou">Check Out</Link></button>
        
        </div>
    )
};