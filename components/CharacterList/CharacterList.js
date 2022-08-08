import React from 'react'
import CharacterCard from '../CharacterCard'
import Slider from 'react-slick'
export default function CharacterList() {
    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 3,

    }

  return (
    <div className="characterList">
        <Slider {...settings}>
            <CharacterCard />
            <CharacterCard />
            <CharacterCard />
            <CharacterCard />
            <CharacterCard />
            <CharacterCard />
        </Slider>
        <button>
            More
        </button>
    </div>
  )
}
