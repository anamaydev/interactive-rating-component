import {useRef, useState} from "react";
import {nanoid} from 'nanoid'
import {clsx} from 'clsx';
import starIcon from "../assets/images/icon-star.svg"
import crossIcon from "../assets/images/icon-cross.svg"
import thankYouImage from "../assets/images/illustration-thank-you.svg"

export default function RatingModal({openRatingModal, setOpenRatingModal}) {
  const backgroundRef = useRef(null);
  const [selectedRating, setSelectedRating] = useState(null);
  const [isSubmitted, setIsSubmitted] = useState(false);

  if(openRatingModal === false) return null;

  function handleRating(rating){
    console.log(rating);
    setSelectedRating(rating);
  }

  function closeModal(e){
    console.log(e.target);
    if(e.target === backgroundRef.current){
      setOpenRatingModal(false);
    }
  }

  /* creating an array of 5 for rating elements*/
  const ratingArray = new Array(5).fill(null).map((_,i)=>i+1);
  console.log("ratingArray", ratingArray);

  const ratingElement = ratingArray.map(rating  => (
    <button
      key={nanoid()}
      onClick={()=>handleRating(rating)}
      className={clsx(
        {"h-10.5 w-10.5 rounded-full flex justify-center items-center bg-grey-900 text-(length:--font-sm) leading-[1.29] tracking-[0.117rem] sm:h-[51px] sm:w-[51px] sm:text-(length:--font-md) sm:leading-[1.5] hover:bg-white hover:text-grey-900 hover:-translate-y-1 transition duration-800 cursor-pointer": selectedRating !== rating},
        {"h-10.5 w-10.5 rounded-full flex justify-center items-center text-(length:--font-sm) leading-[1.29] tracking-[0.117rem] sm:h-[51px] sm:w-[51px] sm:text-(length:--font-md) sm:leading-[1.5] transition duration-800 bg-orange-500 text-grey-900 hover:-translate-y-1 cursor-pointer": selectedRating === rating}
      )}
    >
      {rating}
    </button>
  ))

  return (
    // outer div
    <div ref={backgroundRef} onClick={closeModal} className="fixed inset-0 bg-[var(--color-grey-950)] flex justify-center items-center">
      {/*  card wrapper */}
      <div className="relative flex flex-col gap-(--spacing-300) bg-gd py-(--spacing-400) px-(--spacing-300) rounded-[0.938rem] sm:rounded-[1.875rem] max-w-[327px] sm:max-w-[412px] sm:gap-(--spacing-400) transition-all duration-1000 ease-[cubic-bezier(0.4,0,0.2,1)]">
        <button onClick={()=>setOpenRatingModal(false)} className="absolute -right-4 -top-4 cursor-pointer">
          <img className="h-4 w-4" src={crossIcon} alt=""/>
        </button>
        { !isSubmitted &&
          <>
            {/* icon wrapper */}
            <div className="bg-grey-900 self-start h-10 w-10 sm:h-12 sm:w-12 flex justify-center items-center rounded-full">
              <img className="h-[14px] w-[14px] sm:h-4 sm:w-4" src={starIcon} alt=""/>
            </div>
            {/* inner wrapper */}
            <div className="flex w-full flex-col gap-(--spacing-200)">
              <h2 className="text-(length:--font-lg) sm:text-(length:--font-xl) font-bold leading-[1.25] tracking-[0.063rem]">How did we do?</h2>
              <p className="text-grey-500 text-(length:--font-sm) sm:text-(length:--font-base) sm:leading[1.6] font-normal leading-[1.57]">
                Please let us know how we did with your support request.
                All feedback is appreciated to help us improve our offering!
              </p>
              <div className="w-full flex justify-between">
                {ratingElement}
              </div>
            </div>
            <button onClick={()=>setIsSubmitted(true)} className="self-center w-full py-(--spacing-200) bg-orange-500 rounded-full text-grey-950 text-(length:--font-sm) leading-[1.29] sm:leading-[1.71] font-bold tracking-[0.117rem] hover:bg-white transition duration-800 cursor-pointer">SUBMIT</button>
          </>
        }

        {
          isSubmitted &&
          <>
            <img className="w-36 sm:w-40.5 self-center" src={thankYouImage} alt=""/>
            <p className="text-(length:--font-sm) text-orange-500 leading-[1.57] sm:text-(length:--font-base) sm:leading-[1.6] py-1.5 px-(--spacing-200) bg-grey-900 rounded-full self-center font-normal">You selected {selectedRating} out of 5</p>
            <div className="w-full flex flex-col items-center gap-(--spacing-200)">
              <p className="text-(length:--font-lg) leading-[1.25] sm:text-(length:--font-xl) font-bold self-center">Thank You!</p>
              <p className="text-(length:--font-sm) leading-[1.57] sm:text-(length:--font-base) sm:leading-[1.6] font-normal text-grey-500 text-center">We appreciate you taking the time to give a rating. If you ever need more support, don’t hesitate to get in touch!</p>
            </div>
          </>
        }

      </div>
    </div>
  )
}