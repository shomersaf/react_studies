import { useImageLoaded } from "../../../hooks/useImageLoaded"
// React, { useEffect, useState } from "react"

interface IProps {
    imageUrl: string
}
export const defaultImage = "https://upload.wikimedia.org/wikipedia/commons/thumb/a/ac/No_image_available.svg/1024px-No_image_available.svg.png"
export default function ImageCp(props: IProps) {
    const [currentImage] = useImageLoaded(props.imageUrl || defaultImage)
    return <img height={300} width={1100} src={currentImage} />
}