import ProductsListing from '@/components/Products';
import SEO from '@/seo/SEO';

const Products = () => {
  return (
    <div className="bg-gray-5">
      <SEO page="products" />
      <ProductsListing />
    </div>
  );
};

export default Products;
