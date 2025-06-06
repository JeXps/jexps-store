import React from 'react';

function Benefits() {
  const items = [
    {
      icon: '🕒',
      title: 'Entrega Instantánea',
      description: 'Recibe tu código al instante en tu cuenta.'
    },
    {
      icon: '🔒',
      title: 'Pago Seguro',
      description: 'Protegemos tu información con cifrado SSL.'
    },
    {
      icon: '🎁',
      title: 'Ofertas Diarias',
      description: 'Descuentos únicos todos los días.'
    }
  ];

  return (
    <div className="row text-center">
      {items.map((item, index) => (
        <div className="col-md-4 mb-4" key={index}>
          <div className="card border-0 bg-light h-100 p-3 shadow-sm">
            <div className="fs-1">{item.icon}</div>
            <h5 className="fw-bold mt-2">{item.title}</h5>
            <p>{item.description}</p>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Benefits;
