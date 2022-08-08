import Image from "next/image";
export default function CharacterCard() {
  return (
    <div className="characterCard">
      <div className="characterCard--character">
        <Image
          src="/characters/beerus.png"
          alt="character"
          width={100}
          height={100}
          className="characterCard--character--image"
        />
        <div className="characterCard--character--background" />
      </div>
      <strong>Beerus</strong>
    </div>
  );
}
