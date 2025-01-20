import Card from "@/components/events/card"

const Events = () => {
    return(
        <>
            <div className="p-4  bg-gradient-to-r from-nycom-blue to-[#09034c] text-white text-center">
                    <h1 className="text-5xl">Events</h1>  
                     <p className="px-52 text-xs">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Velit voluptatum nesciunt assumenda id maiores ab hic eligendi voluptatem sit non labore repellendus, nemo vero veritatis at nulla dolores, quae alias! </p> 
                </div>
            <section className="px-24  h-auto">
                <section className="grid grid-cols-4 py-10 gap-4">
                    <Card />
                    <Card />
                    <Card />
                    <Card />
                    <Card />
                    <Card />
                    <Card />
                    <Card />
                    
                </section>
        </section>
        </>
    )
}
export default Events