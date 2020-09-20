import React from 'react';
import './App.css';
import Post from './Post';
import ImageUpload from './ImageUpload';
import { useState, useEffect } from 'react';
import { db , auth} from './firebase';
import { makeStyles } from '@material-ui/core/styles';
import { Button, Input } from '@material-ui/core/';
import Modal from '@material-ui/core/Modal';


function getModalStyle() {
  const top = 50;
  const left = 50;

  return {
    top: `${top}%`,
    left: `${left}%`,
    transform: `translate(-${top}%, -${left}%)`,
  };
}

const useStyles = makeStyles((theme) => ({
  paper: {
    position: 'absolute',
    width: 300,
    backgroundColor: theme.palette.background.paper,
    border: '2px solid #000',
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
  },
}));


function App() {
  const classes = useStyles();
  const [modalStyle] = useState(getModalStyle);
  const [posts, setPosts] = useState([]);


  const [open, setOpen] = useState(false);
  const [openSignIn, setOpenSignIn] = useState(false);

  //UserAuthentication staff
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [user, setUser] = useState(null);

  //UserAuthentication staff
  useEffect(() =>{
    const unsubscribe = auth.onAuthStateChanged((authUser) =>{
      if (authUser){
        console.log(authUser)
        setUser(authUser)
      } else{
        setUser(null)
      };
    })
    return () => {
      //perform some cleanup 
      unsubscribe();
    }
  }, [user, username])

  useEffect(() => {
    db.collection('posts').orderBy('timestamp','desc').onSnapshot(snapShot => {
      setPosts(snapShot.docs.map(doc => ({
          id: doc.id,
          post: doc.data()
        })));
    })
  }, []);

  //UserAuthentication staff
  const signUp = (event) =>{
    event.preventDefault();
    auth.createUserWithEmailAndPassword(email,password).then((authUser) => {
      return authUser.user.updateProfile({
        displayName: username,
      })
    }).catch((error) => alert(error.message));

    setOpen(false)
    alert("Account creation successfull!")
    
  }
  //UserAuthentication staff
  const signIn = (event) =>{
    event.preventDefault();
    auth.signInWithEmailAndPassword(email,password).catch((error) => alert(error.message));
    setOpenSignIn(false)
  }


  return (
    <div className="app">

      {/* Signup Modal */}
      <Modal
        open={open}
        onClose={ () => setOpen(false)}
      >
        <div style={modalStyle} className={classes.paper}>
         <form type="submit" className="app__signUp">
         <center>
            <img
              className="app__headerImage"
              src="https://www.instagram.com/static/images/web/mobile_nav_type_logo.png/735145cfe0a4.png"
              alt="ig logo"
              width="100"
            />
          </center>
          <Input
            placeholder="username"
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
           />
          
          <Input
            placeholder="email"
            type="text"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
           />
          <Input
            placeholder="password"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
           />
          <Button type="submit" onClick={signUp}>Sign Up</Button> {/* UserAuthentication staff */}
         </form>
          
        </div>
      </Modal>
      
      {/* SignIn Modal */}
      <Modal
        open={openSignIn}
        onClose={ () => setOpenSignIn(false)}
      >
        <div style={modalStyle} className={classes.paper}>
         <form type="submit" className="app__signUp">
         <center>
            <img
              className="app__headerImage"
              src="https://www.instagram.com/static/images/web/mobile_nav_type_logo.png/735145cfe0a4.png"
              alt="ig logo"
              width="100"
            />
          </center>
          
          <Input
            placeholder="email"
            type="text"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
           />
          <Input
            placeholder="password"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
           />
          <Button type="submit" onClick={signIn}>Login</Button> {/* UserAuthentication staff */}
         </form>
          
        </div>
      </Modal>

      <div className="app__header">
        <img
          className="app__headerImage"
          src="https://www.instagram.com/static/images/web/mobile_nav_type_logo.png/735145cfe0a4.png"
          alt="ig logo"
          width="100"
        />
        { user ? (
        <Button onClick={() => auth.signOut()}>Logout</Button> //UserAuthentication staff
        ) : (
          <div className="app__loginContainer">
            <Button onClick={() => setOpenSignIn(true)}> Login </Button>
            <Button onClick={() => setOpen(true)}>Sign Up</Button>
          </div>
        )}
      </div>



      


      <div className="app__posts">
      <div className="app__imageUpload">
      {
          user?.displayName ? (<ImageUpload username={user.displayName}/>) : (
          <div className="ifNot_logIn">
            <h3>Login to upload</h3>
            <Button onClick={() => setOpenSignIn(true)}> Login </Button>
          </div>
      )}
      </div>
      

        {
          posts.map( ({post, id}) => (
            <Post user={user} postId={id} key={id} imageUrl={post.imageUrl} username={post.username} caption={post.caption} />
          ))
        }

      </div>
      
      
    </div>
  );
}

export default App;
