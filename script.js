function appendToDisplay(value){
    document.getElementById('display').value += value;
}

function clearDisplay(){
    document.getElementById('display').value='';
}


function calculateResult(){
    try{
        let result = eval(document.getElementById('display').value);
        
        // Check if the result is a valid number
        if (isNaN(result)) {
            throw new Error('Invalid calculation');
        }

        // Check if the result is even or odd and update the display
        if (result % 2 === 0) {
            document.getElementById('display').value = 'love you❤️❤️❤️';
        } else {
            document.getElementById('display').value = result;
        }
       
    }catch(error){
        document.getElementById('display').value='error';
    }
    
}

function removeLast(){
    let display = document.getElementById('display').value;
    document.getElementById('display').value = display.slice(0,-1);
}

document.addEventListener('keydown', function(event) {
    const key = event.key; // Mendapatkan nilai tombol yang ditekan
    const display = document.getElementById('display'); // Mengakses display

    // Cek apakah tombol yang ditekan adalah angka 0-9 atau operator
    if (!isNaN(key)) {
        appendToDisplay(key); // Menambahkan angka ke display
    } else if (['+', '-', '*', '/', '%', '.'].includes(key)) {
        appendToDisplay(key); // Menambahkan operator ke display
    } else if (key === 'Enter') {
        // Jika tombol "Enter" ditekan, hitung hasil
        calculateResult();
    } else if (key === 'Backspace') {
        // Jika tombol "Backspace" ditekan, hapus karakter terakhir
        removeLast();
    } else if (key === 'Escape') {
        // Jika tombol "Escape" ditekan, bersihkan display
        clearDisplay();
    }
});