"use strict";
class Inventory {
    constructor() {
        this.items = { "": 0 };
    }
}
class WareHouseInventory extends Inventory {
    constructor() {
        super();
        this.items = {};
    }
    addItem(item, quantity) {
        if (this.items[item]) {
            this.items[item] += quantity;
            console.log(`${quantity} unidade a mais de ${item} adicionadas ao inventário.`);
        }
        else {
            this.items[item] = quantity;
            console.log(`${quantity} unidade de ${item} adicionadas ao inventário.`);
        }
    }
    removeItem(item) {
        if (this.items[item]) {
            delete this.items[item];
            console.log(`Item removido: ${item}.`);
        }
        else {
            console.log("Item não encontrado.");
        }
    }
    getInventory() {
        console.log("Inventário ware house:");
        return this.items;
    }
}
class StoreInvetory extends Inventory {
    constructor() {
        super();
        this.items = {};
    }
    addItem(item, quantity) {
        if (this.items[item]) {
            if (this.items[item] + quantity > 10) {
                console.log("Quantidade excede o estoque.");
            }
            else {
                this.items[item] += quantity;
                console.log(`${quantity} unidade a mais de ${item} adicionadas ao inventário da loja.`);
            }
        }
        else {
            if (quantity > 10) {
                console.log("Quantidade excede o estoque.");
            }
            else {
                this.items[item] = quantity;
                console.log(`${quantity} unidade de ${item} adicionadas ao inventário da loja.`);
            }
        }
    }
    removeItem(item) {
        delete this.items[item];
        console.log(`${item} removido do inventário da loja.`);
    }
    getInventory() {
        console.log("Inventário da loja:");
        return this.items;
    }
}
let wareHouseINventory = new WareHouseInventory();
wareHouseINventory.addItem("item1", 10);
wareHouseINventory.addItem("item2", 20);
wareHouseINventory.addItem("item3", 30);
wareHouseINventory.addItem("item4", 40);
wareHouseINventory.addItem("item5", 50);
wareHouseINventory.addItem("item6", 60);
wareHouseINventory.addItem("item6", 80);
console.log(wareHouseINventory.getInventory());
wareHouseINventory.removeItem("item5");
console.log(wareHouseINventory.getInventory());
let store = new StoreInvetory();
store.addItem("item1", 15);
store.addItem("item2", 9);
store.addItem("item3", 5);
store.addItem("item3", 2);
console.log(store.getInventory());
store.removeItem("item2");
console.log(store.getInventory());
