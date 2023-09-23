import React from "react";
import YouTube from "react-youtube";

class YouTubeVideo extends React.Component {
  render() {
    // รหัสวิดีโอ YouTube ที่คุณต้องการแสดง
    const videoId = "w_1JT2hLJUU";

    // กำหนดค่าตัวเลือกของวิดีโอ
    const opts = {
      height: "768",
      width: "1380",
      playerVars: {
        // ค่าตัวแปรของผู้เล่น YouTube
        autoplay: 0,
      },
    };

    return <YouTube videoId={videoId} opts={opts} onReady={this._onReady} />;
  }

  _onReady(event) {
    // เรียกใช้งานเมื่อวิดีโอพร้อมใช้งาน
    event.target.pauseVideo();
  }
}

export default YouTubeVideo;
