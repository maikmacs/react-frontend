import React from 'react';
import { shallow } from 'enzyme';
import PropiedadCard from './PropiedadCard';

describe('CardPropiedad', () => {
  const propiedad = {
    id: 'dasd2q2dqd',
    nombre: 'Casa',
    fotos: 'http://devf.mx',
    precio: 120,
    descripcion_corta: 'Lorem Impsun Corto',
    calificacion: [{ estrellas: 2 }, { estrellas: 4 }]
  };

  const component = shallow(<PropiedadCard propiedad={propiedad} />);

  it('Debe Redenerear el nombre de la casa', () => {
    expect(component.find('h5.card-title').text()).toBe(propiedad.nombre);
  });
});
