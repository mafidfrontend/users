"use client";
import { useProductStore } from "@/store";
import { ShoppingCartOutlined } from "@ant-design/icons";
import { Button, Modal } from "antd";
import React, { useState } from "react";

function SavatchaModal() {
    const [modalOpen, setModalOpen] = useState(false);
    const { cart } = useProductStore();
    return (
        <>
            <Button
                onClick={() => {
                    setModalOpen(true);
                }}
                type="primary"
                size="large"
                icon={<ShoppingCartOutlined />}
            >
                <span>Savatcha</span>
            </Button>
            <Modal
                title="Savatcha"
                open={modalOpen}
                onCancel={() => {
                    setModalOpen(false);
                }}
                onClose={() => {
                    setModalOpen(false);
                }}
                footer={false}
            >
                {cart.length === 0 ? (
                    <p>Savat bo‘sh</p>
                ) : (
                    cart.map((product) => (
                        <div
                            key={product.id}
                            className="border p-3 mb-2 rounded flex items-center gap-3"
                        >
                            <div>
                                <img src={product.imageUrl} width={100} height={100}  alt={product.description} />
                            </div>
                            <h3 className="font-bold">{product.name}</h3>
                            <p>Narxi: {product.price} so&apos;m</p>
                        </div>
                    ))
                )}
            </Modal>
        </>
    );
}

export default SavatchaModal;
