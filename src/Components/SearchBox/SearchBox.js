import React from 'react'
import DownloadLink from "react-download-link";


import './styles.css'

const SearchBox = (props) => {
  const { gallery, loadMore, launchModal, selectedImage} = props
  console.log('gallery = ', gallery)


 
  return (

    <div className="content">
      <div className="grid row">
        {gallery.map( (image, index) => (
          <div
            key={image.id}
            className="col-sm-4"
          > 

            <img
              src={image.urls.small}
              alt={image.description}
              data-toggle="modal" data-target="#selected-img-modal"
              onClick={() => launchModal(index)}
            />
          </div>
        ))}
      </div>
    
      <button type="button" className="btn btn-outline-primary" onClick={loadMore}>Load more...</button>
      {/* modal */}
      <div className="modal fade" id="selected-img-modal" tabIndex="-1" role="dialog" aria-labelledby="selected-img-modal-Label" aria-hidden="true">
        <div className="modal-dialog modal-lg" role="document">
          <div className="modal-content">
            <div className="modal-body">
              <img src={selectedImage.src} alt={selectedImage.description} download/>
              <hr/>
             
              <p>{selectedImage.description}</p>
              <p>Photo by <a href={selectedImage.page + `?utm_source=search-images`} target="_blank" rel="noopener noreferrer">{selectedImage.username}</a> on <a href="https://unsplash.com/?utm_source=search-images`" target="_blank" rel="noopener noreferrer">Unsplash</a></p>
            </div>
          </div>
        </div>
      </div>
    </div>
    
  )
}

export default SearchBox