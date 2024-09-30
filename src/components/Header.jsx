export default function Header() {
  return (
    <div className="flex gap-2 px-6 lg:px-40 pt-10 text-4xl">
      <span className="material-symbols-outlined text-5xl text-purple-600 -rotate-12 fill-1">
        headphones
      </span>
      <h1 className="text-white text-[41px]">EchoBeat</h1>
      <span className="material-symbols-outlined top-11 text-5xl text-purple-600 fill-1 absolute right-4 lg:right-44 pt-8">
        shopping_cart
      </span>
    </div>
  )
}