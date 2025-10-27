import DetailProduct from "./detailproduct";
import SlideProduct from "./slideproduct";


const MainProduct = () => {
    return (
      <main className="grid grid-cols-1 gap-8 md:grid-cols-2 items-center md:mx-auto 
      md:min-h-[calc(100vh-88-px-3px)] md:container md:px-4">
        <SlideProduct />
        <DetailProduct />
        
      </main>
    );
};
export default MainProduct;
