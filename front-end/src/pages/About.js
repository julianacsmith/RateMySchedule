import styles from './about.module.css'
import athensPic from './images/Acropolis_Selfie.jpg'

const Home = () => {
  return (
      <>
          <div className={styles.welcomeDiv}>
            <h1>About Juliana</h1>
          </div>
          <div className={styles.blurb}>
            <div className={styles.info}>
                <h2><em>Who Am I?</em></h2>
                <p>I'm Juliana Smith, a Junior CS student emphasizing in Animation and Games 
                at Brigham Young University! I hope to make a difference in the gaming community, 
                whether through animation of code. <br/><br/>
                
                I've been traveling ever since I could remember with my first major trip outside of 
                the border being back when I was in middle school, where we traveling to London, Paris, 
                and Amsterdam. <br/><br/>
                
                My all time favorite trip was our most recent venture to Greece in the spring of 2020. 
                I was graduating highschool so this trip was planned by me! It was an absolute blast 
                and the experiences are some that I will treasure forever. <br/><br/>
                
                While I've mostly settled down as I'm working on graduating college, I will be joining 
                my family for yet another trip to Bali and Singapore later this year, planning by my 
                younger brother who will be graduating in the spring! We are all so excited! <br/><br/>
                
                In the meantime, take it easy friends! Get some water and sleep and take care of 
                yourselves!</p>
                <h3>Happy Holidays!</h3>
            </div>
            <img src={athensPic}/>
          </div>
      </>
  );
};

export default Home;