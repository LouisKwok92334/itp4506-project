import React, { useState } from 'react';
import { Table, Button, Modal, Form } from 'react-bootstrap';

type OrderType = {
  id: number;
  customer: string;
  items: string;
  total: string;
  status: string;
};

const mockOrders: OrderType[] = [
  { id: 1, customer: 'John Doe', items: 'Pizza, Soda', total: '20.00', status: 'Preparing' },
  { id: 2, customer: 'Jane Smith', items: 'Burger, Water', total: '15.00', status: 'Pending' },
  // 更多订单...
];

export function ManageOrder() {
  const [orders, setOrders] = useState<OrderType[]>(mockOrders);
  const [selectedOrder, setSelectedOrder] = useState<OrderType | null>(null);
  const [showModal, setShowModal] = useState(false);

  const handleStatusChange = (orderId: number, newStatus: string) => {
    setOrders(orders.map(order => 
      order.id === orderId ? { ...order, status: newStatus } : order
    ));
  };

  const openOrderModal = (order: OrderType) => {
    setSelectedOrder(order);
    setShowModal(true);
  };

  const closeOrderModal = () => {
    setShowModal(false);
  };

  return (
    <div className="ManageOrder">
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>#</th>
            <th>Customer</th>
            <th>Items</th>
            <th>Total</th>
            <th>Status</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {orders.map(order => (
            <tr key={order.id}>
              <td>{order.id}</td>
              <td>{order.customer}</td>
              <td>{order.items}</td>
              <td>${order.total}</td>
              <td>{order.status}</td>
              <td>
                <Button variant="primary" onClick={() => openOrderModal(order)}>Manage</Button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>

      {/* 订单详情和状态管理模态框 */}
      <Modal show={showModal} onHide={closeOrderModal}>
        <Modal.Header closeButton>
          <Modal.Title>Order Details</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {selectedOrder && (
            <Form>
              <Form.Group className="mb-3">
                <Form.Label>Customer Name</Form.Label>
                <Form.Control type="text" readOnly defaultValue={selectedOrder.customer} />
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Label>Order Items</Form.Label>
                <Form.Control type="text" readOnly defaultValue={selectedOrder.items} />
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Label>Total Price</Form.Label>
                <Form.Control type="text" readOnly defaultValue={`$${selectedOrder.total}`} />
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Label>Status</Form.Label>
                <Form.Select 
                  defaultValue={selectedOrder.status}
                  onChange={(e) => handleStatusChange(selectedOrder.id, e.target.value)}
                >
                  <option value="Pending">Pending</option>
                  <option value="Preparing">Preparing</option>
                  <option value="Ready for Delivery">Ready for Delivery</option>
                  <option value="Completed">Completed</option>
                </Form.Select>
              </Form.Group>
            </Form>
          )}
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={closeOrderModal}>Close</Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}
