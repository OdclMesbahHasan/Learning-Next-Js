export default async function ProductReview({
                                                params
                                            }: {
    params: Promise<{productId: string}>;
}) {
    const productId = (await params).productId;
    return(<h1> Review for product {productId}</h1>) ;
}