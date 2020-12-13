import React, { useState, useEffect } from "react";
import axios from "axios";
function Hooks() {
  const [post, setPost] = useState([]);

  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/posts")
      .then((result) => {
        // console.log(result.data);
        setPost(result.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []); // render effect once time
  return (
    <div>
      <ul>
        {post.map((res) => (
          <li key={res.id}>{res.title}</li>
        ))}
      </ul>
    </div>
  );
}

export default Hooks;
