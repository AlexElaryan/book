let bookPagesObject = [
    'bookpages/book_page-0001.jpg',
    'bookpages/book_page-0002.jpg',
    'bookpages/book_page-0003.jpg',
    'bookpages/book_page-0004.jpg',
    'bookpages/book_page-0005.jpg',
    'bookpages/book_page-0006.jpg',
    'bookpages/book_page-0007.jpg',
    'bookpages/book_page-0008.jpg',
    'bookpages/book_page-0009.jpg',
    'bookpages/book_page-0010.jpg',
    'bookpages/book_page-0011.jpg',
    'bookpages/book_page-0012.jpg',
    'bookpages/book_page-0013.jpg',
    'bookpages/book_page-0014.jpg',
    'bookpages/book_page-0015.jpg',
    'bookpages/book_page-0016.jpg',
    'bookpages/book_page-0017.jpg',
    'bookpages/book_page-0018.jpg',
    'bookpages/book_page-0019.jpg',
    'bookpages/book_page-0020.jpg',
    'bookpages/book_page-0021.jpg',
    'bookpages/book_page-0022.jpg',
    'bookpages/book_page-0023.jpg',
    'bookpages/book_page-0024.jpg',
    'bookpages/book_page-0025.jpg',
    'bookpages/book_page-0026.jpg',
    'bookpages/book_page-0027.jpg',
    'bookpages/book_page-0028.jpg',
    'bookpages/book_page-0029.jpg',
    'bookpages/book_page-0030.jpg',
    'bookpages/book_page-0031.jpg',
    'bookpages/book_page-0032.jpg',
    'bookpages/book_page-0033.jpg',
    'bookpages/book_page-0034.jpg',
    'bookpages/book_page-0035.jpg',
    'bookpages/book_page-0036.jpg',
    'bookpages/book_page-0037.jpg',
    'bookpages/book_page-0038.jpg',
    'bookpages/book_page-0039.jpg',
    'bookpages/book_page-0040.jpg',
    'bookpages/book_page-0041.jpg',
    'bookpages/book_page-0042.jpg',
    'bookpages/book_page-0043.jpg',
    'bookpages/book_page-0044.jpg',
    'bookpages/book_page-0045.jpg',
    'bookpages/book_page-0046.jpg',
    'bookpages/book_page-0047.jpg',
    'bookpages/book_page-0048.jpg',
    'bookpages/book_page-0049.jpg',
    'bookpages/book_page-0050.jpg',
];

let book = document.getElementById('book');

// Generate pages dynamically
bookPagesObject.forEach((el, index) => {
    if (index % 2 === 0) {
        let paper = document.createElement('div');
        paper.className = 'paper';
        paper.id = `p${index / 2 + 1}`;

        // Front side
        let front = document.createElement('div');
        front.className = 'front';
        let frontContent = document.createElement('div');
        frontContent.className = 'front-content';
        let frontImg = document.createElement('img');
        frontImg.src = el;
        frontContent.appendChild(frontImg);
        front.appendChild(frontContent);

        // Back side
        let back = document.createElement('div');
        back.className = 'back';
        let backContent = document.createElement('div');
        backContent.className = 'back-content';
        let backImg = document.createElement('img');
        backImg.src = bookPagesObject[index + 1] || ''; // Handle case with no back image
        backContent.appendChild(backImg);
        back.appendChild(backContent);

        paper.appendChild(front);
        paper.appendChild(back);
        book.appendChild(paper);
    }
});

// Navigation buttons
let prevBtn = document.querySelector('#prev-btn');
let nextBtn = document.querySelector('#next-btn');

// Track page flipping
let currentLocation = 1;
let numOfPapers = Math.ceil(bookPagesObject.length / 2); 
let maxLocation = numOfPapers;

prevBtn.addEventListener('click', goPrevPage);
nextBtn.addEventListener('click', goNextPage);

function openBook() {
    book.style.transform = 'translateX(0%)'; 
}

function closeBook(isAtBeginning = false) {
    book.style.transform = isAtBeginning ? 'translateX(-50%)' : 'translateX(50%)';
}

function goNextPage() {
    if (currentLocation <= maxLocation) {
        let paper = document.getElementById(`p${currentLocation}`);
        if (paper) {
            paper.classList.add('flipped');
            paper.style.zIndex = currentLocation;
        }

        currentLocation++;

        if (currentLocation === 2) {
            openBook();
        } else if (currentLocation > maxLocation) {
            closeBook(); 
        }
    }
}

function goPrevPage() {
    if (currentLocation > 1) {
        currentLocation--;
        let paper = document.getElementById(`p${currentLocation}`);
        if (paper) {
            paper.classList.remove('flipped');
            paper.style.zIndex = numOfPapers - currentLocation;
        }

        if (currentLocation === 1) {
            closeBook(true);
        } else if (currentLocation <= maxLocation) {
            openBook();
        }
    }
    
}


// zIndex

let paper = document.querySelectorAll('.paper');
paper.forEach((el, ind) => {
    el.style.zIndex = paper.length - ind;
    
})