import {FunctionComponent} from "react";
import {Link} from "react-router-dom";
import {useShopContext} from "../context/ShopContext.tsx";


interface ProductItemType {
    id: string;
    image: string[];
    name: string;
    price: number;
}

const ProductItem: FunctionComponent<ProductItemType> = ({ id, image, name, price}) => {
    const { currency } = useShopContext();

    return (
        <Link to={`/product/${id}`} className="text-gray-700 cursor-pointer">
            <div className="overflow-hidden">
                <img
                    src={image[0]}
                    alt=""
                    className="hover:scale-110 transition ease-in-out"
                />
            </div>
            <p className="pt-3 pb-1 text-sm">{name}</p>
            <p className="text-sm font-medium">{currency}{price}</p>
        </Link>
    )
}
export default ProductItem;