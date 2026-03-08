const book = document.getElementById('book');
const fontSizes = document.querySelectorAll('.font-size');

fontSizes.forEach(size => {
    size.addEventListener('click', (event) => {
        event.preventDefault();

        fontSizes.forEach(item => {
            item.classList.remove('font-size_active');
        });

        size.classList.add('font-size_active');

        book.classList.remove('book_fs-small', 'book_fs-big');

        const dataSize = size.dataset.size;
        if (dataSize === 'small') {
            book.classList.add('book_fs-small');
        } else if (dataSize === 'big') {
            book.classList.add('book_fs-big');
        }
    });
});