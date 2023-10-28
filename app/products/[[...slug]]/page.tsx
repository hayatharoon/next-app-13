import React from 'react';
interface Props {
  params: {
    slug: string[];
  };
  searchParams: {
    sortOrder: string;
  };
}
const ProductDetailPage = ({ params: { slug }, searchParams: { sortOrder } }: Props) => {
  return (
    <div>
      ProductDetailPage {slug} {sortOrder}
    </div>
  );
};

export default ProductDetailPage;
