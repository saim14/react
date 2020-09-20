import React, {useState} from 'react';
import './ImageUpload.css';
import { Button } from '@material-ui/core';
import {db, storage} from './firebase';
import firebase from "firebase"

function ImageUpload({username}) {
  const [caption, setCaption] = useState('');
  const [image, setImage] = useState(null);
  const [progress, setProgress] =useState(0);

  const handleChange = (e) =>{
    if (e.target.files[0]){
      setImage(e.target.files[0])
    }
  }

  const handleUpload = () => {
    const uploadTask = storage.ref(`images/${image.name}`).put(image);

    uploadTask.on(
      "state_changed",
      (snapshot) => {
        const progress = Math.round((snapshot.bytesTransferred / snapshot.totalBytes) * 100);
        setProgress(progress);
      },
      (error) => {
        console.log(error.message);
      },

      () => {
        storage.ref("images").child(image.name)
        .getDownloadURL().then(url => {
          db.collection("posts").add({
            timestamp: firebase.firestore.FieldValue.serverTimestamp(),
            caption: caption,
            imageUrl: url,
            username: username
          });
          setCaption('');
          setImage(null);
          setProgress(0);
          
        })
      }
    )
          
          
  }

  return (

    <div className="imageUpload">
      
      <div className="imageUpload__inputFile">
        <input type="file" onChange={handleChange} />
        
        { progress ? 
            <progress value= {progress} max="100"/> : <div/>
        }
      </div>
      
      <div className="imageUpload__caption">
        <input type="text" onChange={event => setCaption(event.target.value)} placeholder="Enter a caption..." value={caption}/> 
        <Button
          onClick={handleUpload}
          disabled={!image}
        >Upload
        </Button>
      </div>
      
      
      
    </div>
  )
}

export default ImageUpload;
