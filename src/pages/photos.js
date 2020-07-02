import React from "react"
import useGalleries from "../hooks/use-galleries"
import DisplayContent from "../components/display-content"

const PhotosShowcase = () => {
  const allGalleries = useGalleries()
  return <DisplayContent content={allGalleries} />
  // return <pre>{JSON.stringify(allGalleries, null, 2)}</pre>
}

export default PhotosShowcase
