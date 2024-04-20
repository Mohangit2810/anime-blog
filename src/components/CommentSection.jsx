/* eslint-disable react/prop-types */
import { getComments } from "../comment-section/commentSecion";
import { addComment } from "../comment-section/commentSecion";
import { useState, useEffect } from "react";
function CommentSection({ blogId }) {
  const [comments, setComments] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [updatedComments, setUpdatedComments] = useState(0);
  const commentsPerPage = 5;
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
    setUpdatedComments((prev) => prev + 1);
  };

  // Function to handle pagination
  const handleNextPage = () => {
    setCurrentPage((prevPage) => prevPage + 1);
  };

  const handlePrevPage = () => {
    setCurrentPage((prevPage) => Math.max(prevPage - 1, 1));
  };

  // Calculate index range for current page
  const indexOfLastComment = currentPage * commentsPerPage;
  const indexOfFirstComment = indexOfLastComment - commentsPerPage;
  const currentComments = comments.slice(
    indexOfFirstComment,
    indexOfLastComment
  );
  const timeAgo = (timestamp) => {
    const now = new Date();
    const parsedTimestamp = new Date(timestamp);
    const timeDiff = now - parsedTimestamp;
    const seconds = Math.floor(timeDiff / 1000);
    const minutes = Math.floor(seconds / 60);
    const hours = Math.floor(minutes / 60);
    const days = Math.floor(hours / 24);

    if (seconds < 60) {
      return `${seconds} seconds ago`;
    } else if (minutes < 60) {
      return `${minutes} minutes ago`;
    } else if (hours < 24) {
      return `${hours} hours ago`;
    } else {
      return `${days} days ago`;
    }
  };

  useEffect(() => {
    const fetchComments = async () => {
      try {
        const commentsData = await getComments(blogId);
        setComments(commentsData);
      } catch (error) {
        console.error("Error fetching comments:", error);
      }
    };

    fetchComments();
  }, [blogId, updatedComments]);
  return (
    <div>
      <div className="mt-12 flex flex-col gap-6">
        {currentComments.length ? (
          currentComments.map((comment, index) => (
            <div key={index} className="p-3 flex items-center gap-8">
              <img
                className="self-start w-16 h-16 rounded-full"
                src={`https://ui-avatars.com/api/?name=${comment.name}&background=random&rounded=true`}
                alt={comment.name}
              />
              <div className="">
                <p className="font-semibold">
                  {comment.name}
                  <span className="text-sm ml-2 font-normal align-middle">
                    {timeAgo(comment.timestamp)}
                  </span>
                </p>
                <p className="mt-3 leading-relaxed tracking-wide">
                  {comment.comment}
                </p>
              </div>
            </div>
          ))
        ) : (
          <p className="text-center text-semibold">Be the first to Comment!</p>
        )}
      </div>
      <div className="flex justify-center mt-4">
        <button
          onClick={handlePrevPage}
          className={
            currentPage === 1
              ? "hidden"
              : "mx-2 px-4 py-2 rounded bg-accent text-white"
          }
        >
          Prev
        </button>
        <button
          onClick={handleNextPage}
          className={
            indexOfLastComment >= comments.length
              ? "hidden"
              : "mx-2 px-4 py-2 rounded bg-accent text-white"
          }
        >
          Next
        </button>
      </div>
      <div className="my-8">
        <h4 className="font-bold text-lg mb-8">Leave a Reply!</h4>
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
      </div>
    </div>
  );
}

export default CommentSection;
