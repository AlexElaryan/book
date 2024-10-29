let prevBtn = document.querySelector('#prev-btn');
let nextBtn = document.querySelector('#next-btn');
let book = document.getElementById('book')

let paper1 = document.getElementById('p1');
let paper2 = document.getElementById('p2');
let paper3 = document.getElementById('p3');


// Event Listener

prevBtn.addEventListener('click', goPrevPage);
nextBtn.addEventListener('click', goNextPage);

let currentLocation = 1;
let numOfPapers = 3;
let maxLocation = numOfPapers + 1;

function openBook() {
    book.style.transform = 'translateX(0%)';
}

function closeBook(isAtBeginning = false) {
    // Close the book with different behavior depending on the page
    if (isAtBeginning) {
        book.style.transform = 'translateX(-50%)'; // Closing towards the right
    } else {
        book.style.transform = 'translateX(50%)'; // Closing towards the left
    }
}


function goNextPage() {
    if (currentLocation < maxLocation) {
        switch (currentLocation) {
            case 1:
                openBook();
                paper1.classList.add('flipped');
                paper1.style.zIndex = 1;
                break;

            case 2:
                paper2.classList.add('flipped');
                paper2.style.zIndex = 2;
                break;

            case 3:
                paper3.classList.add('flipped');
                paper3.style.zIndex = 3;
                closeBook();
                break;

            default:
                throw new Error('Unknown state');
        }
        currentLocation++;
    }
}

function goPrevPage() {
    if (currentLocation > 1) {
        switch (currentLocation) {
            case 2:
                paper1.classList.remove('flipped');
                paper1.style.zIndex = 3;
                closeBook(true); 
                break;

            case 3:
                paper2.classList.remove('flipped');
                paper2.style.zIndex = 2;
                break;

            case 4:
                paper3.classList.remove('flipped');
                paper3.style.zIndex = 1;
                openBook();
                break;

            default:
                throw new Error('Unknown state');
        }
        currentLocation--;
    }
}