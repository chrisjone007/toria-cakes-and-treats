
import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";

const CategoryCard = ({ title, description, icon: Icon }) => {
  return (
    <Link
      to="/menu"
      className="group flex h-full flex-col rounded-2xl border border-purple-100 bg-[#FFFDF9] p-6 transition duration-300 hover:-translate-y-1 hover:border-purple-300 hover:shadow-xl"
    >
      <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-2xl bg-purple-100 text-[#6D2396] transition group-hover:bg-[#4B176D] group-hover:text-white">
        {Icon && <Icon size={27} strokeWidth={1.8} />}
      </div>

      <div className="flex items-center justify-between gap-3">
        <h3 className="text-xl font-bold text-[#351526]">
          {title}
        </h3>

        <ArrowUpRight
          size={20}
          className="shrink-0 text-[#6D2396] transition group-hover:translate-x-1 group-hover:-translate-y-1"
        />
      </div>

      <p className="mt-3 flex-grow text-sm leading-6 text-gray-600">
        {description}
      </p>

      <span className="mt-5 text-sm font-semibold text-[#6D2396]">
        Explore category
      </span>
    </Link>
  );
};

export default CategoryCard;