const canvas = document.createElement('canvas');
canvas.width = 64;
canvas.height = 64;
const ctx = canvas.getContext('2d');

ctx.fillStyle = 'black';
ctx.fillRect(0, 0, canvas.width, canvas.height);

ctx.font = 'bold 52px Arial'; 
ctx.fillStyle = '#008573';
ctx.textAlign = 'center';
ctx.textBaseline = 'middle';
ctx.fillText('M', canvas.width / 2, canvas.height / 2);

const faviconURL = canvas.toDataURL('image/png');
const link = document.createElement('link');
link.rel = 'icon';
link.href = faviconURL;
document.head.appendChild(link);
