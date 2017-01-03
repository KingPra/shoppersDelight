window.addEventListener('load', function () {

    partsList();
    // document.querySelector('.buyButton').addEventListener('click', function() {
    //     buyClick();
    // });
});

// this function populates sale item list
function partsList() {
    let parent = document.querySelector('.parts')
    for (let i = 0; i < wheel.length; i++) {
        let partsList = document.createElement('div');
        partsList.innerHTML = Mustache.render(
            document.querySelector('#wheels').innerHTML,
            {
                pic: wheel[i].pic,
                make: wheel[i].make,
                size: wheel[i].size,
                price: wheel[i].price,
                buy: wheel[i].price,
                id: wheel[i].id,
            }
        );
        //button functionality
        let fullcart = wheel[i];
        let buyClick = partsList.querySelector('.buyButton').addEventListener('click', function () {
            console.log(cart);
            cart.push(fullcart);
            fillCart();
            stuffInCart();
        });
        parent.appendChild(partsList);
    }
}

function fillCart() {
    let parent = document.querySelector('#shoppingCart')
    let subtotal = 0;
    let tax = 0;
    let total = 0;
    let itemCount = 0;
   // let partName = [];
    //for subtotal and tax calculation
    for (let i = 0; i < cart.length; i++) {
        subtotal += cart[i].price;
        tax = subtotal * .0725;
        subTaxed = subtotal + tax;
        itemCount = cart.length;
        //partName = cart[i].make;
    }
    console.log(itemCount);
        //displays subtotal in cart at bottom of screen
        let cartSubTotal = document.querySelector('li');
        cartSubTotal.innerHTML = Mustache.render(
            document.querySelector('#carted').innerHTML,
            {
                sub: subtotal,
                taxTotal: tax.toFixed(2),
                total: subTaxed.toFixed(2),
            }
        );
        parent.appendChild(cartSubTotal);
}


function stuffInCart() {
    let parent = document.querySelector('#cartContents')
    let partName = null;
    let sameName = 1;
    let partLog = [];
    for (let i = 0; i < cart.length; i++) {
        partName = cart[i].make;
    //         partLog = cart[i].make;
    //     if (partLog === cart[i].make) {
    //         partName = ' ' + sameName++;
            
    //         console.log('same name is being logged');
    //     } else {
    //     partName = cart[i].make;
    //     console.log(partName);
    // }
    }
        // displays items in shopping cart
        let cartItems = document.createElement('li');
        cartItems.innerHTML = Mustache.render(
            document.querySelector("#cartItemList").innerHTML,
            {
                itemName: partName,
            }
        );
        parent.appendChild(cartItems);
        console.log('stuff in cart running')
}
    

function updateCart(wheel) {
    let fullCart = {
        make: wheel.make,
        size: wheel.size,
        price: wheel.price,
        id: wheel.id,
    }
}

let cart = [];



//parts list
let wheel = [
    {
        make: 'Rugged Ridge Black Satin XHD Wheel',
        size: '17x9"',
        price: 227.99,
        pic: 'http://s7d4.scene7.com/is/image/Turn5/J10886?$enlarged810x608$',
        id: 1
    },
    {
        make: 'Fuel Wheels Matte GunMetal ANZA Wheel',
        size: '17x8.5"',
        price: 232.00,
        pic: 'http://s7d4.scene7.com/is/image/Turn5/J104192?$enlarged810x608$',
        id: 2
    },
    {
        make: 'Fuel Wheels Black Machined VECTOR Wheel',
        size: '17x8.5"',
        price: 225.00,
        pic: 'http://s7d4.scene7.com/is/image/Turn5/J104199?$enlarged810x608$',
        id: 3
    },
    {
        make: 'Fuel Wheels Matte Black RECOIL',
        size: '17x8.5"',
        price: 200.00,
        pic: 'http://s7d4.scene7.com/is/image/Turn5/J104203?$enlarged810x608$',
        id: 4
    },
    {
        make: 'Fuel Wheels Matte Black VECTOR Wheel',
        size: '17x8.5"',
        price: 200.00,
        pic: 'http://s7d4.scene7.com/is/image/Turn5/J104197?$enlarged810x608$',
        id: 5
    },
    {
        make: 'Fuel Wheels Trophy - Matte Anthracite/ Black Ring',
        size: '17x8.5"',
        price: 232.00,
        pic: 'http://s7d4.scene7.com/is/image/Turn5/J100238?$enlarged810x608$',
        id: 6,
    },
    {
        make: 'Havok Off-Road Matte Black H-107 Wheel',
        size: '17x9 -12 Offset',
        price: 175.50,
        pic: 'http://s7d4.scene7.com/is/image/Turn5/J105233?$enlarged810x608$',
        id: 7,
    },
    {
        make: 'Havok Off-Road Black Machined H-108 Wheel',
        size: '17x9 -12 Offset',
        price: 175.50,
        pic: 'http://s7d4.scene7.com/is/image/Turn5/J105234?$enlarged810x608$',
        id: 8,
    },
    {
        make: 'XD Grenade Satin Black Wheel',
        size: '17x9 -12 Offset',
        price: 189.00,
        pic: 'http://s7d4.scene7.com/is/image/Turn5/J105954?$enlarged810x608$',
        id: 9,
    },
]

