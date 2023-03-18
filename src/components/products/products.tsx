import { useContext, useEffect } from "react";
import { Context } from "../../provider/provider";
import { Container } from "../container/container.styled";
import { ProductCard } from "../productCard/productCard";

export function Products() {

    const { handleGetProducts, products } = useContext(Context)

    useEffect(() => {
        handleGetProducts()
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    return (
        <Container>
            {products?.map((product) => (
                <ProductCard
                    key={product.id}
                    id={product.id}
                    name={product.name}
                    type={product.type}
                    color={product.color}
                    value={product.value}
                    image={product.image}
                />
            ))}
        </Container>
    )
}