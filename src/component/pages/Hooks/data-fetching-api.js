import React, { useState, useEffect } from "react";
import axios from "axios";
function Hooks() {
  const [post, setPost] = useState([]);
  const [id, setId] = useState(1);
  const [btnClick, setBtnClick] = useState(1);

  useEffect(() => {
    // axios
    //   .get("https://jsonplaceholder.typicode.com/posts")
    //   .then((result) => {
    //     // console.log(result.data);
    //     setPost(result.data);
    //   })
    //   .catch((err) => {
    //     console.log(err);
    //   });

    axios
      .get(`https://jsonplaceholder.typicode.com/posts/${btnClick}`)
      .then((res) => {
        console.log(res);

        setPost(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [btnClick]);

  const handleClick = () => {
    setBtnClick(id);
  };

  return (
    <div>
      <input type="text" value={id} onChange={(e) => setId(e.target.value)} />
      <button type="button" onClick={handleClick}>
        Click
      </button>
      <p>{post.title}</p>
      {/* <ul>
        {post.map((res) => (
          <li key={res.id}>{res.title}</li>
        ))}
      </ul> */}
    </div>
  );
}

export default Hooks;
