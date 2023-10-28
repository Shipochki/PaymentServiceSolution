import { Button } from 'primereact/button';
import { Card } from 'primereact/card';

export const MyProducts = ({products}) => {
    const footer = (
        <>
            <Button label="Save" icon="pi pi-check" />
            <Button label="Cancel" severity="secondary" icon="pi pi-times" style={{ marginLeft: '0.5em' }} />
        </>
    );

    return (
      <section className="products">
        <h1>My Products</h1>

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