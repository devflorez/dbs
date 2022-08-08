import CharacterCard from "../components/CharacterCard";
import Layout from "../components/Layout";
import Character from "../components/Character";
import CharacterList from "../components/CharacterList";
export default function Home() {
  return (
    <Layout>
      <Character />
      <CharacterList />
    </Layout>
  );
}
