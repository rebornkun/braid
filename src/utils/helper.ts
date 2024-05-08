import { TShopFilters } from "@/Types/types";

export const calculatePriceAfterDiscount = (
  price: number,
  discount: number
) => {
  let originalPrice = price;
  let discountPerc = discount / 100;
  let moneyRemoved = originalPrice * discountPerc;
  return originalPrice - moneyRemoved;
};

export const getFilterString = (filterObj: TShopFilters | undefined) => {
  if (filterObj) {
    let filterStringInit = "";
    Object.keys(filterObj).forEach((key: any) => {
      const value = filterObj[key];

      //check ifs a truthy value or its an array and its not empty
      if (
        (!Array.isArray(value) && value) ||
        (Array.isArray(value) && value.length > 0)
      ) {
        if (key === "search") {
          filterStringInit += `&& name match '${value}' `;
        }
        if (key === "color") {
          filterStringInit += `&& '${value}' in color `;
        }
        if (key === "category") {
          let revampedStr = "";
          value.map((val: string) => (revampedStr += `'${val}',`));
          filterStringInit += `&& category in [${revampedStr}] `;
        }
        if (key === "priceMin") {
          filterStringInit += `&& price > ${value} `;
        }
        if (key === "priceMax" && filterObj.priceMax > filterObj.priceMin) {
          filterStringInit += `&& price < ${value} `;
        }
        if (key === "discount") {
          console.log(value);
          filterStringInit += `&& discount > ${value} `;
        }
      }
    });
    return filterStringInit;
  }
  return null;
};
