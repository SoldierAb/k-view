export const downloadData2File = (data, MIME = { type: 'application/json' }, ext = 'json') => {
    const blob = new Blob([JSON.stringify(data)], MIME),
        fileName = `${new Date().valueOf()}.${ext}`,
        link = document.createElement('a');

    link.href = window.URL.createObjectURL(blob);
    link.download = fileName;
    link.click();
    window.URL.revokeObjectURL(link.href);
}

export const getJsonData = file => new Promise((resolve, reject) => {
    try {
        const r = new FileReader();
        r.readAsText(file);
        r.onload = function ({ target: { result } }) {
            resolve(JSON.parse(result));
        }
    } catch (error) {
        reject(error);
    }
})