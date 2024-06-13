export function getSlug(name: string): string {
  name = name.toLowerCase();
  name = name.replace(/ /g, "-");
  name = name.replace(/"'"/, "");
  return name;
}

export const bookImagePrefix = `${import.meta.env.BASE_URL}/book-images/`;
export const categoryImagePrefix = `${
  import.meta.env.BASE_URL
}/category-images/`;
export const siteImagePrefix = `${import.meta.env.BASE_URL}/site-images/`;
