import { useSelector } from "react-redux";
import Button from "../../ui/Button";
import { formatCurrency } from "../../utils/helpers";
import DeleteItem from "./DeleteItem";
import UpdatingItemQuantity from "./UpdatingItemQuantity";
import { getCurrentQuantityById } from "./cartSlice";
function CartItem({ item }) {
  const { pizzaId, name, quantity, totalPrice } = item;
  const currentQuantity = useSelector(getCurrentQuantityById(pizzaId));
  return (
    <li className="py-3 sm:flex sm:items-center sm:justify-between">
      <p className="mb-1 sm:mb-0">
        {quantity}&times; {name}
      </p>
      <div className="flex items-center sm:gap-6">
        <p className="text-sm font-bold">{formatCurrency(totalPrice)}</p>
      </div>
      <UpdatingItemQuantity
        pizzaId={pizzaId}
        currentQuantity={currentQuantity}
      />
      <DeleteItem pizzaId={pizzaId} />
    </li>
  );
}

export default CartItem;
