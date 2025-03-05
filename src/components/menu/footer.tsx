"use client"

 
import {  Divider, Button } from "@heroui/react"


const Footer = () => {
    return (
    
        <footer className="bg-black text-white py-10">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-6 md:mb-0">
              <div className="flex items-center">
                <div className="select-none  ">
             <div className=" mr-2 flex relative bg-black">
                      <img
                      src="/Coat_of_arms_of_Malawi.svg.png"
                      alt="NYCOM Logo"
                      className="h-20 w-20 select-none"
                      draggable="false"
                      style={{ userSelect: "none", pointerEvents: "none" }}
                     onContextMenu={(e) => e.preventDefault()}
                    />
                     {/* Transparent Overlay to Block Interactions */}
                    <div className="absolute inset-0" onContextMenu={(e) => e.preventDefault()}></div>
                  </div>
                </div>
                <div>
                  <h3 className="text-lg font-bold select-none">National Youth Council of Malawi</h3>
                  <p className="text-sm text-gray-400 flex select-none">
                  Official Government Agency
                  <img
                    src="/icons8_approval_500px_4.png"
                    alt="Government Seal"
                    className="h-6 w-auto ml-2 py-1 select-none"
                    draggable="false"
                    style={{ userSelect: "none", pointerEvents: "none" }}
                    onContextMenu={(e) => e.preventDefault()}
                  />
                  {/* Overlay */}
                  <div className="absolute inset-0" onContextMenu={(e) => e.preventDefault()}></div>
                </p>
                </div>
              </div>
            </div>

            <div className="text-center md:text-right">
              <p className="text-sm text-gray-400">© {new Date().getFullYear()} National Youth Council of Malawi</p>
              <p className="text-sm text-gray-400">All rights reserved</p>
              <div className="mt-2">
                <Button size="sm" variant="light" className="text-gray-300">
                  Privacy Policy
                </Button>
                <Button size="sm" variant="light" className="text-gray-300">
                  Terms of Service
                </Button>
              </div>
            </div>
          </div>

          <Divider className="my-10 bg-gray-800" />

          <div className="text-center text-xs text-gray-400">
            {/* <p>This is an official website of the Government of Malawi</p> */}
            {/* <p>Authorized by the Ministry of Youth and Sports</p> */}
          </div>
        </div>
      </footer>
    
    
    


    )
}
export default Footer;

{/* <footer className="bg-white  ">
    <div className="  w-full px-10 lg:px-24 py-6 lg:py-8">
        <div className="md:flex md:justify-between">
          <div className=" flex  md:mb-0">
              <a href="https://www.malawi.gov.mw/" className="flex items-center">
                  <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTdChewxc5OrAIQ9eid0IBez079MN0eYbC8JA&s" className="h-20 me-3" alt="Malawi_cort_of_arm" />
                        </a>
                        
                        <a href="https://npc.mw/wp-content/uploads/2021/02/MW2063-VISION-FINAL.pdf" className="flex items-center">
                  <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQInEvHo07jfomQrQsPdVq7SVx5YfaYEuhB6SkAcnExslFf77Ht5Rq6rVzpdTj1K6QbGfQ&usqp=CAU" className="h-12  me-3" alt="Malawi 2063" />
              </a>
          </div>
          <div className="grid grid-cols-2 gap-8 sm:gap-6 sm:grid-cols-3">
              <div>
                  <h2 className="mb-4 text-sm font-semibold text-gray-900 uppercase ">Follow us</h2>
                  <ul className="text-gray-500  font-medium">
                      <li className="mb-1">
                          <a href="https://www.facebook.com/nycom.mw" className="hover:underline ">Facebook</a>
                      </li>
                      <li>
                          <a href="https://www.youtube.com/@NationalYouthCouncilofMalawi?sub_confirmation=1" className="hover:underline">YouTube</a>
                      </li>
                  </ul>
              </div>
              <div>
                  <h2 className="mb-4 text-sm font-semibold text-gray-900 uppercase ">Legal</h2>
                  <ul className="text-gray-500  font-medium">
                      <li className="mb-1">
                          <a href="#" className="hover:underline">Privacy Policy</a>
                      </li>
                      <li>
                          <a href="#" className="hover:underline">Terms &amp; Conditions</a>
                      </li>
                  </ul>
              </div>
          </div>
      </div>
      <hr className="my-5 border-gray-200 sm:mx-auto ay-700 lg:my-2" />
    <div className="flex items-center justify-center">
        <span className="text-sm text-gray-500 text-center">© 2025 <a href="/" className="hover:underline">Nycom™</a>. All Rights Reserved.</span>
    </div>
    </div>
</footer> */}