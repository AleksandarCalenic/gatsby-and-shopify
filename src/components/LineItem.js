import React, { useContext, useState, useMemo, useCallback } from "react";
import { StoreContext } from "../context/shopContext";
import { GatsbyImage } from "gatsby-plugin-image";
import { getShopifyImage } from "gatsby-source-shopify";
import debounce from "lodash.debounce";
import * as classes from './LineItem.module.css';

import NumericInput from './NumericInput';

const LineItem = ({ item }) => {

    const { removeLineItem, checkout, updateLineItem } = useContext(StoreContext);
    const [quantity, setQuantity] = useState(item.quantity);

    const { price } = item.variant;

    const variantImage = {
      ...item.variant.image,
      originalSrc: item.variant.image.src,
    };

    const sum = (Number((item.variant.priceV2.amount) * quantity)).toFixed(2);

    const uli = debounce((value) => updateLineItem(checkout.id, item.id, value), 100);

    const debouncedUli = useCallback((value) => uli(value), []);

    const handleRemove = () => {
        removeLineItem(checkout.id, item.id)
    };

    const handleQuantityChange = (value) => {
        if (value !== "" && Number(value) < 1) {
          return
        }
        setQuantity(value)
        if (Number(value) >= 1) {
            debouncedUli(value)
          }
    };
    
    function doIncrement() {
        handleQuantityChange(Number(quantity || 0) + 1)
    };
    
    function doDecrement() {
        handleQuantityChange(Number(quantity || 0) - 1)
    };

    const image = useMemo(() => getShopifyImage({
            image: variantImage,
            layout: "constrained",
            crop: "contain",
            width: 160,
            height: 160,
    }), [variantImage.src]);

    return ( <tr>
                <td>
                {image && (
                    <GatsbyImage
                    key={variantImage.src}
                    image={image}
                    alt={variantImage.altText ?? item.variant.title}
                    />
                )}
                </td>
                <td className={classes.product}>
                    <h2 className={classes.product__name}>{item.title}</h2>
                    <button className={classes.product__remove} onClick={handleRemove}>Remove</button>
                </td>
                <td>{price}$</td>
                <td className={classes.product__num}>
                    <NumericInput
                        value={quantity}
                        onIncrement={doIncrement}
                        onDecrement={doDecrement}
                        onChange={(e) => handleQuantityChange(e.currentTarget.value)}
                        classes={classes.product__num}
                    />
                </td>
                <td>{sum}$</td>
            </tr> );
}
 
export default LineItem;
