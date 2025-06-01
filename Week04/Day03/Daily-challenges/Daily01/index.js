class Video {
  constructor(title, uploader, time) {
    this.title = title;
    this.uploader = uploader;
    this.time = time; // in seconds
  }

  watch() {
    console.log(`${this.uploader} watched all ${this.time} seconds of "${this.title}"!`);
  }
}  

const video1 = new Video("The Wonders of Space", "Sara", 240);
video1.watch(); 

const video2 = new Video("CSS Animations Tutorial", "Sara", 140);
video2.watch();

const videoData = [
  { title: "Intro to HTML", uploader: "Alice", time: 120 },
  { title: "CSS Grid Tutorial", uploader: "Bob", time: 300 },
  { title: "JavaScript Loops", uploader: "Charlie", time: 180 },
  { title: "React Basics", uploader: "Dana", time: 240 },
  { title: "Node.js Crash Course", uploader: "Eve", time: 360 }
];

const videos = [];
for (let data of videoData) {
  const video = new Video(data.title, data.uploader, data.time);
  videos.push(video);      
  video.watch();              
}
// More simple:
// const videos = videoData.map(video => new Video(video.title, video.uploader, video.time));
// videos.forEach(video => video.watch());