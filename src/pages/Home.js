import React, { useEffect, useState } from "react";
import { getDocs, collection, deleteDoc, doc } from "firebase/firestore";
import { auth, db } from "../firebase-config";

const deletePost = async (id) => {
  const postDoc = doc(db, "posts", id);
  await deleteDoc(postDoc);
};

function Home({ isAuth }) {
  const [postList, setPostList] = useState([]);
  const postsCollectionRef = collection(db, "posts");

  useEffect(() => {
    const getPosts = async () => {
      try {
        const data = await getDocs(postsCollectionRef);
        const posts = data.docs.map((doc) => ({
          ...doc.data(),
          id: doc.id,
        }));
        setPostList(posts);
      } catch (error) {
        console.error("Error fetching posts:", error);
      }
    };

    getPosts();
  }, [postsCollectionRef]);

  return (
    <div className="homePage">
      {postList.map((post) => {
        return (
          <div className="post" key={post.id}>
            <div className="postHeader">
              <div className="title">
                <h1>{post.title}</h1>
              </div>
              <div className="deletePost">
                {isAuth && post.author && post.author.id === auth.currentUser.uid && (
                  <button
                    onClick={() => {
                      deletePost(post.id);
                    }}
                  >
                    &#128465;
                  </button>
                )}
              </div>
            </div>
            <div className="postTextContainer">{post.postText}</div>
            <h3>@{post.author && post.author.name}</h3>
          </div>
        );
      })}
    </div>
  );
}

export default Home;
