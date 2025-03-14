"use client"

import {
    Card,
    CardHeader,
    CardBody,
    // CardFooter,
    // Button
} from "@/components/events/ui"
import { events } from "@/components/events/data"
 
import { Calendar, MapPin } from "lucide-react"

export default function Events() {
  return (
    <>
      <div className="p-6 md:p-8 bg-[#acacac]/0 text-black text-center">
        <h1 className="text-3xl md:text-5xl font-bold">Events</h1>
        <p className="mt-2 max-w-2xl mx-auto text-sm md:text-base opacity-90">
          Discover upcoming events and opportunities to engage with our community
        </p>
      </div>

      <section className="container mx-auto px-10 lg:px-24  py-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {events.map((event) => (
            <Card
              key={event.id}
              className="overflow-hidden border border-border hover:border-blue-100  rounded-md transition-all duration-700"
            >
              <div className="relative h-auto w-full">
                <img src={event.image || "/placeholder.svg"} alt={event.title}   className="object-cover" />
              </div>
              <CardHeader className="p-0">
                <h2 className="text-xl font-bold">{event.title}</h2>
              </CardHeader>
              <CardBody className="p-1 pt-0">
                <p className="text-sm text-muted-foreground">{event.description}</p>
                <div className="flex items-center mt-4 text-sm text-muted-foreground">
                  <Calendar className="h-4 w-4 mr-2" />
                  <span>{event.date}</span>
                </div>
                <div className="flex items-center mt-2 text-sm text-muted-foreground">
                  <MapPin className="h-4 w-4 mr-2" />
                  <span>{event.location}</span>
                </div>
              </CardBody>
              {/* <CardFooter className="p-4 pt-0">
                <Button className="w-full bg-nycom-blue hover:bg-[#09034c] text-white">Learn More</Button>
              </CardFooter> */}
            </Card>
          ))}
        </div>
      </section>
    </>
  )
}

