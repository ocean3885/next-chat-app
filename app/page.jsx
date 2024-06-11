import Chat from "../components/Chat";
import List from "../components/List";
import Detail from "../components/Detail";

export default function Home() {
  return (
    <div className="flex w-[90vw] h-[90vh] bg-gray-500/50 backdrop-blur-md backdrop-saturate-150 rounded-lg border border-white/15">
      <List/>
      <Chat/>
      <Detail/>
    </div>
  );
}
