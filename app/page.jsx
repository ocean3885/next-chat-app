import Chat from "../components/Chat";
import List from "../components/List";
import Detail from "../components/Detail";
import Login from "../components/Login";

export default function Home() {

  const user = false

  return (
    <div className="flex w-[80vw] h-[90vh] bg-gray-500/50 backdrop-blur-md backdrop-saturate-150 rounded-lg border border-white/15 text-white">
      { 
      user ? (
        <>
          <List/>
          <Chat/>
          <Detail/>
        </>
      ) : (<Login/>)
      }
    </div>
  );
}
