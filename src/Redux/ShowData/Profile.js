import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { postApi } from "../../Redux/Api/getSlice";

const Profile = () => {
  const { posts, loading } = useSelector((state) => state.post);
  console.log({ posts, loading });

  const configDispatch = useDispatch();
  console.log(configDispatch);

  useEffect(() => {
    configDispatch(postApi());
  }, []);

  return (
    <>
      <div className="">
        <div className="">
          <h1>Hello</h1>
          {posts.map((item) => {
            return(
              <>
              <h2>{item.title}</h2>
              </>
            )
          })}
          {/* {posts.map((item)=>(<h2>{item.title}</h2>))} */}
        </div>
      </div>
    </>
  );
};

export default Profile;
