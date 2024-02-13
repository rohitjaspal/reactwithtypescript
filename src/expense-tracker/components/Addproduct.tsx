import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import  categories  from '../categories';

const ProductDataSchema = z.object({
  description: z.string().min(3, {message: 'description should be min of 3 letter.'}),
  amount: z.number({invalid_type_error: 'Amount is required'}),
  category: z.enum(categories , {
    errorMap: () => ({ message : 'Category is required'})
  }),
});

type ProductFormData = z.infer<typeof ProductDataSchema>;

interface Props {
  onSubmit: (data : ProductFormData) => void;
}

const Addproduct = ({ onSubmit }: Props) => {
  const {
    register,
    reset,
    handleSubmit,
    formState: { errors },
  } = useForm<ProductFormData>({ resolver: zodResolver(ProductDataSchema) });

  return (
    <div>
      <form onSubmit={handleSubmit(data =>{
          onSubmit(data)
          reset();
        })}>
        <div className="mb-3">
          <label htmlFor="description" className="form-label">
          Description
          </label>
         <input {...register('description')} id="description" type="text" className="form-control" />
         {errors.description && (
            <p className="text-danger">{errors.description.message}</p>
          )}
        </div>
        <div className="mb-3">
          <label htmlFor="amount" className="form-label">
          Amount
          </label>
          <input {...register('amount' , {valueAsNumber: true})} id="amount" type="number" className="form-control" />
          {errors.amount && <p className="text-danger">{errors.amount.message}</p>}
        </div>
        <div className="mb-3">
          <label htmlFor="category" className="form-label">
          Category
          </label>
         <select {...register('category')} id="category" className="form-control">
         <option value=""></option>
         {categories.map(category => <option key={category} value={category}>{category}</option>)}
          </select>
          {errors.category && (
            <p className="text-danger">{errors.category.message}</p>
          )}
        </div>
        <button type="submit" className="btn btn-primary">
          Add Product Data
        </button>
      </form>
    </div>
  );
};

export default Addproduct;
