import React, { useState } from 'react';

const Item = () => {
    const noProductStyle = {
      backgroundColor: 'red',
      padding: '20px',
      borderRadius: '5px',
      width: '400px',
      height: '200px',
      color: 'white'
    };
    const [product, setProduct] = useState({
        itemName: "",
        itemPrice: "",
        itemImg: "",
    });
    const [allProducts, setAllProducts] = useState([]);
    const [searchText, setSearchText] = useState("");
    const [productExists, setProductExists] = useState(true);

    const takeItem = (e) => {
        setProduct({ ...product, [e.target.name]: e.target.value });
    };

    const showItem = () => {
        setAllProducts([...allProducts, product]);
        setProduct({ itemName: "", itemPrice: "", itemImg: "" });
    };

    const orderItem = () => {
        setAllProducts([...allProducts.sort((a, b) => a.itemPrice - b.itemPrice)]);
    };

    const searchItem = (e) => {
        const searchValue = e.target.value.toUpperCase();
        setSearchText(searchValue);

        const productFound = allProducts.some((product) =>
            product.itemName.toUpperCase().includes(searchValue)
        );
        setProductExists(productFound);
    };

    return (
        <div>
            <input
                onChange={takeItem}
                value={product.itemName}
                type="text"
                placeholder="Название"
                name="itemName"
            />
            <input
                onChange={takeItem}
                value={product.itemPrice}
                type="text"
                placeholder="Цена"
                name="itemPrice"
            />
            <input
                onChange={takeItem}
                value={product.itemImg}
                type="text"
                placeholder="Изображение (URL)"
                name="itemImg"
            />
            <button onClick={showItem}>add Item</button>
            <button onClick={orderItem}>sort Item</button>

            <input onChange={searchItem} type="text" placeholder="Поиск товара" />

            <div className="all">
                {productExists ? (
                    allProducts
                        .filter((product) =>
                            product.itemName
                                .toUpperCase()
                                .includes(searchText)
                        )
                        .map((product, i) => (
                            <div key={i} className="box">
                                <img
                                    src={product.itemImg}
                                    alt={product.itemName}
                                    style={{ width: '100px', height: '100px' }}
                                />
                                <h1>{product.itemName}</h1>
                                <h4>{product.itemPrice}</h4>
                            </div>
                        ))
                ) : (
                    <div className="no-product">
                      <div style={noProductStyle}>
                        <p>ERROR</p>
                      </div>
                    </div>
                )}
            </div>
        </div>
    );
};

export default Item;
