'use client'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Code, Laptop, Rocket, Send } from 'lucide-react'
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

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prevData) => ({ ...prevData, [name]: value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setShowPopup(true) // Show popup on submit
    // Clear form after submission
    setFormData({ name: "", email: "", message: "" })
  }
  const closePopup = () => setShowPopup(false)
  return (
    <div className="flex flex-col min-h-screen">
      <header className="absolute top-0 left-0 right-0 z-20 px-4 lg:px-6 h-20 flex items-center justify-between bg-transparent">
        <Link className="flex items-center justify-center" href="#">
          <Rocket className="h-8 w-8 text-blue-500" />
          <span className="ml-2 text-xl font-bold text-white">Sonder Enterprise</span>
        </Link>
        {/* <Button size="lg" variant="outline" className="text-white border-white hover:bg-white hover:text-blue-600">
          Contact Us
        </Button> */}
      </header>
      <section className="relative w-full min-h-screen flex items-center justify-center py-12 px-4">
        <Image
          src="/herobg.png"
          alt="Hero Background"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black bg-opacity-40"></div>
        <div className="relative z-10 text-center">
          <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl text-white mb-6">
          Sonder Enterprises
          </h1>
          <p className="mx-auto max-w-[700px] text-xl text-white mb-8 text-semibold">
            Crafting innovative software solutions to propel your business forward.
          </p>
          <Link className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4" href={"#contact"}>
            <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white">CONTACT US FOR OUR SERVICES</Button>
            {/* <Button size="lg" variant="outline" className="text-white border-white hover:bg-white hover:text-blue-600">Learn More</Button> */}
          </Link>
        </div>
      </section>
      <section id="services" className="w-full py-20 bg-gray-50 px-4 md:px-6">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-center mb-12 text-blue-800">Our Services</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { icon: Laptop, title: "Custom Software Development", description: "Tailored solutions to meet your unique business needs." },
              { icon: Code, title: "Web Application Development", description: "Powerful and responsive web applications for your business." },
              { icon: Rocket, title: "Digital Transformation", description: "Modernize your business with cutting-edge technology." }
            ].map((service, index) => (
              <div key={index} className="flex flex-col items-center space-y-4 bg-white p-6 rounded-lg shadow-lg">
                <service.icon className="h-12 w-12 text-blue-600" />
                <h3 className="text-xl font-bold text-center text-blue-800">{service.title}</h3>
                <p className="text-gray-600 text-center">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section id="about" className="w-full py-12 md:py-24 lg:py-32 px-4 md:px-6 bg-gray-50">
        <div className="container mx-auto">
          <div className="grid items-center gap-6 lg:grid-cols-2 lg:gap-12">
            <Image
              alt="About Us"
              className="mx-auto aspect-video overflow-hidden rounded-xl object-cover object-center sm:w-full lg:order-last"
              height={1000}
              src="/aboutus.jpeg"
              width={1000}
            />
            <div className="flex flex-col justify-center space-y-4">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-blue-800">About Us</h2>
              <p className="max-w-[600px] text-gray-600 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                At Sonder Enterprises, we're passionate about leveraging technology to solve complex business challenges.
                With our team of expert developers and strategists, we've been helping companies innovate and grow for over  3 years.
              </p>
            </div>
          </div>
        </div>
      </section>
      <section id="portfolio" className="w-full py-12 md:py-24 lg:py-32 bg-gray-50 px-4 md:px-6">
  <div className="container mx-auto">
    <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-center mb-8 text-blue-800">
      Our Portfolio
    </h2>
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {[
        {
          image: "/viaprize.jpg",
          name: "viaPrize",
          description:
            "The world's only crowdfunded prize platform | Idea marketplace combining crowdfunding and freelancing | Post ideas, fund projects, & win prizes!",
        },
        {
          image: "/aperturs.png",
          name: "Aperturs",
          description:
            "social media management for busy professionals",
        },
        {
          image: "/commeme.png",
          name: "Commeme",
          description:
            "the ultimate platform where your memes can spark a revolution. Contribute to the meme economy and make degen positive sum. ",
        },
        // {
        //   image: "/portfolio4.png",
        //   name: "HealthSync",
        //   description:
        //     "An end-to-end healthcare management system with EHR integration and billing automation for clinics.",
        // },
        // {
        //   image: "/portfolio5.png",
        //   name: "SupplyChain Nexus",
        //   description:
        //     "A logistics platform enhancing supply chain efficiency through real-time tracking and predictive analytics.",
        // },
        // {
        //   image: "/portfolio6.png",
        //   name: "LearnSphere",
        //   description:
        //     "An engaging EdTech platform providing virtual classrooms, on-demand courses, and gamified assessments.",
        // },
      ].map((portfolio, index) => (
        <div
          key={index}
          className="rounded-lg overflow-hidden shadow-lg bg-white"
        >
          <Image
            alt={`${portfolio.name} Thumbnail`}
            className="w-full h-48 object-fill"
            height="200"
            src={portfolio.image}
            width="300"
          />
          <div className="p-4">
            <h3 className="font-bold text-lg mb-2 text-blue-800">
              {portfolio.name}
            </h3>
            <p className="text-gray-600">{portfolio.description}</p>
          </div>
        </div>
      ))}
    </div>
  </div>
</section>

<section id="contact" className="w-full py-12 md:py-24 lg:py-32 px-4 md:px-6 bg-gray-50">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-center mb-8 text-blue-800">
          Contact Us
        </h2>
        <form onSubmit={handleSubmit} className="max-w-md mx-auto space-y-4">
          <Input
            name="name"
            value={formData.name}
            onChange={handleInputChange}
            placeholder="Your Name"
          />
          <Input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleInputChange}
            placeholder="Your Email"
          />
          <Textarea
            name="message"
            value={formData.message}
            onChange={handleInputChange}
            placeholder="Your Message"
          />
          <Button type="submit" className="w-full bg-blue-600 hover:bg-blue-700 text-white">
            Send Message
            <Send className="ml-2 h-4 w-4 text-white" />
          </Button>
        </form>

        {/* Popup */}
        {showPopup && (
          <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
            <div className="bg-white rounded-lg shadow-lg p-6 max-w-sm text-center">
              <h3 className="text-xl font-bold mb-4 text-blue-800">Message Sent</h3>
              <p className="text-gray-600 mb-6">Your message has been sent successfully!</p>
              <Button
                onClick={closePopup}
                className="bg-blue-600 hover:bg-blue-700 text-white w-full"
              >
                Close
              </Button>
            </div>
          </div>
        )}
      </div>
    </section>
      <footer className="bg-blue-800 text-white py-8 px-4 md:px-6">
        <div className="container mx-auto flex flex-col sm:flex-row justify-between items-center">
          <p className="text-sm">© 2023 SONDER ENTERPRISES. All rights reserved.</p>
          <nav className="flex gap-4 sm:gap-6 mt-4 sm:mt-0">
            <Link className="text-sm hover:underline underline-offset-4" href="#">
              Terms of Service
            </Link>
            <Link className="text-sm hover:underline underline-offset-4" href="#">
              Privacy Policy
            </Link>
          </nav>
        </div>
      </footer>
    </div>
  )
}

