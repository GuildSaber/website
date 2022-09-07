import { useRouter } from "next/router";
import Image from "next/image";

function Guild(props) {
  return (
    <div className="ml-16 mr-16 mt-16">
      <div className="max-w-screen-2xl m-auto">
        {props.guild.Banner &&
          <div className="w-full h-64 relative mb-8">
            <Image src={props.guild.Banner} alt={props.guild.Name} layout="fill" objectFit="contain" />
          </div>
        }
        <div className="flex items-center justify-between w-full">
          <h1 className="text-2xl font-semibold">{props.guild.Name}</h1>
          <button className="btn-secondary">
            <i className="fas fa-pen"></i>
            <p>Edit Guild</p>
          </button>
        </div>
      </div>
    </div>
  );
}

export async function getServerSideProps(context) {
  let ID = context.params.guildId;
  let data = await (await fetch(`https://api.guildsaber.com/guild/data/${ID}/true`)).json();

  return {
    props: {
      guild: data.Guild,
      config: data.GuildConfig
    }
  };
}

export default Guild;