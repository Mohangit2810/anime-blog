/* eslint-disable react/prop-types */
import { useState } from "react";
import { addComment } from "../comment-section/commentSecion";

function AddComment({ blogId }) {
  const [name, setName] = useState("");
  const [comment, setComment] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const newComment = { name, comment, timestamp: new Date().toISOString() };
    addComment(
      blogId,
      newComment.comment,
      newComment.name,
      newComment.timestamp
    );
    setName("");
    setComment("");
  };
  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-6">
      <input
        value={name}
        onChange={(e) => setName(e.target.value)}
        className="bg-white p-3 h-10 w-full border border-[#feeaec] rounded focus:outline-none focus:ring-1 focus:ring-accent focus:border-accent"
        type="text"
        name="name"
        placeholder="Name"
        required
        autoComplete="on"
      />
      <input
        value={comment}
        onChange={(e) => setComment(e.target.value)}
        className="bg-white rounded p-3 h-24 w-full border border-[#feeaec] focus:outline-none focus:ring-1 focus:ring-accent focus:border-accent"
        type="text"
        name="comment"
        placeholder="Comment"
        required
        autoComplete="on"
      />
      <button
        className="w-max rounded bg-accent text-white p-3 hover:bg-darkAccent transition-all duration-300 ease-in-out"
        type="submit"
      >
        Post Comment
      </button>
    </form>
  );
}

export default AddComment;
