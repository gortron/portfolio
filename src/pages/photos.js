import React from "react"
import useGalleries from "../hooks/use-galleries"
import DisplayPosts from "../components/display-posts"

const PhotosShowcase = () => {
  const allGalleries = useGalleries()
  return <DisplayPosts content={allGalleries} />
  // return <pre>{JSON.stringify(allGalleries, null, 2)}</pre>
}

export default PhotosShowcase
