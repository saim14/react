import React from "react";
import "./Recommended.css";
import { Button } from "@material-ui/core";
import Video from "./Video";
function Recommended() {
  return (
    <div className="recommended">
      <div className="most_viewed">
        <Button className="selected-button" variant="outlined">
          All
        </Button>
        <Button variant="outlined">React </Button>
        <Button variant="outlined">Firebase </Button>

        <Button variant="outlined">Artificial Intelligence </Button>
        <Button variant="outlined">Data Science </Button>
        <Button variant="outlined">Cybersecurity</Button>
      </div>
      <h1>Recommended</h1>
      <div className="recommended__videos">
        <Video
          image="https://i.ytimg.com/vi/duJNVv9m2NY/maxresdefault.jpg"
          channelImage="https://firebasestorage.googleapis.com/v0/b/ig-clone-14.appspot.com/o/images%2FIMG_20190922_235233_433.jpg?alt=media&token=641b14e2-970e-4422-bf13-02c51cdc3926"
          channel="Saim Islam"
          title="Youtube first video"
          views={100}
          timestamp="2 hours ago"
        />

        <Video
          image="https://i.ytimg.com/vi/7_1MDSSWD5A/maxresdefault.jpg"
          channelImage="https://firebasestorage.googleapis.com/v0/b/ig-clone-14.appspot.com/o/images%2FIMG_20190922_235233_433.jpg?alt=media&token=641b14e2-970e-4422-bf13-02c51cdc3926"
          channel="Saim Islam"
          title="Video that makes you happy"
          views={100}
          timestamp="6 hours ago"
        />

        <Video
          image="https://blog.snappa.com/wp-content/uploads/2018/01/youtube-thumbnail-size.png"
          channelImage="https://firebasestorage.googleapis.com/v0/b/ig-clone-14.appspot.com/o/images%2FIMG_20190922_235233_433.jpg?alt=media&token=641b14e2-970e-4422-bf13-02c51cdc3926"
          channel="Saim Islam"
          title="Go and try this one"
          views={100}
          timestamp="18 hours ago"
        />

        <Video
          image="https://cdn.havecamerawilltravel.com/photographer/files/2020/01/youtube-logo-new-1068x510.jpg"
          channelImage="https://firebasestorage.googleapis.com/v0/b/ig-clone-14.appspot.com/o/images%2FIMG_20190922_235233_433.jpg?alt=media&token=641b14e2-970e-4422-bf13-02c51cdc3926"
          channel="Saim Islam"
          title="Check it out and become pro"
          views={100}
          timestamp="2 hours ago"
        />

        <Video
          image="https://i.ytimg.com/vi/OQqacD5HzBA/maxresdefault.jpg"
          channelImage="https://firebasestorage.googleapis.com/v0/b/ig-clone-14.appspot.com/o/images%2FIMG_20190922_235233_433.jpg?alt=media&token=641b14e2-970e-4422-bf13-02c51cdc3926"
          channel="Saim Islam"
          title="Nothing to say, thanks"
          views={100}
          timestamp="2 hours ago"
        />

        <Video
          image="https://fiverr-res.cloudinary.com/images/t_main1,q_auto,f_auto,q_auto,f_auto/gigs/123747090/original/ac3c61119aff505605ced3c77af55c9d4343280c/create-a-nice-youtube-thumbnail.jpg"
          channelImage="https://firebasestorage.googleapis.com/v0/b/ig-clone-14.appspot.com/o/images%2FIMG_20190922_235233_433.jpg?alt=media&token=641b14e2-970e-4422-bf13-02c51cdc3926"
          channel="Saim Islam"
          title="One of the amazing! "
          views={100}
          timestamp="2 hours ago"
        />

        <Video
          image="https://louisem.com/wp-content/uploads/2017/06/youtube-thumbnail.jpg"
          channelImage="https://firebasestorage.googleapis.com/v0/b/ig-clone-14.appspot.com/o/images%2FIMG_20190922_235233_433.jpg?alt=media&token=641b14e2-970e-4422-bf13-02c51cdc3926"
          channel="Saim Islam"
          title="Thankss! video"
          views={100}
          timestamp="2 hours ago"
        />

        <Video
          image="https://cdn130.picsart.com/257194654019202.jpg?type=webp&to=min&r=640"
          channelImage="https://firebasestorage.googleapis.com/v0/b/ig-clone-14.appspot.com/o/images%2FIMG_20190922_235233_433.jpg?alt=media&token=641b14e2-970e-4422-bf13-02c51cdc3926"
          channel="Saim Islam"
          title="Go and find some wines"
          views={100}
          timestamp="2 hours ago"
        />

        <Video
          image="https://standaloneinstaller.com/online-tools/images/16-compressed.png"
          channelImage="https://firebasestorage.googleapis.com/v0/b/ig-clone-14.appspot.com/o/images%2FIMG_20190922_235233_433.jpg?alt=media&token=641b14e2-970e-4422-bf13-02c51cdc3926"
          channel="Saim Islam"
          title="Beautyfull"
          views={100}
          timestamp="2 hours ago"
        />

        <Video
          image="https://i.ytimg.com/vi/duJNVv9m2NY/maxresdefault.jpg"
          channelImage="https://firebasestorage.googleapis.com/v0/b/ig-clone-14.appspot.com/o/images%2FIMG_20190922_235233_433.jpg?alt=media&token=641b14e2-970e-4422-bf13-02c51cdc3926"
          channel="Saim Islam"
          title="Youtube first video"
          views={100}
          timestamp="2 hours ago"
        />

        <Video
          image="https://pixteller.com/images/tools/thumbs/Youtube-Thumbnail-Maker.png"
          channelImage="https://firebasestorage.googleapis.com/v0/b/ig-clone-14.appspot.com/o/images%2FIMG_20190922_235233_433.jpg?alt=media&token=641b14e2-970e-4422-bf13-02c51cdc3926"
          channel="Saim Islam"
          title="Youtube first video"
          views={100}
          timestamp="2 hours ago"
        />

        <Video
          image="https://www.picmaker.com/assets/images/homepage/picm_template2.png"
          channelImage="https://firebasestorage.googleapis.com/v0/b/ig-clone-14.appspot.com/o/images%2FIMG_20190922_235233_433.jpg?alt=media&token=641b14e2-970e-4422-bf13-02c51cdc3926"
          channel="Saim Islam"
          title="Youtube first video"
          views={100}
          timestamp="2 hours ago"
        />
      </div>
    </div>
  );
}

export default Recommended;
