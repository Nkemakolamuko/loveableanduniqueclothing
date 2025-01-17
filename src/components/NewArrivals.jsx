import React, { useState } from "react";
import Modal from "./Modal";

const products = [
  {
    id: 1,
    image:
      "https://plus.unsplash.com/premium_photo-1705351823395-f31e73af2484?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fHBpY3R1cmUlMjBvZiUyMGJsYWNrJTIwbGFkaWVzfGVufDB8fDB8fHww",
    title: "Product 1",
    price: "₦85, 000",
    whatsappLink:
      "https://wa.me/yourphonenumber?text=I'm interested in Product 1",
  },
  {
    id: 2,
    image:
      "https://images.unsplash.com/photo-1638158894759-47edf16f80a5?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8YmxhY2slMjBsYWRpZXN8ZW58MHx8MHx8fDA%3D",
    title: "Product 2",
    price: "₦77, 000",
    whatsappLink:
      "https://wa.me/yourphonenumber?text=I'm interested in Product 2",
  },
  {
    id: 3,
    image:
      "https://plus.unsplash.com/premium_photo-1705351823395-f31e73af2484?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fHBpY3R1cmUlMjBvZiUyMGJsYWNrJTIwbGFkaWVzfGVufDB8fDB8fHww",
    title: "Product 3",
    price: "₦65, 000",
    whatsappLink:
      "https://wa.me/yourphonenumber?text=I'm interested in Product 3",
  },
  {
    id: 4,
    image:
      "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8Q2xvdGluZyUyMGJyYW5kJTIwbW9kZWx8ZW58MHx8MHx8fDA%3D",
    title: "Product 4",
    price: "₦135, 000",
    whatsappLink:
      "https://wa.me/yourphonenumber?text=I'm interested in Product 4",
  },
];

const NewArrivals = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null);

  const handleBuyNowClick = (product) => {
    setSelectedProduct(product);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedProduct(null);
  };

  const confirmRedirect = () => {
    window.open(selectedProduct.whatsappLink, "_blank");
    closeModal();
  };

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">New Arrivals</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {products.map((product) => (
          <div
            key={product.id}
            className="border rounded-lg shadow-lg overflow-hidden h-fit"
          >
            <img
              src={product.image}
              alt={product.title}
              className="w-full h-auto object-cover"
            />
            <div className="p-4">
              <h2 className="text-xl font-semibold">{product.title}</h2>
              <p className="mt-2">{product.price}</p>
              <button
                onClick={() => handleBuyNowClick(product)}
                className="mt-4 block w-full text-center border py-2 rounded bg-[#000] font-semibold text-white transition duration-300"
              >
                Buy Now
              </button>
            </div>
          </div>
        ))}
      </div>
      <Modal
        isOpen={isModalOpen}
        onClose={closeModal}
        onConfirm={confirmRedirect}
      />
    </div>
  );
};

export default NewArrivals;
