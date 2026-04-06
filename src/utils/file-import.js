import Papa from 'papaparse';
import { showOpenFilePicker } from 'show-open-file-picker';

function xmlToArray(xmlString) {
    const parser = new DOMParser();
    const xmlDoc = parser.parseFromString(xmlString, 'application/xml');
    const parserError = xmlDoc.querySelector('parsererror');
    if (parserError) throw new Error('XML inválido: ' + parserError.textContent);

    const items = xmlDoc.querySelectorAll('item');
    return Array.from(items).map(item => {
        const obj = {};
        Array.from(item.children).forEach(child => {
            obj[child.tagName] = child.textContent;
        });
        return obj;
    });
}

export async function importFileToJson() {
    const [fileHandle] = await showOpenFilePicker({
        types: [
            {
                description: 'Archivos de datos',
                accept: {
                    'application/json': ['.json'],
                    'text/csv': ['.csv'],
                    'application/xml': ['.xml'],
                    'text/xml': ['.xml'],
                },
            },
        ],
        multiple: false,
    });

    const file = await fileHandle.getFile();
    const text = await file.text();
    const extension = file.name.split('.').pop().toLowerCase();

    if (extension === 'json') {
        const data = JSON.parse(text);
        return Array.isArray(data) ? data : [data];
    }

    if (extension === 'csv') {
        const result = Papa.parse(text, { header: true, skipEmptyLines: true });
        if (result.errors.length > 0) throw new Error('Error al parsear CSV: ' + result.errors[0].message);
        return result.data;
    }

    if (extension === 'xml') {
        return xmlToArray(text);
    }

    throw new Error(`Formato no soportado: .${extension}`);
}
