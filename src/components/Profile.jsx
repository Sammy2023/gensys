import React from "react";
import css from "../styles/Profile.module.css";
import Graph from "./Graph.jsx";
import DragSection from "./DragSection.jsx";

export default function Profile(props) {
  const { users, currentUserId, lessons } = props;
  const currentUser = users.filter((user) => user.id == currentUserId);
  return (
    <div>
      <div className={css.profileBar}>
        <div className={css.profileImage}>
          <img src={currentUser[0].photo} />
        </div>
        <div className={css.profileDetail}>
          <h1>{currentUser[0].name}</h1>
          <div>{currentUser[0].email}</div>
        </div>
      </div>
      <div className={css.levelBar}></div>
      <div className={css.currentLessons}>
        <div>
          <div>
            <h1 className={css.title}>Your Courses</h1>
          </div>

          <Graph currentUser={currentUser} lessons={lessons} />
          {/*<DragSection />*/}
        </div>
      </div>
    </div>
  );
}
