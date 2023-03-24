function Rating({ ratings }) {
  return ratings ? (
    <>
      <div>
        {ratings &&
          ratings.map((rating) => (
            <div key={rating.id}>{rating.rating}/10</div>
          ))}
      </div>
    </>
  ) : (
    <>Rating missing</>
  );
}

export default Rating;
