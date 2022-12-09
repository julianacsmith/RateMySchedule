import styles from './home.module.css'
import athensPic from './images/Athens_Pic.jpeg'

const Home = () => {
  return (
      <>
          <div className={styles.welcomeDiv}>
            <p><em>I am</em></p>
            <h1>Juliana Smith</h1>
          </div>
          <div className={styles.blurb}>
            <div className={styles.info}>
                <h2><em>21 Years, 9 Countries, 30 States, and a Whole Lot Left to See</em></h2>
                <p>Hey there friends! Come live vicariously through me as I travel the world!<br/><br/>
                    I have been all over Europe, Carribean, and my family is taking our first trip to Asia
                    over the holiday break!<br/><br/>
                    Check out my blog and gallery for tales from our amazing adventures!</p>
                <p></p>
            </div>
            <img src={athensPic}/>
          </div>
          <div className ={styles.github}>
            <a href="https://github.com/julianacsmith/TravelBlog">Juliana's GitHub</a>
          </div>
      </>
  );
};

export default Home;