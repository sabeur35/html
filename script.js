document.addEventListener('DOMContentLoaded', () => {
    const greeting = document.getElementById('greeting');
    const changeColorBtn = document.getElementById('changeColor');
    
    const colors = ['#FF6B6B', '#4ECDC4', '#45B7D1', '#96CEB4', '#FFEEAD', '#D4A5A5'];
    let currentColorIndex = 0;

    changeColorBtn.addEventListener('click', () => {
        currentColorIndex = (currentColorIndex + 1) % colors.length;
        greeting.style.color = colors[currentColorIndex];
    });
});