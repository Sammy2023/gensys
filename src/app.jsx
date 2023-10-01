import React, {useEffect} from "react";
import Home from "./components/Home.jsx";
import Navbar from "./components/Navbar.jsx";
import Lessons from "./components/Lessons.jsx";
import Profile from "./components/Profile.jsx";
import Quiz from "./components/Quiz.jsx";
import Lesson from "./components/Lesson.jsx";
import initialStore from "./util/initialStore.js";
import { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// Import and apply global CSS stylesheet
import "./styles/styles.css";
// Import and apply App specific css
import css from "./styles/App.module.css";

import Seo from "./components/seo.jsx"

// App function that is reflected across the site
export default function App() {
  const [users, setUsers] = useState(initialStore.users);
  const [currentUserId, setCurrentUserId] = useState(initialStore.currentUserId);
  const [lessons, setLessons] = useState(initialStore.lessons);
  function updateProgress(userId, lessonId){
    const currentUser = users.filter((user) => user.id === userId)[0];
    const currentLesson = currentUser.currentLessons.filter((lesson) => lesson.id == lessonId)[0];
    currentLesson.progress +=1;
  useEffect(() => {
  window.scrollTo(0, 0)
}, [])
  }
  return (
    <Router>
      <>
        <Seo />
        <div className={css.container}>
          <main role="main" className="wrapper">
            <Routes>
              <Route path="/" element={<Home />} />;
              <Route path="/lessons" element={<Lessons lessons={lessons} users={users} currentUserId={currentUserId} />} />;
              <Route path="/profile" element={<Profile lessons={lessons} users={users} currentUserId={currentUserId} />} />;
              <Route path="/lessons/:lessonId" element={<Lesson lessons={lessons} users={users} currentUserId={currentUserId} onQuizClick={updateProgress}/>} />;
              <Route path="/lessons/:lessonId/:quizId" element={<Quiz lessons={lessons} users={users} currentUserId={currentUserId} />} />;
            </Routes>
          </main>
          <Navbar/>
        </div>
      </>
    </Router>
  );
}