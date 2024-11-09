import Link from "next/link";

export default function navbar(){
    return(

  
<ul className=" flex gap-20 h-10">
<img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTy-SY3SMZPPgQNiqZUeSUnpMouuy0KAVbWkeW6GSCoeWfOSHX0nZkEKb9QDyvt0qTBbg&usqp=CAU" alt="" />
    <li> <Link href="/">New Car</Link></li>
    <li>Used Car</li>
  <li>Bike</li>
  <li>Auto Store</li>
  <li>Vedio</li>
  <li>Foums</li>
  <li>Blog</li>
  <li>More</li> 
  <button className="rounded-md px-5 bg-red-600 text-white">Post an Ad</button>

  </ul>
    )
    
}