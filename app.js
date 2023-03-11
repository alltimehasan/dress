const blogs = document.querySelector('.dresses');
let minPost = 0;
let maxPost = 5;

const getPost = async () => {
    const response = await fetch(`dresses-aayat.json`);
    const data = await response.json();
    data.map((curElm, index) => {

        if(index >= minPost && index <= maxPost) {
            const htmlData = `
            <div class="col-6 col-md-4">
                <div class="dress-box">
                    <h2>${curElm.title}</h2>
                    <img src="${curElm.thumbnail}" class="img-fluid" alt="">
                    <p class="date">${curElm.buying_date}</p>
                    <p class="${curElm.status}">${curElm.status}</p>
                </div>
            </div>
            `;
            blogs.insertAdjacentHTML('beforeend', htmlData);
        }

    })
}

getPost();

const showData = () => {
    setTimeout(() => {
        minPost = maxPost + 1;
        maxPost = maxPost + 3;
        getPost();
    }, 300)
}

// Show more post when go to bottom
window.addEventListener('scroll', () => {
    const {scrollHeight, scrollTop, clientHeight} = document.documentElement;
    if(scrollTop + clientHeight >= scrollHeight) {
        showData();
    }
})	