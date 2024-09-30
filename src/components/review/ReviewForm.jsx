import Rating from "./Rating";

export default function ReviewForm({ setForm, form, handleSubmit }) {

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({
      ...prev,
      [name]: value
    }))
  }

  return (
    <div className="bg-[#2B2B2B] mt-10 rounded-lg p-4">
          <form onSubmit={handleSubmit} className="space-y-6">
            <p className="font-semibold border-b-2 border-b-purple-600 w-48 text-2xl">Deixe seu review:</p>
            <div>
              <label htmlFor="name" className="font-light">Nome</label><br />
              <input type="text"
                id="name"
                name="name"
                value={form.name}
                onChange={handleInputChange}
                required
                className="bg-[#3F3F3F] rounded-lg w-full h-7 mt-2 p-2 focus:outline-none focus:ring-2 focus:ring-violet-300 focus:border-transparent"
              />
            </div>
            <div>
              <label htmlFor="review" className="font-light">Review</label><br />
              <textarea
                id="review"
                name="review"
                value={form.review}
                onChange={handleInputChange}
                required
                className="bg-[#3F3F3F] rounded-lg w-full h-14 mt-2 p-2 focus:outline-none focus:ring-2 focus:ring-violet-300 focus:border-transparent"
              />
            </div>
            <div>
             <Rating setForm={setForm} stars={form.stars}/>
            </div>
            <button type="submit" className="bg-purple-600 w-full p-2 rounded-lg font-semibold text-lg hover:bg-purple-700 duration-200">
              Enviar
            </button>
          </form>
        </div>
  )
}