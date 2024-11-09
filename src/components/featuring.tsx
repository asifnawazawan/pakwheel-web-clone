import Link from "next/link"
export default function featuring(){
    return(
        <div>
            
        <h1 className="flex-row text-black text-left font-semibold gap-20">Featured New Car</h1>
    <div></div>
            
               <div className="flex justify-evenly">
                
                    <button className="flex-row gap-10">Popular</button>
                    <button className="flex-row gap-10">Upcomming</button>
                    <button className="flex-row gap-10">New Launch</button>
                </div> 
   <div className="flex justify-center items-center">
<h1 className="text-blue-600 font-medium ">
           
            <img src="ALTO.png" alt="" />
            <div>
            <button><Link href="/SuzukiAlto">Suzuki ALTO</Link></button>
            
            </div>
            <div>32 Lac Rupees</div>
            
             </h1>
             <h1 className="text-blue-600 font-medium">
                
             
            <img src="CITY.jpg" alt="" />
            <div>
                <button><Link href="/hondaCity">HONDA CITY</Link></button>
            </div>
            <div>50 Lac Rupees</div>
            </h1>
            <h1 className="text-blue-600 font-medium">
           <div>
            <img src="civics.jpg" alt="" />
            <button><Link href="/hondaCivic">HONDA CIVIC</Link></button>
            </div> 
            <div>80 Lac Rupees</div>
            </h1>
            <h1 className="text-blue-600 font-medium">
            
            <img src="corolla.jpg" alt="" />
            <div>
            <button><Link href="/Corolla">Corolla</Link></button>
            </div>
            <div>60 Lac Rupees</div>
            
      </h1>
      </div>
        </div>
        

    
    )
}