import {nanoid} from 'nanoid'
import starIcon from "../assets/images/icon-star.svg"

export default function RatingModal({openRatingModal, setOperRatingModal}) {
  if(openRatingModal === false) return null;

  /* creating array of 5 for rating elements*/
  const ratingArray = new Array(5).fill(null).map((_,i)=>i+1);
  console.log("ratingArray", ratingArray);

  const ratingElement = ratingArray.map(rating  => (
    <button key={nanoid()} className="bg-grey-900 text-(length:--font-sm) leading-[1.29]">
      {rating}
    </button>
  ))

  return (
    // outer div
    <div className="fixed inset-0 bg-[var(--color-grey-950)] flex justify-center items-center">
      {/*  card wrapper */}
      <div className="">
        <img src={starIcon} alt=""/>
        {/* innder wrapper */}
        <div>
          <h2>How did we do?</h2>
          <p>
            Please let us know how we did with your support request.
            All feedback is appreciated to help us improve our offering!
          </p>
          <div>
            {ratingElement}
          </div>
        </div>
        <button>SUBMIT</button>
      </div>
    </div>
  )
}