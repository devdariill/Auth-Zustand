import { useAuthStore } from "../store/auth";
import { useCounterStore } from "../store/counterStore.js";
import { shallow } from "zustand/shallow";
import { useEffect } from "react";
function ProfilePage() {
  // const counter = useCounterStore((state) => state.counter);
  const { title, count, posts } = useCounterStore(
    (state) => ({
      count: state.count,
      title: state.title,
      posts: state.posts,
    }),
    shallow
  );
  console.log(title, count);
  useEffect(() => {
    getPosts();
  }, []);
  // const increment = useCounterStore(state => state.increment)
  const { increment, getPosts, clearStore, multiply } = useCounterStore();
  // getPosts();
  const logout = useAuthStore((state) => state.logout);
  const profile = useAuthStore((state) => state.profile);
  return (
    <>
      <div className="flex flex-col justify-center items-center h-screen ">
        <div>ProfilePage</div>
        <div>{JSON.stringify(profile)}</div>
        <button
          className="bg-zinc-400 text-black outline-none border-none rounded-lg py-1 mt-3 font-semibold px-5"
          onClick={() => logout()}
        >
          Logout
        </button>
        <div>
          {title} : {count}
        </div>
        <button
          className="bg-zinc-400 text-black outline-none border-none rounded-lg py-1 mt-3 font-semibold px-5"
          onClick={() => increment()}
        >
          Increment
        </button>
        <hr />
        <button
          className="bg-zinc-400 text-black outline-none border-none rounded-lg py-1 mt-3 font-semibold px-5"
          onClick={() => clearStore()}
        >
          Clear Store
        </button>
        <button
          className="bg-zinc-400 text-black outline-none border-none rounded-lg py-1 mt-3 font-semibold px-5"
          onClick={() => multiply()}
        >
          Multiply
        </button>
        <div className="w-auto h-5 mt-5 max-w-prose bg-white">{JSON.stringify(posts)}</div>
      </div>
    </>
  );
}
export default ProfilePage;
