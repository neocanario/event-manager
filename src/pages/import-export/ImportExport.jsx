import { useState } from 'react';
import { FaFileImport, FaFileExport, FaFileCsv, FaFileCode, FaFileAlt, FaSave, FaTimes } from 'react-icons/fa';
import { importFileToJson } from '../../utils/file-import';
import { exportAsJson, exportAsCsv, exportAsXml } from '../../utils/file-export';
import { addNewsBatch, getAllNewsOnce } from '../../services/newsService';
import './ImportExport.css';

export function ImportExport() {
    const [importedData, setImportedData] = useState(null);
    const [importError, setImportError] = useState('');
    const [importSuccess, setImportSuccess] = useState('');
    const [exportError, setExportError] = useState('');
    const [exportSuccess, setExportSuccess] = useState('');
    const [loading, setLoading] = useState(false);

    const handleImport = async () => {
        setImportError('');
        setImportSuccess('');
        setImportedData(null);
        try {
            const data = await importFileToJson();
            setImportedData(data);
        } catch (err) {
            if (err.name !== 'AbortError') {
                setImportError(err.message || 'Error al importar el archivo.');
            }
        }
    };

    const handleSaveToFirebase = async () => {
        if (!importedData || importedData.length === 0) return;
        setLoading(true);
        setImportError('');
        try {
            await addNewsBatch(importedData);
            setImportSuccess(`${importedData.length} noticia(s) guardadas en Firebase correctamente.`);
            setImportedData(null);
        } catch (err) {
            setImportError('Error al guardar en Firebase: ' + err.message);
        } finally {
            setLoading(false);
        }
    };

    const handleExport = async (format) => {
        setExportError('');
        setExportSuccess('');
        try {
            const data = await getAllNewsOnce();
            if (data.length === 0) {
                setExportError('No hay noticias en Firebase para exportar.');
                return;
            }
            if (format === 'json') await exportAsJson(data, 'datos.json');
            if (format === 'csv') await exportAsCsv(data, 'datos.csv');
            if (format === 'xml') await exportAsXml(data, 'datos.xml');
            setExportSuccess(`Archivo datos.${format} exportado correctamente.`);
        } catch (err) {
            if (err.name !== 'AbortError') {
                setExportError('Error al exportar: ' + err.message);
            }
        }
    };

    return (
        <main className="import-export-page">
            <div className="ie-header">
                <h1>Importar / Exportar Noticias</h1>
                <p>Gestiona los datos de noticias almacenados en Firebase en formatos JSON, CSV y XML.</p>
            </div>

            {/* IMPORTAR */}
            <section className="ie-section">
                <div className="ie-section-title">
                    <FaFileImport />
                    <h2>Importar datos</h2>
                </div>
                <p className="ie-section-desc">
                    Selecciona un archivo <strong>.json</strong>, <strong>.csv</strong> o <strong>.xml</strong> para previsualizar los datos e importarlos a Firebase.
                </p>

                <button className="ie-btn ie-btn-primary" onClick={handleImport}>
                    <FaFileImport />
                    Seleccionar archivo
                </button>

                {importError && (
                    <div className="ie-alert ie-alert-error">
                        <FaTimes /> {importError}
                    </div>
                )}
                {importSuccess && (
                    <div className="ie-alert ie-alert-success">
                        {importSuccess}
                    </div>
                )}

                {importedData && (
                    <div className="ie-preview">
                        <div className="ie-preview-header">
                            <h3>Vista previa ({importedData.length} registros)</h3>
                            <button className="ie-btn ie-btn-save" onClick={handleSaveToFirebase} disabled={loading}>
                                <FaSave />
                                {loading ? 'Guardando...' : 'Guardar en Firebase'}
                            </button>
                        </div>
                        <div className="ie-table-wrapper">
                            <table className="ie-table">
                                <thead>
                                    <tr>
                                        {Object.keys(importedData[0]).map(key => (
                                            <th key={key}>{key}</th>
                                        ))}
                                    </tr>
                                </thead>
                                <tbody>
                                    {importedData.map((row, i) => (
                                        <tr key={i}>
                                            {Object.values(row).map((val, j) => (
                                                <td key={j}>{val}</td>
                                            ))}
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </div>
                )}
            </section>

            {/* EXPORTAR */}
            <section className="ie-section">
                <div className="ie-section-title">
                    <FaFileExport />
                    <h2>Exportar datos</h2>
                </div>
                <p className="ie-section-desc">
                    Descarga las noticias almacenadas en Firebase en el formato que prefieras.
                </p>

                <div className="ie-export-buttons">
                    <button className="ie-btn ie-btn-json" onClick={() => handleExport('json')}>
                        <FaFileAlt />
                        Exportar JSON
                    </button>
                    <button className="ie-btn ie-btn-csv" onClick={() => handleExport('csv')}>
                        <FaFileCsv />
                        Exportar CSV
                    </button>
                    <button className="ie-btn ie-btn-xml" onClick={() => handleExport('xml')}>
                        <FaFileCode />
                        Exportar XML
                    </button>
                </div>

                {exportError && (
                    <div className="ie-alert ie-alert-error">
                        <FaTimes /> {exportError}
                    </div>
                )}
                {exportSuccess && (
                    <div className="ie-alert ie-alert-success">
                        {exportSuccess}
                    </div>
                )}
            </section>

            {/* ARCHIVOS DE EJEMPLO */}
            <section className="ie-section">
                <div className="ie-section-title">
                    <FaFileAlt />
                    <h2>Archivos de ejemplo</h2>
                </div>
                <p className="ie-section-desc">
                    Descarga archivos de ejemplo para probar la importación:
                </p>
                <div className="ie-sample-links">
                    <a href="/datos.json" download className="ie-sample-link">
                        <FaFileAlt /> datos.json
                    </a>
                    <a href="/datos.csv" download className="ie-sample-link">
                        <FaFileCsv /> datos.csv
                    </a>
                    <a href="/datos.xml" download className="ie-sample-link">
                        <FaFileCode /> datos.xml
                    </a>
                </div>
            </section>
        </main>
    );
}
