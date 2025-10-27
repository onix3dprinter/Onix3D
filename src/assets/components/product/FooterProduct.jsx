import React from 'react';

const Footer = () => (
    <footer className="bg-black text-gray-300 pt-12">
        <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center md:text-left">
                {/* Columna de la marca */}
                <div className="md:col-span-1 mb-6 md:mb-0">
                    <h3 className="font-black text-2xl text-white tracking-wider mb-4">Onix3D</h3>
                    <p className="text-sm">La imaginacion es el limite.</p>
                </div>
                {/* Columnas de enlaces */}
                <div>
                    <h4 className="font-bold uppercase text-white mb-4">Sobre la marca</h4>
                    <a href="#" className="block mb-2 hover:text-orange-400 transition">Nosotros</a>
                    <a href="#" className="block mb-2 hover:text-orange-400 transition">Cultura</a>
                    <a href="#" className="block mb-2 hover:text-orange-400 transition">Trabaja aquí</a>
                </div>
                <div>
                    <h4 className="font-bold uppercase text-white mb-4">Ayuda</h4>
                    <a href="#" className="block mb-2 hover:text-orange-400 transition">Envíos</a>
                    <a href="#" className="block mb-2 hover:text-orange-400 transition">Seguimiento</a>
                    <a href="#" className="block mb-2 hover:text-orange-400 transition">Preguntas Frecuentes</a>
                </div>
                 <div>
                    <h4 className="font-bold uppercase text-white mb-4">Contacto</h4>
                    <p className="mb-2">Email: onix3dprinter2025@gmail.com</p>
                    <p className="mb-2">Tel: +57 324 47 22 968</p>
                    <div className="flex gap-4 mt-4 justify-center md:justify-start">
                        <a href="#" className="hover:opacity-75 transition-opacity" aria-label="Facebook">
                            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                                <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z" />
                            </svg>
                        </a>
                        <a href="https://www.instagram.com/onix3dprinter2025/" className="hover:opacity-75 transition-opacity" aria-label="Instagram">
                            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.85s-.011 3.584-.069 4.85c-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07s-3.584-.012-4.85-.07c-3.252-.148-4.771-1.691-4.919-4.919-.058-1.265-.069-1.645-.069-4.85s.011-3.584.069-4.85c.149-3.225 1.664-4.771 4.919-4.919 1.266-.058 1.644-.07 4.85-.07zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948s.014 3.667.072 4.947c.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072s3.667-.014 4.947-.072c4.358-.2 6.78-2.618 6.98-6.98.059-1.281.073-1.689.073-4.948s-.014-3.667-.072-4.947c-.2-4.358-2.618-6.78-6.98-6.98-1.281-.059-1.689-.073-4.948-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.162 6.162 6.162 6.162-2.759 6.162-6.162-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4s1.791-4 4-4 4 1.79 4 4-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44 1.441-.645 1.441-1.44-.645-1.44-1.441-1.44z" />
                            </svg>
                        </a>
                        <a href="#" className="hover:opacity-75 transition-opacity" aria-label="Twitter">
                           <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                                <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616v.064c0 2.298 1.634 4.212 3.793 4.649-.65.177-1.343.23-2.063.188.618 1.946 2.413 3.368 4.545 3.408-1.621 1.274-3.666 2.031-5.877 2.031-.381 0-.756-.022-1.127-.066 2.099 1.354 4.599 2.146 7.293 2.146 8.745 0 13.522-7.252 13.522-13.522 0-.206-.005-.412-.013-.617.928-.67 1.734-1.507 2.37-2.457z" />
                            </svg>
                        </a>
                         {/* --- FIN DE LA MODIFICACIÓN --- */}
                    </div>
                </div>
            </div>
            <div className="mt-8 py-4 border-t border-gray-700 text-center text-sm">
                <p>&copy; {new Date().getFullYear()}Onix3D. Todos los derechos reservados.</p>
                <a href="#" className="hover:text-white">Términos y Condiciones</a> | <a href="#" className="hover:text-white">Política de Privacidad</a>
            </div>
        </div>
    </footer>
);

export default Footer;
