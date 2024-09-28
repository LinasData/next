import { notFound } from "next/navigation";

export default function ReviewDetails({
    params,
}: {
    params: { productId: string; reviewId: string };
}) {
    if (parseInt(params.reviewId) > 2000) {
        notFound();
    }
    return (
        <h1>
            Review {params.reviewId} for product {params.productId}
        </h1>
    );
}
