import { Router } from 'express';
import { Category } from '../model/Category';

const categoriesRoutes = Router();

const categories: Category[] = [];

categoriesRoutes.post("/", (request, response) => {
  const { name, description } = request.body;
  const category = new Category(name, description, new Date());
  categories.push(category);

  return response.status(201).send();
});

export { categoriesRoutes }