// import { getCurrentUser } from "./lib/session";
import Container from "./components/container/Container";
import Navbar from "./components/Navbar";

export default async function Home() {
  // const user = await getCurrentUser();
  // console.log(user)
  return (
    <div className="px-5 max-w-[1280px] mx-auto">
      <Navbar />
      <hr />
      <Container />
    </div>
  );
}
