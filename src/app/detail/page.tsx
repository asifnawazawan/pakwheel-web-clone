import Link from "next/link";
export default function detail(){
    return(   
              
  <><div>
        <h1 className="text-5xl font-semibold text-center uppercase">Enter Your Details</h1>
      </div><div>
          <form className="mt-10 flex gap-5 justify-center items-center flex-col bg-orange-500 h-96">
            <input type="Email" className="p-2 rounded-lg w-2/5 border border-red-800" placeholder="Enter Your Email" />
            <input type="Password" className="p-2 rounded-lg w-2/5 border border-red-800" placeholder="Enter Your Password" />
            <ul>
            <li><Link href="/thankyou"> Place Your Order</Link></li>
            </ul>
          </form>


        </div></>
     );
  }
  