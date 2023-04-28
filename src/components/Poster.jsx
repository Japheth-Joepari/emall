import PosterImage from "../assets/images/poster-03.png";
export default function Poster() {
  return (
    <div className="container poster-section">
      <div className="d-lg-flex justify-content-lg-around">
        <div className="">
          <div className="d-flex flex-column p-2 mt-4">
            <p className="musicp">
              <i className="fa fa-headphones music"></i> Dont Miss
            </p>
            <p className="musicTitle">Enhance Your</p>
            <span className="musicTitle pbottom1rem">Music Experience</span>
          </div>
          <div className="" id="timer">
            <div className="d-flex flex-column timing">
              <span className="fontWeight600">0</span>
              <span>Day</span>
            </div>

            <div className="d-flex flex-column timing">
              <span className="fontWeight600">00</span>
              <span>Hours</span>
            </div>

            <div className="d-flex flex-column timing">
              <span className="fontWeight600">00</span>
              <span>Min</span>
            </div>

            <div className="d-flex flex-column timing">
              <span className="fontWeight600">00</span>
              <span>Sec</span>
            </div>
          </div>
          <div>
            <button className="btn btn-primary p-3 btn-lg mt-5">
              Check it out 🫵 👉
            </button>
          </div>
        </div>

        <div className="p-2">
          <img src={PosterImage} alt="loading" className="img-fluid" />
        </div>
      </div>
    </div>
  );
}
