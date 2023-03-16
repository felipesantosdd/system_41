import { Container } from "../container/container.styled";
import { ProductCard } from "../productCard/productCard";

export function Products() {

    return (
        <Container>
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
        </Container>
    )
}