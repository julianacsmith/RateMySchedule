import styles from './contact.module.css'
import { useState, useEffect } from 'react';
import axios from 'axios';

function App() {
  // setup state
  const [comments, setComments] = useState([]);
  const [name, setName] = useState("");
  const [comment, setComment] = useState("");
  
  const [locations, setLocation] = useState([]);
  const [placeName, setPlaceName] = useState("");
  const [reason, setReason] = useState("");
  const [error, setError] = useState("");

  const fetchComments = async() => {
    try {      
      const response = await axios.get('/api/comments');
      setComments(response.data);
    } catch(error) {
      setError("error retrieving comments: " + error);
    }
  }
  
  const fetchLocations = async() => {
    try {      
      const response = await axios.get("/api/locations");
      setLocation(response.data);
    } catch(error) {
      setError("error retrieving locations: " + error);
    }
  }
  
  const createComment = async() => {
    try {
      await axios.post("/api/comments", {name: name, comment: comment});
    } catch(error) {
      setError("error adding a comment: " + error);
    }
  }
  const createLocation = async() => {
    try {
      await axios.post("/api/locations", {placeName: placeName, reason: reason});
    } catch(error) {
      setError("error adding a location" + error);
    }
  }

  // fetch ticket data
  useEffect(() => {
    fetchComments();
    fetchLocations();
  },[]);

  const addComment = async(e) => {
    e.preventDefault();
    await createComment();
    fetchComments();
    setName("");
    setComment("");
  }

  const addLocation = async(e) => {
    e.preventDefault();
    await createLocation();
    fetchLocations();
    setPlaceName("");
    setReason("");
  }
  
  // render results
  return (
    <div className="App">
      {error}
      <div className={styles.welcomeDiv}>
            <h1>Comments and Suggestions</h1>
      </div>
      <h2>Thoughts? Questions? Opinions? Leave them down below!</h2>
      {comments.map( com => (
        <div key={com.name} className="individualComment">
          <h5>{comments.find(product => product.name == com.name).name}</h5>
          <h4>{com.comment}</h4>
        </div>
      ))}
      <form className={styles.submitForm} onSubmit={addComment}>
        <h2>Add your own comment!</h2>
        <hr/>
        <br/>
        <div>
          <p>Name: <input type="text" value={name} onChange={e => setName(e.target.value)} /></p>
        </div>
        <div>
          <p>Comment: <input type = "text" className={styles.longText} value={comment} onChange={e=>setComment(e.target.value)}/></p>
        </div>
        <input className = "submit" type="submit" value="Submit" />
      </form>
      <h2>Location Suggestions?</h2>
      {locations.map( place => (
        <div key={place.placeName} className="product">
          {place.placeName}, {place.reason}
        </div>
      ))}    
      <form className={styles.submitForm} onSubmit={addLocation}>
        <h2>Where do you think I should go next?</h2>
        <hr/>
        <br/>
        <div>
          <p>Location: <input type="text" value={placeName} onChange={e => setPlaceName(e.target.value)} /></p>
        </div>
        <div>
          <p>Reason: <input type = "text" className={styles.longText} value={reason} onChange={e=>setReason(e.target.value)}/></p>
        </div>
        <input className = "submit" type="submit" value="Submit" />
      </form>
    </div>
  );
}

export default App;
