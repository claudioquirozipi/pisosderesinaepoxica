import { Resin } from "@/app/data/resins";
import Card from "./card";
interface Props {
  resins: Resin[];
}

export default function List({ resins }: Props) {
  return (
    <div className="flex flex-wrap justify-center gap-6">
      {resins.map((resin) => (
        <>
          <Card resin={resin} />
        </>
      ))}
    </div>
  );
}
