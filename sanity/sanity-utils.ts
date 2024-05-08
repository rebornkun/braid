import { TShopFilters, productType } from "@/Types/types";
import { getFilterString } from "@/utils/helper";
import { createClient, groq } from "next-sanity";

export const getItems = async (
  limit: number = 100,
  sort: string = "_createdAt-asc",
  filterObj?: TShopFilters
): Promise<productType[]> => {
  const client = createClient({
    projectId: "o1xfibg1",
    dataset: "production",
    apiVersion: "2024-05-06",
  });

  let splittedSort = sort.split("-");

  const query = groq`*[_type == "item" ${getFilterString(filterObj)}]| order(${splittedSort[0]} ${splittedSort[1]}) [0..$limit]{
        _id,
        _createdAt,
        _updatedAt,
        name,
        brand,
        "slug": slug.current,
        color,
        length,
        category,
        price,
        discount,
        ratings,
        stock,
        "image": image.asset->url,
        description
      }`;

  return client.fetch(query, {
    limit,
    sort,
  });
};

export const getItemsCount = async (): Promise<number> => {
  const client = createClient({
    projectId: "o1xfibg1",
    dataset: "production",
    apiVersion: "2024-05-06",
  });

  const query = groq`count(*[_type == "item"])`;

  return client.fetch(query, {});
};
export const getItemByID = async (id: string): Promise<productType> => {
  const client = createClient({
    projectId: "o1xfibg1",
    dataset: "production",
    apiVersion: "2024-05-06",
  });

  return client.fetch(
    groq`*[_type == "item" && _id == $id ][0]{
        _id,
        _createdAt,
        _updatedAt,
        name,
        brand,
        "slug": slug.current,
        color,
        length,
        category,
        price,
        discount,
        ratings,
        stock,
        "image": image.asset->url,
        description
      }`,
    {
      id,
    }
  );
};

export const getFeaturedItems = async (): Promise<productType[]> => {
  const client = createClient({
    projectId: "o1xfibg1",
    dataset: "production",
    apiVersion: "2024-05-06",
  });

  return client.fetch(
    groq`*[featured == true ]| order(_createdAt desc) [0..2]{
        _id,
        _createdAt,
        _updatedAt,
        name,
        brand,
        "slug": slug.current,
        color,
        length,
        category,
        price,
        discount,
        ratings,
        stock,
        "image": image.asset->url,
        description
      }`
  );
};
