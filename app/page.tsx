"use client"

import type React from "react"

import Link from "next/link"
import Image from "next/image"
import { Playfair_Display, Lato } from "next/font/google"
import BookingForm from "@/components/booking-form"
import ServiceCard from "@/components/service-card"
import TestimonialCard from "@/components/testimonial-card"
import { ArrowRight, Clock, MapPin, Phone } from "lucide-react"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { Button } from "@/components/ui/button"
import { useState, useEffect } from "react"

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
})

const lato = Lato({
  weight: ["300", "400", "700"],
  subsets: ["latin"],
  variable: "--font-lato",
})

export default function Home() {
  const [isSheetOpen, setIsSheetOpen] = useState(false)

  // Function to handle smooth scrolling to sections
  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, sectionId: string) => {
    e.preventDefault()

    // Close mobile menu if open
    if (isSheetOpen) {
      setIsSheetOpen(false)
    }

    // Get the target section
    const section = document.getElementById(sectionId)

    if (section) {
      // Get header height to offset scroll position (accounting for fixed header)
      const headerHeight = document.querySelector("header")?.offsetHeight || 0

      // Calculate position to scroll to
      const targetPosition = section.offsetTop - headerHeight

      // Smooth scroll to the target position
      window.scrollTo({
        top: targetPosition,
        behavior: "smooth",
      })

      // Update URL without scrolling (for bookmarking purposes)
      window.history.pushState(null, "", `#${sectionId}`)
    }
  }

  // Handle initial hash in URL
  useEffect(() => {
    if (window.location.hash) {
      const sectionId = window.location.hash.substring(1)
      const section = document.getElementById(sectionId)

      if (section) {
        // Delay to ensure page is fully loaded
        setTimeout(() => {
          const headerHeight = document.querySelector("header")?.offsetHeight || 0
          const targetPosition = section.offsetTop - headerHeight

          window.scrollTo({
            top: targetPosition,
            behavior: "smooth",
          })
        }, 100)
      }
    }
  }, [])

  return (
      <main className={`${playfair.variable} ${lato.variable} font-sans min-h-screen`}>
        {/* Header */}
        <header className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md shadow-sm">
          <div className="container mx-auto px-4 py-4 flex items-center justify-between">
            <Link href="/" className="flex items-center">
              <h1 className="text-2xl font-serif font-bold text-amber-800 transition-all duration-300 hover:text-amber-600">
                Serenity Spa
              </h1>
            </Link>
            <nav className="hidden md:flex items-center space-x-8">
              <a
                  href="#services"
                  onClick={(e) => scrollToSection(e, "services")}
                  className="text-amber-900 hover:text-amber-600 transition-colors duration-300 font-medium"
              >
                Services
              </a>
              <a
                  href="#about"
                  onClick={(e) => scrollToSection(e, "about")}
                  className="text-amber-900 hover:text-amber-600 transition-colors duration-300 font-medium"
              >
                About
              </a>
              <a
                  href="#testimonials"
                  onClick={(e) => scrollToSection(e, "testimonials")}
                  className="text-amber-900 hover:text-amber-600 transition-colors duration-300 font-medium"
              >
                Testimonials
              </a>
              <a
                  href="#booking"
                  onClick={(e) => scrollToSection(e, "booking")}
                  className="bg-amber-600 hover:bg-amber-700 text-white px-5 py-2 rounded-full transition-all duration-300 transform hover:scale-105 font-medium"
              >
                Book Now
              </a>
            </nav>
            <div className="md:hidden">
              <Sheet open={isSheetOpen} onOpenChange={setIsSheetOpen}>
                <SheetTrigger asChild>
                  <Button variant="ghost" size="icon" className="text-amber-800">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        className="w-6 h-6"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                    </svg>
                  </Button>
                </SheetTrigger>
                <SheetContent side="right" className="bg-white">
                  <div className="flex flex-col space-y-4 mt-8">
                    <a
                        href="#services"
                        onClick={(e) => scrollToSection(e, "services")}
                        className="text-amber-900 hover:text-amber-600 transition-colors duration-300 text-lg font-medium"
                    >
                      Services
                    </a>
                    <a
                        href="#about"
                        onClick={(e) => scrollToSection(e, "about")}
                        className="text-amber-900 hover:text-amber-600 transition-colors duration-300 text-lg font-medium"
                    >
                      About
                    </a>
                    <a
                        href="#testimonials"
                        onClick={(e) => scrollToSection(e, "testimonials")}
                        className="text-amber-900 hover:text-amber-600 transition-colors duration-300 text-lg font-medium"
                    >
                      Testimonials
                    </a>
                    <a
                        href="#booking"
                        onClick={(e) => scrollToSection(e, "booking")}
                        className="bg-amber-600 hover:bg-amber-700 text-white px-5 py-2 rounded-full transition-all duration-300 transform hover:scale-105 font-medium text-center"
                    >
                      Book Now
                    </a>
                  </div>
                </SheetContent>
              </Sheet>
            </div>
          </div>
        </header>

        {/* Hero Section */}
        <section className="pt-32 pb-20 bg-gradient-to-b from-amber-50 to-white">
          <div className="container mx-auto px-4 grid md:grid-cols-2 gap-8 md:gap-12 items-center">
            <div className="space-y-4 md:space-y-6 max-w-lg">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-amber-900 leading-tight animate-fade-in">
                Discover True Relaxation & Wellness
              </h1>
              <p className="text-lg text-amber-700 animate-fade-in-delay">
                Experience the healing power of touch with our expert massage therapists. Restore balance to your body and
                mind in our tranquil sanctuary.
              </p>
              <div className="pt-4 flex space-x-4 animate-fade-in-delay-2">
                <a
                    href="#booking"
                    onClick={(e) => scrollToSection(e, "booking")}
                    className="bg-amber-600 hover:bg-amber-700 text-white px-6 py-3 rounded-full transition-all duration-300 transform hover:scale-105 flex items-center space-x-2 font-medium"
                >
                  <span>Book Appointment</span>
                  <ArrowRight className="w-4 h-4" />
                </a>
                <a
                    href="#services"
                    onClick={(e) => scrollToSection(e, "services")}
                    className="border border-amber-600 text-amber-600 hover:bg-amber-50 px-6 py-3 rounded-full transition-all duration-300"
                >
                  Our Services
                </a>
              </div>
            </div>
            <div className="relative h-[300px] md:h-[400px] lg:h-[500px] rounded-2xl overflow-hidden shadow-xl transform transition-all duration-700 hover:scale-[1.02] hover:shadow-2xl">
              <Image
                  src="/placeholder.svg?height=1000&width=800"
                  alt="Massage therapy session"
                  fill
                  className="object-cover"
                  priority
              />
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section id="services" className="py-16 sm:py-20 scroll-mt-20">
          <div className="container mx-auto px-4">
            <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-16">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-serif font-bold text-amber-900 mb-4">
                Our Therapeutic Services
              </h2>
              <p className="text-amber-700">
                We offer a variety of massage techniques tailored to your specific needs, helping you achieve optimal
                wellness and relaxation.
              </p>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
              <ServiceCard
                  title="Swedish Massage"
                  description="A gentle, relaxing massage that uses long strokes, kneading, and circular movements to help you relax and energize."
                  duration="60 min"
                  price={85}
                  imageSrc="/placeholder.svg?height=400&width=600"
                  bookingLink="#booking"
                  onBookingClick={(e) => scrollToSection(e, "booking")}
              />
              <ServiceCard
                  title="Deep Tissue Massage"
                  description="Targets the deeper layers of muscle and connective tissue to release chronic patterns of tension."
                  duration="60 min"
                  price={95}
                  imageSrc="/placeholder.svg?height=400&width=600"
                  bookingLink="#booking"
                  onBookingClick={(e) => scrollToSection(e, "booking")}
              />
              <ServiceCard
                  title="Hot Stone Massage"
                  description="Smooth, heated stones are placed on specific points on the body to warm and loosen tight muscles."
                  duration="75 min"
                  price={110}
                  imageSrc="/placeholder.svg?height=400&width=600"
                  bookingLink="#booking"
                  onBookingClick={(e) => scrollToSection(e, "booking")}
              />
              <ServiceCard
                  title="Aromatherapy Massage"
                  description="Essential oils are added to a relaxing massage to promote healing and enhance the therapeutic benefits."
                  duration="60 min"
                  price={90}
                  imageSrc="/placeholder.svg?height=400&width=600"
                  bookingLink="#booking"
                  onBookingClick={(e) => scrollToSection(e, "booking")}
              />
              <ServiceCard
                  title="Sports Massage"
                  description="Focuses on areas of the body that are overused and stressed from repetitive movements."
                  duration="60 min"
                  price={95}
                  imageSrc="/placeholder.svg?height=400&width=600"
                  bookingLink="#booking"
                  onBookingClick={(e) => scrollToSection(e, "booking")}
              />
              <ServiceCard
                  title="Prenatal Massage"
                  description="Specially designed for expectant mothers to reduce stress, decrease swelling, and relieve muscle and joint pain."
                  duration="60 min"
                  price={90}
                  imageSrc="/placeholder.svg?height=400&width=600"
                  bookingLink="#booking"
                  onBookingClick={(e) => scrollToSection(e, "booking")}
              />
            </div>
          </div>
        </section>

        {/* About Section */}
        <section id="about" className="py-16 sm:py-20 bg-amber-50 scroll-mt-20">
          <div className="container mx-auto px-4 grid md:grid-cols-2 gap-8 md:gap-12 items-center">
            <div className="relative h-[300px] md:h-[400px] lg:h-[600px] rounded-2xl overflow-hidden shadow-xl order-2 md:order-1">
              <Image src="/placeholder.svg?height=1200&width=800" alt="Our spa interior" fill className="object-cover" />
            </div>
            <div className="space-y-4 sm:space-y-6 max-w-lg order-1 md:order-2">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-serif font-bold text-amber-900">About Serenity Spa</h2>
              <p className="text-amber-700">
                Founded in 2010, Serenity Spa has been a sanctuary for those seeking relief from stress and physical
                discomfort. Our team of licensed massage therapists brings years of experience and a passion for healing.
              </p>
              <p className="text-amber-700">
                We believe in the power of touch to heal, restore, and rejuvenate. Our approach combines traditional
                techniques with modern knowledge to provide you with the best therapeutic experience.
              </p>
              <div className="pt-4 space-y-4">
                <div className="flex items-center space-x-3">
                  <div className="bg-white p-2 rounded-full shadow-md">
                    <MapPin className="w-5 h-5 text-amber-600" />
                  </div>
                  <span className="text-amber-800">123 Wellness Avenue, Serenity City</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="bg-white p-2 rounded-full shadow-md">
                    <Clock className="w-5 h-5 text-amber-600" />
                  </div>
                  <span className="text-amber-800">Open Mon-Sat: 9am - 8pm, Sun: 10am - 6pm</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="bg-white p-2 rounded-full shadow-md">
                    <Phone className="w-5 h-5 text-amber-600" />
                  </div>
                  <span className="text-amber-800">(555) 123-4567</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section id="testimonials" className="py-16 sm:py-20 scroll-mt-20">
          <div className="container mx-auto px-4">
            <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-16">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-serif font-bold text-amber-900 mb-4">
                What Our Clients Say
              </h2>
              <p className="text-amber-700">
                Don't just take our word for it. Here's what our clients have to say about their experiences at Serenity
                Spa.
              </p>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
              <TestimonialCard
                  quote="The deep tissue massage I received was exactly what I needed. My therapist listened to my concerns and focused on my problem areas. I left feeling like a new person!"
                  author="Sarah Johnson"
                  role="Regular Client"
                  imageSrc="/placeholder.svg?height=200&width=200"
              />
              <TestimonialCard
                  quote="I've been coming to Serenity Spa for over a year now, and I can honestly say it's changed my life. The prenatal massages helped me through my pregnancy, and now I come monthly for stress relief."
                  author="Michael Chen"
                  role="Monthly Member"
                  imageSrc="/placeholder.svg?height=200&width=200"
              />
              <TestimonialCard
                  quote="As an athlete, I need regular bodywork to stay in top condition. The sports massage techniques used here have significantly improved my recovery time and performance."
                  author="Emma Rodriguez"
                  role="Professional Athlete"
                  imageSrc="/placeholder.svg?height=200&width=200"
              />
            </div>
          </div>
        </section>

        {/* Booking Section */}
        <section id="booking" className="py-16 sm:py-20 bg-amber-800 text-white scroll-mt-20">
          <div className="container mx-auto px-4">
            <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-16">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-serif font-bold mb-4">Book Your Appointment</h2>
              <p className="text-amber-100">
                Take the first step toward relaxation and wellness. Schedule your appointment today and experience the
                Serenity difference.
              </p>
            </div>

            <div className="max-w-2xl mx-auto bg-white text-amber-900 rounded-2xl shadow-xl p-4 sm:p-6 md:p-10">
              <BookingForm />
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="bg-amber-900 text-white py-10 sm:py-12">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              <div>
                <h3 className="text-xl font-serif font-bold mb-4">Serenity Spa</h3>
                <p className="text-amber-100">Your sanctuary for relaxation and wellness in the heart of the city.</p>
              </div>
              <div>
                <h4 className="text-lg font-bold mb-4">Quick Links</h4>
                <ul className="space-y-2">
                  <li>
                    <a
                        href="#services"
                        onClick={(e) => scrollToSection(e, "services")}
                        className="text-amber-100 hover:text-white transition-colors"
                    >
                      Services
                    </a>
                  </li>
                  <li>
                    <a
                        href="#about"
                        onClick={(e) => scrollToSection(e, "about")}
                        className="text-amber-100 hover:text-white transition-colors"
                    >
                      About Us
                    </a>
                  </li>
                  <li>
                    <a
                        href="#testimonials"
                        onClick={(e) => scrollToSection(e, "testimonials")}
                        className="text-amber-100 hover:text-white transition-colors"
                    >
                      Testimonials
                    </a>
                  </li>
                  <li>
                    <a
                        href="#booking"
                        onClick={(e) => scrollToSection(e, "booking")}
                        className="text-amber-100 hover:text-white transition-colors"
                    >
                      Book Now
                    </a>
                  </li>
                </ul>
              </div>
              <div>
                <h4 className="text-lg font-bold mb-4">Hours</h4>
                <ul className="space-y-2 text-amber-100">
                  <li>Monday - Friday: 9am - 8pm</li>
                  <li>Saturday: 9am - 8pm</li>
                  <li>Sunday: 10am - 6pm</li>
                </ul>
              </div>
              <div>
                <h4 className="text-lg font-bold mb-4">Contact</h4>
                <ul className="space-y-2 text-amber-100">
                  <li>123 Wellness Avenue</li>
                  <li>Serenity City, SC 12345</li>
                  <li>(555) 123-4567</li>
                  <li>info@serenityspa.com</li>
                </ul>
              </div>
            </div>
            <div className="border-t border-amber-700 mt-8 pt-8 text-center text-amber-100">
              <p>&copy; {new Date().getFullYear()} Serenity Spa. All rights reserved.</p>
            </div>
          </div>
        </footer>

        {/* Scroll to top button */}
        <button
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="fixed bottom-6 right-6 bg-amber-600 hover:bg-amber-700 text-white p-3 rounded-full shadow-lg transition-all duration-300 z-50 md:hidden"
            aria-label="Scroll to top"
        >
          <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l7-7m0 0l7 7m-7-7v18" />
          </svg>
        </button>
      </main>
  )
}

