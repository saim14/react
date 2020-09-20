import React from "react";
import "./Search.css";
import TuneOutlinedIcon from "@material-ui/icons/TuneOutlined";
import ChannelRow from "./ChannelRow";
import VideoRow from "./VideoRow";

function Search() {
  return (
    <div className="search">
      <div className="search__filter">
        <TuneOutlinedIcon />
        <h2>FILTER</h2>
      </div>
      <hr />
      <ChannelRow
        image="https://firebasestorage.googleapis.com/v0/b/ig-clone-14.appspot.com/o/images%2FIMG_20190922_235233_433.jpg?alt=media&token=641b14e2-970e-4422-bf13-02c51cdc3926"
        channel="Saim Islam"
        verified
        subs="660k"
        noOfVideos={382}
        description="A job description tells about the job. Licensed from iStockPhoto. noun. The definition of a description is a statement that gives details about someone or something. An example of description is a story"
      />
      <hr />
      <br />

      <VideoRow
        subs="560k"
        channel="Saim Islam"
        title="Go and find some wines"
        desc="The definition of a description is a statement that gives details about someone or something."
        views="100k"
        timestamp="2 hours ago"
        image="https://i.ytimg.com/vi/duJNVv9m2NY/maxresdefault.jpg"
      />

      <VideoRow
        subs="560k"
        channel="Saim Islam"
        title="Beautyfull"
        desc="The definition of a description is a statement that gives details about someone or something."
        views="100k"
        timestamp="2 hours ago"
        image="https://cdn.havecamerawilltravel.com/photographer/files/2020/01/youtube-logo-new-1068x510.jpg"
      />

      <VideoRow
        subs="560k"
        channel="Saim Islam"
        title="One of the amazing!"
        desc="The definition of a description is a statement that gives details about someone or something."
        views="100k"
        timestamp="2 hours ago"
        image="https://i.ytimg.com/vi/OQqacD5HzBA/maxresdefault.jpg"
      />

      <VideoRow
        subs="560k"
        channel="Saim Islam"
        title="You know I will be there"
        desc="The definition of a description is a statement that gives details about someone or something."
        views="100k"
        timestamp="2 hours ago"
        image="https://fiverr-res.cloudinary.com/images/t_main1,q_auto,f_auto,q_auto,f_auto/gigs/123747090/original/ac3c61119aff505605ced3c77af55c9d4343280c/create-a-nice-youtube-thumbnail.jpg"
      />

      <VideoRow
        subs="560k"
        channel="Saim Islam"
        title="We are here to show you what you need"
        desc="The definition of a description is a statement that gives details about someone or something."
        views="100k"
        timestamp="2 hours ago"
        image="https://louisem.com/wp-content/uploads/2017/06/youtube-thumbnail.jpg"
      />

      <VideoRow
        subs="560k"
        channel="Saim Islam"
        title="Ready from paris"
        desc="The definition of a description is a statement that gives details about someone or something."
        views="100k"
        timestamp="2 hours ago"
        image="https://cdn130.picsart.com/257194654019202.jpg?type=webp&to=min&r=640"
      />
    </div>
  );
}

export default Search;
