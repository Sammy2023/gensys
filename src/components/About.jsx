import React from "react";
import styles from "../styles/About.module.css"

export default function About(){
  return(
    <div className={styles.container}>
      <h2>About</h2>
      <div className={styles.aboutSection}>
        As Students studying CS, we know the struggles of learn about tech.
        Teachers and online resources don't always do the trick. Sometimes 
        it is hard for experts in there respective fields to explain something
        that is so second nature to them in a tangible way. One of the fileds 
        that we noticed this was happening in was blockchain. Many people, even
        students studying computer science, don't really have a concrete idea of 
        what blockchain is or what it is used for.
      </div>
      <div className={styles.aboutSection}>
        This is where we come in. We wondered if we could do something to help 
        the average person grasp what blockchain is and gain a more concrete 
        understanding of blockchain. Genisys is a web app we created as a medium
         that simplifies the fundamental concepts behind blockchain, while 
        making it approachable yet informative for users.
      </div>
      <h2>Developers</h2>
      <div className={styles.grid}>
        <div className={styles.gridItem}>
          <img className = {styles.profile} src ="https://cdn.glitch.global/e7a5defb-cc51-4040-b71e-98f05b4b383a/kyle_profile.jpeg?v=1650136477074" alt="dev 1"/>
        </div>
        <div className={styles.gridItem}>
          <img className = {styles.profile} src ="https://cdn.glitch.global/e7a5defb-cc51-4040-b71e-98f05b4b383a/minh_profile.jpeg?v=1650136481413" alt="dev 2"/>
        </div>
        <div className={styles.gridItem}>
          <img className = {styles.profile} src ="https://cdn.glitch.global/e7a5defb-cc51-4040-b71e-98f05b4b383a/sammy_profile.jpeg?v=1650136160687" alt="dev 3"/>
        </div>
      </div>
      <div className={styles.grid}>
        <div className={styles.gridItem}>
          Kyle Viti
        </div>
        <div className={styles.gridItem}>
          Minh Le
        </div>
        <div className={styles.gridItem}>
          Sammy Lee
        </div>
      </div>
    </div>
  ) 
  
}