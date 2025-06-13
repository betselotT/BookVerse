"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import {
  BookOpen,
  Search,
  PlusCircle,
  BookMarked,
  Clock,
  CheckCircle,
  Star,
  Trash2,
  Edit,
  LogOut,
  BookText,
  ChevronDown,
  User,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Progress } from "@/components/ui/progress";
import { toast } from "sonner";
import SignOutButton from "@/components/sign-out-button";

// Book reading status types
type ReadingStatus = "want-to-read" | "reading" | "completed";

// Book interface
interface Book {
  id: string;
  title: string;
  author: string;
  cover: string;
  status: ReadingStatus;
  progress: number;
  rating?: number;
  dateAdded: string;
  categories?: string[];
  pageCount?: number;
}

export default function MyBooks() {
  const router = useRouter();
  const [searchTerm, setSearchTerm] = useState("");
  const [activeTab, setActiveTab] = useState<ReadingStatus | "all">("all");
  const [books, setBooks] = useState<Book[]>([]);
  const [isAddDialogOpen, setIsAddDialogOpen] = useState(false);
  const [isEditDialogOpen, setIsEditDialogOpen] = useState(false);
  const [selectedBook, setSelectedBook] = useState<Book | null>(null);

  // Mock user data
  const user = {
    name: "Alex Johnson",
    email: "alex@example.com",
    avatar: "/placeholder.svg?height=40&width=40",
  };

  // Load books from localStorage on component mount
  useEffect(() => {
    const savedBooks = localStorage.getItem("userBooks");
    if (savedBooks) {
      setBooks(JSON.parse(savedBooks));
    } else {
      // Sample data for first-time users
      const sampleBooks: Book[] = [
        {
          id: "1",
          title: "The Silent Echo",
          author: "J.R. Rain",
          cover: "/The_Silent_Echo.png",
          status: "reading",
          progress: 45,
          dateAdded: new Date().toISOString(),
          categories: ["Fiction", "Mystery"],
          pageCount: 320,
        },
        {
          id: "2",
          title: "Beyond The Horizon",
          author: "K.J. Cloutier",
          cover: "/Beyond_the_Horizon.png",
          status: "want-to-read",
          progress: 0,
          dateAdded: new Date().toISOString(),
          categories: ["Fiction", "Adventure"],
          pageCount: 280,
        },
        {
          id: "3",
          title: "Whispers in the Dark",
          author: "Conner Lindell",
          cover: "/Whispers_in_the_Dark.png",
          status: "completed",
          progress: 100,
          rating: 4.5,
          dateAdded: new Date().toISOString(),
          categories: ["Fiction", "Horror"],
          pageCount: 350,
        },
      ];
      setBooks(sampleBooks);
      localStorage.setItem("userBooks", JSON.stringify(sampleBooks));
    }
  }, []);

  // Save books to localStorage whenever they change
  useEffect(() => {
    localStorage.setItem("userBooks", JSON.stringify(books));
  }, [books]);

  // Filter books based on active tab and search term
  const filteredBooks = books.filter((book) => {
    const matchesTab = activeTab === "all" || book.status === activeTab;
    const matchesSearch =
      book.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      book.author.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesTab && matchesSearch;
  });

  // Add a new book
  const addBook = (newBook: Omit<Book, "id" | "dateAdded">) => {
    const book: Book = {
      ...newBook,
      id: Date.now().toString(),
      dateAdded: new Date().toISOString(),
    };
    setBooks((prev) => [...prev, book]);
    toast.success("Book added to your list!");
    setIsAddDialogOpen(false);
  };

  // Update book status
  const updateBookStatus = (id: string, status: ReadingStatus) => {
    setBooks((prev) =>
      prev.map((book) =>
        book.id === id
          ? {
              ...book,
              status,
              progress:
                status === "completed"
                  ? 100
                  : status === "want-to-read"
                  ? 0
                  : book.progress,
            }
          : book
      )
    );
    toast.success("Reading status updated!");
  };

  // Update book progress
  const updateBookProgress = (id: string, progress: number) => {
    setBooks((prev) =>
      prev.map((book) =>
        book.id === id
          ? {
              ...book,
              progress,
              status:
                progress === 100
                  ? "completed"
                  : progress > 0
                  ? "reading"
                  : book.status,
            }
          : book
      )
    );
    toast.success("Reading progress updated!");
    setIsEditDialogOpen(false);
  };

  // Delete a book
  const deleteBook = (id: string) => {
    setBooks((prev) => prev.filter((book) => book.id !== id));
    toast.success("Book removed from your list!");
  };

  // Handle logout
  const handleLogout = () => {
    // In a real app, you would call your logout function here
    toast.success("Logged out successfully!");
    router.push("/sign-in");
  };

  // Calculate reading stats
  const stats = {
    total: books.length,
    reading: books.filter((b) => b.status === "reading").length,
    wantToRead: books.filter((b) => b.status === "want-to-read").length,
    completed: books.filter((b) => b.status === "completed").length,
    averageRating:
      books
        .filter((b) => b.rating)
        .reduce((acc, book) => acc + (book.rating || 0), 0) /
        books.filter((b) => b.rating).length || 0,
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 via-white to-orange-100">
      {/* Background pattern */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg%20width%3D%2260%22%20height%3D%2260%22%20viewBox%3D%220%200%2060%2060%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%3Cg%20fill%3D%22none%22%20fillRule%3D%22evenodd%22%3E%3Cg%20fill%3D%22%23f97316%22%20fillOpacity%3D%220.05%22%3E%3Ccircle%20cx%3D%2230%22%20cy%3D%2230%22%20r%3D%222%22%2F%3E%3C%2Fg%3E%3C%2Fg%3E%3C%2Fsvg%3E')] opacity-50 pointer-events-none"></div>

      {/* Header */}
      <header className="sticky top-0 z-50 w-full border-b bg-white/95 backdrop-blur-md shadow-sm animate-in slide-in-from-top duration-300">
        <div className="container flex h-16 items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="flex items-center group">
              <div className="p-2 bg-gradient-to-br from-orange-400 to-orange-600 rounded-xl group-hover:scale-110 transition-transform duration-300">
                <BookOpen className="h-5 w-5 text-white" />
              </div>
              <button
                onClick={() => router.push("/")}
                className="ml-3 text-xl font-bold bg-gradient-to-r from-orange-500 to-orange-700 bg-clip-text text-transparent cursor-pointer"
              >
                BookVerse
              </button>
            </div>
          </div>

          {/* Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            <a
              href="/books"
              className="text-sm font-medium text-orange-600 relative group"
            >
              My Books
              <span className="absolute -bottom-1 left-0 w-full h-0.5 bg-orange-500 transition-all duration-300"></span>
            </a>
            <a
              href="/discover"
              className="text-sm font-medium text-gray-700 hover:text-orange-500 transition-all duration-300 hover:scale-105 relative group"
            >
              Discover
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-orange-500 group-hover:w-full transition-all duration-300"></span>
            </a>
            <a
              href="/community"
              className="text-sm font-medium text-gray-700 hover:text-orange-500 transition-all duration-300 hover:scale-105 relative group"
            >
              Community
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-orange-500 group-hover:w-full transition-all duration-300"></span>
            </a>
          </nav>

          {/* User menu */}
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-8">
              <button
                onClick={() => {
                  router.push("/profile");
                  console.log("Profile clicked");
                }}
                className="flex items-center gap-2 text-sm text-gray-700 hover:text-black transition cursor-pointer"
              >
                <User className="h-9 w-9 text-gray-700 hover:text-orange-500 transition-all duration-300 hover:scale-105 relative group" />
              </button>
              <div className="text-gray-700 hover:text-orange-500 transition-all duration-300 hover:scale-105">
                <SignOutButton />
              </div>
            </div>
          </div>
        </div>
      </header>

      <main className="container py-8">
        {/* Page title and actions */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8 gap-4">
          <div>
            <h1 className="text-3xl font-bold text-gray-900">My Books</h1>
            <p className="text-gray-600">
              Track and manage your reading journey
            </p>
          </div>

          <Dialog open={isAddDialogOpen} onOpenChange={setIsAddDialogOpen}>
            <DialogTrigger asChild>
              <Button className="bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 shadow-md hover:shadow-lg transition-all duration-300">
                <PlusCircle className="h-4 w-4 mr-2" />
                Add Book
              </Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-[425px]">
              <DialogHeader>
                <DialogTitle>Add Book to Your List</DialogTitle>
                <DialogDescription>
                  Enter the details of the book you want to add to your reading
                  list.
                </DialogDescription>
              </DialogHeader>
              <div className="grid gap-4 py-4">
                <div className="grid grid-cols-4 items-center gap-4">
                  <label htmlFor="title" className="text-right">
                    Title
                  </label>
                  <Input
                    id="title"
                    className="col-span-3"
                    placeholder="Book title"
                  />
                </div>
                <div className="grid grid-cols-4 items-center gap-4">
                  <label htmlFor="author" className="text-right">
                    Author
                  </label>
                  <Input
                    id="author"
                    className="col-span-3"
                    placeholder="Author name"
                  />
                </div>
                <div className="grid grid-cols-4 items-center gap-4">
                  <label htmlFor="status" className="text-right">
                    Status
                  </label>
                  <Select defaultValue="want-to-read">
                    <SelectTrigger className="col-span-3">
                      <SelectValue placeholder="Select status" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="want-to-read">Want to Read</SelectItem>
                      <SelectItem value="reading">Currently Reading</SelectItem>
                      <SelectItem value="completed">Completed</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>
              <DialogFooter>
                <Button
                  variant="outline"
                  onClick={() => setIsAddDialogOpen(false)}
                >
                  Cancel
                </Button>
                <Button
                  className="bg-gradient-to-r from-orange-500 to-orange-600"
                  onClick={() => {
                    // In a real app, you'd get values from form inputs
                    addBook({
                      title: "New Book Title",
                      author: "Author Name",
                      cover: "/placeholder.svg?height=300&width=200",
                      status: "want-to-read",
                      progress: 0,
                      categories: ["Fiction"],
                      pageCount: 250,
                    });
                  }}
                >
                  Add Book
                </Button>
              </DialogFooter>
            </DialogContent>
          </Dialog>
        </div>

        {/* Reading stats */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-8">
          <div className="bg-white rounded-xl shadow-md p-4 border border-orange-100 flex items-center">
            <div className="p-3 bg-orange-100 rounded-lg mr-4">
              <BookMarked className="h-6 w-6 text-orange-600" />
            </div>
            <div>
              <p className="text-sm text-gray-500">Total Books</p>
              <p className="text-2xl font-bold text-gray-900">{stats.total}</p>
            </div>
          </div>

          <div className="bg-white rounded-xl shadow-md p-4 border border-orange-100 flex items-center">
            <div className="p-3 bg-orange-100 rounded-lg mr-4">
              <Clock className="h-6 w-6 text-orange-600" />
            </div>
            <div>
              <p className="text-sm text-gray-500">Currently Reading</p>
              <p className="text-2xl font-bold text-gray-900">
                {stats.reading}
              </p>
            </div>
          </div>

          <div className="bg-white rounded-xl shadow-md p-4 border border-orange-100 flex items-center">
            <div className="p-3 bg-orange-100 rounded-lg mr-4">
              <CheckCircle className="h-6 w-6 text-orange-600" />
            </div>
            <div>
              <p className="text-sm text-gray-500">Completed</p>
              <p className="text-2xl font-bold text-gray-900">
                {stats.completed}
              </p>
            </div>
          </div>

          <div className="bg-white rounded-xl shadow-md p-4 border border-orange-100 flex items-center">
            <div className="p-3 bg-orange-100 rounded-lg mr-4">
              <Star className="h-6 w-6 text-orange-600" />
            </div>
            <div>
              <p className="text-sm text-gray-500">Average Rating</p>
              <p className="text-2xl font-bold text-gray-900">
                {stats.averageRating ? stats.averageRating.toFixed(1) : "N/A"}
              </p>
            </div>
          </div>
        </div>

        {/* Search and filters */}
        <div className="flex flex-col md:flex-row gap-4 mb-6">
          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-400" />
            <Input
              type="search"
              placeholder="Search your books..."
              className="pl-10 border-gray-200 focus:border-orange-400"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>

          <div className="flex gap-2">
            <Button
              variant={activeTab === "all" ? "default" : "outline"}
              onClick={() => setActiveTab("all")}
              className={
                activeTab === "all"
                  ? "bg-orange-500 hover:bg-orange-600"
                  : "border-orange-200 text-gray-700"
              }
            >
              All
            </Button>
            <Button
              variant={activeTab === "want-to-read" ? "default" : "outline"}
              onClick={() => setActiveTab("want-to-read")}
              className={
                activeTab === "want-to-read"
                  ? "bg-orange-500 hover:bg-orange-600"
                  : "border-orange-200 text-gray-700"
              }
            >
              Want to Read
            </Button>
            <Button
              variant={activeTab === "reading" ? "default" : "outline"}
              onClick={() => setActiveTab("reading")}
              className={
                activeTab === "reading"
                  ? "bg-orange-500 hover:bg-orange-600"
                  : "border-orange-200 text-gray-700"
              }
            >
              Reading
            </Button>
            <Button
              variant={activeTab === "completed" ? "default" : "outline"}
              onClick={() => setActiveTab("completed")}
              className={
                activeTab === "completed"
                  ? "bg-orange-500 hover:bg-orange-600"
                  : "border-orange-200 text-gray-700"
              }
            >
              Completed
            </Button>
          </div>
        </div>

        {/* Book list */}
        {filteredBooks.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredBooks.map((book) => (
              <div
                key={book.id}
                className="bg-white rounded-xl shadow-md overflow-hidden border border-orange-100 hover:shadow-lg transition-all duration-300"
              >
                <div className="flex p-4 gap-4">
                  {/* Book cover */}
                  <div className="w-24 h-36 flex-shrink-0 rounded-md overflow-hidden">
                    <Image
                      src={book.cover || "/placeholder.svg"}
                      alt={book.title}
                      width={96}
                      height={144}
                      className="object-cover w-full h-full"
                    />
                  </div>

                  {/* Book details */}
                  <div className="flex-1 min-w-0">
                    <h3 className="font-semibold text-gray-900 mb-1 line-clamp-2">
                      {book.title}
                    </h3>
                    <p className="text-sm text-gray-600 mb-2">{book.author}</p>

                    {/* Categories */}
                    {book.categories && book.categories.length > 0 && (
                      <div className="flex flex-wrap gap-1 mb-2">
                        {book.categories.map((category, idx) => (
                          <Badge
                            key={idx}
                            variant="outline"
                            className="text-xs bg-orange-50 text-orange-700 border-orange-200"
                          >
                            {category}
                          </Badge>
                        ))}
                      </div>
                    )}

                    {/* Reading progress */}
                    <div className="mb-2">
                      <div className="flex justify-between text-xs text-gray-600 mb-1">
                        <span>Progress</span>
                        <span>{book.progress}%</span>
                      </div>
                      <Progress
                        value={book.progress}
                        className="h-1.5 bg-gray-100 [&>div]:bg-orange-500"
                      />
                    </div>

                    {/* Rating (if completed) */}
                    {book.status === "completed" && book.rating && (
                      <div className="flex items-center mb-2">
                        <Star className="h-3 w-3 fill-orange-400 text-orange-400 mr-1" />
                        <span className="text-xs text-gray-600">
                          {book.rating}
                        </span>
                      </div>
                    )}

                    {/* Page count */}
                    {book.pageCount && (
                      <div className="flex items-center text-xs text-gray-600 mb-2">
                        <BookText className="h-3 w-3 mr-1" />
                        <span>{book.pageCount} pages</span>
                      </div>
                    )}
                  </div>
                </div>

                {/* Actions */}
                <div className="flex border-t border-gray-100">
                  <Dialog
                    open={isEditDialogOpen && selectedBook?.id === book.id}
                    onOpenChange={(
                      open: boolean | ((prevState: boolean) => boolean)
                    ) => {
                      setIsEditDialogOpen(open);
                      if (!open) setSelectedBook(null);
                    }}
                  >
                    <DialogTrigger asChild>
                      <Button
                        variant="ghost"
                        className="flex-1 py-2 rounded-none text-gray-600 hover:text-orange-600 hover:bg-orange-50"
                        onClick={() => setSelectedBook(book)}
                      >
                        <Edit className="h-4 w-4 mr-2" />
                        Update
                      </Button>
                    </DialogTrigger>
                    <DialogContent>
                      <DialogHeader>
                        <DialogTitle>Update Reading Progress</DialogTitle>
                        <DialogDescription>
                          Update your reading progress for "{book.title}"
                        </DialogDescription>
                      </DialogHeader>
                      <div className="py-4">
                        <label className="text-sm font-medium mb-2 block">
                          Reading Progress: {selectedBook?.progress || 0}%
                        </label>
                        <input
                          type="range"
                          min="0"
                          max="100"
                          defaultValue={selectedBook?.progress || 0}
                          className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-orange-500"
                          onChange={(e) => {
                            if (selectedBook) {
                              setSelectedBook({
                                ...selectedBook,
                                progress: Number.parseInt(e.target.value),
                              });
                            }
                          }}
                        />
                        <div className="flex justify-between text-xs text-gray-500 mt-1">
                          <span>0%</span>
                          <span>50%</span>
                          <span>100%</span>
                        </div>
                      </div>
                      <DialogFooter>
                        <Button
                          variant="outline"
                          onClick={() => setIsEditDialogOpen(false)}
                        >
                          Cancel
                        </Button>
                        <Button
                          className="bg-gradient-to-r from-orange-500 to-orange-600"
                          onClick={() => {
                            if (selectedBook) {
                              updateBookProgress(
                                selectedBook.id,
                                selectedBook.progress
                              );
                            }
                          }}
                        >
                          Save Progress
                        </Button>
                      </DialogFooter>
                    </DialogContent>
                  </Dialog>

                  <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                      <Button
                        variant="ghost"
                        className="flex-1 py-2 rounded-none text-gray-600 hover:text-orange-600 hover:bg-orange-50"
                      >
                        <BookMarked className="h-4 w-4 mr-2" />
                        Status
                      </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent>
                      <DropdownMenuItem
                        onClick={() =>
                          updateBookStatus(book.id, "want-to-read")
                        }
                      >
                        Want to Read
                      </DropdownMenuItem>
                      <DropdownMenuItem
                        onClick={() => updateBookStatus(book.id, "reading")}
                      >
                        Currently Reading
                      </DropdownMenuItem>
                      <DropdownMenuItem
                        onClick={() => updateBookStatus(book.id, "completed")}
                      >
                        Completed
                      </DropdownMenuItem>
                    </DropdownMenuContent>
                  </DropdownMenu>

                  <Button
                    variant="ghost"
                    className="flex-1 py-2 rounded-none text-red-600 hover:bg-red-50 hover:text-red-700"
                    onClick={() => deleteBook(book.id)}
                  >
                    <Trash2 className="h-4 w-4 mr-2" />
                    Remove
                  </Button>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="text-center py-12 bg-white rounded-xl shadow-sm border border-orange-100">
            <BookOpen className="h-12 w-12 text-orange-300 mx-auto mb-4" />
            <h3 className="text-lg font-medium text-gray-900 mb-2">
              No books found
            </h3>
            <p className="text-gray-600 mb-6">
              {searchTerm
                ? "No books match your search criteria. Try a different search term."
                : "You haven't added any books to this category yet."}
            </p>
            <Button
              className="bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700"
              onClick={() => setIsAddDialogOpen(true)}
            >
              <PlusCircle className="h-4 w-4 mr-2" />
              Add Your First Book
            </Button>
          </div>
        )}
      </main>
    </div>
  );
}
