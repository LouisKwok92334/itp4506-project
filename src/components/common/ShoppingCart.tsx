import { Offcanvas, Stack, Button } from "react-bootstrap";
import { useShoppingCart } from "../context/ShoppingCartContext";
import { CartItem } from "./CartItem";
import tamJaiFood from "../../json/tamJaiFood.json";
import { formatCurrency } from "../utilities/formatCurrency";
import { NavLink } from "react-router-dom";

type ShoppingCartProps = {
  isOpen: boolean;
};

export function ShoppingCart({ isOpen }: ShoppingCartProps) {
  const { closeCart, cartItems } = useShoppingCart();

  return (
    <Offcanvas show={isOpen} onHide={closeCart} placement="end">
      <Offcanvas.Header closeButton>
        <Offcanvas.Title>Cart</Offcanvas.Title>
      </Offcanvas.Header>
      <Offcanvas.Body>
        <div className="d-flex justify-content-between">
            <div>
                <Offcanvas.Title>TamJai SamGor Mixian</Offcanvas.Title>
                <div className="text-muted" style={{ fontSize: ".75rem" }}>
                    HK$ 15 Delivery, HK$ 80 Minimum
                </div>
            </div>
            <div className="text-muted" style={{ fontSize: ".75rem" }}>
                <img src={"/tamJai-images/logo.jpg"} alt="Logo" style={{ height: '70px' }} />
            </div>
        </div>
        <hr />
        <Stack gap={3}>
          {cartItems.map((item) => (
            <CartItem key={item.id} {...item} />
          ))}
          <div className="ms-auto fw-bold fs-5">
            Total{" "}
            {formatCurrency(
              cartItems.reduce((total, cartItem) => {
                const item = tamJaiFood.find((i) => i.id === cartItem.id);
                return total + (item?.price ?? 0) * cartItem.quantity;
              }, 0)
            )}
          </div>
          <NavLink to="/confirm-address">
            <Button variant="primary" className="w-100">
              Checkout
            </Button>
          </NavLink>
        </Stack>
      </Offcanvas.Body>
    </Offcanvas>
  );
}
