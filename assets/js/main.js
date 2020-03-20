var lineNums = document.querySelectorAll('.js-line-number');

lineNums.forEach((jln) => {
    jln.addEventListener('click', (e) => {
        if (e.target.classList.contains('highlighted')) {
            e.target.classList.remove('highlighted');
        } else {
            lineNums.forEach((el) => { el.classList.remove('highlighted') });
            e.target.classList.add('highlighted');
        }
    });
});
