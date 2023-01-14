import { useAuthStore } from "../store/auth";
function ProfilePage() {
  const logout = useAuthStore((state) => state.logout);
  const profile = useAuthStore((state) => state.profile);
  return (
    <>
      <div className="flex flex-col justify-center items-center h-screen ">
        <div>ProfilePage</div>
        <div>{JSON.stringify(profile)}</div>
        <button className="bg-zinc-400 text-black outline-none border-none rounded-lg py-1 mt-3 font-semibold px-5" onClick={() => logout()}>Logout</button>
      </div>
    </>
  );
}
export default ProfilePage;
