"use client"

import React from "react"
import { Card, CardBody, CardHeader, Divider, Button, Input, Textarea, Tooltip  } from "@heroui/react"
import {
    ChevronDown,
    Mail,
    Users,
    FileText,
    ExternalLink,
    ChevronRight,
    Calendar,
    Award,
    BookOpen,
} from "lucide-react"


export default function AboutUs() {
    const [isVolunteerFormOpen, setIsVolunteerFormOpen] = React.useState(false)

    return (
        <div className="min-h-screen ">
            {/* Hero Section with Flag Colors and Coat of Arms */}
            <div className="relative bg-nycom-blue h-[600px] text-white overflow-hidden">
                <div className="absolute inset-0 bg-black/30 z-10"></div>
                <img src="/wing.png" alt=""  className="absolute opacity-15"/>
             
                {/* hero section */}
                <div className="container mx-auto px-20 pt-10   relative z-20">
                    <div className="max-w-4xl">
                    
                        <h1 className="text-4xl md:text-6xl  lg:text-7xl font-bold mb-4 leading-tight">
                            {/* Government Seal/Emblem Placeholder */}
                            <div className="h-16 w-16 lg:h-32 lg:w-32 relative">
                                <img
                                    src="/Coat_of_arms_of_Malawi.svg.png"
                                    alt="Government Seal"

                                    className="object-contain"
                                />
                            </div>
                            National Youth Council of Malawi
                        </h1>
                        <p className="text-xl md:text-2xl max-w-3xl mb-8 leading-relaxed">
                            Empowering the youth of Malawi through coordination, advocacy, and capacity building since 1996
                        </p>
                        <div className="flex flex-wrap gap-4">
                            <Button
                                size="lg"
                                className="bg-white rounded-sm text-black hover:bg-gray-50 font-semibold"
                                endContent={<ChevronRight className="h-4 w-4" />}
                            >
                                Explore Our Programs
                            </Button>
                            <Button size="lg" variant="bordered" className="border-white text-white rounded-sm hover:bg-white/10 font-semibold">
                                Annual Report
                            </Button>
                        </div>
                    </div>
                </div>

                {/* Decorative bottom wave */}
                <div className="absolute bottom-0 left-0 right-0 z-10">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 120" className="w-full h-auto ">
                        <path
                            fill="#ffffff"
                            fillOpacity="100"
                            d="M0,64L80,69.3C160,75,320,85,480,80C640,75,800,53,960,48C1120,43,1280,53,1360,58.7L1440,64L1440,120L0,120Z"
                        ></path>
                    </svg>
                </div>
            </div>

            {/* Quick Stats Banner */}
            <div className="bg-white shadow-sm relative  px-20  z-10">
                <div className="container mx-auto px-4">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 py-8 -mt-6 md:-mt-12">
                        <Card className="shadow-none rounded-none">
                            <CardBody className="flex flex-row items-center gap-4 p-4">
                                <div className="bg-blue-100 p-3 rounded-full">
                                    <Users className="text-nycom-blue h-6 w-6" />
                                </div>
                                <div>
                                    <p className="text-3xl font-bold text-gray-800">200+</p>
                                    <p className="text-nycom-blue">Youth Organizations</p>
                                </div>
                            </CardBody>
                        </Card>

                        <Card className="shadow-none rounded-none">
                            <CardBody className="flex flex-row items-center gap-4 p-4">
                                <div className="bg-blue-100 p-3 rounded-full">
                                    <Calendar className="text-nycom-blue h-6 w-6" />
                                </div>
                                <div>
                                    <p className="text-3xl font-bold text-gray-800">{new Date().getFullYear() - 1996}</p>
                                    <p className="text-gray-600">Years of Service</p>
                                </div>
                            </CardBody>
                        </Card>

                        <Card className="shadow-none rounded-none">
                            <CardBody className="flex flex-row items-center gap-4 p-4">
                                <div className="bg-blue-100 p-3 rounded-full">
                                    <Award className="text-nycom-blue h-6 w-6" />
                                </div>
                                <div>
                                    <p className="text-3xl font-bold text-gray-800">100K+</p>
                                    <p className="text-gray-600">Youth Impacted</p>
                                </div>
                            </CardBody>
                        </Card>
                    </div>
                </div>
            </div>

            {/* Main Content */}
            <div className="container mx-auto  px-20 py-12">
                {/* Who We Are Section */}
                <section className="mb-20">
                    <div className="flex items-center mb-2">
                    <div className="bg-black h-8 w-1 mr-4 rounded"></div>
                        <h2 className="text-4xl font-bold text-gray-800">Who We Are</h2>
                        <Divider className="w-80 ml-4 flex-grow hidden lg:flex " />
                    </div>

                    <div className="grid md:grid-cols-2 gap-12">
                        <div className="space-y-6">
                            <div className="bg-blue-50  pl-4 py-2 rounded-full">
                                <p className="text-nycom-blue font-medium">Established by Act No. 22 of 1996</p>
                            </div>

                            <p className="text-gray-700 leading-relaxed">
                                The National Youth Council of Malawi (NYCOM) is a statutory corporation established by the National
                                Assembly of Malawi Act (No. 22 of 1996).
                            </p>
                            <p className="text-gray-700 leading-relaxed">
                                NYCOM was established after government realized that there was immediate need for proper coordination of
                                youth programmes, following the mushrooming of various youth-serving and youth-led organizations and an
                                exponential rise in the interest of other non-state actors to participate in the youth sector.
                            </p>
                            <p className="text-gray-700 leading-relaxed">
                                Structurally, NYCOM is an implementing arm of the Ministry of Youth and Sports and comprises the Annual
                                General Assembly - which is the highest decision-making body, the Board of Directors, the Secretariat,
                                and affiliates (registered youth organizations).
                            </p>

                            <div className="flex items-center gap-2 pt-2  ">
                                <Button color="primary" variant="flat"   endContent={<FileText className="h-4 w-4  " />}>
                                    Download Our Charter
                                </Button>
                                <Button color="default" variant="light" endContent={<ExternalLink className="h-4 w-4" />}>
                                    Learn More
                                </Button>
                            </div>
                        </div>

                        <div className="grid gap-6">
                            <Card className="  border border-gray-200 shadow-none">
                                <CardHeader className="pb-0 pt-6">
                                    <h3 className="text-xl font-semibold text-black flex items-center">
                                        <BookOpen className="mr-2 h-6 w-6  " />
                                        Our Vision & Mission
                                    </h3>
                                </CardHeader>
                                <CardBody>
                                    <div className="mb-4 pb-4 border-b border-blue-100">
                                        <h4 className="text-lg font-medium text-nycom-blue mb-2">Vision</h4>
                                        <p className="text-gray-700">
                                            A Malawi where all young people are empowered to reach their full potential.
                                        </p>
                                    </div>
                                    <div>
                                        <h4 className="text-lg font-medium text-nycom-blue mb-2">Mission</h4>
                                        <p className="text-gray-700">
                                            To coordinate, promote and regulate youth work in Malawi through effective implementation,
                                            coordination and evaluation of various youth programmes.
                                        </p>
                                    </div>
                                </CardBody>
                            </Card>

                            <Card className="border border-gray-200 shadow-none">
                                <CardBody>
                                    <div className="flex items-center gap-4">
                                        <div className="bg-blue-100 p-4 rounded-full">
                                            <Users className="text-nycom-blue h-8 w-8" />
                                        </div>
                                        <div>
                                            <h4 className="text-lg font-semibold">Organizational Structure</h4>
                                            <p className="text-gray-600">The Council reports to:</p>
                                            <ul className="mt-2 space-y-1">
                                                <li className="flex items-center">
                                                    <ChevronRight className="h-4 w-4 text-nycom-blue mr-1" />
                                                    <span>Ministry for Youth and Sports</span>
                                                </li>
                                                <li className="flex items-center">
                                                    <ChevronRight className="h-4 w-4 text-blue-600 mr-1" />
                                                    <span>Department of Statutory Corporation</span>
                                                </li>
                                                <li className="flex items-center">
                                                    <ChevronRight className="h-4 w-4 text-blue-600 mr-1" />
                                                    <span>Annual General Assembly</span>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </CardBody>
                            </Card>
                        </div>
                    </div>
                </section>

                {/* What We Do Section */}
                <section className="mb-20">
                    <div className="flex items-center mb-8">
                        <div className="bg-red-600 h-8 w-1 mr-4 rounded"></div>
                        <h2 className="text-4xl font-bold text-gray-800">What We Do</h2>
                        <Divider className="w-80 ml-4 flex-grow hidden lg:flex " />
                    </div>

                    <Card className="border border-gray-200 overflow-hidden shadow-none">
                        <div className="bg-[url('https://images.unsplash.com/photo-1589859762194-eaae75c61f64?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjYyfHxibHVlfGVufDB8fDB8fHww')] bg-cover bg-center h-48 relative">
                      
                            <div className="absolute  inset-0 bg-gradient-to-t from-nycom-blue/70 to-transparent"></div>
                            <div className="absolute bottom-0 left-0 p-6">
                            <h3 className="text-4xl font-bold text-white">Core Responsibilities</h3>
                            <p className="text-white/80">In line with the Act of Parliament Number 26 of 1996</p>
                            </div>
                        </div>

                        <CardBody className="p-6 shadow-none">
                            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                                <div className="bg-white p-5 rounded-lg border border-gray-100  shadow-none hover:shadow-sm transition-shadow">
                                    <div className="bg-blue-100 w-12 h-12 rounded-full flex items-center justify-center mb-4">
                                        <ChevronRight className="text-blue-600 h-6 w-6" />
                                    </div>
                                    <h4 className="font-semibold text-gray-800 mb-2">Policy Implementation</h4>
                                    <p className="text-gray-600 text-sm">
                                        Collaborate with the Ministry responsible for youth on all matters pertaining to a comprehensive,
                                        decentralized implementation of the National Youth Policy.
                                    </p>
                                </div>

                                <div className="bg-white p-5 rounded-lg border border-gray-100  shadow-none hover:shadow-sm transition-shadow">
                                    <div className="bg-blue-100 w-12 h-12 rounded-full flex items-center justify-center mb-4">
                                        <ChevronRight className="text-blue-600 h-6 w-6" />
                                    </div>
                                    <h4 className="font-semibold text-gray-800 mb-2">Capacity Development</h4>
                                    <p className="text-gray-600 text-sm">
                                        Facilitate capacity development interventions and technical support services for youth and youth
                                        organizations both in urban and rural areas.
                                    </p>
                                </div>

                                <div className="bg-white p-5 rounded-lg border border-gray-100  shadow-none hover:shadow-sm transition-shadow">
                                    <div className="bg-blue-100 w-12 h-12 rounded-full flex items-center justify-center mb-4">
                                        <ChevronRight className="text-blue-600 h-6 w-6" />
                                    </div>
                                    <h4 className="font-semibold text-gray-800 mb-2">Youth Advocacy</h4>
                                    <p className="text-gray-600 text-sm">
                                        Advocate for participation, representation and inclusion of young people in all leadership,
                                        governance and strategic management structures at all levels.
                                    </p>
                                </div>

                                <div className="bg-white p-5 rounded-lg border border-gray-100  shadow-none hover:shadow-sm transition-shadow">
                                    <div className="bg-blue-100 w-12 h-12 rounded-full flex items-center justify-center mb-4">
                                        <ChevronRight className="text-blue-600 h-6 w-6" />
                                    </div>
                                    <h4 className="font-semibold text-gray-800 mb-2">Promotion</h4>
                                    <p className="text-gray-600 text-sm">
                                        Promote activities of youth organizations throughout Malawi to ensure visibility and impact.
                                    </p>
                                </div>

                                <div className="bg-white p-5 rounded-lg border border-gray-100  shadow-none hover:shadow-sm transition-shadow">
                                    <div className="bg-blue-100 w-12 h-12 rounded-full flex items-center justify-center mb-4">
                                        <ChevronRight className="text-blue-600 h-6 w-6" />
                                    </div>
                                    <h4 className="font-semibold text-gray-800 mb-2">Coordination</h4>
                                    <p className="text-gray-600 text-sm">
                                        Provide coordination support in a multi-sectoral manner to ensure alignment of youth programs with
                                        national development goals.
                                    </p>
                                </div>

                                <div className="bg-white p-5 rounded-lg border border-gray-100  shadow-none hover:shadow-sm transition-shadow">
                                    <div className="bg-blue-100 w-12 h-12 rounded-full flex items-center justify-center mb-4">
                                        <ChevronRight className="text-blue-600 h-6 w-6" />
                                    </div>
                                    <h4 className="font-semibold text-gray-800 mb-2">Regulation</h4>
                                    <p className="text-gray-600 text-sm">
                                        Register and regulate youth organizations to ensure quality service delivery and accountability.
                                    </p>
                                </div>
                            </div>
                        </CardBody>
                    </Card>
                </section>

                {/* How to Get Involved Section */}
                <section className="mb-16">
                    <div className="flex items-center mb-8">
                        <div className="bg-green-600 h-8 w-1 mr-4 rounded"></div>
                        <h2 className="text-3xl font-bold text-gray-800">How to Get Involved</h2>
                        <Divider className="w-80 ml-4 flex-grow hidden lg:flex " />
                    </div>

                    <div className="grid md:grid-cols-3 gap-8">
                        {/* Affiliates */}
                        <Card className="border border-gray-200 overflow-hidden">
                        
                            <CardHeader className="pb-0 pt-6">
                                <h3 className="text-xl font-semibold text-gray-800 flex items-center">
                                    <Users className="mr-2 h-5 w-5 text-purple-600" />
                                    Become an Affiliate
                                </h3>
                            </CardHeader>
                            <CardBody>
                                <p className="mb-4 text-gray-700">Key considerations for registration:</p>
                                <ul className="space-y-2 text-gray-700 text-sm">
                                    <li className="flex items-start">
                                        <ChevronDown className="h-4 w-4 text-purple-600 mr-2 mt-1 flex-shrink-0" />
                                        <span>Existence for at least one year</span>
                                    </li>
                                    <li className="flex items-start">
                                        <ChevronDown className="h-4 w-4 text-purple-600 mr-2 mt-1 flex-shrink-0" />
                                        <span>Physical address (office)</span>
                                    </li>
                                    <li className="flex items-start">
                                        <ChevronDown className="h-4 w-4 text-purple-600 mr-2 mt-1 flex-shrink-0" />
                                        <span>Objectives and mission</span>
                                    </li>
                                    <li className="flex items-start">
                                        <ChevronDown className="h-4 w-4 text-purple-600 mr-2 mt-1 flex-shrink-0" />
                                        <span>Impact area and target group</span>
                                    </li>
                                    <li className="flex items-start">
                                        <ChevronDown className="h-4 w-4 text-purple-600 mr-2 mt-1 flex-shrink-0" />
                                        <span>Projects (past or present)</span>
                                    </li>
                                </ul>
                                {/* <Tooltip content="View all requirements">
                                    <Button color="primary" variant="light" className="mt-2 w-full">
                                        View All Requirements
                                    </Button>
                                </Tooltip> */}
                                <Tooltip content="Online Applications are disabled for now" className="bg-black/30 backdrop-blur-sm text-gray-700">
                                <Button   className="mt-4 w-full shadow-sm text-gray-600 "  >
                                    Apply for Affiliation
                                </Button>
                                </Tooltip>
                            </CardBody>
                        </Card>

                        {/* Partnership */}
                        <Card className="border border-gray-200 overflow-hidden">
                            {/* <div className="h-3 bg-blue-600"></div> */}
                            <CardHeader className="pb-0 pt-6">
                                <h3 className="text-xl font-semibold text-gray-800 flex items-center">
                                    <ExternalLink className="mr-2 h-5 w-5 text-blue-600" />
                                    Partner With Us
                                </h3>
                            </CardHeader>
                            <CardBody>
                                <p className="text-gray-700 mb-4">
                                    As a national government agency mandated by law to coordinate youth programmes in Malawi, NYCOM works
                                    with different like-minded partners and stakeholders.
                                </p>
                                <p className="text-gray-700 mb-4">
                                    If your organisation would like to partner with NYCOM to develop, run or scale up a youth development
                                    programme, contact us today.
                                </p>
                                <div className="flex items-center mt-6 bg-blue-50 p-3 rounded-lg">
                                    <Mail className="h-5 w-5 text-blue-600 mr-2" />
                                    <a href="mailto:info@nycom.mw" className="text-blue-600 hover:underline">
                                        info@nycom.mw
                                    </a>
                                </div>
                                {/* <Button color="primary" className="mt-4 w-full shadow-sm">
                                    Explore Partnership
                                </Button> */}
                            </CardBody>
                        </Card>

                        {/* Volunteer */}
                        <Card className="border border-gray-200 overflow-hidden">
                            {/* <div className="h-3 bg-green-600"></div> */}
                            <CardHeader className="pb-0 pt-6">
                                <h3 className="text-xl font-semibold text-gray-800 flex items-center">
                                    <Award className="mr-2 h-5 w-5 text-green-600" />
                                    Volunteer With Us
                                </h3>
                            </CardHeader>
                            <CardBody>
                                <p className="text-gray-700 mb-4">
                                    Young people interested in contributing their knowledge, skills and expertise towards the operations
                                    of NYCOM or registered youth organisations can apply for volunteer positions.
                                </p>

                                <Button
                                    color="primary"
                                    className="mt-2 w-full shadow-sm"
                                    onClick={() => setIsVolunteerFormOpen(!isVolunteerFormOpen)}
                                >
                                    {isVolunteerFormOpen ? "Hide Application Form" : "Apply to Volunteer"}
                                </Button>

                                {isVolunteerFormOpen && (
                                    <div className="mt-4 space-y-4 p-4 bg-gray-50 rounded-lg">
                                        <Input
                                            // label="Full Name"
                                            placeholder="Enter your full name"
                                            variant="bordered"
                                            labelPlacement="outside"
                                        />
                                        <Input
                                            // label="Email"
                                            placeholder="Enter your email"
                                            type="email"
                                            variant="bordered"
                                            labelPlacement="outside"
                                        />
                                        <Textarea
                                            // label="Message"
                                            placeholder="Tell us about your skills and how you'd like to contribute"
                                            variant="bordered"
                                            labelPlacement="outside"
                                            minRows={3}
                                        />
                                          <Tooltip content="Online Applications are disabled for now" className="bg-black/50 backdrop-blur-md text-white">
                                        <Button   className="w-full shadow-sm">
                                            Submit Application
                                        </Button>
                                        </Tooltip>
                                    </div>
                                )}
                            </CardBody>
                        </Card>
                    </div>
                </section>

                {/* Latest News & Announcements */}
                {/* <section className="mb-16">
                    <div className="flex items-center mb-8 overflow-hidden">
                        <div className="bg-yellow-600 h-8 w-2 mr-4 rounded"></div>
                        <h2 className="text-3xl font-bold text-gray-800">Latest News & Announcements</h2>
                        <Divider className="w-80 ml-4 flex-grow hidden lg:flex " />
                    </div>

                    <div className="grid md:grid-cols-3 gap-6">
                        <Card className="border border-gray-200">
                            <div className="h-48 bg-[url('/placeholder.svg?height=400&width=600')] bg-cover bg-center"></div>
                            <CardBody>
                                <div className="flex items-center mb-2">
                                    <Calendar className="h-4 w-4 text-gray-500 mr-2" />
                                    <span className="text-sm text-gray-500">February 15, 2025</span>
                                </div>
                                <h3 className="text-lg font-semibold mb-2">Youth Leadership Conference 2025</h3>
                                <p className="text-gray-600 text-sm mb-4">
                                    Registration now open for the annual Youth Leadership Conference to be held in Lilongwe.
                                </p>
                                <Button color="primary" variant="light" size="sm" className="w-full">
                                    Read More
                                </Button>
                            </CardBody>
                        </Card>

                        <Card className="border border-gray-200">
                            <div className="h-48 bg-[url('/placeholder.svg?height=400&width=600')] bg-cover bg-center"></div>
                            <CardBody>
                                <div className="flex items-center mb-2">
                                    <Calendar className="h-4 w-4 text-gray-500 mr-2" />
                                    <span className="text-sm text-gray-500">February 10, 2025</span>
                                </div>
                                <h3 className="text-lg font-semibold mb-2">New Youth Empowerment Grant</h3>
                                <p className="text-gray-600 text-sm mb-4">
                                    NYCOM announces a new grant program for youth-led initiatives in rural communities.
                                </p>
                                <Button color="primary" variant="light" size="sm" className="w-full">
                                    Read More
                                </Button>
                            </CardBody>
                        </Card>

                        <Card className="border border-gray-200">
                            <div className="h-48 bg-[url('/placeholder.svg?height=400&width=600')] bg-cover bg-center"></div>
                            <CardBody>
                                <div className="flex items-center mb-2">
                                    <Calendar className="h-4 w-4 text-gray-500 mr-2" />
                                    <span className="text-sm text-gray-500">February 5, 2025</span>
                                </div>
                                <h3 className="text-lg font-semibold mb-2">Youth Policy Review Workshop</h3>
                                <p className="text-gray-600 text-sm mb-4">
                                    Stakeholders invited to participate in the upcoming Youth Policy Review Workshop.
                                </p>
                                <Button color="primary" variant="light" size="sm" className="w-full">
                                    Read More
                                </Button>
                            </CardBody>
                        </Card>
                    </div>

                    <div className="flex justify-center mt-8">
                        <Button
                            color="default"
                            variant="bordered"
                            className="font-medium"
                            endContent={<ChevronRight className="h-4 w-4" />}
                        >
                            View All News & Announcements
                        </Button>
                    </div>
                </section> */}
            </div>


        </div>
    )
}

