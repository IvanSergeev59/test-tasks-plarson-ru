function checkPageLoaded () {
    let interval = setInterval(() => {
        const readyState = document.readyState;
        console.log('readyState', readyState);
        if (readyState === 'complete') {
        alert('страница полностью загружена');
            clearInterval(interval);
        }
    }, 50)
}

checkPageLoaded()