"use client"

import { useState, useEffect } from "react"
import {
  Card,
  CardBody,
  CardFooter,
  Button,
  Input,
  Chip,
  Pagination,
  Dropdown,
  DropdownTrigger,
  DropdownMenu,
  DropdownItem,
} from "@heroui/react"
import {
  Search,
  Calendar,
  ChevronRight,
  Filter,
  ArrowUp,
  Clock,
  Tag,
  FileText,
  ExternalLink,
  ChevronDown,
} from "lucide-react"
 

// Sample news data
const newsData = [
  {
    id: 1,
    title: "Youth Leadership Conference 2025 Registration Now Open",
    excerpt:
      "Registration is now open for the annual Youth Leadership Conference to be held in Lilongwe. The conference aims to bring together young leaders from across Malawi.",
    date: "February 15, 2025",
    category: "Events",
    image: "/placeholder.svg?height=400&width=600",
    featured: true,
    tags: ["Leadership", "Conference", "Registration"],
  },
  {
    id: 2,
    title: "New Youth Empowerment Grant Program Launched",
    excerpt:
      "NYCOM announces a new grant program for youth-led initiatives in rural communities. Applications are open until March 31, 2025.",
    date: "February 10, 2025",
    category: "Grants",
    image: "/placeholder.svg?height=400&width=600",
    featured: true,
    tags: ["Grants", "Funding", "Rural Development"],
  },
  {
    id: 3,
    title: "Youth Policy Review Workshop Scheduled for March",
    excerpt:
      "Stakeholders are invited to participate in the upcoming Youth Policy Review Workshop. The workshop will focus on updating the National Youth Policy.",
    date: "February 5, 2025",
    category: "Policy",
    image: "/placeholder.svg?height=400&width=600",
    featured: false,
    tags: ["Policy", "Workshop", "Stakeholders"],
  },
  {
    id: 4,
    title: "NYCOM Partners with UNICEF on Digital Skills Program",
    excerpt:
      "The National Youth Council of Malawi has partnered with UNICEF to launch a digital skills training program for youth in underserved communities.",
    date: "January 28, 2025",
    category: "Partnerships",
    image: "/placeholder.svg?height=400&width=600",
    featured: false,
    tags: ["Digital Skills", "UNICEF", "Training"],
  },
  {
    id: 5,
    title: "Annual Report 2024 Released",
    excerpt:
      "NYCOM has released its Annual Report for 2024, highlighting achievements, challenges, and financial performance over the past year.",
    date: "January 20, 2025",
    category: "Reports",
    image: "/placeholder.svg?height=400&width=600",
    featured: false,
    tags: ["Annual Report", "Achievements", "Transparency"],
  },
  {
    id: 6,
    title: "Youth Entrepreneurship Summit Concludes Successfully",
    excerpt:
      "The Youth Entrepreneurship Summit held in Blantyre concluded with over 500 participants and the launch of several new initiatives.",
    date: "January 15, 2025",
    category: "Events",
    image: "/placeholder.svg?height=400&width=600",
    featured: false,
    tags: ["Entrepreneurship", "Summit", "Initiatives"],
  },
  {
    id: 7,
    title: "NYCOM Announces New Board Members",
    excerpt:
      "The Ministry of Youth and Sports has appointed new board members to the National Youth Council of Malawi for a three-year term.",
    date: "January 10, 2025",
    category: "Announcements",
    image: "/placeholder.svg?height=400&width=600",
    featured: false,
    tags: ["Board", "Governance", "Appointments"],
  },
  {
    id: 8,
    title: "Youth Climate Action Network Launched",
    excerpt:
      "NYCOM has launched the Youth Climate Action Network to engage young people in environmental conservation and climate change mitigation.",
    date: "January 5, 2025",
    category: "Initiatives",
    image: "/placeholder.svg?height=400&width=600",
    featured: false,
    tags: ["Climate Action", "Environment", "Youth Network"],
  },
  {
    id: 9,
    title: "Call for Applications: Youth Advisory Committee",
    excerpt:
      "NYCOM is seeking applications from qualified young people to serve on the Youth Advisory Committee for the 2025-2027 term.",
    date: "December 20, 2024",
    category: "Opportunities",
    image: "/placeholder.svg?height=400&width=600",
    featured: false,
    tags: ["Advisory Committee", "Applications", "Youth Representation"],
  },
  {
    id: 10,
    title: "NYCOM Hosts Regional Youth Coordinators Meeting",
    excerpt:
      "Regional Youth Coordinators from across Malawi met in Mzuzu to discuss strategies for improving youth services at the district level.",
    date: "December 15, 2024",
    category: "Events",
    image: "/placeholder.svg?height=400&width=600",
    featured: false,
    tags: ["Regional Coordination", "Youth Services", "District Level"],
  },
  {
    id: 11,
    title: "Youth Mental Health Awareness Campaign Launched",
    excerpt:
      "NYCOM has launched a nationwide campaign to raise awareness about mental health issues affecting young people in Malawi.",
    date: "December 10, 2024",
    category: "Campaigns",
    image: "/placeholder.svg?height=400&width=600",
    featured: false,
    tags: ["Mental Health", "Awareness", "Campaign"],
  },
  {
    id: 12,
    title: "NYCOM Signs MOU with Technical Colleges",
    excerpt:
      "The National Youth Council of Malawi has signed Memoranda of Understanding with technical colleges to enhance vocational training opportunities for youth.",
    date: "December 5, 2024",
    category: "Partnerships",
    image: "/placeholder.svg?height=400&width=600",
    featured: false,
    tags: ["Technical Education", "Vocational Training", "MOU"],
  },
]

// Get all unique categories
const allCategories = ["All", ...new Set(newsData.map((item) => item.category))]

export default function News() {
  const [searchQuery, setSearchQuery] = useState("")
  const [selectedCategory, setSelectedCategory] = useState("All")
  const [currentPage, setCurrentPage] = useState(1)
  const [sortBy, setSortBy] = useState("newest")
  const itemsPerPage = 6

  // Filter news based on search query and category
  const filteredNews = newsData.filter((news) => {
    const matchesSearch =
      news.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      news.excerpt.toLowerCase().includes(searchQuery.toLowerCase())
    const matchesCategory = selectedCategory === "All" || news.category === selectedCategory
    return matchesSearch && matchesCategory
  })

  // Sort news based on selected sort option
  const sortedNews = [...filteredNews].sort((a, b) => {
    if (sortBy === "newest") {
      return new Date(b.date).getTime() - new Date(a.date).getTime()
    } else if (sortBy === "oldest") {
      return new Date(a.date).getTime() - new Date(b.date).getTime()
    }
    return 0
  })

  // Get featured news
  const featuredNews = sortedNews.filter((news) => news.featured)

  // Get paginated news (excluding featured news from the main list)
  const nonFeaturedNews = sortedNews.filter((news) => !news.featured)
  const totalPages = Math.ceil(nonFeaturedNews.length / itemsPerPage)
  const currentNews = nonFeaturedNews.slice((currentPage - 1) * itemsPerPage, currentPage * itemsPerPage)

  // Scroll to top function
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    })
  }

  // Show/hide scroll to top button based on scroll position
  const [showScrollTop, setShowScrollTop] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 300) {
        setShowScrollTop(true)
      } else {
        setShowScrollTop(false)
      }
    }

    // Add smooth scrolling to the entire page
    document.documentElement.style.scrollBehavior = "smooth"

    window.addEventListener("scroll", handleScroll)
    return () => {
      window.removeEventListener("scroll", handleScroll)
      document.documentElement.style.scrollBehavior = "auto"
    }
  }, [])

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="bg-nycom-blue text-white">
        <div className="container mx-auto px-4 py-16 md:py-24">
          <div className="max-w-4xl">
            
            <h1 className="text-3xl md:text-5xl font-bold mb-4">News & Announcements</h1>
            <p className="text-lg md:text-xl max-w-3xl">
              Stay updated with the latest news, events, and announcements from the National Youth Council of Malawi.
            </p>
          </div>
        </div>

        {/* Decorative bottom wave */}
        <div className="relative">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 120" className="w-full h-auto">
            <path
              fill="#f9fafb"
              fillOpacity="1"
              d="M0,64L80,69.3C160,75,320,85,480,80C640,75,800,53,960,48C1120,43,1280,53,1360,58.7L1440,64L1440,120L1360,120C1280,120,1120,120,960,120C800,120,640,120,480,120C320,120,160,120,80,120L0,120Z"
            ></path>
          </svg>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-8 -mt-6 md:-mt-12 relative z-10">
        {/* Search and Filter Section */}
        <div className="bg-white rounded-lg shadow-md p-4 md:p-6 mb-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="md:col-span-2">
              <Input
                placeholder="Search news..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                startContent={<Search className="text-gray-400" size={20} />}
                className="w-full"
                size="lg"
                variant="bordered"
              />
            </div>

            <div className="flex gap-2">
              <Dropdown>
                <DropdownTrigger>
                  <Button
                    variant="bordered"
                    className="flex-1"
                    startContent={<Filter size={18} />}
                    endContent={<ChevronDown size={18} />}
                  >
                    {selectedCategory}
                  </Button>
                </DropdownTrigger>
                <DropdownMenu
                  aria-label="Category filter"
                  onAction={(key) => setSelectedCategory(key.toString())}
                  selectedKeys={[selectedCategory]}
                  selectionMode="single"
                >
                  {allCategories.map((category) => (
                    <DropdownItem key={category}>{category}</DropdownItem>
                  ))}
                </DropdownMenu>
              </Dropdown>

              <Dropdown>
                <DropdownTrigger>
                  <Button
                    variant="bordered"
                    className="flex-1"
                    startContent={<Clock size={18} />}
                    endContent={<ChevronDown size={18} />}
                  >
                    {sortBy === "newest" ? "Newest First" : "Oldest First"}
                  </Button>
                </DropdownTrigger>
                <DropdownMenu
                  aria-label="Sort options"
                  onAction={(key) => setSortBy(key.toString())}
                  selectedKeys={[sortBy]}
                  selectionMode="single"
                >
                  <DropdownItem key="newest">Newest First</DropdownItem>
                  <DropdownItem key="oldest">Oldest First</DropdownItem>
                </DropdownMenu>
              </Dropdown>
            </div>
          </div>

          {/* Active filters display */}
          {(selectedCategory !== "All" || searchQuery) && (
            <div className="mt-4 flex flex-wrap gap-2 items-center">
              <span className="text-sm text-gray-500">Active filters:</span>
              {selectedCategory !== "All" && (
                <Chip onClose={() => setSelectedCategory("All")} variant="flat" color="primary">
                  Category: {selectedCategory}
                </Chip>
              )}
              {searchQuery && (
                <Chip onClose={() => setSearchQuery("")} variant="flat" color="secondary">
                  Search: {searchQuery}
                </Chip>
              )}
            </div>
          )}
        </div>

        {/* Featured News Section */}
        {featuredNews.length > 0 && !searchQuery && selectedCategory === "All" && (
          <div className="mb-12">
            <div className="flex items-center mb-6">
              <div className="bg-red-600 h-8 w-2 mr-4 rounded"></div>
              <h2 className="text-2xl font-bold text-gray-800">Featured News</h2>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              {featuredNews.map((news) => (
                <Card
                  key={news.id}
                  className="overflow-hidden border border-gray-200 hover:shadow-lg transition-shadow"
                >
                  <div className="relative h-64">
                    <img src={news.image || "/placeholder.svg"} alt={news.title}  className="object-cover" />
                    <div className="absolute top-4 left-4">
                      <Chip color="primary" variant="solid" className="text-white">
                        {news.category}
                      </Chip>
                    </div>
                  </div>
                  <CardBody className="p-6">
                    <div className="flex items-center mb-3 text-sm text-gray-500">
                      <Calendar size={16} className="mr-2" />
                      {news.date}
                    </div>
                    <h3 className="text-xl font-bold mb-3">{news.title}</h3>
                    <p className="text-gray-600 mb-4">{news.excerpt}</p>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {news.tags.map((tag, index) => (
                        <Chip key={index} variant="flat" size="sm" className="text-xs">
                          {tag}
                        </Chip>
                      ))}
                    </div>
                  </CardBody>
                  <CardFooter className="border-t bg-gray-50 p-4">
                    <Button color="primary" endContent={<ChevronRight size={16} />} className="w-full">
                      Read Full Article
                    </Button>
                  </CardFooter>
                </Card>
              ))}
            </div>
          </div>
        )}

        {/* Main News Grid */}
        <div className="mb-12">
          <div className="flex items-center mb-6">
            <div className="bg-blue-600 h-8 w-2 mr-4 rounded"></div>
            <h2 className="text-2xl font-bold text-gray-800">
              {searchQuery ? "Search Results" : selectedCategory !== "All" ? `${selectedCategory} News` : "All News"}
            </h2>
            {filteredNews.length > 0 && (
              <span className="ml-4 text-sm text-gray-500">
                {filteredNews.length} {filteredNews.length === 1 ? "article" : "articles"} found
              </span>
            )}
          </div>

          {currentNews.length > 0 ? (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {currentNews.map((news) => (
                <Card key={news.id} className="border border-gray-200 hover:shadow-md transition-shadow">
                  <div className="relative h-48">
                    <img src={news.image || "/placeholder.svg"} alt={news.title}  className="object-cover" />
                    <div className="absolute top-2 right-2">
                      <Chip size="sm" variant="flat" color="primary" className="bg-white/80 backdrop-blur-sm">
                        {news.category}
                      </Chip>
                    </div>
                  </div>
                  <CardBody className="p-4">
                    <div className="flex items-center mb-2 text-xs text-gray-500">
                      <Calendar size={14} className="mr-1" />
                      {news.date}
                    </div>
                    <h3 className="text-lg font-semibold mb-2 line-clamp-2">{news.title}</h3>
                    <p className="text-gray-600 text-sm mb-3 line-clamp-3">{news.excerpt}</p>
                    <div className="flex flex-wrap gap-1 mb-3">
                      {news.tags.slice(0, 2).map((tag, index) => (
                        <Chip key={index} variant="flat" size="sm" className="text-xs">
                          {tag}
                        </Chip>
                      ))}
                      {news.tags.length > 2 && (
                        <Chip variant="flat" size="sm" className="text-xs">
                          +{news.tags.length - 2}
                        </Chip>
                      )}
                    </div>
                    <Button
                      color="primary"
                      variant="light"
                      size="sm"
                      endContent={<ChevronRight size={14} />}
                      className="w-full"
                    >
                      Read More
                    </Button>
                  </CardBody>
                </Card>
              ))}
            </div>
          ) : (
            <div className="bg-gray-50 border border-gray-200 rounded-lg p-8 text-center">
              <FileText size={48} className="mx-auto text-gray-400 mb-4" />
              <h3 className="text-xl font-semibold mb-2">No News Found</h3>
              <p className="text-gray-600 mb-4">We couldn't find any news articles matching your search criteria.</p>
              <Button
                color="primary"
                onClick={() => {
                  setSearchQuery("")
                  setSelectedCategory("All")
                }}
              >
                Clear Filters
              </Button>
            </div>
          )}

          {/* Pagination */}
          {nonFeaturedNews.length > itemsPerPage && (
            <div className="flex justify-center mt-8">
              <Pagination
                total={totalPages}
                initialPage={1}
                page={currentPage}
                onChange={setCurrentPage}
                showControls
                classNames={{
                  cursor: "bg-blue-600",
                }}
              />
            </div>
          )}
        </div>

        {/* Press Releases and Resources Section */}
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          <Card className="border border-gray-200">
            <CardBody className="p-6">
              <div className="flex items-center mb-4">
                <div className="bg-green-100 p-3 rounded-full mr-4">
                  <FileText className="text-green-600 h-6 w-6" />
                </div>
                <h3 className="text-xl font-semibold">Press Releases</h3>
              </div>
              <p className="text-gray-600 mb-4">
                Access official press releases from the National Youth Council of Malawi.
              </p>
              <ul className="space-y-4">
                <li className="border-b border-gray-100 pb-3">
                  <div className="flex items-center text-xs text-gray-500 mb-1">
                    <Calendar size={14} className="mr-1" />
                    February 20, 2025
                  </div>
                  <a href="#" className="text-blue-600 hover:underline font-medium">
                    NYCOM Statement on Youth Participation in National Development
                  </a>
                </li>
                <li className="border-b border-gray-100 pb-3">
                  <div className="flex items-center text-xs text-gray-500 mb-1">
                    <Calendar size={14} className="mr-1" />
                    February 12, 2025
                  </div>
                  <a href="#" className="text-blue-600 hover:underline font-medium">
                    Press Release: Launch of Youth Digital Skills Initiative
                  </a>
                </li>
                <li>
                  <div className="flex items-center text-xs text-gray-500 mb-1">
                    <Calendar size={14} className="mr-1" />
                    February 5, 2025
                  </div>
                  <a href="#" className="text-blue-600 hover:underline font-medium">
                    NYCOM Response to Youth Unemployment Report
                  </a>
                </li>
              </ul>
              <Button color="primary" variant="light" className="mt-4 w-full" endContent={<ExternalLink size={16} />}>
                View All Press Releases
              </Button>
            </CardBody>
          </Card>

          <Card className="border border-gray-200">
            <CardBody className="p-6">
              <div className="flex items-center mb-4">
                <div className="bg-purple-100 p-3 rounded-full mr-4">
                  <Tag className="text-purple-600 h-6 w-6" />
                </div>
                <h3 className="text-xl font-semibold">Popular Topics</h3>
              </div>
              <p className="text-gray-600 mb-4">Explore news and resources by popular topics and categories.</p>
              <div className="flex flex-wrap gap-2">
                <Button variant="flat" color="primary" size="sm">
                  Youth Leadership
                </Button>
                <Button variant="flat" color="secondary" size="sm">
                  Entrepreneurship
                </Button>
                <Button variant="flat" color="success" size="sm">
                  Education
                </Button>
                <Button variant="flat" color="warning" size="sm">
                  Employment
                </Button>
                <Button variant="flat" color="danger" size="sm">
                  Health
                </Button>
                <Button variant="flat" color="primary" size="sm">
                  Technology
                </Button>
                <Button variant="flat" color="secondary" size="sm">
                  Environment
                </Button>
                <Button variant="flat" color="success" size="sm">
                  Agriculture
                </Button>
                <Button variant="flat" color="warning" size="sm">
                  Sports
                </Button>
                <Button variant="flat" color="danger" size="sm">
                  Arts & Culture
                </Button>
              </div>
              <div className="mt-6 pt-4 border-t border-gray-100">
                <h4 className="font-medium mb-3">Subscribe to Updates</h4>
                <div className="flex gap-2">
                  <Input placeholder="Enter your email" type="email" className="flex-1" />
                  <Button color="primary">Subscribe</Button>
                </div>
              </div>
            </CardBody>
          </Card>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-gray-950 text-white py-10">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-6 md:mb-0">
              <div className="flex items-center">
                <div className="bg-white p-2 rounded-full mr-3">
                  <div className="h-10 w-10 relative">
                    <img
                      src="/placeholder.svg?height=100&width=100"
                      alt="NYCOM Logo"
                      
                      className="object-contain"
                    />
                  </div>
                </div>
                <div>
                  <h3 className="text-lg font-bold">National Youth Council of Malawi</h3>
                  <p className="text-sm text-gray-400">Official Government Agency</p>
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
        </div>
      </footer>

      {/* Scroll to top button */}
      {showScrollTop && (
        <Button
          isIconOnly
          color="primary"
          aria-label="Scroll to top"
          className="fixed bottom-6 right-6 z-50 rounded-full shadow-lg"
          onClick={scrollToTop}
        >
          <ArrowUp size={20} />
        </Button>
      )}
    </div>
  )
}

