import { Rule } from "sanity";

const item = {
  name: "item",
  title: "Items",
  type: "document",
  initialValue: {
    brand: "BraidsExtra",
    discount: 0,
    price: 0,
    ratings: 0,
    stock: 0,
  },
  fields: [
    { name: "name", title: "Name", type: "string" },
    {
      name: "brand",
      title: "Brand",
      type: "string",
    },
    { name: "slug", title: "Slug", type: "slug", options: { source: "name" } },
    { name: "color", title: "Color", type: "array", of: [{ type: "string" }] },
    {
      name: "length",
      title: "Length",
      type: "array",
      of: [{ type: "number" }],
    },
    {
      name: "category",
      title: "Category",
      type: "string",
      options: {
        list: [
          { title: "Nano Slim", value: "nano slim" },
          { title: "Ghana Weave", value: "ghana weave" },
        ],
      },
    },
    {
      name: "price",
      title: "Price",
      type: "number",
      validation: (Rule: Rule) =>
        Rule.required().min(0).error(`cant be below zero.`),
    },
    {
      name: "discount",
      title: "Discount",
      type: "number",
      validation: (Rule: Rule) =>
        Rule.required().min(0).error(`cant be below zero.`),
    },
    {
      name: "ratings",
      title: "Ratings",
      type: "number",
      validation: (Rule: Rule) =>
        Rule.required().min(0).error(`cant be below zero.`),
    },
    {
      name: "stock",
      title: "Stock",
      type: "number",
      validation: (Rule: Rule) =>
        Rule.required().min(0).error(`cant be below zero.`),
    },
    { name: "featured", title: "Featured", type: "boolean" },
    {
      name: "image",
      title: "Image",
      type: "image",
      options: { hotspot: true },
      fields: [{ name: "alt", title: "Alt", type: "string" }],
    },
    {
      name: "description",
      title: "Description",
      type: "array",
      of: [{ type: "block" }],
    },
  ],
};

export default item;
