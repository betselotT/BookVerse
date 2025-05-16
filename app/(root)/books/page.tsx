"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import BookGrid from "@/components/books/BookGrid";
import BookFilter from "@/components/books/BookFilter";
import type { Book } from "@/types/book";
import { getBooks, toggleFavorite } from "@/lib/firebase";

export default function BooksPage() {
  const [books, setBooks] = useState<Book[]>([]);
  const [filteredBooks, setFilteredBooks] = useState<Book[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [genres, setGenres] = useState<string[]>([]);

  useEffect(() => {
    const fetchBooks = async () => {
      try {
        const data = await getBooks("user1");
        setBooks(data);
        setFilteredBooks(data);

        // Extract unique genres
        const uniqueGenres = Array.from(
          new Set(data.flatMap((book) => book.genre))
        );
        setGenres(uniqueGenres);
      } catch (error) {
        console.error("Error fetching books:", error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchBooks();
  }, []);

  const handleFilterChange = (filters: {
    genre?: string;
    rating?: number;
    sortBy?: string;
  }) => {
    let filtered = [...books];

    // Filter by genre
    if (typeof filters.genre === "string") {
      filtered = filtered.filter((book) =>
        book.genre.includes(filters.genre as string)
      );
    }

    if (typeof filters.rating === "number" && filters.rating > 0) {
      filtered = filtered.filter((book) => book.rating >= filters.rating);
    }

    // Sort
    if (filters.sortBy) {
      switch (filters.sortBy) {
        case "newest":
          filtered.sort(
            (a, b) =>
              new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()
          );
          break;
        case "oldest":
          filtered.sort(
            (a, b) =>
              new Date(a.createdAt).getTime() - new Date(b.createdAt).getTime()
          );
          break;
        case "title-asc":
          filtered.sort((a, b) => a.title.localeCompare(b.title));
          break;
        case "title-desc":
          filtered.sort((a, b) => b.title.localeCompare(a.title));
          break;
        case "rating-high":
          filtered.sort((a, b) => b.rating - a.rating);
          break;
        case "rating-low":
          filtered.sort((a, b) => a.rating - b.rating);
          break;
      }
    }

    setFilteredBooks(filtered);
  };

  const handleToggleFavorite = async (bookId: string) => {
    const book = books.find((b) => b.id === bookId);
    if (!book) return;

    try {
      await toggleFavorite(bookId, !book.isFavorite);

      // Update local state
      const updatedBooks = books.map((b) =>
        b.id === bookId ? { ...b, isFavorite: !b.isFavorite } : b
      );
      setBooks(updatedBooks);

      // Update filtered books as well
      setFilteredBooks((prevFiltered) =>
        prevFiltered.map((b) =>
          b.id === bookId ? { ...b, isFavorite: !b.isFavorite } : b
        )
      );
    } catch (error) {
      console.error("Error toggling favorite:", error);
    }
  };

  if (isLoading) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="w-8 h-8 border-4 border-orange-500 border-t-transparent rounded-full animate-spin"></div>
      </div>
    );
  }

  return (
    <div className="md:ml-64">
      <BookFilter genres={genres} onFilterChange={handleFilterChange} />

      {filteredBooks.length === 0 ? (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="text-center py-12"
        >
          <p className="text-gray-400">No books match your filters.</p>
        </motion.div>
      ) : (
        <BookGrid
          books={filteredBooks}
          onToggleFavorite={handleToggleFavorite}
        />
      )}
    </div>
  );
}
