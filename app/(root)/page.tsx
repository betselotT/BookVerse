"use client";

import Link from "next/link";
import Image from "next/image";
import {
  Search,
  Menu,
  ChevronRight,
  LogIn,
  UserPlus,
  BookOpen,
  BookText,
  Award,
  Star,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
  SheetClose,
} from "@/components/ui/sheet";

export default function Home() {
  // Sample book data
  const featuredBooks = [
    {
      id: 1,
      title: "The Silent Echo",
      author: "J.R. Rain",
      rating: 4.7,
      cover: "/The_Silent_Echo.png",
    },
    {
      id: 2,
      title: "Beyond The Horizon",
      author: "K.J. Cloutier",
      rating: 4.5,
      cover: "/Beyond_the_Horizon.png",
    },
    {
      id: 3,
      title: "Whispers in the Dark",
      author: "Conner Lindell",
      rating: 4.8,
      cover: "/Whispers_in_the_Dark.png",
    },
    {
      id: 4,
      title: "The Last Journey",
      author: "John L. Bell",
      rating: 4.6,
      cover: "/The_Last_Journey.png",
    },
  ];

  const popularCategories = [
    { name: "Fiction", icon: <BookText className="h-6 w-6" /> },
    { name: "Non-Fiction", icon: <BookOpen className="h-6 w-6" /> },
    { name: "Award Winners", icon: <Award className="h-6 w-6" /> },
    { name: "Bestsellers", icon: <Star className="h-6 w-6" /> },
  ];

  const newReleases = [
    {
      id: 5,
      title: "Midnight Shadows",
      author: "Sarah Blake",
      cover: "/placeholder.svg?height=300&width=200",
    },
    {
      id: 6,
      title: "The Forgotten Path",
      author: "Daniel Stone",
      cover: "/placeholder.svg?height=300&width=200",
    },
    {
      id: 7,
      title: "Echoes of Tomorrow",
      author: "Olivia Green",
      cover: "/placeholder.svg?height=300&width=200",
    },
    {
      id: 8,
      title: "The Hidden Truth",
      author: "Michael Ross",
      cover: "/placeholder.svg?height=300&width=200",
    },
  ];

  return (
    <div className="flex min-h-screen flex-col">
      {/* Navbar */}
      <header className="sticky top-0 z-50 w-full border-b bg-white/95 backdrop-blur-md shadow-sm animate-in slide-in-from-top duration-300 pl-5 lg:pl-30">
        <div className="container flex h-16 items-center justify-between">
          <div className="flex items-center gap-2">
            <Link href="/" className="flex items-center group">
              <div className="p-2 bg-gradient-to-br from-orange-400 to-orange-600 rounded-xl group-hover:scale-110 transition-transform duration-300">
                <BookOpen className="h-5 w-5 text-white" />
              </div>
              <span className="ml-3 text-xl font-bold bg-gradient-to-r from-orange-500 to-orange-700 bg-clip-text text-transparent">
                BookVerse
              </span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            <Link
              href="#browse"
              className="text-sm font-medium text-gray-700 hover:text-orange-500 transition-all duration-300 hover:scale-105 relative group"
            >
              Browse
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-orange-500 group-hover:w-full transition-all duration-300"></span>
            </Link>
            <Link
              href="#categories"
              className="text-sm font-medium text-gray-700 hover:text-orange-500 transition-all duration-300 hover:scale-105 relative group"
            >
              Categories
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-orange-500 group-hover:w-full transition-all duration-300"></span>
            </Link>
            <Link
              href="#new-releases"
              className="text-sm font-medium text-gray-700 hover:text-orange-500 transition-all duration-300 hover:scale-105 relative group"
            >
              New Releases
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-orange-500 group-hover:w-full transition-all duration-300"></span>
            </Link>
            <Link
              href="#about"
              className="text-sm font-medium text-gray-700 hover:text-orange-500 transition-all duration-300 hover:scale-105 relative group"
            >
              About
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-orange-500 group-hover:w-full transition-all duration-300"></span>
            </Link>
          </nav>

          {/* Auth Buttons - Desktop */}
          <div className="hidden md:flex items-center gap-4">
            <Link href="/sign-in">
              <Button
                variant="outline"
                size="sm"
                className="flex cursor-pointer items-center gap-2 border-orange-200 text-orange-600 transition-all duration-300 hover:scale-105 hover:text-orange-500 hover:bg-orange-400"
              >
                <LogIn className="h-4 w-4" />
                <span>Login</span>
              </Button>
            </Link>
            <Link href="/sign-up">
              <Button
                size="sm"
                className="flex cursor-pointer items-center gap-2 bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
              >
                <UserPlus className="h-4 w-4" />
                <span>Sign Up</span>
              </Button>
            </Link>
          </div>

          {/* Mobile Menu */}
          <Sheet>
            <SheetTrigger asChild className="md:hidden">
              <Button
                variant="ghost"
                size="icon"
                className="hover:bg-orange-50"
              >
                <Menu className="h-6 w-6 text-orange-600" />
                <span className="sr-only">Toggle menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent
              side="right"
              className="w-[300px] sm:w-[400px] bg-white"
            >
              <nav className="flex flex-col gap-4 mt-8">
                <SheetClose asChild>
                  <Link
                    href="#browse"
                    className="flex items-center py-3 text-lg font-medium text-gray-700 hover:text-orange-500 transition-colors duration-300 border-b border-gray-100"
                  >
                    Browse
                  </Link>
                </SheetClose>
                <SheetClose asChild>
                  <Link
                    href="#categories"
                    className="flex items-center py-3 text-lg font-medium text-gray-700 hover:text-orange-500 transition-colors duration-300 border-b border-gray-100"
                  >
                    Categories
                  </Link>
                </SheetClose>
                <SheetClose asChild>
                  <Link
                    href="#new-releases"
                    className="flex items-center py-3 text-lg font-medium text-gray-700 hover:text-orange-500 transition-colors duration-300 border-b border-gray-100"
                  >
                    New Releases
                  </Link>
                </SheetClose>
                <SheetClose asChild>
                  <Link
                    href="#about"
                    className="flex items-center py-3 text-lg font-medium text-gray-700 hover:text-orange-500 transition-colors duration-300 border-b border-gray-100"
                  >
                    About
                  </Link>
                </SheetClose>
                <div className="flex flex-col gap-3 mt-6">
                  <Button
                    variant="outline"
                    className="flex items-center gap-2 w-full border-orange-200 text-orange-600 hover:bg-orange-50"
                  >
                    <LogIn className="h-4 w-4" />
                    <span>Login</span>
                  </Button>
                  <Button className="flex items-center gap-2 w-full bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700">
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
        <section
          id="browse"
          className="relative py-20 bg-gradient-to-br from-orange-50 via-white to-orange-100 overflow-hidden pl-5 lg:pl-30"
        >
          <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg%20width%3D%2260%22%20height%3D%2260%22%20viewBox%3D%220%200%2060%2060%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%3Cg%20fill%3D%22none%22%20fillRule%3D%22evenodd%22%3E%3Cg%20fill%3D%22%23f97316%22%20fillOpacity%3D%220.05%22%3E%3Ccircle%20cx%3D%2230%22%20cy%3D%2230%22%20r%3D%222%22%2F%3E%3C%2Fg%3E%3C%2Fg%3E%3C%2Fsvg%3E')] opacity-50"></div>
          <div className="container px-4 md:px-6 relative">
            <div className="grid gap-12 lg:grid-cols-2 lg:gap-16 items-center">
              <div className="space-y-6 animate-in slide-in-from-left duration-700">
                <div className="inline-flex items-center px-4 py-2 bg-orange-100 text-orange-700 rounded-full text-sm font-medium animate-in fade-in duration-1000 delay-300">
                  <Star className="h-4 w-4 mr-2" />
                  Discover Amazing Stories
                </div>
                <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl bg-gradient-to-r from-gray-900 via-gray-800 to-orange-800 bg-clip-text text-transparent">
                  Discover Your Next Favorite Book
                </h1>
                <p className="text-gray-600 text-lg md:text-xl leading-relaxed">
                  Explore thousands of books across all genres. Find your
                  perfect read today.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 pt-4">
                  <div className="relative flex-1 group">
                    <Search className="absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-gray-400 group-focus-within:text-orange-500 transition-colors duration-300" />
                    <Input
                      type="search"
                      placeholder="Search by title, author, or ISBN"
                      className="pl-12 h-12 bg-white border-2 border-gray-200 focus:border-orange-400 rounded-xl shadow-sm hover:shadow-md transition-all duration-300 text-black"
                    />
                  </div>
                  <Button className="h-12 cursor-pointer px-8 bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
                    Search
                  </Button>
                </div>
              </div>
              <div className="relative h-[400px] lg:h-[500px] animate-in slide-in-from-right duration-700 delay-300">
                <div className="absolute top-0 right-0 -rotate-6 transform hover:rotate-0 transition-transform duration-500 hover:scale-105">
                  <div className="relative">
                    <Image
                      src="/it_ends_with_us.png"
                      alt="Featured Book"
                      width={230}
                      height={350}
                      className="rounded-xl shadow-2xl"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-orange-500/20 to-transparent rounded-xl"></div>
                  </div>
                </div>
                <div className="absolute top-16 right-48 rotate-6 transform hover:rotate-0 transition-transform duration-500 hover:scale-105 delay-100">
                  <div className="relative">
                    <Image
                      src="/harry_potter.png"
                      alt="Featured Book"
                      width={230}
                      height={350}
                      className="rounded-xl shadow-2xl"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-orange-500/20 to-transparent rounded-xl"></div>
                  </div>
                </div>
                <div className="absolute top-32 right-24 -rotate-3 transform hover:rotate-0 transition-transform duration-500 hover:scale-105 delay-200">
                  <div className="relative">
                    <Image
                      src="/got.png"
                      alt="Featured Book"
                      width={230}
                      height={350}
                      className="rounded-xl shadow-2xl opacity-80"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-orange-500/20 to-transparent rounded-xl"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Featured Books */}
        <section className="py-20 bg-white pl-5 lg:pl-30">
          <div className="container px-4 md:px-6">
            <div className="flex items-center justify-between mb-12 animate-in slide-in-from-top duration-500">
              <h2 className="text-3xl font-bold text-gray-900">
                Featured Books
              </h2>
              <Link
                href="#"
                className="text-orange-500 hover:text-orange-600 flex items-center group transition-colors duration-300"
              >
                View all
                <ChevronRight className="h-4 w-4 ml-1 group-hover:translate-x-1 transition-transform duration-300" />
              </Link>
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-8">
              {featuredBooks.map((book, index) => (
                <div
                  key={book.id}
                  className="group relative animate-in slide-in-from-bottom duration-500"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <div className="aspect-[2/3] overflow-hidden rounded-xl bg-gradient-to-br from-gray-100 to-gray-200 shadow-md group-hover:shadow-xl transition-all duration-500">
                    <Image
                      src={book.cover || "/placeholder.svg"}
                      alt={book.title}
                      width={200}
                      height={300}
                      className="object-cover w-full h-full transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 transition-opacity duration-300"></div>
                  </div>
                  <div className="mt-4 space-y-2">
                    <h3 className="font-semibold text-sm sm:text-base text-gray-900 group-hover:text-orange-800 transition-colors duration-300">
                      {book.title}
                    </h3>
                    <p className="text-gray-500 text-xs sm:text-sm group-hover:text-orange-800">
                      {book.author}
                    </p>
                    <div className="flex items-center">
                      <Star className="h-4 w-4 fill-orange-400 text-orange-400" />
                      <span className="text-sm ml-1 font-medium text-gray-700 group-hover:text-orange-800">
                        {book.rating}
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Categories Section */}
        <section
          id="categories"
          className="py-20 bg-gradient-to-br from-orange-50 to-white pl-5 lg:pl-30"
        >
          <div className="container px-4 md:px-6">
            <h2 className="text-3xl font-bold mb-12 text-center text-gray-900 animate-in slide-in-from-top duration-500">
              Browse by Category
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {popularCategories.map((category, index) => (
                <div
                  key={index}
                  className="group flex flex-col items-center justify-center p-8 bg-white rounded-2xl shadow-md hover:shadow-xl transition-all duration-500 border border-orange-100 hover:border-orange-200 cursor-pointer animate-in slide-in-from-bottom duration-500 hover:scale-105"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <div className="p-4 bg-gradient-to-br from-orange-100 to-orange-200 rounded-2xl text-orange-600 mb-4 group-hover:scale-110 transition-transform duration-300">
                    {category.icon}
                  </div>
                  <h3 className="font-semibold text-gray-900 group-hover:text-orange-600 transition-colors duration-300">
                    {category.name}
                  </h3>
                </div>
              ))}
            </div>
            <div className="mt-12 text-center animate-in slide-in-from-bottom duration-500 delay-500">
              <Button
                variant="outline"
                className="border-2 border-orange-300 text-orange-600 hover:bg-orange-50 hover:border-orange-400 hover:text-orange-500 px-8 py-3 rounded-xl transition-all duration-300 hover:scale-115 cursor-pointer"
              >
                View All Categories
              </Button>
            </div>
          </div>
        </section>

        {/* New Releases */}
        <section id="new-releases" className="py-20 bg-white pl-5 lg:pl-30">
          <div className="container px-4 md:px-6">
            <div className="flex items-center justify-between mb-12 animate-in slide-in-from-top duration-500">
              <h2 className="text-3xl font-bold text-gray-900">New Releases</h2>
              <Link
                href="#"
                className="text-orange-500 hover:text-orange-600 flex items-center group transition-colors duration-300"
              >
                View all
                <ChevronRight className="h-4 w-4 ml-1 group-hover:translate-x-1 transition-transform duration-300" />
              </Link>
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-8">
              {newReleases.map((book, index) => (
                <div
                  key={book.id}
                  className="group relative animate-in slide-in-from-bottom duration-500"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <div className="aspect-[2/3] overflow-hidden rounded-xl bg-gradient-to-br from-gray-100 to-gray-200 shadow-md group-hover:shadow-xl transition-all duration-500">
                    <Image
                      src={book.cover || "/placeholder.svg"}
                      alt={book.title}
                      width={200}
                      height={300}
                      className="object-cover w-full h-full transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    <div className="absolute top-3 right-3 bg-orange-500 text-white text-xs px-2 py-1 rounded-full font-medium">
                      New
                    </div>
                  </div>
                  <div className="mt-4 space-y-2">
                    <h3 className="font-semibold text-sm sm:text-base text-gray-900 group-hover:text-orange-600 transition-colors duration-300">
                      {book.title}
                    </h3>
                    <p className="text-gray-500 text-xs sm:text-sm">
                      {book.author}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* About Section */}
        <section
          id="about"
          className="py-20 bg-gradient-to-br from-gray-900 via-gray-800 to-orange-900 text-white relative overflow-hidden pl-5 lg:pl-30"
        >
          <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg%20width%3D%2260%22%20height%3D%2260%22%20viewBox%3D%220%200%2060%2060%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%3Cg%20fill%3D%22none%22%20fillRule%3D%22evenodd%22%3E%3Cg%20fill%3D%22%23f97316%22%20fillOpacity%3D%220.1%22%3E%3Ccircle%20cx%3D%2230%22%20cy%3D%2230%22%20r%3D%221%22%2F%3E%3C%2Fg%3E%3C%2Fg%3E%3C%2Fsvg%3E')] opacity-50"></div>
          <div className="container px-4 md:px-6 relative">
            <div className="grid gap-12 lg:grid-cols-2 lg:gap-16 items-center">
              <div className="animate-in slide-in-from-left duration-700">
                <h2 className="text-4xl font-bold mb-6 bg-gradient-to-r from-white to-orange-200 bg-clip-text text-transparent">
                  About BookVerse
                </h2>
                <p className="text-gray-300 mb-8 text-lg leading-relaxed">
                  BookVerse is your ultimate destination for discovering,
                  exploring, and enjoying books of all genres. Our mission is to
                  connect readers with their next favorite books and foster a
                  community of book lovers.
                </p>
                <ul className="space-y-4">
                  <li className="flex items-start group">
                    <div className="p-1 bg-orange-500 rounded-full mr-4 mt-1 group-hover:scale-110 transition-transform duration-300">
                      <ChevronRight className="h-4 w-4 text-white" />
                    </div>
                    <span className="text-gray-200 group-hover:text-white transition-colors duration-300">
                      Access to thousands of titles across all genres
                    </span>
                  </li>
                  <li className="flex items-start group">
                    <div className="p-1 bg-orange-500 rounded-full mr-4 mt-1 group-hover:scale-110 transition-transform duration-300">
                      <ChevronRight className="h-4 w-4 text-white" />
                    </div>
                    <span className="text-gray-200 group-hover:text-white transition-colors duration-300">
                      Personalized recommendations based on your preferences
                    </span>
                  </li>
                  <li className="flex items-start group">
                    <div className="p-1 bg-orange-500 rounded-full mr-4 mt-1 group-hover:scale-110 transition-transform duration-300">
                      <ChevronRight className="h-4 w-4 text-white" />
                    </div>
                    <span className="text-gray-200 group-hover:text-white transition-colors duration-300">
                      Join a community of passionate readers
                    </span>
                  </li>
                </ul>
                <Button className="mt-8 bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 px-8 py-3 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
                  Learn More
                </Button>
              </div>
              <div className="relative h-[400px] lg:h-[500px] flex items-center justify-center animate-in slide-in-from-right duration-700 delay-300">
                <div className="relative w-[85%] h-[85%] rounded-2xl overflow-hidden shadow-2xl group">
                  <Image
                    src="/placeholder.svg?height=400&width=600"
                    alt="BookVerse Library"
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-orange-900/40 to-transparent"></div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Newsletter Section
        <section className="py-16 bg-gradient-to-r from-orange-500 to-orange-600 text-white relative overflow-hidden">
          <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg%20width%3D%2240%22%20height%3D%2240%22%20viewBox%3D%220%200%2040%2040%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%3Cg%20fill%3D%22none%22%20fillRule%3D%22evenodd%22%3E%3Cg%20fill%3D%22%23ffffff%22%20fillOpacity%3D%220.1%22%3E%3Ccircle%20cx%3D%2220%22%20cy%3D%2220%22%20r%3D%221%22%2F%3E%3C%2Fg%3E%3C%2Fg%3E%3C%2Fsvg%3E')] opacity-50"></div>
          <div className="container px-4 md:px-6 relative">
            <div className="flex flex-col md:flex-row items-center justify-between gap-8 animate-in slide-in-from-bottom duration-500">
              <div className="text-center md:text-left">
                <h2 className="text-3xl font-bold mb-2">Stay Updated</h2>
                <p className="text-orange-100 text-lg">
                  Subscribe to our newsletter for the latest book releases and
                  offers.
                </p>
              </div>
              <div className="w-full md:w-auto flex flex-col sm:flex-row gap-4">
                <Input
                  type="email"
                  placeholder="Your email address"
                  className="bg-white/10 border-white/20 placeholder:text-orange-200 text-white backdrop-blur-sm h-12 px-4 rounded-xl focus:bg-white/20 transition-all duration-300"
                />
                <Button className="bg-white text-orange-600 hover:bg-gray-100 px-8 h-12 rounded-xl font-semibold transition-all duration-300 hover:scale-105 shadow-lg">
                  Subscribe
                </Button>
              </div>
            </div>
          </div>
        </section> */}
      </main>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-16 pl-5 lg:pl-30">
        <div className="container px-4 md:px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12">
            <div className="col-span-2 md:col-span-1">
              <div className="flex items-center mb-4">
                <div className="p-2 bg-gradient-to-br from-orange-400 to-orange-600 rounded-xl">
                  <BookOpen className="h-6 w-6 text-white" />
                </div>
                <span className="ml-3 text-xl font-bold bg-gradient-to-r from-orange-400 to-orange-600 bg-clip-text text-transparent">
                  BookVerse
                </span>
              </div>
              <p className="text-gray-400 leading-relaxed">
                Your ultimate destination for all things books.
              </p>
            </div>
            <div>
              <h3 className="font-bold mb-6 text-orange-400">Explore</h3>
              <ul className="space-y-3 text-gray-400">
                <li>
                  <Link
                    href="#"
                    className="hover:text-orange-400 transition-colors duration-300"
                  >
                    Browse
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="hover:text-orange-400 transition-colors duration-300"
                  >
                    Categories
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="hover:text-orange-400 transition-colors duration-300"
                  >
                    New Releases
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="hover:text-orange-400 transition-colors duration-300"
                  >
                    Bestsellers
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="font-bold mb-6 text-orange-400">Company</h3>
              <ul className="space-y-3 text-gray-400">
                <li>
                  <Link
                    href="#"
                    className="hover:text-orange-400 transition-colors duration-300"
                  >
                    About Us
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="hover:text-orange-400 transition-colors duration-300"
                  >
                    Contact
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="hover:text-orange-400 transition-colors duration-300"
                  >
                    Careers
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="hover:text-orange-400 transition-colors duration-300"
                  >
                    Press
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="font-bold mb-6 text-orange-400">Legal</h3>
              <ul className="space-y-3 text-gray-400">
                <li>
                  <Link
                    href="#"
                    className="hover:text-orange-400 transition-colors duration-300"
                  >
                    Terms of Service
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="hover:text-orange-400 transition-colors duration-300"
                  >
                    Privacy Policy
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="hover:text-orange-400 transition-colors duration-300"
                  >
                    Cookie Policy
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 mb-4 md:mb-0">
              &copy; {new Date().getFullYear()} BookVerse. All rights reserved.
            </p>
            <div className="flex space-x-6">
              <Link
                href="#"
                className="text-gray-400 hover:text-orange-400 transition-colors duration-300 hover:scale-110 transform"
              >
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
              <Link
                href="#"
                className="text-gray-400 hover:text-orange-400 transition-colors duration-300 hover:scale-110 transform"
              >
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
              <Link
                href="#"
                className="text-gray-400 hover:text-orange-400 transition-colors duration-300 hover:scale-110 transform"
              >
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
  );
}
