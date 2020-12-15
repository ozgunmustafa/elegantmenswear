import { ImageGroup, Image } from 'react-fullscreen-image'

const images = [
   "https://images.unsplash.com/photo-1602524818604-fb5277190621?ixlib=rb-1.2.1&ixid=MXwxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHwxfHx8ZW58MHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
    "https://images.unsplash.com/photo-1606633605163-dd73909ea5a0?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw2fHx8ZW58MHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
    "https://images.unsplash.com/photo-1593642532973-d31b6557fa68?ixlib=rb-1.2.1&ixid=MXwxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHw5fHx8ZW58MHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
  ]

const ImageView = () => {
    return (
        <ImageGroup>
          <ul className="images">
            {images.map(i => (
              <li key={i}>
                <Image
                  src={i}
                  alt="nature"
                />
              </li>
            ))}
          </ul>
        </ImageGroup>
      )
}

export default ImageView
