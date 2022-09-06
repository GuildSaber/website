import { useRouter } from "next/router";

function Guild() {
  const router = useRouter();
  const { guildid } = router.query;

  return <h1>Guild ID: {guildid}</h1>;
}

export default Guild;