export interface VideoData {
  id: string;
  url: string;
  title: string;
}

export const processVideos: VideoData[] = [
  {
    id: "process-1",
    url: "/videos/process-1.mp4",
    title: "Packages in Our office"
  },
  {
    id: "process-2",
    url: "/videos/process-2.mp4",
    title: "Loading the car"
  },
  {
    id: "process-3",
    url: "/videos/process-3.mp4",
    title: "Carefully packing furniture"
  },
  {
    id: "process-4",
    url: "/videos/process-4.mp4",
    title: "Carefully packing fragile items"
  }
];