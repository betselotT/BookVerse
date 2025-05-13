import Link from "next/link"
import Image from "next/image"
import { Search, Menu, ChevronRight, LogIn, UserPlus, BookOpen, BookText, Award, Star } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Sheet, SheetContent, SheetTrigger, SheetClose } from "@/components/ui/sheet"

export default function Home() {
  // Sample book data
  const featuredBooks = [
    {
      id: 1,
      title: "The Silent Echo",
      author: "Maya Rivers",
      rating: 4.7,
      cover: "/placeholder.svg?height=300&width=200",
    },
    {
      id: 2,
      title: "Beyond the Horizon",
      author: "James Carter",
      rating: 4.5,
      cover: "/placeholder.svg?height=300&width=200",
    },
    {
      id: 3,
      title: "Whispers in the Dark",
      author: "Elena Frost",
      rating: 4.8,
      cover: "/placeholder.svg?height=300&width=200",
    },
    {
      id: 4,
      title: "The Last Journey",
      author: "Thomas Wright",
      rating: 4.6,
      cover: "/placeholder.svg?height=300&width=200",
    },
  ]

  const popularCategories = [
    { name: "Fiction", icon: <BookText className="h-6 w-6" /> },
    { name: "Non-Fiction", icon: <BookOpen className="h-6 w-6" /> },
    { name: "Award Winners", icon: <Award className="h-6 w-6" /> },
    { name: "Bestsellers", icon: <Star className="h-6 w-6" /> },
  ]

  const newReleases = [
    { id: 5, title: "Midnight Shadows", author: "Sarah Blake", cover: "/placeholder.svg?height=300&width=200" },
    { id: 6, title: "The Forgotten Path", author: "Daniel Stone", cover: "/placeholder.svg?height=300&width=200" },
    { id: 7, title: "Echoes of Tomorrow", author: "Olivia Green", cover: "/placeholder.svg?height=300&width=200" },
    { id: 8, title: "The Hidden Truth", author: "Michael Ross", cover: "/placeholder.svg?height=300&width=200" },
  ]

  return (
    <div className="flex min-h-screen flex-col">
      {/* Navbar */}
      <header className="sticky top-0 z-50 w-full border-b bg-background">
        <div className="container flex h-16 items-center justify-between">
          <div className="flex items-center gap-2">
            <Link href="/" className="flex items-center">
              <BookOpen className="h-6 w-6 text-orange-500" />
              <span className="ml-2 text-xl font-bold">BookVerse</span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-6">
            <Link href="#browse" className="text-sm font-medium hover:text-orange-500 transition-colors">
              Browse
            </Link>
            <Link href="#categories" className="text-sm font-medium hover:text-orange-500 transition-colors">
              Categories
            </Link>
            <Link href="#new-releases" className="text-sm font-medium hover:text-orange-500 transition-colors">
              New Releases
            </Link>
            <Link href="#about" className="text-sm font-medium hover:text-orange-500 transition-colors">
              About
            </Link>
          </nav>

          {/* Auth Buttons - Desktop */}
          <div className="hidden md:flex items-center gap-4">
            <Button variant="outline" size="sm" className="flex items-center gap-1">
              <LogIn className="h-4 w-4" />
              <span>Login</span>
            </Button>
            <Button size="sm" className="flex items-center gap-1 bg-orange-500 hover:bg-orange-600">
              <UserPlus className="h-4 w-4" />
              <span>Sign Up</span>
            </Button>
          </div>

          {/* Mobile Menu */}
          <Sheet>
            <SheetTrigger asChild className="md:hidden">
              <Button variant="ghost" size="icon">
                <Menu className="h-6 w-6" />
                <span className="sr-only">Toggle menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[300px] sm:w-[400px]">
              <nav className="flex flex-col gap-4 mt-8">
                <SheetClose asChild>
                  <Link
                    href="#browse"
                    className="flex items-center py-2 text-lg font-medium hover:text-orange-500 transition-colors"
                  >
                    Browse
                  </Link>
                </SheetClose>
                <SheetClose asChild>
                  <Link
                    href="#categories"
                    className="flex items-center py-2 text-lg font-medium hover:text-orange-500 transition-colors"
                  >
                    Categories
                  </Link>
                </SheetClose>
                <SheetClose asChild>
                  <Link
                    href="#new-releases"
                    className="flex items-center py-2 text-lg font-medium hover:text-orange-500 transition-colors"
                  >
                    New Releases
                  </Link>
                </SheetClose>
                <SheetClose asChild>
                  <Link
                    href="#about"
                    className="flex items-center py-2 text-lg font-medium hover:text-orange-500 transition-colors"
                  >
                    About
                  </Link>
                </SheetClose>
                <div className="flex flex-col gap-2 mt-4">
                  <Button variant="outline" className="flex items-center gap-1 w-full">
                    <LogIn className="h-4 w-4" />
                    <span>Login</span>
                  </Button>
                  <Button className="flex items-center gap-1 w-full bg-orange-500 hover:bg-orange-600">
                    <UserPlus className="h-4 w-4" />
                    <span>Sign Up</span>
                  </Button>
                </div>
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </header>

      <main className="flex-1">
        {/* Hero Section */}
        <section id="browse" className="relative py-20 bg-black text-white">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
              <div className="space-y-4">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                  Discover Your Next Favorite Book
                </h1>
                <p className="text-gray-300 md:text-xl">
                  Explore thousands of books across all genres. Find your perfect read today.
                </p>
                <div className="flex flex-col sm:flex-row gap-3 pt-4">
                  <div className="relative flex-1">
                    <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-500" />
                    <Input
                      type="search"
                      placeholder="Search by title, author, or ISBN"
                      className="pl-10 bg-gray-900 border-gray-700 focus:border-orange-500"
                    />
                  </div>
                  <Button className="bg-orange-500 hover:bg-orange-600">Search</Button>
                </div>
              </div>
              <div className="relative h-[300px] lg:h-[400px]">
                <div className="absolute top-0 right-0 -rotate-6 transform">
                  <Image
                    src="/placeholder.svg?height=350&width=230"
                    alt="Featured Book"
                    width={230}
                    height={350}
                    className="rounded-md shadow-lg"
                  />
                </div>
                <div className="absolute top-10 right-40 rotate-6 transform">
                  <Image
                    src="/placeholder.svg?height=350&width=230"
                    alt="Featured Book"
                    width={230}
                    height={350}
                    className="rounded-md shadow-lg"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Featured Books */}
        <section className="py-16 bg-white">
          <div className="container px-4 md:px-6">
            <div className="flex items-center justify-between mb-8">
              <h2 className="text-2xl font-bold">Featured Books</h2>
              <Link href="#" className="text-orange-500 hover:text-orange-600 flex items-center">
                View all <ChevronRight className="h-4 w-4 ml-1" />
              </Link>
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
              {featuredBooks.map((book) => (
                <div key={book.id} className="group relative">
                  <div className="aspect-[2/3] overflow-hidden rounded-md bg-gray-100">
                    <Image
                      src={book.cover || "/placeholder.svg"}
                      alt={book.title}
                      width={200}
                      height={300}
                      className="object-cover w-full h-full transition-transform group-hover:scale-105"
                    />
                  </div>
                  <div className="mt-3">
                    <h3 className="font-medium text-sm sm:text-base">{book.title}</h3>
                    <p className="text-gray-500 text-xs sm:text-sm">{book.author}</p>
                    <div className="flex items-center mt-1">
                      <Star className="h-4 w-4 fill-orange-500 text-orange-500" />
                      <span className="text-xs ml-1">{book.rating}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Categories Section */}
        <section id="categories" className="py-16 bg-gray-50">
          <div className="container px-4 md:px-6">
            <h2 className="text-2xl font-bold mb-8">Browse by Category</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {popularCategories.map((category, index) => (
                <div
                  key={index}
                  className="flex flex-col items-center justify-center p-6 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow border border-gray-100"
                >
                  <div className="p-3 bg-orange-100 rounded-full text-orange-500 mb-3">{category.icon}</div>
                  <h3 className="font-medium">{category.name}</h3>
                </div>
              ))}
            </div>
            <div className="mt-8 text-center">
              <Button variant="outline" className="border-orange-500 text-orange-500 hover:bg-orange-50">
                View All Categories
              </Button>
            </div>
          </div>
        </section>

        {/* New Releases */}
        <section id="new-releases" className="py-16 bg-white">
          <div className="container px-4 md:px-6">
            <div className="flex items-center justify-between mb-8">
              <h2 className="text-2xl font-bold">New Releases</h2>
              <Link href="#" className="text-orange-500 hover:text-orange-600 flex items-center">
                View all <ChevronRight className="h-4 w-4 ml-1" />
              </Link>
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
              {newReleases.map((book) => (
                <div key={book.id} className="group relative">
                  <div className="aspect-[2/3] overflow-hidden rounded-md bg-gray-100">
                    <Image
                      src={book.cover || "/placeholder.svg"}
                      alt={book.title}
                      width={200}
                      height={300}
                      className="object-cover w-full h-full transition-transform group-hover:scale-105"
                    />
                  </div>
                  <div className="mt-3">
                    <h3 className="font-medium text-sm sm:text-base">{book.title}</h3>
                    <p className="text-gray-500 text-xs sm:text-sm">{book.author}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* About Section */}
        <section id="about" className="py-16 bg-black text-white">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
              <div>
                <h2 className="text-3xl font-bold mb-4">About BookVerse</h2>
                <p className="text-gray-300 mb-6">
                  BookVerse is your ultimate destination for discovering, exploring, and enjoying books of all genres.
                  Our mission is to connect readers with their next favorite books and foster a community of book
                  lovers.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <ChevronRight className="h-5 w-5 text-orange-500 mr-2 mt-0.5" />
                    <span>Access to thousands of titles across all genres</span>
                  </li>
                  <li className="flex items-start">
                    <ChevronRight className="h-5 w-5 text-orange-500 mr-2 mt-0.5" />
                    <span>Personalized recommendations based on your preferences</span>
                  </li>
                  <li className="flex items-start">
                    <ChevronRight className="h-5 w-5 text-orange-500 mr-2 mt-0.5" />
                    <span>Join a community of passionate readers</span>
                  </li>
                </ul>
                <Button className="mt-6 bg-orange-500 hover:bg-orange-600">Learn More</Button>
              </div>
              <div className="relative h-[300px] lg:h-[400px] flex items-center justify-center">
                <div className="relative w-[80%] h-[80%] rounded-lg overflow-hidden">
                  <Image
                    src="/placeholder.svg?height=400&width=600"
                    alt="BookVerse Library"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Newsletter Section */}
        <section className="py-12 bg-orange-500 text-white">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col md:flex-row items-center justify-between gap-6">
              <div>
                <h2 className="text-2xl font-bold">Stay Updated</h2>
                <p>Subscribe to our newsletter for the latest book releases and offers.</p>
              </div>
              <div className="w-full md:w-auto flex flex-col sm:flex-row gap-3">
                <Input
                  type="email"
                  placeholder="Your email address"
                  className="bg-orange-600 border-orange-400 placeholder:text-orange-200 text-white"
                />
                <Button className="bg-black hover:bg-gray-800 text-white">Subscribe</Button>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-black text-white py-12">
        <div className="container px-4 md:px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div>
              <h3 className="font-bold mb-4">BookVerse</h3>
              <div className="flex items-center">
                <BookOpen className="h-6 w-6 text-orange-500" />
                <span className="ml-2 text-xl font-bold">BookVerse</span>
              </div>
              <p className="mt-4 text-sm text-gray-400">Your ultimate destination for all things books.</p>
            </div>
            <div>
              <h3 className="font-bold mb-4">Explore</h3>
              <ul className="space-y-2 text-sm text-gray-400">
                <li>
                  <Link href="#" className="hover:text-orange-500">
                    Browse
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-orange-500">
                    Categories
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-orange-500">
                    New Releases
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-orange-500">
                    Bestsellers
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="font-bold mb-4">Company</h3>
              <ul className="space-y-2 text-sm text-gray-400">
                <li>
                  <Link href="#" className="hover:text-orange-500">
                    About Us
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-orange-500">
                    Contact
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-orange-500">
                    Careers
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-orange-500">
                    Press
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="font-bold mb-4">Legal</h3>
              <ul className="space-y-2 text-sm text-gray-400">
                <li>
                  <Link href="#" className="hover:text-orange-500">
                    Terms of Service
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-orange-500">
                    Privacy Policy
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-orange-500">
                    Cookie Policy
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
            <p className="text-sm text-gray-400">&copy; {new Date().getFullYear()} BookVerse. All rights reserved.</p>
            <div className="flex space-x-4 mt-4 md:mt-0">
              <Link href="#" className="text-gray-400 hover:text-orange-500">
                <span className="sr-only">Facebook</span>
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
                  <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
                </svg>
              </Link>
              <Link href="#" className="text-gray-400 hover:text-orange-500">
                <span className="sr-only">Twitter</span>
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
              <Link href="#" className="text-gray-400 hover:text-orange-500">
                <span className="sr-only">Instagram</span>
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
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
