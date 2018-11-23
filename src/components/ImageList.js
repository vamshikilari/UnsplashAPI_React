import React from 'react';
import './ImageList.css';
import ImageCard from './ImageCard';

const ImageList = (props) => {
//key is required show a list of items to aintain uniqueness
  const images = props.images.map((image) => {
      return <ImageCard key={image.id} image={image} />
  });
  // const images = props.images.map(({description, id, urls}) =>{
  //     return <img  alt={description} key={id} src={urls.regular} />
  // });
  return(
    <div className="image-list">
        {images}
    </div>
  );
}

export default ImageList;
