import {useState} from "react";
import RatingModal from "./components/RatingModal";

function App() {
  const [openRatingModal, setOpenRatingModal] = useState(false);
  return (
    <main className="h-dvh flex justify-center items-center bg-grey-950 text-white">
      <button
        className=" bg-orange-500 text-grey-950 py-1.5 px-4 rounded-full hover:opacity-85"
        onClick={()=> setOpenRatingModal(true)}
      >
        Rate Us
      </button>
      <RatingModal
        openRatingModal={openRatingModal}
        setOperRatingModal={setOpenRatingModal}
      />
    </main>
  )
}

export default App
