const modalFunc = () => {
    const modal = document.querySelector('.cart-modal__overlay');
    const cartBtn = document.querySelector('#cart-button')

    const openModal = () => {
        modal.classList.add('open')
    }

    const closeModal = () => {
        modal.classList.remove('open')
    } 

    cartBtn.addEventListener('click', () => {
        openModal()
    })

    modal.addEventListener('click', (event) => {
        console.log();
        if (
            event.target.classList.contains('cart-modal__overlay') || 
            event.target.closest('.cart-modal__header--close')
        ) {
            closeModal()
        }
    });
};

const restsFunc = () => {
    const container = document.querySelector('#rests-container')

    const restArray = [
        {
            id: 0,
            image: 'rest-1.jpg', 
            title: 'Пицца плюс',
            time: 50, 
            rating: 4.5,
            price: 900,
            type: 'Пицца'
        },
        {
            id: 1, 
            image: 'rest-2.jpg',
            title: 'Тануки',
            time: 50, 
            rating: 4.5, 
            price: 900,
            type: 'Пицца',
        },
        {
            id: 2, 
            image: 'rest-3.jpg',
            title: 'FoodBand',
            time: 50, 
            rating: 4.5, 
            price: 900,
            type: 'Пицца',
        },
        {
            id: 3, 
            image: 'rest-4.jpg',
            title: 'Жадина-пицца',
            time: 50, 
            rating: 4.5, 
            price: 900,
            type: 'Пицца',
        },
        {
            id: 4, 
            image: 'rest-5.jpg',
            title: 'Точка еды',
            time: 50, 
            rating: 4.5, 
            price: 900,
            type: 'Пицца',
        },
        {
            id: 5, 
            image: 'rest-6.jpg',
            title: 'PizzaBurger',
            time: 50, 
            rating: 4.5, 
            price: 900,
            type: 'Пицца',
        }
    ]

    const loading = () => {
        container.innerHTML = '<p style="width: 100%; text-align: center;">Загрузка</p›'
    }

    const renderRests = (array) => {
        container.innerHTML = ''

        array.forEach((card) => {
            container.insertAdjacentHTML('beforeend', `
                        <a href="./goods.html?id=${card.id}" class="products-card">
                            <div class="products-card__image">
                                <img src="./images/rests/${card.image}" alt="${card.image}">
                            </div>
                            <div class="products-card__description">
                                <div class="products-card__description-row">
                                    <h3 class="products-card__description--title">${card.title}</h3>
                                    <div class="products-card__description--badge">${card.time} мин</div>
                                </div>
                                <div class="products-card__description-row">
                                    <div class="products-card__description-info">
                                        <div class="products-card__description-info--rating">
                                            <img src="./images/icons/star.svg" alt="star">
                                            ${card.rating}
                                        </div>
                                        <div class="products-card__description-info--price">От ${card.price} ₽</div>
                                        <div class="products-card__description-info--group">${card.type}</div>
                                    </div>
                                </div>
                            </div>
                        </a>
            `)
        })
    }

    if (container) {
        loading()

        setTimeout(() => {
            renderRests(restArray)
        }, 1000)
    }
}

const productsFunc = () => {
    const container = document.querySelector('#products-container')

    const productsArray = [
        {
            id: 0,
            image: 'good-1.jpg', 
            name: 'Ролл угорь стандарт',
            text: 'Рис, угорь, соус унаги, кунжут, водоросли нори.', 
            price: 250
        },
        {
            id: 1,
            image: 'good-2.jpg', 
            name: 'Калифорния лосось стандарт',
            text: 'Рис, лосось, авокадо, огурец, майонез, икра масаго, водоросли нори.', 
            price: 395
        },
        {
            id: 2,
            image: 'good-3.jpg', 
            name: 'Окинава стандарт',
            text: 'Рис, креветка отварная, сыр сливочный, лосось, огурец свежий...', 
            price: 250
        },
        {
            id: 3,
            image: 'good-4.jpg', 
            name: 'Цезарь маки хl',
            text: 'Рис, куриная грудка копченая, икра масаго, томат, айсберг, соус цезарь...', 
            price: 250
        },
        {
            id: 4,
            image: 'good-5.jpg', 
            name: 'Ясай маки стандарт 185 г',
            text: 'Рис, помидор свежий, перец болгарский, авокадо, огурец, айсберг', 
            price: 250
        },
        {
            id: 5,
            image: 'good-6.jpg', 
            name: 'Ролл с креветкой стандарт',
            text: 'Рис, водоросли нори, креветки отварные, сыр сливочный, огурцы', 
            price: 250
        },
    ]

    const loading = () => {
        container.innerHTML = '<p style="width: 100%; text-align: center;">Загрузка</p›'
    }

    const renderProducts = (array) => {
        container.innerHTML = ''

        array.forEach((product) => {
            container.insertAdjacentHTML('beforeend', `
                        <div class="products-card">
                            <div class="products-card__image">
                                <img src="./images/goods/${product.image}" alt="${product.image}">
                            </div>
                            <div class="products-card__description">
                                <div class="products-card__description-row">
                                    <h3 class="products-card__description--name">${product.name}</h3>
                                </div>
                                <div class="products-card__description-row">
                                    <p class="products-card__description--text">${product.text}</p>
                                </div>
                                <div class="products-card__description-row">
                                    <div class="products-card__description-controls">
                                        <button class="btn btn-primary">
                                            В корзину
                                            <img src="images/icons/shopping-cart-white.svg" alt="shopping-cart">
                                        </button>
                                        <span class="products-card__description-controls--price">${product.price} ₽</span>
                                    </div>
                                </div>
                            </div>
                        </div>
            `)
        })
    }

    if (container) {
        loading()

        setTimeout(() => {
            renderProducts(productsArray)
        }, 1000)
    }
}

modalFunc()
restsFunc()
productsFunc()