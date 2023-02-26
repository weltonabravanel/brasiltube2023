import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { closeMenu } from "../utils/appSlice";
import { useSearchParams } from "react-router-dom";
import SuggestionVideoContainer from "./SuggestionVideoContainer";
import WatchVideoDetails from "./WatchVideoDetails";
import CommentsContainer from "./CommentsContainer ";
import LiveChat from "./LiveChat";
import { useSelector } from "react-redux";

const WatchPage = () => {
  let [searchParams] = useSearchParams();
  const dispatch = useDispatch();
  const isMenuOpen = useSelector((store) => store.app.isMenuOpen);

  useEffect(() => {
    dispatch(closeMenu());
  }, []);

  return (
    <div className={isMenuOpen ? "pointer-events-none blur-3xl fixed" : " "}>
      <div>
        <div className="sticky top-14">
          <iframe
            className="min-w-full min-h-[180px] "
            src={
              "https://www.youtube.com/embed/" +
              searchParams.get("v") +
              "?autoplay=1"
            }
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          ></iframe>
        </div>
        <WatchVideoDetails />
        <CommentsContainer />
      </div>

      <div>
        <LiveChat />
        <SuggestionVideoContainer />
      </div>
    </div>
  );
};

export default WatchPage;
