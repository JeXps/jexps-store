import React from 'react';

const products = [
  { id: 1, name: 'Elden Ring', price: 129900, image: '/images/eldenring.jpg' },
  { id: 2, name: 'Cyberpunk 2077', price: 99900, image: '/images/cyberpunk.jpg' },
  { id: 3, name: 'Red Dead Redemption 2', price: 89900, image: '/images/rdr2.jpg' }
];

function FeaturedProducts() {
  return (
    <div className="row justify-content-center">
      {products.map((product) => (
        <div className="col-md-4 mb-4" key={product.id}>
          <div className="card shadow-sm h-100">
            <img
              src={product.image}
              className="card-img-top"
              alt={product.name}
              style={{ height: '250px', objectFit: 'cover' }}
            />
            <div className="card-body text-center">
              <h5 className="card-title">{product.name}</h5>
              <p className="card-text text-success fw-bold">${product.price.toLocaleString()}</p>
              <button className="btn btn-outline-primary">Agregar al carrito</button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default FeaturedProducts;
