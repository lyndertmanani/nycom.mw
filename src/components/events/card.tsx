import img from "/assets/img/holder (2).png"


const Card = () => {
    return (
        <>
         <div className="w-[280px] overflow-hidden bg-[#ffffff] border duration-700 ease-in-out delay-500 transform   border-[#e2e2e2] hover:border-nycom-blue bg-opacity-40 backdrop-filter backdrop-blur-sm rounded-none cursor-pointer mb-5" >
           
          <div className="p-4">
          <h1 className="text-3xl font-bold">7 <span className="text-sm">February</span></h1>
              {/* <p className="mt-1 text-sm text-gray-300">{artist.genre}</p> */}
              <p className="  text-sm text-gray-500"> Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore, sed tempore odio,  repellendus aliquam.</p>
          
                </div>
            <img className="object-cover w-full rounded-none" src={img} alt="{artist.artist_name}" />
          </div>
        
        </>
    )
}
export default Card