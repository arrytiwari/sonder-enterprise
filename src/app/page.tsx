"use client"
import { Button } from "@/components/ui/button"
import type React from "react"

import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Code, Laptop, Search, Send, Smartphone, UserRound } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { useState } from "react"

export default function Home() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  })
  const [showPopup, setShowPopup] = useState(false)
  const [email, setEmail] = useState("")
  const [showSubscriptionPopup, setShowSubscriptionPopup] = useState(false)

  // Add this projects array
  const projects = [
    { id: 1, name: "Viaprize", image: "/viaprize.jpg" ,link:"https://viaprize.org"},
    { id: 2, name: "Aperturs", image: "/aperturs.png", link:"https://www.aperturs.com/" },
    { id: 3, name: "Commeme", image: "/commeme.png" ,link:"https://commeme-tau.vercel.app/"},  
  ]

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prevData) => ({ ...prevData, [name]: value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setShowPopup(true)
    setFormData({ name: "", email: "", message: "" })
  }

  const handleNewsletterSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setEmail("")
    setShowSubscriptionPopup(true)
  }

  const closePopup = () => setShowPopup(false)
  const closeSubscriptionPopup = () => setShowSubscriptionPopup(false)

  return (
    <div className="flex flex-col min-h-screen">
      {/* Header */}
      <header className="sticky top-0 left-0 right-0 z-50 bg-white/70 backdrop-blur-md shadow-sm border-b border-gray-200/20">
        <div className="container mx-auto px-4 flex items-center justify-between h-20">
          <Link className="flex items-center" href="#">
            <div className="flex items-center">
              <div className="h-10 w-10 bg-yellow-400 rounded flex items-center justify-center mr-2">
                <span className="text-white font-bold text-xl">S</span>
              </div>
              <span className="text-xl font-bold">
                <span className="text-yellow-400">Sonder</span>
                <span className="text-gray-700 ml-2">Enterprises</span>
              </span>
            </div>
          </Link>
          <nav className="hidden md:flex items-center space-x-8">
            <Link href="#about" className="text-gray-700 hover:text-yellow-500 font-medium">
              ABOUT US
            </Link>
            <Link href="#services" className="text-gray-700 hover:text-yellow-500 font-medium">
              SERVICES
            </Link>
            <Link href="#portfolio" className="text-gray-700 hover:text-yellow-500 font-medium">
              PROJECTS
            </Link>
            <Link href="#blog" className="text-gray-700 hover:text-yellow-500 font-medium">
              BLOG
            </Link>
            <Link href="#contact">
              <Button className="bg-yellow-400 hover:bg-yellow-500 text-white">CONTACT US</Button>
            </Link>
            <button className="text-gray-700 hover:text-yellow-500">
              <Search className="h-5 w-5" />
            </button>
          </nav>
          <Button variant="ghost" className="md:hidden">
            <span className="sr-only">Open menu</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </Button>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative w-full min-h-[80vh] flex items-center justify-center">
        <Image src="/soft3.png" alt="Hero Background" fill className="object-cover" priority />
        <div className="absolute inset-0 bg-black bg-opacity-70"></div>
        <div className="relative z-10 text-center container mx-auto px-4">
          <p className="text-white text-lg font-medium mb-4">
            WELCOME TO <span className="text-yellow-400">THE NEXT LEVEL</span>
          </p>
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-8">Software Development Company</h1>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="w-full py-20  px-4">
        <div className="container mx-auto">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">
              Our team of software developers ensure high quality. Through our services, we make sure to build you a
              strong & beautiful product your users will love.
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="flex flex-col items-start">
              <div className="mb-6">
                <div className="h-16 w-16 border-2 border-gray-200 flex items-center justify-center">
                  <div className="h-12 w-12 border-b-2 border-r-2 border-yellow-400 flex items-center justify-center">
                    <Smartphone className="h-8 w-8 text-gray-700" />
                  </div>
                </div>
              </div>
              <h3 className="text-lg font-bold text-gray-800 mb-4">MOBILE APP & WEB DEVELOPMENT</h3>
              <p className="text-gray-600 mb-4">
                We are a software development company that specialises in working software development. We work with
                ultimate technologies to build powerful web and mobile apps; android development, windows & iOS
                development. You name it, we build it!
              </p>
              {/* <Link href="#" className="text-yellow-400 hover:text-yellow-500 font-medium">
                know more
              </Link> */}
            </div>

            <div className="flex flex-col items-start">
              <div className="mb-6">
                <div className="h-16 w-16 border-2 border-gray-200 flex items-center justify-center">
                  <div className="h-12 w-12 border-b-2 border-r-2 border-yellow-400 flex items-center justify-center">
                    <Code className="h-8 w-8 text-gray-700" />
                  </div>
                </div>
              </div>
              <h3 className="text-lg font-bold text-gray-800 mb-4">SOFTWARE ARCHITECTURE SERVICES</h3>
              <p className="text-gray-600 mb-4">
                By studying your project, we drive architectural integrity and propose incremental upgrades in order to
                achieve platform scalability, high performance and cost reduction.
              </p>
              {/* <Link href="#" className="text-yellow-400 hover:text-yellow-500 font-medium">
                know more
              </Link> */}
            </div>

            <div className="flex flex-col items-start">
              <div className="mb-6">
                <div className="h-16 w-16 border-2 border-gray-200 flex items-center justify-center">
                  <div className="h-12 w-12 border-b-2 border-r-2 border-yellow-400 flex items-center justify-center">
                    <Laptop className="h-8 w-8 text-gray-700" />
                  </div>
                </div>
              </div>
              <h3 className="text-lg font-bold text-gray-800 mb-4">IT CONSULTING & TRAINING</h3>
              <p className="text-gray-600 mb-4">
                We work side by side with your team, we teach you the best practices, help you detect bugs and create a
                clean and stable code to increase productivity.
              </p>
              {/* <Link href="#" className="text-yellow-400 hover:text-yellow-500 font-medium">
                know more
              </Link> */}
            </div>

            <div className="flex flex-col items-start">
              <div className="mb-6">
                <div className="h-16 w-16 border-2 border-gray-200 flex items-center justify-center">
                  <div className="h-12 w-12 border-b-2 border-r-2 border-yellow-400 flex items-center justify-center">
                    <UserRound className="h-8 w-8 text-gray-700" />
                  </div>
                </div>
              </div>
              <h3 className="text-lg font-bold text-gray-800 mb-4">USER EXPERIENCE DESIGN</h3>
              <p className="text-gray-600 mb-4">
                Our UX designers work closely with our front-end & back-end developers to deliver the best user
                experience through a creative and easy to use product.
              </p>
              {/* <Link href="#" className="text-yellow-400 hover:text-yellow-500 font-medium">
                know more
              </Link> */}
              {/* <Link href="#" className="text-yellow-400 hover:text-yellow-500 font-medium mt-2">
                See our portfolio
              </Link> */}
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="w-full py-20 bg-gray-100 px-4">
        <div className="container mx-auto">
          <div className="max-w-3xl mx-auto">
            <div className="flex justify-center mb-8">
              <div className="h-1 w-16 bg-yellow-400"></div>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">
              Our software development makes a difference
            </h2>
            <p className="text-gray-600 mb-8">
              Our <span className="text-yellow-400">software development team</span> guides you through every stage of
              the project. We transform your idea into a scalable and innovative platform, ensuring that your technology
              adds value to your users' experience, while being aligned with your overall business plans and objectives.
            </p>
            {/* <Link href="#" className="inline-block px-6 py-3 bg-gray-800 text-white font-medium hover:bg-gray-700">
              Know more
            </Link> */}
          </div>
        </div>
      </section>

      {/* Portfolio Section */}
      <section id="portfolio" className="w-full py-20 bg-white px-4">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold text-gray-800 text-center mb-12">Our Projects</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-4">
            {projects.map((project) => (
              <Link href={`${project.link}`} key={project.id} className="overflow-hidden group relative" target="_blank" rel="noopener noreferrer">
                <Image
                  src={project.image || "/placeholder.svg"}
                  alt={project.name}
                  width={300}
                  height={300}
                  className="object-cover w-full h-full transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black bg-opacity-70 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col items-center justify-center">
                  <h4 className="text-white font-medium text-center px-4 mb-2">{project.name}</h4>
                  <span className="text-yellow-400 text-sm">View Project</span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="w-full py-12 md:py-24 bg-white px-8  flex  justify-between ">
        <div className="space-y-2 ">
          {" "}
          <h2 className="text-3xl font-bold text-gray-800 text-left">Contact Us</h2>{" "}
          <h3 className="font-bold text-gray-800 ">READY TO MOVE TO THE NEXT LEVEL?</h3>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4 w-[50%]">
          <Input name="name" value={formData.name} onChange={handleInputChange} placeholder="Your Name" required />
          <Input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleInputChange}
            placeholder="Your Email"
            required
          />
          <Textarea
            name="message"
            value={formData.message}
            onChange={handleInputChange}
            placeholder="Your Message"
            required
            className="min-h-[150px]"
          />
          <Button type="submit" className="w-full bg-yellow-400 hover:bg-yellow-500 text-white">
            Send Message
            <Send className="ml-2 h-4 w-4" />
          </Button>
        </form>

        {/* Popup */}
        {showPopup && (
          <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
            <div className="bg-white rounded-lg shadow-lg p-6 max-w-sm text-center">
              <h3 className="text-xl font-bold mb-4 text-gray-800">Message Sent</h3>
              <p className="text-gray-600 mb-6">Your message has been sent successfully!</p>
              <Button onClick={closePopup} className="bg-yellow-400 hover:bg-yellow-500 text-white w-full">
                Close
              </Button>
            </div>
          </div>
        )}
        {/* Newsletter Subscription Popup */}
        {showSubscriptionPopup && (
          <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
            <div className="bg-white rounded-lg shadow-lg p-6 max-w-sm text-center">
              <h3 className="text-xl font-bold mb-4 text-gray-800">Subscribed Successfully</h3>
              <p className="text-gray-600 mb-6">Thank you for subscribing to our newsletter!</p>
              <Button onClick={closeSubscriptionPopup} className="bg-yellow-400 hover:bg-yellow-500 text-white w-full">
                Close
              </Button>
            </div>
          </div>
        )}
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-16 px-4">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div>
              <div className="flex items-center mb-6">
                <div className="h-10 w-10 bg-yellow-400 rounded flex items-center justify-center mr-2">
                  <span className="text-white font-bold text-xl">S</span>
                </div>
                <span className="text-xl font-bold">
                  <span className="text-yellow-400">Sonder</span>
                  <span className="text-white ml-2">Enterprisess</span>
                </span>
              </div>
              <p className="text-gray-400 mb-6">
                Sonder Enterprises is an agile software development company offering services of software architecture,
                web development, mobile app development, IT consulting, user experience design, bigdata and blockchain
              </p>
            </div>

            {/* <div>
              <h3 className="text-lg font-bold mb-6">LATEST NEWS</h3>
              <ul className="space-y-4">
                <li className="border-b border-gray-700 pb-4">
                  <Link href="#" className="text-gray-400 hover:text-yellow-400">
                    Hello world!
                  </Link>
                </li>
                <li className="border-b border-gray-700 pb-4">
                  <Link href="#" className="text-gray-400 hover:text-yellow-400">
                    User experience design infographic
                  </Link>
                </li>
                <li className="border-b border-gray-700 pb-4">
                  <Link href="#" className="text-gray-400 hover:text-yellow-400">
                    Apiumtech's monthly Newsletter
                  </Link>
                </li>
                <li className="border-b border-gray-700 pb-4">
                  <Link href="#" className="text-gray-400 hover:text-yellow-400">
                    8 Digital marketing trends in 2016
                  </Link>
                </li>
              </ul>
            </div> */}

            <div>
              <h3 className="text-lg font-bold mb-6">JOIN OUR NEWSLETTER</h3>
              <form onSubmit={handleNewsletterSubmit} className="space-y-4">
                <Input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Type email"
                  className="bg-transparent border-gray-600 text-white"
                  required
                />
                <Button type="submit" className="w-full bg-gray-700 hover:bg-gray-600 text-white">
                  SUBSCRIBE
                </Button>
              </form>

              <div className="mt-12">
                <h3 className="text-lg font-bold mb-6">CONTACT INFO</h3>
                <ul className="space-y-4 text-gray-400">
                  <li className="flex items-center">
                    <span className="mr-2">✉️</span>
                    <span>support@sonderenter.com</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div className="border-t border-gray-700 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm">© 2025 SONDER ENTERPRISES. ALL RIGHTS RESERVED.</p>
            {/* <div className="flex space-x-4 mt-4 md:mt-0">
              <Link href="#" className="text-gray-400 hover:text-yellow-400">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="h-5 w-5"
                >
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                </svg>
              </Link>
              <Link href="#" className="text-gray-400 hover:text-yellow-400">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="h-5 w-5"
                >
                  <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                  <rect x="2" y="9" width="4" height="12"></rect>
                  <circle cx="4" cy="4" r="2"></circle>
                </svg>
              </Link>
              <Link href="#" className="text-gray-400 hover:text-yellow-400">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="h-5 w-5"
                >
                  <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path>
                </svg>
              </Link>
            </div> */}
          </div>
        </div>
      </footer>
    </div>
  )
}

