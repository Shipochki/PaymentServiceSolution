import { Button } from 'primereact/button';
import { Card } from 'primereact/card';
import "./myProducts.css"
import { useContext } from 'react';
import { AuthContext } from '../../contexts/AuthContext';

export const MyProducts = ({products}) => {

    const footer = (
        <>
            <Button label="Save" icon="pi pi-check" />
            <Button label="Cancel" severity="secondary" icon="pi pi-times" style={{ marginLeft: '0.5em' }} />
        </>
    );

    return (
      <section className="products">
        <h1 className='myProducts-h1'>My Products</h1>
        <div className='cards-container'>

        </div>

        {products.map((x) => (
          <div className="card flex justify-content-center">
            <Card
              key={x.id}
              title={x.name}
              footer={footer}
              className="md:w-25rem"
            >
              <p className="m-0">{x.description}</p>
              <p className="m-0">{x.price}</p>
            </Card>
          </div>
        ))}
      </section>
    );
}