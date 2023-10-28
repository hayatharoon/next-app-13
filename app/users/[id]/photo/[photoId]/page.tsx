import React from 'react';

interface Props {
  params: {
    id: number;
    photoId: number;
  };
}
const PhotoDetails = ({ params: { id, photoId } }: Props) => {
  return (
    <div>
      <h1>Id {id}</h1>
      <h1>Id {photoId}</h1>
    </div>
  );
};

export default PhotoDetails;
