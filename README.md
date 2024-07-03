# gax-product-card

Paquete de pruebas de despliegue en NPM


### Gerardo Almanza

## Ejemplo
```
import { ProductCard, ProductImage, ProductTitle, ProductButtons } from 'gax-product-card'
```

```js
    <ProductCard
        product={product}
        key={product.id}
        initialValues={{
        count: 3,
        maxCount: 10,
        }}
    >
        {({ reset, count, isMaxCountReached, maxCount, increaseBy }) => (
            <>
            <ProductImage />
            <ProductTitle />
            <ProductButtons />
            </>
        )}
    </ProductCard>
```