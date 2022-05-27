const productos = [
    {
        id: 123,
        name: "polera1",
        descripcion: "descrProd",
        precio: "1.000",
        stock: 5,
        category: "poleras",
        img: "https://res.cloudinary.com/dlnojtywf/image/upload/v1653664242/polera1_tbqznf.jpg"

    },
    {
        id: 234,
        name: "polera2",
        precio: "1.000",
        descripcion: "descrProd2",
        stock: 10,
        category: "poleras",
        img: "https://res.cloudinary.com/dlnojtywf/image/upload/v1653664251/polera2_zjuwby.jpg"

    },
    {
        id: 1233,
        name: "pantalon1",
        precio: "1.000",
        descripcion: "descrProd",
        stock: 5,
        category: "pantalones",
        img: "https://res.cloudinary.com/dlnojtywf/image/upload/v1653604776/pantalon1_hibzrk.jpg"
    },
    {
        id: 2342,
        name: "pantalon2",
        precio: "1.000",
        descripcion: "descrProd2",
        stock: 10,
        category: "pantalones",
        img: "https://res.cloudinary.com/dlnojtywf/image/upload/v1653664103/pantalon2_deluzv.jpg"
    },
    {
        id: 1233,
        name: "corbata1",
        precio: "1.000",
        descripcion: "descrProd",
        stock: 5,
        category: "corbatas",
        img: "https://res.cloudinary.com/dlnojtywf/image/upload/v1653664257/corbata1_banp8s.jpg"
    },
    {
        id: 2342,
        name: "corbata2",
        precio: "1.000",
        descripcion: "descrProd2",
        stock: 10,
        category: "corbatas",
        img: "https://res.cloudinary.com/dlnojtywf/image/upload/v1653664262/corbata2_enrsjz.jpg"
    }
];

const unProducto =
    {
        id: 2342,
        name: "corbata2",
        precio: "1.000",
        descripcion: "descrProd2",
        stock: 10,
        category: "corbatas",
        img: "https://res.cloudinary.com/dlnojtywf/image/upload/v1653604776/pantalon1_hibzrk.jpg"
    };


export const traerProductos = (cat) => {

    return new Promise((resolve, reject) => {

        const productosFiltrados = productos.filter((prod) => prod.category === cat)

        setTimeout(() => {
            if (cat===undefined)
            {
                resolve(productos);
            }else
            {
                resolve(productosFiltrados);
            }

        }, 1000);
    });
};

export const traerUnProducto = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(unProducto);
        }, 1000);
    });
};

