'use client'
import BestSellingCard from "@/components/BestSellingCard";
import { useAppSelector } from "../store/Hooks";

const CategoryPage = ({ params }: { params: {  category:string } }) => {
    const product = useAppSelector((state) => state.products);
    const bestSell = product.filter((val) => val.category == params.category);

  return (
    <div>
          <div className="items-center justify-center text-center mb-10">
        <h1 className="text-gray-700 scroll-m-20 text-xl font-bold tracking-tight lg:text-2xl">
          {params.category}
        </h1>

        <div className="flex mt-2 justify-center">
          <div className="w-16 h-1 rounded-full bg-myOrange inline-flex" />
        </div>
        <div>
          <div className="flex flex-wrap items-center justify-center text-center gap-5">
            {bestSell.map((items: any, i) => (
              <BestSellingCard
                key={i}
                src={items.image[0]}
                alt={items.title}
                title={items.title}
                description={items.description}
                price={items.price}
                category={items.category}
                slug={items.slug}
                discount={items.discount}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default CategoryPage