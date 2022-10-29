import { useState, useEffect } from "react";
import { getRandomInt } from "../../function/function";
import { Star } from "../Star";

const useSky = () => {
  const [stars, setStars] = useState([]);

  useEffect(() => {
    const newStars = stars
    const countStars = getRandomInt(0, 100)

    for (let i = 0; i < countStars; i++) {
      const star = {
        left: getRandomInt(0, 100) + "%",
        top: getRandomInt(0, 100) + "%",
      }
      newStars.push(star)
    }

    setStars([...newStars])
  }, [])

  const changeSky = (event) => {
    const newStars = stars;

    const star = {
      left: event.pageX,
      top: event.pageY
    };
    newStars.push(star);
    console.log(newStars)
    setStars([...newStars]);
  };

  return {
    stars,
    changeSky,
  };
};

export default useSky;