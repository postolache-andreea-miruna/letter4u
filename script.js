const envelope = document.getElementById('envelope');
//const letter = document.getElementById('letter');
const closeBtn = document.getElementById('closeBtn');

// envelope.addEventListener('click', () => {
//     letter.style.transform = 'translate(-50%, -50%) scale(1)';
//     letter.style.opacity = '1';
// });

closeBtn.addEventListener('click', () => {
    letter.style.transform = 'translate(-50%, -50%) scale(0)';
    letter.style.opacity = '0';
});


const heart = document.getElementById('heart');

heart.addEventListener('click', () => {
    letter.style.transform = 'translate(-50%, -50%) scale(1)';
    letter.style.opacity = '1';
});