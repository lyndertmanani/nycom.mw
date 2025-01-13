const Mission = () => {
    return (
        <>
        <h5 className="mb-2 text-3xl lg:text-5xl font-bold tracking-tight text-gray-950 lg:px-52  text-center ">Guiding Youth Development with Innovation and Purpose</h5>
                <div className='grid lg:grid-cols-3 grid-flow-col-1 py-5 items-center justify-center'>

                    {/* vision */}
                    <div data-aos="fade-up" data-aos-delay="50" className="block max-w-sm p-6 bg-white border border-gray-50  text-center rounded-lg ">
                        <h5 className="mb-2 text-4xl font-bold tracking-tight text-gray-900   ">Vision</h5>
                        <p className="font-normal text-gray-700 text-md">A Malawi where young people are healthy, wealthy, self-reliant and drive the socio-economic growth and development of their country</p>
                    </div>
                    {/* mission */}
                    <div data-aos="fade-up" data-aos-delay="150" className="block max-w-sm p-6 bg-white border border-gray-50 text-center  rounded-lg ">
                        <h5 className="mb-2 text-4xl font-bold tracking-tight text-gray-900   ">Mission</h5>
                        <p className="font-normal text-gray-700 text-md">To coordinate, regulate, promote and advocate for youth development in Malawi and empower all young people to effectively and inclusively participate in economic, civic, governance and political development of the country and their communities</p>
                    </div>
                    {/* impact */}
                    <div data-aos="fade-up" data-aos-delay="220" className="block max-w-sm p-6 bg-white border border-gray-50 text-center  rounded-lg ">
                        <h5 className="mb-2 text-4xl font-bold tracking-tight text-gray-900   "> Impact</h5>
                        <p className="font-normal text-gray-700 text-md">Improved socio-economic and political outcomes of youth development in Malawi through increased participation in national development</p>
                    </div>
                </div>
        </>
    )
}
export default Mission