const widget = document.getElementById('widget');

// Forma 1: Usando getAttribute
const nombreAttr = widget.getAttribute('data-widget-name');
console.log('getAttribute:', nombreAttr);

// Forma 2: Usando dataset (Recomendado en ES6+)
const nombreDataset = widget.dataset.widgetName;
console.log('dataset:', nombreDataset);