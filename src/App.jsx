import {useState} from "react";
import RatingModal from "./components/RatingModal";

function App() {
  const [openRatingModal, setOpenRatingModal] = useState(false);
  return (
    <main className="h-dvh flex justify-center items-center bg-grey-950 text-white font-overpass">
      <button
        className=" bg-orange-500 text-grey-950 py-1.5 px-4 rounded-full hover:bg-white hover:text-grey-900 transition duration-800 cursor-pointer"
        onClick={()=> setOpenRatingModal(true)}
      >
        Rate Us
      </button>
      <RatingModal
        openRatingModal={openRatingModal}
        setOpenRatingModal={setOpenRatingModal}
      />
    </main>
  )
}

export default App
