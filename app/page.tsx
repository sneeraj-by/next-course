import Image from "next/image";

import MoonlightSeaFuturistic from "@/public/images/Moonlight-Sea-Futuristic-Neon-Waves-AI-Generated-4K-Wallpaper.jpg";
import { getServerSession } from "next-auth";
import { authOptions } from "./api/auth/authOptions";

// const HeavyComponents = dynamic(() => import("./components/HeavyComponents"), {
//   ssr: false,
//   loading: () => <p>Loading...</p>,
// });

export default async function Home() {
  // const [isVisible, setVisible] = useState(false);
  const session = await getServerSession(authOptions);
  return (
    <main className="relative h-screen">
      <h1>Hello {session && <span>{session.user!.name}</span>}</h1>
      <Image
        src={MoonlightSeaFuturistic}
        alt="Moonlight Sea Futuristic"
        priority
      />
      {/* remote path with extra styles */}
      {/* <Image
        src="https://bit.ly/react-cover"
        alt="Moonlight Sea Futuristic"
        fill
        className="object-cover"
        sizes="(max-width:480px) 100vw, (max-width:768px) 50vw, 33vw"
        quality={100}
        priority
      /> */}
      {/* <button className="btn btn-outline" onClick={() => setVisible(true)}>
        Lazy Load component
      </button>
      {isVisible && <HeavyComponents />} */}
    </main>
  );
}
