import React from "react";

interface Props {
  params: { slug: string[] };
  searchParams: { sortOrder: string };
}

const ProductPageDetails = ({
  params: { slug },
  searchParams: { sortOrder },
}: Props) => {
  return (
    <div>
      Product Page Details {slug} {sortOrder}
      <button className="btn btn-primary">Add to cart</button>
    </div>
  );
};

export default ProductPageDetails;
