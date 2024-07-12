import { z } from 'zod';

const CreateProductValidationSchema = z.object({
  body: z.object({
    name: z.string().min(1, { message: 'Name is required' }),
    description: z.string().min(1, { message: 'Description is required' }),
    price: z.number().positive({ message: 'Price must be a positive number' }),
    image: z.string({ message: 'Image must be a valid URL' }),
    category: z.string({ message: 'Category must be a valid ID' }),
    brand: z.string().min(1, { message: 'Brand is required' }),
    stockQuantity: z.number().int().nonnegative({
      message: 'Stock Quantity must be a non-negative integer',
    }),
    rating: z
      .number()
      .min(0, { message: 'Rating must be at least 0' })
      .max(5, { message: 'Rating must be at most 5' }),
  }),
});
const UpdateProductValidationSchema = z.object({
  body: z
    .object({
      name: z.string().min(1, { message: 'Name is required' }).optional(),
      description: z
        .string()
        .min(1, { message: 'Description is required' })
        .optional(),
      price: z
        .number()
        .positive({ message: 'Price must be a positive number' })
        .optional(),
      image: z.string({ message: 'Image must be a valid URL' }).optional(),
      category: z.string({ message: 'Category must be a valid ID' }).optional(),
      brand: z.string().min(1, { message: 'Brand is required' }).optional(),
      stockQuantity: z
        .number()
        .int()
        .nonnegative({
          message: 'Stock Quantity must be a non-negative integer',
        })
        .optional(),
      rating: z
        .number()
        .min(0, { message: 'Rating must be at least 0' })
        .max(5, { message: 'Rating must be at most 5' }),
    })
    .optional(),
});

export const ProductValidations = {
  CreateProductValidationSchema,
  UpdateProductValidationSchema,
};
