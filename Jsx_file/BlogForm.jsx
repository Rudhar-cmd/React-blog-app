import React, { useState, useEffect } from "react";

function BlogForm({ tittle = "", content = "", onPublish }) {
  const [blogTittle, setBlogTittle] = useState(tittle);
  const [blogContent, setBlogContent] = useState(content);

  // Pre-fill form when editing
  useEffect(() => {
    setBlogTittle(tittle);
    setBlogContent(content);
  }, [tittle, content]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (blogTittle.trim() === "" || blogContent.trim() === "") return;

    onPublish({ tittle: blogTittle, content: blogContent });
    setBlogTittle("");
    setBlogContent("");
  };

  return (
    <form className="BlogForm" onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Blog Title"
        value={blogTittle}
        onChange={(e) => setBlogTittle(e.target.value)}
      />
      <textarea
        placeholder="Blog Content"
        value={blogContent}
        onChange={(e) => setBlogContent(e.target.value)}
      />
      <button type="submit">{tittle ? "Save" : "Publish"}</button>
    </form>
  );
}

export default BlogForm;