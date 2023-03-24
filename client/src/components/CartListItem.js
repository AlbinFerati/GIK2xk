function CartListItem({ onEdit, product }) {
  return (
    <>
      <div>
        <div>
          <div>
            <img src={'https://picsum.photos/200/300'} alt={product.name} />
            <h3>{product.name}</h3>
            <p>{product.description}</p>
            <p>Price: {product.price}</p>
          </div>
          <div>
            <label htmlFor={`amount_${product.id}`}>Amount:</label>
            <input
              id={`amount_${product.id}`}
              value={product.amount}
              type="number"
              min="0"
              onChange={(e) =>
                onEdit(1, product.id, e.target.value - product.amount)
              }
            />
            <p>Price: {product.amount * product.price}</p>
            <button onClick={(e) => onEdit(1, product.id, -product.amount)}>
              Delete
            </button>
          </div>
        </div>
        <hr />
      </div>
    </>
  );
}

export default CartListItem;
