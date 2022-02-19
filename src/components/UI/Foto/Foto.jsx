import React from 'react';

export const Foto = ({url, clase, id, alt}) => {
  return(
      <div className='img'>
          <img id={id} className={clase} src={url} alt={alt} />
      </div>
  );
};