import React from "react";
import BookSingleCard from "../BookSingleCard";

export default function BooksCard({ books }) {
  return (
    <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
      {books.map((book) => (
        <BookSingleCard key = {book._id} book = {book} />
      ))}
    </div>
  );
}
