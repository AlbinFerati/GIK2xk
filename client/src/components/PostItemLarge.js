function PostItemLarge({ product }) {
  return product ? (
    <>
      <div>
        <img alt="Something" height={100} width="100" src={product.imageUrl} />
      </div>
      <>
        <p>{product.title}</p>
        <p>{product.description}</p>
        <p>{product.price} kr.</p>
      </>
      <div>
        {product.rating &&
          product.rating.map((rating, i) => (
            <p key={`ratingId_${i}`}>{rating.rating} </p> // rating.rating??? Är detta rätt Mikaela, hjälp oss! *Smallville intro. somebody save me*
          ))}
      </div>
    </>
  ) : (
    <>Product missing</>
  );
}

export default PostItemLarge;
