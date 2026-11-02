
import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";

const ProductCard = ({
  name,
  image,
  description,
  price,
  category,
}) => {
  return (
    <article className="group overflow-hidden rounded-2xl border border-purple-100 bg-white shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-xl">
      <div className="relative aspect-[4/3] overflow-hidden bg-purple-50">
        {image ? (
          <img
            src={image}
            alt={name}
            loading="lazy"
            className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
          />
        ) : (
          <div className="flex h-full items-center justify-center text-sm text-purple-400">
            Product image coming soon
          </div>
        )}

        {category && (
          <span className="absolute left-3 top-3 rounded-full bg-white/95 px-3 py-1 text-xs font-semibold text-[#6D2396] shadow-sm">
            {category}
          </span>
        )}
      </div>

      <div className="p-5">
        <h3 className="text-lg font-bold text-[#351526]">
          {name}
        </h3>

        {description && (
          <p className="mt-2 text-sm leading-6 text-gray-600">
            {description}
          </p>
        )}

        <div className="mt-5 flex items-center justify-between gap-3">
          {price != null ? (
            <p className="font-bold text-[#6D2396]">
              {typeof price === "number"
                ? `₦${price.toLocaleString("en-NG")}`
                : price}
            </p>
          ) : (
            <p className="text-sm text-gray-500">
              Price on request
            </p>
          )}

          <Link
            to="/contact"
            className="inline-flex items-center gap-1 rounded-full bg-[#4B176D] px-4 py-2 text-sm font-semibold text-white transition hover:bg-[#6D2396]"
          >
            Enquire <ArrowUpRight size={16} />
          </Link>
        </div>
      </div>
    </article>
  );
};

export default ProductCard;