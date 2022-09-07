import Image from "next/image";
import Link from "next/link";

function Guild(props) {
  // if banner not available, use guild color as background
  let background = {
    backgroundColor: `rgba(${props.Color.R},${props.Color.G},${props.Color.B},.7)`,
  };
  if (props.Banner) {
    background = { backgroundImage: `url(${props.Banner})` };
  }

  return (
    <Link href={`/guild/${props.ID}`}>
      <div className={"hover:scale-[1.02] rounded-xl bg-cover bg-center overflow-hidden cursor-pointer"} style={background}>
        <div className={"flex gap-6 p-4 backdrop-blur-md"}>
          {/* <img src={props.Logo} alt={props.Name} className="h-full rounded-lg" /> */}
          <Image src={`${props.Logo}`} alt={`${props.Name}`} layout="fixed" width="125px" height="125px" className="h-full rounded-lg" />
          <div className="flex flex-col gap-2">
            <h1 className="text-xl font-semibold">{props.Name}</h1>
            <p>{props.Description}</p>
          </div>
        </div>
      </div>
    </Link>
  );
}

export default Guild;
