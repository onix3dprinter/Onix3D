
// src/assets/components/modals/ProfilePhotoModal.jsx
import React, { useState } from 'react';

const ProfilePhotoModal = ({ currentUser, onUpdatePhoto, onClose }) => {
    const [preview, setPreview] = useState(currentUser.profilePhoto || null);
    const [selectedFile, setSelectedFile] = useState(null);

    const handleFileSelect = (e) => {
        const file = e.target.files[0];
        if (file && file.type.startsWith('image/')) {
            setSelectedFile(file);
            // Crear preview usando URL.createObjectURL
            const previewURL = URL.createObjectURL(file);
            setPreview(previewURL);
        }
    };

    const handleSave = () => {
        if (preview) {
            // Nota: En una app real, aquí subirías el 'selectedFile' a un servidor
            // y obtendrías una URL. Para este kit, guardamos la URL de la *preview*
            // (que es un 'blob:') en localStorage. Esto funcionará mientras la
            // pestaña esté abierta, pero se romperá al cerrar el navegador.
            // Para una persistencia real entre sesiones, necesitaríamos 
            // leer el archivo como Base64, pero lo mantenemos simple.
            
            // *** Corrección para persistencia real con Base64 ***
            // Leemos el archivo como DataURL (Base64) para guardarlo en localStorage
            const reader = new FileReader();
            reader.onloadend = () => {
                const base64String = reader.result;
                onUpdatePhoto(base64String); // Guardar Base64 en localStorage
                onClose();
            };
            reader.readAsDataURL(selectedFile);
        }
    };

    const handleRemove = () => {
        setPreview(null);
        setSelectedFile(null);
        onUpdatePhoto(null); // Pasa null para eliminar la foto
    };
    
    // Si el usuario guardó un archivo (selectedFile) pero
    // quiere cancelar, debemos revocar la URL de la preview
    // para evitar fugas de memoria.
    const handleClose = () => {
        if (selectedFile) {
            URL.revokeObjectURL(preview);
        }
        onClose();
    }

    return (
        <div 
            className="fixed inset-0 bg-black/60 backdrop-blur-sm flex justify-center items-center z-50 animate-fadeIn px-4"
            onClick={handleClose}
        >
            <div 
                className="bg-white rounded-2xl shadow-2xl w-full max-w-md transform transition-all duration-300"
                onClick={(e) => e.stopPropagation()}
            >
                {/* Header */}
                <div className="bg-gradient-to-r from-orange-500 via-pink-500 to-purple-500 rounded-t-2xl p-6 relative">
                    <button 
                        type="button"
                        onClick={handleClose}
                        className="absolute top-4 right-4 text-white/90 hover:text-white hover:bg-white/20 rounded-full p-1.5 transition-all duration-200"
                    >
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2.5}>
                            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                        </svg>
                    </button>
                    <h2 className="text-2xl font-bold text-white !border-none !pb-0 !mb-1">Foto de Perfil</h2>
                    <p className="text-white/90 mt-1 text-sm !mb-0">Sube o actualiza tu foto</p>
                </div>

                {/* Contenido */}
                <div className="p-8">
                    {/* Preview de la foto */}
                    <div className="flex flex-col items-center mb-6">
                        <div className="relative">
                            {preview ? (
                                <img 
                                    src={preview} 
                                    alt="Profile Preview" 
                                    className="w-32 h-32 rounded-full object-cover border-4 border-gray-200 shadow-lg"
                                />
                            ) : (
                                <div className="w-32 h-32 rounded-full bg-gradient-to-r from-orange-400 to-pink-400 flex items-center justify-center text-white text-4xl font-bold border-4 border-gray-200 shadow-lg">
                                    {currentUser.name.charAt(0).toUpperCase()}
                                </div>
                            )}
                            {/* Ícono de cámara */}
                            <label htmlFor="file-upload" className="absolute bottom-0 right-0 bg-gradient-to-r from-orange-500 to-pink-500 rounded-full p-2 shadow-lg cursor-pointer hover:scale-110 transition-transform">
                                <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 0110.07 4h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0018.07 7H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9z" />
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 13a3 3 0 11-6 0 3 3 0 016 0z" />
                                </svg>
                            </label>
                        </div>
                        <p className="text-gray-600 text-sm mt-4 !mb-0">
                            Formatos: JPG, PNG • Máximo 5MB
                        </p>
                    </div>

                    {/* Input de archivo (oculto) */}
                    <input 
                        id="file-upload"
                        type="file" 
                        accept="image/*"
                        onChange={handleFileSelect}
                        className="hidden"
                    />

                    {/* Botones de acción */}
                    <div className="space-y-3">
                        
                        {/* Botón para guardar (solo si se seleccionó un archivo nuevo) */}
                        {selectedFile && (
                            <button 
                                onClick={handleSave}
                                className="w-full bg-green-500 hover:bg-green-600 text-white font-semibold py-3 px-6 rounded-lg transition-all duration-300 flex items-center justify-center shadow-md hover:shadow-lg"
                            >
                                <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                </svg>
                                Guardar Foto
                            </button>
                        )}

                        {/* Botón para eliminar foto (solo si hay una foto) */}
                        {preview && (
                            <button 
                                onClick={handleRemove}
                                className="w-full bg-red-100 hover:bg-red-200 text-red-600 font-semibold py-3 px-6 rounded-lg transition-all duration-200 flex items-center justify-center"
                            >
                                <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                                </svg>
                                Eliminar Foto
                            </button>
                        )}

                        {/* Botón cancelar */}
                        <button 
                            onClick={handleClose}
                            className="w-full bg-gray-100 hover:bg-gray-200 text-gray-700 font-semibold py-3 px-6 rounded-lg transition-all duration-200"
                        >
                            {selectedFile ? 'Cancelar' : 'Cerrar'}
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProfilePhotoModal;
