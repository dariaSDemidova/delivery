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

modalFunc()
restsFunc()