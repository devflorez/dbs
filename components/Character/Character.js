import React from "react";
import Image from "next/image";
export default function Character() {
  return (
    <div className="character">
      <Image
        src="/characters/goku.png"
        alt="character"
 
        width={200}
        height={200}
      />
      <div className="character--about">
        <h5>SAIYAJIN</h5>
        <h4>GOKU</h4>
        <p>
          Goku is a Saiyan warrior who is the son of the Kiin of Earth. Goku is
          the strongest of all the Saiyans.
        </p>
      </div>
    </div>
  );
}
