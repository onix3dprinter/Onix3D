// src/assets/components/pages/CategoryPage.jsx
import React, { useState, useMemo, useEffect } from 'react';
import ProductCard from '../common/ProductCard.jsx';
import FooterProduct from '../product/FooterProduct.jsx';
import { allProducts } from '../../../data/products.js';

const PRODUCTS_PER_PAGE = 8;

const CategoryPage = ({ title, category, onAddToCart }) => {
    const [filters, setFilters] = useState({ subCategory: 'all', color: 'all' });
    const [currentPage, setCurrentPage] = useState(1);

    const filteredProducts = useMemo(() => {
        return allProducts.filter(p => {
            const categoryMatch = p.category === category;
            const subCategoryMatch = filters.subCategory === 'all' || p.subCategory === filters.subCategory;
            const colorMatch = filters.color === 'all' || p.color === filters.color;
            return categoryMatch && subCategoryMatch && colorMatch;
        });
    }, [category, filters]);

    useEffect(() => {
        setCurrentPage(1);
    }, [filters]);

    const pageCount = Math.ceil(filteredProducts.length / PRODUCTS_PER_PAGE);
    const currentProducts = filteredProducts.slice(
        (currentPage - 1) * PRODUCTS_PER_PAGE, 
        currentPage * PRODUCTS_PER_PAGE
    );

    const handleFilterChange = (filterType, value) => {
        setFilters(prevFilters => ({ ...prevFilters, [filterType]: value }));
    };
    
    const subCategories = ['all', ...new Set(allProducts.filter(p => p.category === category).map(p => p.subCategory))];
    const colors = ['all', ...new Set(allProducts.filter(p => p.category === category).map(p => p.color))];

    return (
        <div className="animate-fade-in">
            <header className="bg-gray-50 py-12">
                <div className="container mx-auto px-4 text-center">
                    <h1 className="text-5xl font-black text-gray-800">{title}</h1>
                    <p className="text-lg text-gray-600 mt-2">{filteredProducts.length} productos encontrados</p>
                </div>
            </header>

            <div className="container mx-auto px-4 my-12 flex flex-col lg:flex-row gap-8">
                {/* SIDEBAR - Filtros */}
                <aside className="lg:w-1/4 lg:sticky top-24 self-start bg-white p-6 rounded-xl shadow-lg">
                    <h3 className="text-xl font-bold mb-4">Filtros</h3>
                    
                    <div className="mb-6">
                        <h4 className="font-semibold mb-2">Categoría</h4>
                        <div className="flex flex-col gap-2">
                            {subCategories.map(sub => (
                                <button 
                                    key={sub} 
                                    onClick={() => handleFilterChange('subCategory', sub)} 
                                    className={`text-left capitalize py-1 px-2 rounded-md transition ${filters.subCategory === sub ? 'bg-gray-800 text-white font-bold' : 'hover:bg-gray-100'}`}
                                >
                                    {sub === 'all' ? 'Todas' : sub}
                                </button>
                            ))}
                        </div>
                    </div>

                    <div>
                        <h4 className="font-semibold mb-2">Color</h4>
                        <div className="flex flex-wrap gap-2">
                            {colors.map(color => (
                                <button 
                                    key={color} 
                                    onClick={() => handleFilterChange('color', color)} 
                                    className={`capitalize h-8 px-4 rounded-full text-sm transition border-2 ${filters.color === color ? 'border-gray-800 font-bold' : 'border-gray-200 hover:border-gray-400'}`}
                                >
                                    {color === 'all' ? 'Todos' : color}
                                </button>
                            ))}
                        </div>
                    </div>
                </aside>

                {/* MAIN - Productos */}
                <main className="flex-1">
                    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-6 gap-y-10">
                        {currentProducts.map(product => (
                            <ProductCard 
                                key={product.id} 
                                product={product}
                                onAddToCart={onAddToCart}
                            />
                        ))}
                    </div>
                    
                    {/* PAGINACIÓN */}
                    <nav className="mt-12 flex justify-center items-center gap-4">
                        <button 
                            onClick={() => setCurrentPage(p => Math.max(p - 1, 1))} 
                            disabled={currentPage === 1} 
                            className="px-4 py-2 bg-gradient-to-r from-orange-500 to-pink-500 text-white rounded-md font-semibold disabled:opacity-50 disabled:cursor-not-allowed hover:from-orange-600 hover:to-pink-600 transition-all duration-200"
                        >
                            Anterior
                        </button>
                        <span className="font-semibold text-gray-700">Página {currentPage} de {pageCount}</span>
                        <button 
                            onClick={() => setCurrentPage(p => Math.min(p + 1, pageCount))} 
                            disabled={currentPage === pageCount} 
                            className="px-4 py-2 bg-gradient-to-r from-orange-500 to-pink-500 text-white rounded-md font-semibold disabled:opacity-50 disabled:cursor-not-allowed hover:from-orange-600 hover:to-pink-600 transition-all duration-200"
                        >
                            Siguiente
                        </button>
                    </nav>
                </main>
            </div>
            
            <FooterProduct />
        </div>
    );
};

export default CategoryPage;