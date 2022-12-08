import styles from './blog.module.css'
import almondTree from './images/Almond_Tree.jpg'
import meteoraSelfie from './images/Meteora_Selfie.jpg'
import meteoraView from './images/Meteora_View.jpg'
import monesteryView from './images/Monestery_Vew.jpg'
import sounion from './images/Sounion.jpg'
import naturePic from './images/Nature_Pic.jpg'
import hydra from './images/Hydra.jpg'
import coolCat from './images/Cool_Cat.jpg'
import snow from './images/Blowing_Snow.jpg'
import sled from './images/Sledding_in_Alps.jpg'
import swissTrain from './images/Swiss_Train_Full.jpg'
import zermattFamily from './images/Family.jpg'

const Blogs = () => {
  return (
      <>
        <div className={styles.welcomeDiv}>
            <h1>Juliana's Travel Blog</h1>
        </div>
        <div className={styles.blogBody}>
            <div className={styles.rightEntry}>
                <h2>Greece Covid Shutdown</h2>
                <h4>Date: March 16, 2020</h4>
                <h4>Location: Athens, Greece</h4>
                <hr/>
                <p>With the Covid panic in the states, my family was trying to remain calm as we finished out the rest of our trip. We went to the island of Hydra, a 
                beautiful island devoid of any cars but had lots of friendly cats to pet. <br/><br/>
                
                We were almost home free until we were on the bus back from Sounion, a temple on the coast dedicated to the Greek god of the sea, Poseidon. Our tour 
                guide informed us that the country had indeed shutdown and that most businesses would be closed the following day. While we didn't have any plans since 
                it was out last day in the country, we were reeling over the news. <br/><br/>
                 
                The next day wasn't eventful. My brother and mom were too afraid to go out, so we hung out in our hotel room and went out for food as we needed. Despite this, 
                we were fortunate enough to still make our flight back to the states safely.</p>
            </div>
            
            <div className="imageReel">
                <img src={almondTree}/>
                <img src={meteoraSelfie}/>
                <img src={meteoraView}/>
                <img src={monesteryView}/>
            </div>
            
            <div className={styles.leftEntry}>
                <h2>US Covid Shutdown</h2>
                <h4>Date: March 13, 2020</h4>
                <h4>Location: Meteora, Greece</h4>
                <hr/>
                <p>Today was crazy! My family and I took a lovely bus ride into the Greek countryside to see the monesteries in Meteora, well known for their 
                impressive cliffside buildings. Due to the long trip, however, we had to stop for the night in a small down at the base of the mountain we were 
                to travel the next day. My brother and I shared a room while my parents shared another and retired for the night. <br/><br/>
                
                I was woken up the next morning at 4am by my brother panicking as he scrolled through his phone. Apparently, the US had shut down its borders while we were
                asleep (which doesn't surprsie me as time zones threw off our timing. I too checked my phone to see a couple messages and notifications about the shut down.
                We stayed up until a decent hour to talk to our parents about the issue, to which they replied that we would still be allowed back in the country once our
                trip was through. We still had a couple of days left, so we would play it by ear but not panic.<br/><br/>
                
                Our tour guide explained the situation and would help those in our group who wanted to leave. We stuck it out and were blessed with beautiful views and
                breathtaking views of the cliffside monesteries.</p>
            </div>
            
            <div className="imageReel">
                <img src={sounion}/>
                <img src={naturePic}/>
                <img src={hydra}/>
                <img src={coolCat}/>
            </div>
            
            <div className={styles.rightEntry}>
                <h2>Winter Wonderland</h2>
                <h4>Date: March 14, 2018</h4>
                <h4>Location: Zermatt, Switzerland</h4>
                <hr/>
                <p>Hello from Switzerland! My family and I traveled from Rome all the way to Zermatt, Switzerland, a little ski town maybe 2 miles long just at the base of 
                the Matterhorn (you know the mountain printed on Toblerone packaging?). We had a blast walking around this cute town and taking the train up 
                the mountain to go sledding for the day! I eventually got the hand of it, if that means falling face first into a snow bank at the bottom of 
                the sledding slope (I <em>definitely</em> didn't have anyone laughing at me whenever I fell).<br/><br/>
                
                We also treated ourselves to some fondue and swiss chocolate (which that had plenty of shops for)! Overall, would definitely come back again!</p>
            </div>
            
            <div className="imageReel">
                <img src={swissTrain}/>
                <img src={snow}/>
                <img src={sled}/>
                <img src={zermattFamily}/>
            </div>
        </div>
      </>
    )
};

export default Blogs;