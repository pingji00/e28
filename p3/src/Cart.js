// /src/Plate.js
export default class Cart {

    /**
     * 
     */
    constructor() {
        // Extract JSON cart string from local storage
        let cart = localStorage.getItem('cart');

        // Parse JSON cart String to `items` object
        this.items = (cart) ? JSON.parse(cart) : [];
    }

    /**
     * Getter method for items
     */
    getItems() {
        return this.items;
    }

    /**
     * Returns how many total items are in the cart
     */
    count() {
        let sum = 0;
        for (let key of Object.keys(this.items)) {
            sum += this.items[key].quantity;
        }
        return sum;
    }

    /**
     * Updates cart in localstorage
     */
    update() {
        localStorage.setItem('cart', JSON.stringify(this.items))
    }

    /**
     * Add a new item of the given productId
     */
    add(productId, quantity = 1) {

        // First see if product is already present
        let item = this.getItem(productId)

        if (item) {
            // Product is in cart already; increment quantity by 1
            item.quantity += quantity;

        } else {
            // Product not in cart, add as new item
            this.items.push({
                id: productId,
                quantity: quantity
            });
        }

        this.update();
    }

    /**
     * Remove an item from items via productId
     */
    remove(productId) {
        let item = this.getItem(productId);

        let itemIndex = this.items.indexOf(item);

        if (item) {
            this.items.splice(itemIndex, 1);
            this.update();
        }
    }

    /**
     * Get an item from items via productId
     * Returns null if product does not exist in items
     */
    getItem(productId) {
        return this.items.find(({ id }) => id === productId) || null;
    }
}