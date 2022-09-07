import { useState, useEffect } from "react";
import Guild from "../components/Guild";

function Guilds({ guilds, count }) {
  const [loadedGuilds, setLoadedGuilds] = useState([]);

  useEffect(() => {
    setLoadedGuilds(guilds);
  }, [guilds]);

  return (
    <div className="ml-16 mr-16 mt-16">
      <div className="max-w-screen-2xl m-auto">
        <div className="flex items-center justify-between w-full">
          <h1 className="text-2xl font-semibold">Guilds ({count})</h1>
          <button className="btn-secondary">
            <i className="fas fa-plus"></i>
            <p>Create Guild</p>
          </button>
        </div>
        <div className="grid grid-cols-1 mt-4 mb-4 gap-6">
          {loadedGuilds.map(guild => {
            return <Guild key={guild.ID} {...guild} />;
          })}
        </div>
      </div>
    </div>
  );
}

export async function getServerSideProps() {
  let data = await (await fetch("https://api.guildsaber.com/guild/data/all")).json();

  return {
    props: {
      guilds: data.Guilds,
      count: data.Metadata.Count
    }
  };
}

export default Guilds;