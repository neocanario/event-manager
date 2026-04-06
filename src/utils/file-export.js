import Papa from 'papaparse';
import { showSaveFilePicker } from 'show-open-file-picker';

function arrayToXml(data) {
    const items = data.map(item => {
        const fields = Object.entries(item)
            .filter(([key]) => key !== 'id')
            .map(([key, value]) => `    <${key}>${value}</${key}>`)
            .join('\n');
        return `  <item>\n${fields}\n  </item>`;
    }).join('\n');
    return `<?xml version="1.0" encoding="UTF-8"?>\n<news>\n${items}\n</news>`;
}

async function saveFile(content, filename, mimeType) {
    const fileHandle = await showSaveFilePicker({
        suggestedName: filename,
        types: [
            {
                description: 'Archivo de datos',
                accept: { [mimeType]: ['.' + filename.split('.').pop()] },
            },
        ],
    });
    const writable = await fileHandle.createWritable();
    await writable.write(content);
    await writable.close();
}

export async function exportAsJson(data, filename = 'datos.json') {
    const clean = data.map(({ id: _id, ...rest }) => rest);
    await saveFile(JSON.stringify(clean, null, 2), filename, 'application/json');
}

export async function exportAsCsv(data, filename = 'datos.csv') {
    const clean = data.map(({ id: _id, ...rest }) => rest);
    const csv = Papa.unparse(clean);
    await saveFile(csv, filename, 'text/csv');
}

export async function exportAsXml(data, filename = 'datos.xml') {
    await saveFile(arrayToXml(data), filename, 'application/xml');
}
