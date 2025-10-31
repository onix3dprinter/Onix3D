// src/assets/components/pages/CartPage.jsx
import React from 'react';
import FooterProduct from '../product/FooterProduct.jsx';

const CartPage = ({ cart, onUpdateQuantity, onRemoveItem, currentUser }) => {
    // Si no hay usuario logueado, mostrar mensaje
    if (!currentUser) {
        return (
            <div className="container mx-auto px-4 py-20">
                <div className="text-center max-w-md mx-auto">
                    <svg className="w-24 h-24 mx-auto text-gray-400 mb-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
                    </svg>
                    <h2 className="text-3xl font-bold text-gray-800 mb-4">Inicia sesión para ver tu carrito</h2>
                    <p className="text-gray-600">Necesitas estar logueado para acceder a tu carrito de compras.</p>
                </div>
            </div>
        );
    }

    const subtotal = cart.reduce((acc, item) => acc + (item.price * item.quantity), 0);
    const shipping = subtotal > 200 ? 0 : 15;
    const total = subtotal + shipping;

    return (
        <>
            <div className="container mx-auto px-4 py-12 animate-fade-in">
                <h1 className="text-4xl font-bold text-gray-900 mb-8">Mi Carrito</h1>

                {cart.length === 0 ? (
                    <div className="text-center py-20">
                        <svg className="w-32 h-32 mx-auto text-gray-300 mb-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
                        </svg>
                        <h2 className="text-2xl font-bold text-gray-700 mb-2">Tu carrito está vacío</h2>
                        <p className="text-gray-500">¡Agrega productos para comenzar tu compra!</p>
                    </div>
                ) : (
                    <div className="grid lg:grid-cols-3 gap-8">
                        {/* Lista de productos */}
                        <div className="lg:col-span-2 space-y-4">
                            {cart.map((item) => (
                                <div key={item.id} className="flex gap-4 bg-white p-4 rounded-lg shadow-md border border-gray-200 hover:shadow-lg transition-shadow duration-200">
                                    <img 
                                        src={item.imageUrl} 
                                        alt={item.name}
                                        className="w-24 h-24 object-cover rounded-md"
                                    />
                                    <div className="flex-1">
                                        <h3 className="font-bold text-lg text-gray-900">{item.name}</h3>
                                        <p className="text-sm text-gray-500">{item.category}</p>
                                        <p className="text-lg font-semibold text-gray-900 mt-1">${item.price.toFixed(2)}</p>
                                    </div>
                                    
                                    <div className="flex flex-col items-end justify-between">
                                        {/* Controles de cantidad */}
                                        <div className="flex items-center gap-2 bg-gray-100 rounded-lg p-1">
                                            <button 
                                                onClick={() => onUpdateQuantity(item.id, item.quantity - 1)}
                                                className="w-8 h-8 flex items-center justify-center text-gray-600 hover:text-orange-500 font-bold transition-colors"
                                            >
                                                -
                                            </button>
                                            <span className="w-8 text-center font-semibold">{item.quantity}</span>
                                            <button 
                                                onClick={() => onUpdateQuantity(item.id, item.quantity + 1)}
                                                className="w-8 h-8 flex items-center justify-center text-gray-600 hover:text-orange-500 font-bold transition-colors"
                                            >
                                                +
                                            </button>
                                        </div>

                                        {/* Botón eliminar */}
                                        <button 
                                            onClick={() => onRemoveItem(item.id)}
                                            className="text-red-500 hover:text-red-700 text-sm font-semibold transition-colors"
                                        >
                                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                                            </svg>
                                        </button>
                                    </div>
                                </div>
                            ))}
                        </div>

                        {/* Resumen del pedido */}
                        <div className="lg:col-span-1">
                            <div className="bg-white p-6 rounded-lg shadow-lg border border-gray-200 sticky top-24">
                                <h2 className="text-2xl font-bold text-gray-900 mb-6">Resumen del pedido</h2>
                                
                                <div className="space-y-3 mb-6">
                                    <div className="flex justify-between text-gray-700">
                                        <span>Subtotal ({cart.length} {cart.length === 1 ? 'producto' : 'productos'})</span>
                                        <span className="font-semibold">${subtotal.toFixed(2)}</span>
                                    </div>
                                    <div className="flex justify-between text-gray-700">
                                        <span>Envío</span>
                                        <span className="font-semibold">
                                            {shipping === 0 ? (
                                                <span className="text-green-600">¡GRATIS!</span>
                                            ) : (
                                                `$${shipping.toFixed(2)}`
                                            )}
                                        </span>
                                    </div>
                                    <div className="border-t border-gray-300 pt-3 flex justify-between text-xl font-bold text-gray-900">
                                        <span>Total</span>
                                        <span>${total.toFixed(2)}</span>
                                    </div>
                                </div>

                                {subtotal < 200 && (
                                    <p className="text-sm text-gray-600 mb-4 bg-blue-50 p-3 rounded-md">
                                        💡 Agrega <strong>${(200 - subtotal).toFixed(2)}</strong> más para envío gratis
                                    </p>
                                )}

                                <button className="w-full bg-gradient-to-r from-orange-500 to-pink-500 hover:from-orange-600 hover:to-pink-600 text-white font-bold py-4 px-6 rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl">
                                    Proceder al pago
                                </button>

                                <p className="text-xs text-gray-500 text-center mt-4">
                                    Compra segura • Garantía de devolución
                                </p>
                            </div>
                        </div>
                    </div>
                )}
            </div>
            <FooterProduct />
        </>
    );
};

export default CartPage;