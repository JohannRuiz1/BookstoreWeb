export interface CategoryItem {
  categoryId: number;
  name: string;
}

export interface BookItem {
  bookId: number;
  title: string;
  author: string;
  price: number;
  isPublic: boolean;
  categoryId: number;
}
