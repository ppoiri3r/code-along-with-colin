function PieceOfArt({longTitle, imgSrc, title}) {
  // const {longTitle, imgSrc, title} = props;

  return (
    <div>
      <h2>{longTitle}</h2>
      <img src={imgSrc} alt={title}/>
    </div>
  )
}

export default PieceOfArt;

// return <img src={artwork.webImage.url} alt={artwork.title}/>