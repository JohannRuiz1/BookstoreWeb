import { createContext, useState, useEffect, useContext, ReactNode } from 'react';
import { CategoryItem } from '../types';
import { fetchCategories } from '../services'; // This will be created later

// Define the type for the context value
interface CategoryContextType {
  categories: CategoryItem[];
}

// Create a provider component
export const CategoryProvider = ({ children }: { children: ReactNode }) => {
  const [categories, setCategories] = useState<CategoryItem[]>([]);
  
    useEffect(() => {
      fetchCategories()
        .then((data) => setCategories(data))
        .catch(console.error);
    }, []); // Empty dependency array to run only once on page load
  
    return (
      <CategoryContext.Provider value={{ categories }}>
        {children} {/* This renders the nested components, e.g., <App /> */}
      </CategoryContext.Provider>
    );
  };
  
// Create a custom hook for easy access to the context
export const useCategoryContext = () => {
const context = useContext(CategoryContext);
if (!context) {
    throw new Error('useCategoryContext must be used within a CategoryProvider');
}
return context;
};

// Create the context with default values
export const CategoryContext = createContext<CategoryContextType | undefined>(undefined);