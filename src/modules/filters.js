export const searchFilter = (goods, value) => {
  return goods.filter((goodsItem) => {
    return goodsItem.title.toLoverCase().includes(value.toLoverCase());
  });
};

export const categoryFilter = (goods, value) => {
  return goods.filter((goodsItem) => {
    return goodsItem.category === value;
  });
};

export const priceFilter = (goods, min, max) => {
  return goods.filter((goodsItem) => {
    if (min === "" && max === "") {
      return goodsItem;
    } else if (min != "" && max != "") {
      return goodsItem.price > parseInt(min) && goodsItem.price < parseInt(max);
    } else if (min != "" && max === "") {
      return goodsItem.price > parseInt(min);
    } else if (min === "" && max != "") {
      return goodsItem.price < parseInt(max);
    }
  });
};

export const hotSaleFilter = (goods, value) => {
  return goods.filter((goodsItem) => {
    if (value) {
      return goodsItem.sale === true;
    } else {
      return goodsItem;
    }
  });
};
