export interface VideoData {
  id: string;
  url: string;
  title: string;
}

export const processVideos: VideoData[] = [
  {
    id: "process-1",
    url: "https://res.cloudinary.com/dfjgz3sfh/video/upload/v1781837669/process-1_e6z0pg.mp4",
    title: "Packages in Our office"
  },
  {
    id: "process-2",
    url: "https://res.cloudinary.com/dfjgz3sfh/video/upload/v1781837676/process-2_oeidzs.mp4",
    title: "Loading the car"
  },
  {
    id: "process-3",
    url: "https://res.cloudinary.com/dfjgz3sfh/video/upload/v1781838073/process-3_hhzima.mp4",
    title: "Carefully packing furniture"
  },
  {
    id: "process-4",
    url: "https://res.cloudinary.com/dfjgz3sfh/video/upload/v1781837631/process-4_na19r3.mp4",
    title: "Carefully packing fragile items"
  }
];