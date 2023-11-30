import React, { useState } from 'react';
import { Table, Button, Modal, Form } from 'react-bootstrap';
import ordersData from '../../json/order.json';

type OrderItemType = {
  name: string;
  quantity: number;
};

type OrderType = {
  id: number;
  customer: string;
  items: OrderItemType[];
  total: string;
  status: 'Pending' | 'Preparing' | 'Ready for Delivery' | 'Completed' | 'Rejected';
};

const mockOrders: OrderType[] = [
  { 
    id: 1, 
    customer: 'John Doe', 
    items: [
      { name: 'Pizza', quantity: 1 },
      { name: 'Soda', quantity: 2 }
    ], 
    total: '20.00', 
    status: 'Preparing' 
  },
  { 
    id: 2, 
    customer: 'Jane Smith', 
    items: [
      { name: 'Burger', quantity: 1 },
      { name: 'Water', quantity: 1 }
    ], 
    total: '15.00', 
    status: 'Pending' 
  },
  // 更多订单...
];


const statusColors: { [key in OrderType['status']]: string } = {
  Pending: 'warning',
  Preparing: 'info',
  'Ready for Delivery': 'primary',
  Completed: 'success',
  Rejected: 'danger'
};

export function ManageOrder() {
  const [orders, setOrders] = useState<OrderType[]>(mockOrders);
  const [selectedOrder, setSelectedOrder] = useState<OrderType | null>(null);
  const [showModal, setShowModal] = useState(false);

  const handleStatusChange = (orderId: number, newStatus: string) => {
    const validStatuses = ['Pending', 'Preparing', 'Ready for Delivery', 'Completed', 'Rejected'];
    if (!validStatuses.includes(newStatus)) {
      console.error('Invalid status:', newStatus);
      return;
    }
  
    setOrders(orders.map(order => 
      order.id === orderId ? { ...order, status: newStatus as OrderType['status'] } : order
    ));
  };  

  const getOrderItemsString = (items: OrderItemType[]): string => {
    return items.map(item => `${item.name} x${item.quantity}`).join(', ');
  };

  const handleAcceptOrder = (orderId: number) => {
    // 处理接受订单逻辑
  };

  const handleRejectOrder = (orderId: number) => {
    // 处理拒绝订单逻辑
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
              <td>{getOrderItemsString(order.items)}</td>
              <td>${order.total}</td>
              <td>
                <span className={`badge bg-${statusColors[order.status]}`}>
                {order.status}
                </span>
              </td>
              <td>
                {order.status === 'Pending' && (
                  <>
                    <Button variant="success" onClick={() => handleAcceptOrder(order.id)}>Accept</Button>
                    <Button variant="danger" onClick={() => handleRejectOrder(order.id)}>Reject</Button>
                  </>
                )}
                {order.status !== 'Pending' && (
                  <Button variant="primary" onClick={() => openOrderModal(order)}>Manage</Button>
                )}
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
                <ul>
                  {selectedOrder.items.map((item, index) => (
                    <li key={index}>{item.name} x{item.quantity}</li>
                  ))}
                </ul>
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
