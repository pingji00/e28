// /src/Plate.js
export default class Plate {

    /**
     * 
     */
    constructor() {
        // Extract JSON plate string from local storage
        let plate = localStorage.getItem('plate');

        // Parse JSON plate String to `items` object
        this.items = (plate) ? JSON.parse(plate) : [];
    }

    /**
     * Getter method for items
     */
    getItems() {
        return this.items;
    }

    /**
     * Returns how many total items are in the plate
     */
    count() {
        let sum = 0;
        for (let key of Object.keys(this.items)) {
            sum += this.items[key].quantity;
        }
        return sum;
    }

    /**
     * Updates plate in localstorage
     */
    update() {
        localStorage.setItem('plate', JSON.stringify(this.items))
    }

    /**
     * Add a new item of the given productId
     */
    add(productId, quantity = 1) {

        // First see if product is already present
        let item = this.getItem(productId)

        if (item) {
            // Product is in plate already; increment quantity by 1
            item.quantity += quantity;

        } else {
            // Product not in plate, add as new item
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