import { Card, Button } from "react-bootstrap";
import { formatCurrency } from "../utilities/formatCurrency";
import { useShoppingCart } from "../context/ShoppingCartContext";

type FoodItemProps = {
    id: number;
    name: string;
    description: string;
    price: number;
    imgUrl: string;
}

export function FoodItem({ ...props}: FoodItemProps) {
    const { getItemQuantity, increaseItemQuantity, decreaseItemQuantity, removeFromCart } = useShoppingCart();
    const quantity = getItemQuantity(props.id);

    return (
        <Card className="h-100">
            <Card.Img 
                variant="top"
                src={props.imgUrl}
                alt={props.name}
                height="200px"
                style={{ objectFit: "cover" }}
            />
            <Card.Body className="d-flex flex-column">
                <Card.Title className="d-flex justify-content-between align-items-baseline mb-4">
                    <span className="fs-2">{props.name}</span>
                    <span className="ms-2 text-muted">{formatCurrency(props.price)}</span>
                </Card.Title>
                <div className="mt-auto">
                    {quantity === 0 ? (
                        <Button className="w-100" onClick={() => increaseItemQuantity(props.id)}>+ Add To Cart</Button>
                    ) : <div className="d-flex align-items-center flex-column" style={{ gap: ".5rem" }}>
                        <div className="d-flex align-items-center flex-center" style={{ gap: ".5rem" }}>
                            <Button onClick={() => decreaseItemQuantity(props.id)}>-</Button>
                                <div>
                                    <span className="fs-3">{quantity}</span> in cart
                                </div>
                            <Button onClick={() => increaseItemQuantity(props.id)}>+</Button>
                        </div>
                        <Button variant="danger" size="sm" onClick={() => removeFromCart(props.id)}>
                            Remove
                        </Button>
                    </div>}
                </div>
            </Card.Body>
        </Card>
    )
}