export interface Item {
    name: string;
    price: number;
};

export const items: Item[] = [
    { name: 'Polyjuice Potion', price: 19.99, },
    { name: 'Extendable Ears', price: 9.99, },
    { name: 'Veritaserum', price: 22.99, },
    { name: 'Quills', price: 3.99, },
    { name: 'Felix Felicis', price: 111.99, },
]

export const printItem = (item: Item) => {
    const { name, price } = item;

    const output = `${name} ${price}`;

    console.log(output);
}
